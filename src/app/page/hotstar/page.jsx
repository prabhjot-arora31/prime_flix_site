"use client";

import HorizontalRow from "@/components/HorizontalRow";
import Image from "next/image";
import { useState, useEffect } from "react";

export default function DisneyPlusHome() {
  const [isClient, setIsClient] = useState(false);
  const [selectedStudio, setSelectedStudio] = useState("1");
  const [posts, setPosts] = useState([]);
  const [continueWatching, setContinueWatching] = useState([]);
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

    fetch(selected.json)
      .then((res) => res.json())
      .then((data) => {
        console.log("data is:", data);
        setPosts(data.post);
      })
      .catch((err) => console.error("Failed to load JSON", err));
  }, [selectedStudio]);

  if (!isClient) return null;

  return (
    <div className="bg-black text-white min-h-screen p-4">
      <h2 className="text-xl font-bold mb-2">Choose Studio</h2>
      <div className="flex gap-4 overflow-x-auto mb-4">
        {studios.map((studio) => (
          <div
            key={studio.id}
            onClick={() => setSelectedStudio(studio.id)}
            className={`border-2 ${
              selectedStudio === studio.id
                ? "border-purple-500"
                : "border-transparent"
            } cursor-pointer`}
          >
            <Image
              src={studio.image}
              alt={studio.name}
              width={100}
              height={54}
            />
          </div>
        ))}
      </div>

      {/* {posts.map((category, index) => (
        <div key={index}>
          <h3 className="text-lg font-bold mt-6 mb-2">{category.cate}</h3>
          <div className="flex gap-4 overflow-x-auto">
            {category.ids.map((id) => (
              <div
                key={id}
                className="w-[120px] cursor-pointer"
                onClick={() => (window.location.href = `/details/${id}`)}
              >
                <img
                  src={`https://imgcdn.media/hs/v/166/${id}.jpg`}
                  alt=""
                  className="rounded-md w-[120px] h-[180px] object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      ))} */}
      {posts.map((category, index) => (
        <HorizontalRow
          key={index}
          title={category.cate}
          items={category}
          source="dp"
        />
      ))}
    </div>
  );
}
