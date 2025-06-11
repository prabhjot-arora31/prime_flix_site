// /src/app/api/details/[id]/route.js

export async function GET(req, { params }) {
  const { id } = params;

  const headers = {
    Referer: "https://netfree2.cc/tv/home",
    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64)...",
    "X-Requested-With": "XMLHttpRequest",
  };

  const detailsRes = await fetch(
    `https://netfree2.cc/tv/post.php?id=${id}&t=1746868251`,
    { headers }
  );
  const details = await detailsRes.json();

  let episodes = [];

  if (details.type === "t") {
    const seasonId = details.season[0].id;
    const episodesRes = await fetch(
      `https://netfree2.cc/mobile/episodes.php?s=${seasonId}&series=${id}&t=1747121725`,
      { headers }
    );
    episodes = await episodesRes.json();
  }

  return Response.json({ details, episodes });
}
