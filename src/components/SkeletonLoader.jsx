export default function SkeletonLoader() {
  const epCount = 8; // Simulate number of episode cards
  const suggCount = 8; // Simulate number of suggested titles

  return (
    <div className="w-full min-h-screen bg-black text-white font-sans bg-cover bg-center">
      {/* Dark overlay for readability */}
      <div className="w-full min-h-screen bg-gradient-to-b from-black/80 via-black/70 to-black/90 backdrop-blur-sm">
        {/* Main content container */}
        <div className="max-w-7xl mx-auto p-6 pt-8 flex flex-col sm:flex-row gap-8 items-center sm:items-start">
          {/* Poster Placeholder */}
          <div className="w-48 h-72 rounded-2xl shadow-2xl bg-gray-800 animate-pulse border-4 border-gray-700 flex-shrink-0" />

          {/* Details Placeholder */}
          <div className="w-full sm:w-auto mt-4 sm:mt-0 max-w-full overflow-x-auto p-4 space-y-4">
            <div className="h-10 w-3/4 bg-gray-700 rounded animate-pulse" />
            <div className="flex flex-wrap gap-4 mt-3">
              {Array.from({ length: 5 }).map((_, i) => (
                <div
                  key={i}
                  className="h-6 w-20 bg-gray-700 rounded animate-pulse"
                />
              ))}
            </div>
            <div className="space-y-2 mt-5">
              {Array.from({ length: 4 }).map((_, i) => (
                <div
                  key={i}
                  className="h-4 w-full bg-gray-700 rounded animate-pulse"
                />
              ))}
            </div>
            {[
              "Type",
              "Languages",
              "Director",
              "Cast",
              "Genres",
              "Tags",
              "Content Warnings",
            ].map((label, i) => (
              <div
                key={i}
                className="h-4 w-1/2 bg-gray-700 rounded animate-pulse mt-4"
              />
            ))}
            <div className="mt-8 p-6 bg-gradient-to-br from-indigo-800 to-purple-700 rounded-2xl text-white max-w-xl shadow-xl animate-pulse">
              <div className="h-5 bg-indigo-600 rounded w-2/3 mb-4"></div>
              <div className="h-4 bg-indigo-500 rounded w-full mb-6"></div>
              <div className="h-10 bg-white rounded w-40"></div>
            </div>
          </div>
        </div>

        {/* Episodes section skeleton */}
        <div className="p-8 max-w-6xl mx-auto">
          <div className="h-8 w-64 bg-gray-700 mb-6 rounded animate-pulse" />
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {Array.from({ length: epCount }).map((_, i) => (
              <div
                key={i}
                className="bg-zinc-900 p-6 rounded-3xl shadow-xl animate-pulse space-y-3"
              >
                <div className="h-6 w-3/4 bg-gray-700 rounded" />
                <div className="h-4 w-full bg-gray-700 rounded" />
                <div className="h-4 w-5/6 bg-gray-700 rounded" />
                <div className="h-4 w-2/3 bg-gray-700 rounded" />
              </div>
            ))}
          </div>
        </div>

        {/* Suggested Titles section skeleton */}
        <div className="px-4 sm:px-8 md:px-12 lg:px-20 w-full space-y-4">
          <div className="h-6 w-1/3 bg-gray-700 rounded animate-pulse mx-auto" />
          <div className="flex gap-3 overflow-x-auto px-1 justify-center">
            {Array.from({ length: suggCount }).map((_, i) => (
              <div
                key={i}
                className="min-w-[140px] max-w-[140px] h-[200px] sm:h-[230px] bg-gray-700 rounded-xl animate-pulse"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
