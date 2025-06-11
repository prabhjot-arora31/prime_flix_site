"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  return (
    <main className="min-h-screen bg-black text-white flex flex-col items-center justify-center px-4">
      <h1 className="text-5xl font-bold text-purple-500 mb-6">PrimeFlix</h1>

      <p className="text-lg text-center max-w-xl mb-10 text-gray-300">
        Your one-stop hub for real movie lovers. Dive into content from Netflix,
        Prime Video, Disney+ Hotstar, or discover trending global picks — all in
        one sleek, ad-powered experience.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 w-full max-w-4xl">
        {["netflix", "primeVideo", "hotstar", "discover"].map((platform) => (
          <Link
            key={platform}
            href={`/page/${platform.toLowerCase()}`}
            className="bg-white text-black font-semibold py-4 rounded-lg hover:bg-purple-500 hover:text-white transition duration-300 shadow-md inline-block text-center"
          >
            {platform.charAt(0).toUpperCase() + platform.slice(1)}
          </Link>
        ))}
      </div>
    </main>
  );
}
