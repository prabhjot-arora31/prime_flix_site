"use client";
import HorizontalRow from "@/components/HorizontalRow";
import SkeletonLoader from "@/components/SkeletonLoader";
import data from "@/data/netflix.json"; // your content source
import { useState } from "react";

export default function Home() {
  const [isDetailClicked, setIsDetailClicked] = useState(false);

  return isDetailClicked ? (
    <SkeletonLoader />
  ) : (
    <main className="p-4">
      {data.data.map(
        (row, idx) =>
          idx <= 4 && (
            <HorizontalRow
              key={idx}
              title={row.title}
              items={row.list}
              setIsDetailClicked={setIsDetailClicked}
            />
          )
      )}
    </main>
  );
}
