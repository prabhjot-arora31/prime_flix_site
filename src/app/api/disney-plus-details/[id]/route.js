// /app/api/details/[id]/route.js
export async function GET(req, { params }) {
  const { id } = params;

  try {
    const mainRes = await fetch(
      `https://netfree2.cc/mobile/hs/post.php?id=${id}&t=1747990816`,
      {
        headers: {
          Referer: "https://netfree2.cc/mobile/home",
          "User-Agent":
            "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/136.0.0.0 Safari/537.36",
          Cookie:
            "cf_clearance=qYo6qPtw2SwdgUCueBs4EQ2qh332ugXqsYxnQYQeh44-1748862361-1.2.1.1-mjTK9OAT4XJwmok5mqUWWDvHtFfg6UZ_p_4.ONFhNstjCJWvJZTmOC6xhIN88FRjZGgPZ_SUjvhswMLeP0jKmIzspn5iAnZrMcz0uPYRxQK2U4bMZamxWWX9xLSQtU6Sizoir2NmOBg1etuPJ1aRUmly3pVL0zTLtobrLuCKDF9iD8Q4lKTUaOgk9TgHNXFMjE.zyLAd_RpJObm1TRVrBPvtSFUyAPz_qgPkxPDBKdUN1G90FPbCLxt85mLaGLOZ8qrdDpgYcRTQbdXQvaq.IlzaXG9t4836TDoc6eM6159DGsluQ6RKNLlcvIScTl5N_SYs_FtlEQ7vTjV6FCewP4GIDtcQnbLVIo.AFLjxeAPXanYMHFkE51yS2XvBw_fs",
          "X-Requested-With": "XMLHttpRequest",
          Accept: "*/*",
          "Accept-Encoding": "gzip, deflate",
          "Accept-Language": "en-US,en;q=0.9",
        },
      }
    );

    const mainJson = await mainRes.json();

    // If it's a series, fetch episodes too
    let episodes = null;
    if (mainJson.type === "t" && mainJson.season?.[0]?.id) {
      const seasonId = mainJson.season[0].id;

      const episodesRes = await fetch(
        `https://netfree2.cc/mobile/hs/episodes.php?s=${seasonId}&series=${id}&t=1747990816`,
        {
          headers: {
            Referer: "https://netfree2.cc/mobile/home",
            "User-Agent":
              "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/136.0.0.0 Safari/537.36",
            Cookie:
              "cf_clearance=qYo6qPtw2SwdgUCueBs4EQ2qh332ugXqsYxnQYQeh44-1748862361-1.2.1.1-mjTK9OAT4XJwmok5mqUWWDvHtFfg6UZ_p_4.ONFhNstjCJWvJZTmOC6xhIN88FRjZGgPZ_SUjvhswMLeP0jKmIzspn5iAnZrMcz0uPYRxQK2U4bMZamxWWX9xLSQtU6Sizoir2NmOBg1etuPJ1aRUmly3pVL0zTLtobrLuCKDF9iD8Q4lKTUaOgk9TgHNXFMjE.zyLAd_RpJObm1TRVrBPvtSFUyAPz_qgPkxPDBKdUN1G90FPbCLxt85mLaGLOZ8qrdDpgYcRTQbdXQvaq.IlzaXG9t4836TDoc6eM6159DGsluQ6RKNLlcvIScTl5N_SYs_FtlEQ7vTjV6FCewP4GIDtcQnbLVIo.AFLjxeAPXanYMHFkE51yS2XvBw_fs",
            "X-Requested-With": "XMLHttpRequest",
            Accept: "*/*",
            "Accept-Encoding": "gzip, deflate",
            "Accept-Language": "en-US,en;q=0.9",
          },
        }
      );

      episodes = await episodesRes.json();
    }
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
