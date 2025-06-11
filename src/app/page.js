"use client";

import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0D0C0A] text-white flex flex-col items-center justify-center px-4 py-12">
      <h1 className="text-5xl font-bold text-purple-500 mb-6 text-center">
        Welcome to PrimeFlix
      </h1>

      <p className="text-lg text-center max-w-2xl mb-10 text-gray-300">
        Your one-stop hub for real movie lovers. Dive into content from Netflix,
        Prime Video, Disney+ Hotstar, or discover trending global picks — all in
        one sleek, ad-powered experience.
      </p>

      {/* Features Section */}
      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl w-full mb-12">
        {[
          {
            title: "Unified Experience",
            desc: "Watch content from multiple OTT platforms in one place without switching apps.",
          },
          {
            title: "Discover Hidden Gems",
            desc: "Find critically acclaimed movies and trending global hits with powerful filters.",
          },
          {
            title: "User-Curated Playlists",
            desc: "Build and share your own playlists for every mood, genre, or theme.",
          },
        ].map((item, i) => (
          <div
            key={i}
            className="bg-[#1A1917] p-6 rounded-xl shadow-md hover:shadow-lg transition"
          >
            <h2 className="text-xl font-semibold mb-2 text-purple-400">
              {item.title}
            </h2>
            <p className="text-gray-300">{item.desc}</p>
          </div>
        ))}
      </section>

      {/* Call to Action */}
      <div className="text-center">
        <Link
          href="/page/discover"
          className="inline-block bg-purple-600 text-white font-semibold py-3 px-6 rounded-lg hover:bg-purple-700 transition"
        >
          Start Discovering Now
        </Link>
      </div>
    </main>
  );
}
