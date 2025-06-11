export default function DownloadApp({ isMore = false }) {
  return (
    <div className="mt-8 p-6 bg-gradient-to-br from-indigo-800 to-purple-700 rounded-2xl text-white max-w-xl shadow-xl">
      <h3 className="text-lg font-semibold mb-2">
        {isMore
          ? "Watch This Content and more details like Cast , Trailers , Suggested titles on Our App for Free"
          : "Watch This Content on Our App for Free"}
      </h3>
      <p className="text-md text-indigo-100 mb-4">
        For the best viewing experience, please download our Android app.
      </p>
      <a
        href="https://example.com/your-app.apk" // Replace with your actual APK link
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block text-md bg-white text-indigo-800 font-semibold px-5 py-2 rounded-lg shadow hover:bg-indigo-100 transition"
      >
        📲 Download APK
      </a>
    </div>
  );
}
