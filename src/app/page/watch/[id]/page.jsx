"use client";

import React, { useEffect, useState } from "react";

export default function Watch({ searchParams }) {
  searchParams = React.use(searchParams);
  const { id, title } = searchParams;
  const [playlist, setPlaylist] = useState(null);
  const [error, setError] = useState(null);
  const [playableUrl, setPlayableUrl] = useState("");

  useEffect(() => {
    if (!id || !title) return;

    async function fetchPlaylist() {
      try {
        const res = await fetch(
          `/api/playlist?id=${id}&title=${encodeURIComponent(title)}`
        );
        console.log("res is:");
        console.log(res);
        if (!res.ok) throw new Error("Failed to load playlist");
        const data = await res.json();

        setPlaylist(data);

        // Extract the best source file from playlist
        const source =
          data?.[0]?.sources?.find((s) => s.label === "Full HD") ||
          data?.[0]?.sources?.[0];
        if (source) {
          // You can either use this URL directly if CORS works, or proxy it
          // For safety, proxy via your backend proxy API route:
          setPlayableUrl(
            `/api/proxy?url=${encodeURIComponent(
              "https://netfree2.cc" + source.file
            )}`
          );
        }
      } catch (err) {
        setError(err.message);
      }
    }

    fetchPlaylist();
  }, [id, title]);

  if (error) return <div>Error: {error}</div>;
  if (!playlist) return <div>Loading...</div>;

  return (
    <div>
      <h1>{playlist[0]?.title}</h1>
      <img src={playlist[0]?.image} alt={playlist[0]?.title} width="200" />
      {playableUrl ? (
        <video controls autoPlay style={{ width: "100%", maxWidth: 720 }}>
          <source src={playableUrl} type="application/vnd.apple.mpegurl" />
          Your browser does not support the video tag.
        </video>
      ) : (
        <div>No playable source found.</div>
      )}
    </div>
  );
}
