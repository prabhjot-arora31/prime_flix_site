// in Home.jsx or another page
"use client";
import HorizontalRow from "@/components/HorizontalRow";
import SkeletonLoader from "@/components/SkeletonLoader";
import data from "@/data/prime_video_data.json";
import { useState } from "react";

export default function Home() {
  const [isDetailClicked, setIsDetailClicked] = useState(false);

  return isDetailClicked ? (
    <SkeletonLoader />
  ) : (
    <main className="p-4">
      {data.post.map(
        (row, idx) =>
          idx <= 3 && (
            <HorizontalRow
              key={idx}
              title={row.cate}
              items={row}
              source="primevideo"
              setIsDetailClicked={setIsDetailClicked}
            />
          )
      )}
    </main>
  );
}
