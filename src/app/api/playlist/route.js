// app/api/playlist/route.js
import fetch from "node-fetch";

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const id = searchParams.get("id");
  const title = searchParams.get("title");

  if (!id || !title) {
    return new Response(JSON.stringify({ error: "Missing id or title" }), {
      status: 400,
    });
  }

  const encodedTitle = encodeURIComponent(title);
  const playlistUrl = `https://netfree2.cc/mobile/playlist.php?id=${id}&t=${encodedTitle}&tm=${Math.floor(
    Date.now() / 1000
  )}`;

  try {
    const res = await fetch(playlistUrl);
    if (!res.ok) throw new Error("Failed to fetch playlist");

    const data = await res.json();

    // Return the JSON directly to frontend
    return new Response(JSON.stringify(data), {
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
    });
  }
}
