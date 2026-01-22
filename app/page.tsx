import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="max-w-2xl text-center p-8 bg-white shadow-md rounded-lg">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          Welcome to Agadh Software LLP
        </h1>

        <p className="text-gray-600 text-lg mb-6">
          We are building innovative software solutions.
          <br />
          Our website is currently under development.
        </p>

        <div className="border-t pt-4 text-sm text-gray-500">
          <p>
            Email: <span className="font-medium">info@agadhsoftware.com</span>
          </p>
          <p className="mt-1">
            © {new Date().getFullYear()} Agadh Software LLP
          </p>
        </div>
      </div>
    </main>
  );
}
