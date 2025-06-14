export default function Loading() {
  return (
    <div className="p-6 max-w-7xl mx-auto">
      <h2 className="text-2xl font-bold text-white mb-6">Latest Movies</h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
        {[...Array(10)].map((_, i) => (
          <div
            key={i}
            className="bg-gray-900 rounded-xl overflow-hidden shadow-md animate-pulse"
          >
            <div className="aspect-[2/3] bg-gray-700 w-full" />
            <div className="p-3">
              <div className="h-4 bg-gray-700 rounded w-3/4" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
