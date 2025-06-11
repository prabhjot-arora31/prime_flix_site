// app/api/proxy/route.js
export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const targetUrl = searchParams.get("url");

  if (!targetUrl) {
    return new Response(JSON.stringify({ error: "Missing url parameter" }), {
      status: 400,
    });
  }

  try {
    const res = await fetch(targetUrl);
    if (!res.ok) throw new Error("Failed to fetch proxied content");

    // Pass through content and content-type header
    const contentType =
      res.headers.get("content-type") || "application/octet-stream";
    const body = await res.arrayBuffer();

    return new Response(body, {
      headers: { "Content-Type": contentType },
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
    });
  }
}
