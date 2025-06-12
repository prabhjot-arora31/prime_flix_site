// app/api/latest-movies/route.js
export async function GET(req) {
  const { searchParams } = new URL(req.url);
  const page = searchParams.get("page") || 1;

  try {
    const res = await fetch(
      `https://madplay.site/api/backendfetch?requestID=latestMovie&language=en-US&page=${page}`
    );

    if (!res.ok) {
      return Response.json(
        { error: "Failed to fetch movies" },
        { status: 500 }
      );
    }

    const data = await res.json();
    return Response.json(data);
  } catch (error) {
    return Response.json({ error: error.message }, { status: 500 });
  }
}
