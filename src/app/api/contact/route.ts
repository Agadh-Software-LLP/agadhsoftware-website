/**
 * src/app/api/contact/route.ts
 * ─────────────────────────────
 * POST /api/contact
 * Receives the contact form submission and sends an email via Resend.
 *
 * Required env vars:
 *   RESEND_API_KEY   — from https://resend.com (free: 3000 emails/month)
 *   CONTACT_EMAIL_TO — recipient address (e.g. support@agadhsoft.com)
 */

import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

// Basic rate-limit: track submission timestamps per IP in memory.
// For production scale, replace with Redis or Upstash.
const ipTimestamps = new Map<string, number>();
const RATE_LIMIT_MS = 60_000; // 1 request per minute per IP

function getRealIp(req: NextRequest): string {
  return (
    req.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ??
    req.headers.get('x-real-ip') ??
    'unknown'
  );
}

export async function POST(req: NextRequest) {
  if (!process.env.RESEND_API_KEY) {
    return NextResponse.json({ success: false, error: 'Email not configured' }, { status: 503 });
  }

  // Rate limiting
  const ip = getRealIp(req);
  const lastSubmit = ipTimestamps.get(ip) ?? 0;
  if (Date.now() - lastSubmit < RATE_LIMIT_MS) {
    return NextResponse.json({ success: false, error: 'Too many requests' }, { status: 429 });
  }

  let body: { name?: string; company?: string; email?: string; message?: string };
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ success: false, error: 'Invalid request' }, { status: 400 });
  }

  const { name, email, message, company } = body;

  if (!name?.trim() || !email?.trim() || !message?.trim()) {
    return NextResponse.json({ success: false, error: 'name, email and message are required' }, { status: 400 });
  }

  // Validate email format
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email.trim())) {
    return NextResponse.json({ success: false, error: 'Invalid email address' }, { status: 400 });
  }

  // Sanitise inputs — strip HTML to prevent injection in email body
  const safe = (v: string) => v.replace(/</g, '&lt;').replace(/>/g, '&gt;').slice(0, 2000);

  const to = process.env.CONTACT_EMAIL_TO ?? 'support@agadhsoft.com';

  try {
    await resend.emails.send({
      from: 'Agadh Website <onboarding@resend.dev>', // sender must be a Resend-verified domain
      to,
      replyTo: email.trim(),
      subject: `New enquiry from ${safe(name.trim())}${company?.trim() ? ` — ${safe(company.trim())}` : ''}`,
      html: `
        <p><strong>Name:</strong> ${safe(name.trim())}</p>
        <p><strong>Company:</strong> ${company?.trim() ? safe(company.trim()) : '—'}</p>
        <p><strong>Email:</strong> ${safe(email.trim())}</p>
        <hr />
        <p style="white-space:pre-wrap">${safe(message.trim())}</p>
      `,
    });
  } catch (err: unknown) {
    const errorMessage = err instanceof Error ? err.message : 'unknown_error';
    console.error('[contact] resend error', errorMessage);
    return NextResponse.json({ success: false, error: 'Failed to send email' }, { status: 500 });
  }

  ipTimestamps.set(ip, Date.now());
  return NextResponse.json({ success: true });
}
