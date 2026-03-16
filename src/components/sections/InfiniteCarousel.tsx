"use client";

import React from "react";
import Image from "next/image";

export const InfiniteCarousel: React.FC = () => {
  return (
    <>
      <style>{`
        @keyframes move-logo {
          0% {
            transform: translateX(100vw);
          }
          100% {
            transform: translateX(-160px);
          }
        }

        .carousel-container {
          position: relative;
          width: 100vw;
          height: 160px;
          overflow: hidden;
          background: white;

          left: 50%;
          right: 50%;
          margin-left: -50vw;
          margin-right: -50vw;

          display: flex;
          align-items: center;
        }

        .carousel-item {
          position: absolute;
          width: 160px;
          animation: move-logo 8s linear infinite;
        }

        .carousel-card {
          width: 160px;
          height: 128px;
          background: linear-gradient(to bottom right, #f8fafc, #f1f5f9);
          border-radius: 12px;
          border: 1px solid #e2e8f0;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 300ms ease;
        }

        .carousel-card:hover {
          border-color: #22d3ee;
          box-shadow:
            0 -10px 25px rgba(34, 211, 238, 0.3),
            0 10px 25px rgba(34, 211, 238, 0.3),
            -10px 0 25px rgba(34, 211, 238, 0.2),
            10px 0 25px rgba(34, 211, 238, 0.2);
          transform: scale(1.05);
        }

        .logo-img {
          width: 140px;
          height: auto;
        }
      `}</style>

      <div className="carousel-container">
        <div className="carousel-item">
          <div className="carousel-card">
            <Image
              src="/logos/kodachadr_chits_logo.jpg"
              alt="Kodachadri Chits"
              width={140}
              height={70}
              className="logo-img"
            />
          </div>
        </div>
      </div>
    </>
  );
};