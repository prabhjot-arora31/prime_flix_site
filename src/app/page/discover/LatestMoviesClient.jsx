"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function LatestMoviesClient({ initialMovies }) {
  const [movies, setMovies] = useState(initialMovies || []);
  const [page, setPage] = useState(2);
  const [loadingMore, setLoadingMore] = useState(false);
  const [error, setError] = useState(null);

  const router = useRouter();

  const fetchMovies = async () => {
    try {
      setLoadingMore(true);
      setError(null);
      const res = await fetch(`/api/latest-movies?page=${page}`);
      if (!res.ok) throw new Error("Failed to fetch movies");

      const data = await res.json();
      setMovies((prev) => [...prev, ...data.results]);
      setPage((prev) => (prev >= 250 ? 1 : prev + 1));
    } catch (e) {
      setError(e.message);
    } finally {
      setLoadingMore(false);
    }
  };

  return (
    <div className="p-6 max-w-7xl mx-auto">
      <h2 className="text-2xl font-bold text-white mb-6">Latest Movies</h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
        {movies.map((movie, index) => {
          const href = `/page/details/discover-movie/${movie.id}`;
          return (
            <Link
              key={index}
              href={href}
              onMouseEnter={() => router.prefetch(href)}
            >
              <div className="bg-gray-900 rounded-xl overflow-hidden shadow-md">
                <Image
                  src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                  alt={movie.title}
                  width={300}
                  height={450}
                  className="w-full h-auto object-cover"
                />
                <div className="p-3">
                  <h3 className="text-white text-md font-semibold truncate">
                    {movie.title}
                  </h3>
                </div>
              </div>
            </Link>
          );
        })}
      </div>

      {error && <p className="text-red-500 mt-4">{error}</p>}

      <div className="flex justify-center mt-8">
        <button
          onClick={fetchMovies}
          disabled={loadingMore}
          className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold px-6 py-2 rounded-xl disabled:opacity-50"
        >
          {loadingMore ? "Loading..." : "Load More"}
        </button>
      </div>
    </div>
  );
}
