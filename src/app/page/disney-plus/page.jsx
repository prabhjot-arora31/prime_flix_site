"use client";

import HorizontalRow from "@/components/HorizontalRow";
import SkeletonLoader from "@/components/SkeletonLoader";
import Image from "next/image";
import { useState, useEffect } from "react";

export default function DisneyPlusHome() {
  const [isClient, setIsClient] = useState(false);
  const [selectedStudio, setSelectedStudio] = useState("1");
  const [posts, setPosts] = useState([]);
  const [loadingStudioId, setLoadingStudioId] = useState(null);

  const studios = [
    {
      id: "1",
      name: "Marvel",
      image: "/images/studio-marvel.webp",
      json: "/data/disney_plus_marvel.json",
    },
    {
      id: "2",
      name: "Disney",
      image: "/images/studio-disney.webp",
      json: "/data/disney_plus.json",
    },
    {
      id: "3",
      name: "Star Wars",
      image: "/images/studio-starwars.webp",
      json: "/data/disney_plus_starwars.json",
    },
    {
      id: "4",
      name: "Pixar",
      image: "/images/studio-pixar.webp",
      json: "/data/disney_plus_pixar.json",
    },
  ];

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    const selected = studios.find((s) => s.id === selectedStudio);
    if (!selected) return;

    setLoadingStudioId(selected.id); // Start loading

    fetch(selected.json)
      .then((res) => res.json())
      .then((data) => {
        setPosts(data.post);
      })
      .catch((err) => console.error("Failed to load JSON", err))
      .finally(() => {
        setLoadingStudioId(null); // End loading
      });
  }, [selectedStudio]);
  const [isDetailClicked, setIsDetailClicked] = useState(false);

  if (!isClient) return null;

  return isDetailClicked ? (
    <SkeletonLoader />
  ) : (
    <div className="text-white min-h-screen p-4">
      <h2 className="text-xl font-bold mb-2">Choose Studio</h2>
      <div className="flex gap-4 overflow-x-auto mb-4">
        {studios.map((studio) => (
          <div
            key={studio.id}
            onClick={() => setSelectedStudio(studio.id)}
            className={`relative border-2 w-[100px] h-[54px] ${
              selectedStudio === studio.id
                ? "border-purple-500"
                : "border-transparent"
            } cursor-pointer rounded overflow-hidden`}
          >
            {/* Loader */}
            {loadingStudioId === studio.id && (
              <div className="absolute inset-0 flex items-center justify-center bg-black/40 z-10">
                <div className="w-5 h-5 border-2 border-purple-500 border-t-transparent rounded-full animate-spin" />
              </div>
            )}

            <Image
              src={studio.image}
              alt={studio.name}
              width={100}
              height={54}
              className="object-cover"
            />
          </div>
        ))}
      </div>

      {/* Posts */}
      {posts.map((category, index) => (
        <HorizontalRow
          key={index}
          title={category.cate}
          items={category}
          source="dp"
          setIsDetailClicked={setIsDetailClicked}
        />
      ))}
    </div>
  );
}
