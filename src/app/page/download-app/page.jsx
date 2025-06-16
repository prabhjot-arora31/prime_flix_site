export default function DownloadPage() {
  return (
    <div className="bg-[#0d1117] text-white min-h-screen font-sans">
      {/* Hero Section */}
      <section className="text-center py-16 px-4 max-w-4xl mx-auto">
        <h1 className="text-4xl sm:text-5xl font-bold mb-4">
          Discover Movies Like Never Before 🎬
        </h1>
        <p className="text-gray-400 text-lg sm:text-xl mb-6">
          Our app brings the world of cinema to your pocket. Personalized
          recommendations, trailers, reviews & more — all in one sleek app.
        </p>
        <button className="bg-indigo-600 hover:bg-indigo-700 px-8 py-3 rounded-xl text-lg font-semibold shadow-lg transition">
          Download Now
        </button>
      </section>

      {/* Features */}
      <section className="py-16 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-10 text-center">
          Features You'll Love
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {[
            {
              title: "Smart Recommendations",
              desc: "Get suggestions tailored to your taste using AI-powered matching.",
            },
            {
              title: "Offline Watchlist",
              desc: "Save movies for later & access your list without internet.",
            },
            {
              title: "HD Trailers",
              desc: "Watch stunning HD trailers before diving into a movie.",
            },
            {
              title: "User Reviews",
              desc: "See what others think",
            },
            {
              title: "Genre & Actor Filters",
              desc: "Drill down to your favorite genres or stars.",
            },
            {
              title: "Minimalist UI",
              desc: "Dark mode, snappy navigation, and a focus on content.",
            },
          ].map((f, i) => (
            <div
              key={i}
              className="bg-gray-900 p-6 rounded-xl shadow-lg hover:shadow-xl transition"
            >
              <h3 className="text-xl font-semibold mb-2">{f.title}</h3>
              <p className="text-gray-400">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Screenshots */}
      <section className="py-16 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-10 text-center">Sneak Peek</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {["i1", "i2", "i3", "i4", "i5", "i6", "i7", "i8"].map((i) => (
            <div
              key={i}
              className="bg-gray-800 rounded-lg overflow-hidden shadow-lg flex items-center justify-center p-4"
            >
              <img
                src={`/images/${i}.jpg`}
                alt={`Screenshot ${i}`}
                className="max-h-80 w-full object-contain"
              />
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      {/* <section className="bg-gray-900 py-16 px-6">
        <h2 className="text-3xl font-bold mb-10 text-center">
          What Users Are Saying
        </h2>
        <div className="max-w-5xl mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-8 text-gray-300">
          {[
            {
              name: "Alex M.",
              quote:
                "Finally, a movie app that actually gets what I want to watch!",
            },
            {
              name: "Priya K.",
              quote:
                "I love the dark UI and smooth navigation. It's addictive!",
            },
            {
              name: "Jordan B.",
              quote:
                "Being able to save trailers and track releases is a game changer.",
            },
          ].map((t, i) => (
            <div key={i} className="bg-gray-800 p-6 rounded-xl shadow-md">
              <p className="mb-4 italic">"{t.quote}"</p>
              <p className="font-semibold text-white text-right">— {t.name}</p>
            </div>
          ))}
        </div>
      </section> */}

      {/* Download CTA */}
      <section className="text-center py-16 px-4">
        <h2 className="text-3xl sm:text-4xl font-bold mb-4">
          Ready to Dive In?
        </h2>
        <p className="text-gray-400 mb-6">
          Download the app and start exploring today — it's free!
        </p>
        <button className="bg-green-600 hover:bg-green-700 px-10 py-3 rounded-xl text-lg font-semibold shadow-lg transition"  >
          Get the App
        </button>
      </section>

      {/* Footer */}
      <footer className="text-center text-gray-500 py-6 border-t border-gray-800">
        © {new Date().getFullYear()} MovieFinder Inc. All rights reserved.
      </footer>
    </div>
  );
}
