// /app/api/discover-movie-details/[id]/route.js

export async function GET(req, { params }) {
  const { id } = params;

  try {
    const mainRes = await fetch(
      `https://madplay.site/api/backendfetch?id=${id}&requestID=movieData&language=en-US`
    );

    const mainJson = await mainRes.json();

    // 🔁 Transform the response into expected `details`
    const details = {
      title: mainJson.title || mainJson.original_title,
      year: mainJson.release_date?.split("-")[0],
      runtime: `${mainJson.runtime} min`,
      desc: mainJson.overview,
      backdrop_path: mainJson.backdrop_path,
      poster_path: mainJson.poster_path,
      genre: mainJson.genres?.map((g) => g.name).join(", "),
      hdsd: "HD", // or whatever you want to default
      match: `${mainJson.vote_average * 10}% match`, // Fake it like Netflix
      cast: "", // you may fetch credits separately if needed
      director: "", // optional
      writer: "", // optional
      creator: "", // optional
      ua: mainJson.adult ? "A" : "UA",
      type: "m", // or 't' if it's a TV show
      suggest: [], // Optional fallback
    };

    return Response.json({ details, episodes: [] });
  } catch (error) {
    console.error("API error:", error);
    return new Response(JSON.stringify({ error: "Failed to fetch data" }), {
      status: 500,
    });
  }
}
