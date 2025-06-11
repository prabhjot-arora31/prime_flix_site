// /app/api/details/[id]/route.js
export async function GET(req, { params }) {
  const { id } = params;

  try {
    const mainRes = await fetch(
      `https://madplay.site/api/backendfetch?id=${id}&requestID=tvData&language=en-US`
    );

    const mainJson = await mainRes.json();

    console.log("inside server:");
    console.log("details:");
    console.log(mainJson);

    return Response.json({
      details: mainJson,
      episodes: episodes,
    });
  } catch (error) {
    console.error("API error:", error);
    return new Response(JSON.stringify({ error: "Failed to fetch data" }), {
      status: 500,
    });
  }
}
