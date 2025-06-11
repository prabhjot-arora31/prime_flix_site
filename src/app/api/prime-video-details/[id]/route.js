export async function GET(req, { params }) {
  const { id } = params;

  const headers = {
    Referer: "https://netfree2.cc/mobile/home",
    "User-Agent":
      "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/136.0.0.0 Safari/537.36",
    "X-Requested-With": "XMLHttpRequest",
    Accept: "*/*",
    "Accept-Encoding": "gzip, deflate, br, zstd",
    "Accept-Language": "en-US,en;q=0.9,hi;q=0.8,te;q=0.7",
    Cookie:
      "HstCfa1685644=1746868206859; HstCmu1685644=1746868206859; HstCnv1685644=1; HstCns1685644=1; __dtsu=4C301746868209FA4774A6EFDDD77142; HstCfa1188575=1746868252034; HstCla1188575=1746868252034; HstCmu1188575=1746868252034; HstPn1188575=1; HstPt1188575=1; HstCnv1188575=1; HstCns1188575=1; t_hash_t=dc1a1d5a761fa5469b556bb289a6c68f%3A%3Aca3533ae68be83c1e54e63e53388443c%3A%3A1746868252%3A%3Ani; HstCla1685644=1746868253115; HstPn1685644=4; HstPt1685644=4; _cc_id=52af53b3d1549aca8b3094329bdee580; panoramaId_expiry=1746954655086; panoramaId=f677cdb994549c0d9f3096f64e49a9fb927a1d2ae72d99efe3cf36d7aaee09c1; panoramaIdType=panoDevice; t_hash=89616678448f78ab471531fc36ab6406%3A%3A1746871879%3A%3Ani",
  };

  try {
    const detailsRes = await fetch(
      `https://netfree2.cc/tv/pv/post.php?id=${id}&t=1747463148`,
      { headers }
    );

    const details = await detailsRes.json();
    let episodes = [];

    if (details.type === "t") {
      const seasonId = details.season?.[0]?.id;
      if (seasonId) {
        const episodesRes = await fetch(
          `https://netfree2.cc/mobile/pv/episodes.php?s=${seasonId}&series=${id}&t=1747121725`,
          { headers }
        );
        episodes = await episodesRes.json();
      }
    }

    return Response.json({ details, episodes });
  } catch (error) {
    console.error("API error:", error);
    return new Response(
      JSON.stringify({ error: "Failed to fetch series data" }),
      { status: 500 }
    );
  }
}
