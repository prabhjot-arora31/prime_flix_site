"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation"; // ✅ Correct for App Router
import SkeletonLoader from "@/components/SkeletonLoader";
import SuggestedTitles from "@/components/SuggestedTitles";
import { Play } from "lucide-react";
import DownloadApp from "@/components/DownloadApp";

export default function DetailsClient({ details, episodes, id }) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const router = useRouter();

  // Optional: show loading state during client-side navigation
  useEffect(() => {
    const handleStart = () => setLoading(true);
    const handleComplete = () => setLoading(false);

    // These events aren't available in App Router directly
    // So we simulate loading manually by wrapping SuggestedTitles click

    return () => {};
  }, []);

  if (loading) return <SkeletonLoader />;
  if (error)
    return <div className="text-red-500 p-4 font-semibold">Error: {error}</div>;

  if (!details)
    return (
      <div className="text-gray-400 p-4">No details found for this item.</div>
    );

  return (
    <div
      className="w-full min-h-screen bg-black text-white font-sans bg-cover bg-center"
      style={{
        backgroundImage: `url(https://imgcdn.media/poster/v/${id}.jpg)`,
      }}
    >
      {/* Dark overlay for readability */}
      <div className="w-full min-h-screen bg-gradient-to-b from-black/80 via-black/70 to-black/90 backdrop-blur-sm">
        {/* Main content container */}
        <div className="max-w-7xl mx-auto p-6 pt-8 flex flex-col sm:flex-row gap-8 items-center sm:items-start">
          {/* Poster */}
          <img
            src={`https://imgcdn.media/poster/v/${id}.jpg`}
            alt={`${details.title} Poster`}
            className="w-48 h-72 rounded-2xl shadow-2xl object-cover border-4 border-gray-800 mx-auto sm:mx-0 flex-shrink-0"
          />

          {/* Details */}
          <div className="w-full sm:w-auto mt-4 sm:mt-0 max-w-full overflow-x-auto p-4">
            {/* Title */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-wide drop-shadow-lg">
              {details.title}
            </h1>

            {/* Match, Year, UA, Runtime, Quality */}
            <div className="flex flex-wrap gap-4 mt-3 text-gray-300 font-semibold text-lg">
              <span>{details.match}</span>
              <span>{details.year}</span>
              <span>{details.ua}</span>
              <span>{details.runtime}</span>
              <span>{details.hdsd}</span>
            </div>

            {/* Description */}
            <p className="mt-5 text-lg text-gray-300 leading-relaxed max-h-40 overflow-auto scrollbar-thin scrollbar-thumb-gray-700 scrollbar-track-gray-900">
              {details.desc || details.description_long || details.m_desc}
            </p>

            {/* Type */}
            <div className="mt-5 text-gray-400 font-semibold tracking-wide text-lg">
              <span>{details.type === "t" ? "TV Series" : "Movie"}</span>
            </div>

            {/* Language list */}
            <div
              className="mt-4 text-gray-400 max-w-xs truncate"
              title={details.lang.map((l) => l.l).join(", ")}
            >
              <strong>Languages:</strong>{" "}
              {details.lang.map((l) => l.l).join(", ")}
            </div>

            {/* Director, Writer */}
            <div className="mt-4 text-gray-400 space-y-1 text-md max-w-md">
              {details.director && (
                <p>
                  <strong>Director:</strong> {details.director}
                </p>
              )}
              {details.writer && (
                <p>
                  <strong>Writer:</strong> {details.writer}
                </p>
              )}
              {details.creator && (
                <p>
                  <strong>Creator:</strong> {details.creator}
                </p>
              )}
            </div>

            {/* Cast */}
            <div className="mt-4 text-gray-400 max-w-lg text-md">
              <strong>Cast:</strong> {details.short_cast || details.cast}
            </div>

            {/* Genres */}
            <div className="mt-4 text-gray-400 max-w-lg text-md">
              <strong>Genres:</strong> {details.genre}
            </div>

            {/* Tags */}
            <div className="mt-4 text-gray-400 max-w-lg text-md">
              <strong>Tags:</strong> {details.thismovieis}
            </div>

            {/* Parental guidance reason */}
            <div className="mt-4 text-red-500 max-w-lg text-sm italic">
              <strong>Content warnings:</strong> {details.m_reason}
            </div>

            {/* Watch on App Prompt */}
            <DownloadApp />
          </div>
        </div>

        {/* Episodes */}
        {episodes && episodes.length > 0 && (
          <div className="p-8 max-w-6xl mx-auto">
            <h2 className="text-3xl font-extrabold mb-6 border-b-4 border-red-600 pb-2">
              Episodes
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {details.episodes.map((ep, i) =>
                ep ? (
                  <div
                    key={i}
                    className="bg-zinc-900 p-6 rounded-3xl shadow-xl hover:bg-zinc-800 transition cursor-pointer"
                  >
                    <h3 className="text-xl font-bold mb-2">
                      {ep.episode_title}
                    </h3>
                    <p className="text-gray-400 text-md line-clamp-4">
                      {ep.description}
                    </p>
                  </div>
                ) : null
              )}
            </div>
          </div>
        )}
        {/* Rest of your UI ... */}
        <div className="px-4 sm:px-8 md:px-12 lg:px-20">
          <SuggestedTitles
            title="Suggested Titles"
            suggest={details.suggest}
            onNavigateStart={() => setLoading(true)}
          />
        </div>
      </div>
    </div>
  );
}
