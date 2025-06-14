"use client";
import { useRef, useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function HorizontalRow({
  title,
  items,
  source = "netflix",
  setIsDetailClicked,
}) {
  const containerRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const router = useRouter();
  useEffect(() => {
    if (source === "netflix") {
      const idsToPrefetch = getDisplayItems().slice(0, 4); // first few items
      idsToPrefetch.forEach((item) => {
        const idMatch = item.poster.match(/\/(\d+)\.jpg$/);
        const id = idMatch ? idMatch[1] : null;
        if (id) {
          router.prefetch(`/page/details/netflix/${id}`);
        }
      });
    }
  }, [items]);

  useEffect(() => {
    const checkScroll = () => {
      const el = containerRef.current;
      if (!el) return;
      setCanScrollLeft(el.scrollLeft > 0);
      setCanScrollRight(el.scrollLeft + el.clientWidth < el.scrollWidth);
    };

    checkScroll();
    containerRef.current?.addEventListener("scroll", checkScroll);
    window.addEventListener("resize", checkScroll);

    return () => {
      containerRef.current?.removeEventListener("scroll", checkScroll);
      window.removeEventListener("resize", checkScroll);
    };
  }, []);

  const scroll = (dir) => {
    const el = containerRef.current;
    if (!el) return;
    const scrollAmount = el.clientWidth;
    el.scrollBy({
      left: dir === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  // Helper to generate item list
  const getDisplayItems = () => {
    if (source === "primevideo") {
      const idsArray = items.ids?.split(",") || [];
      return idsArray.map((id) => ({
        id,
        poster: `https://imgcdn.media/pv/v/${id}.jpg`,
      }));
    } else if (source == "dp") {
      const idsArray = items.ids || [];
      return idsArray.map((id) => ({
        id,
        poster: `https://imgcdn.media/hs/v/166/${id}.jpg`,
      }));
    }
    return items; // For Netflix or other sources
  };

  const displayItems = getDisplayItems();

  return (
    <div className="relative group w-full mb-8">
      <h2 className="text-xl font-bold mb-2 px-4">{title}</h2>

      {/* Left button */}
      {canScrollLeft && (
        <button
          onClick={() => scroll("left")}
          className="absolute left-2 top-1/2 -translate-y-1/2 z-10 hidden group-hover:flex items-center justify-center w-10 h-10 rounded-full backdrop-blur bg-white/10 border border-white/20 text-white hover:bg-white/20 transition"
        >
          <ChevronLeft size={24} />
        </button>
      )}

      {/* Scrollable Row */}
      <div
        ref={containerRef}
        className="flex gap-2 overflow-x-auto scrollbar-hide px-4 scroll-smooth"
      >
        {displayItems.map((item, index) => {
          if (source == "netflix") {
            const idMatch = item.poster.match(/\/(\d+)\.jpg$/);
            const id = idMatch ? idMatch[1] : null;

            return (
              <Link
                key={id}
                href={`/page/details/netflix/${id}`}
                prefetch={true}
                onClick={() => {
                  setIsDetailClicked((v) => !v);
                }}
              >
                <img
                  src={item.poster}
                  alt=""
                  className="min-w-[150px] max-w-[150px] h-[220px] object-cover rounded-md hover:scale-105 transition"
                />
              </Link>
            );
          } else if (source == "dp") {
            return (
              <Link
                key={index}
                href={`/page/details/dp/${item.id}`}
                onClick={() => {
                  setIsDetailClicked((v) => !v);
                }}
              >
                <img
                  src={item.poster}
                  alt=""
                  className="min-w-[150px] max-w-[150px] h-[220px] object-cover rounded-md hover:scale-105 transition"
                />
              </Link>
            );
          } else {
            return (
              <Link
                key={index}
                href={`/page/details/pv/${item.id}`}
                onClick={() => {
                  setIsDetailClicked((v) => !v);
                }}
              >
                <img
                  src={item.poster}
                  alt=""
                  className="min-w-[150px] max-w-[150px] h-[220px] object-cover rounded-md hover:scale-105 transition"
                />
              </Link>
            );
          }
        })}
      </div>

      {/* Right button */}
      {canScrollRight && (
        <button
          onClick={() => scroll("right")}
          className="absolute right-2 top-1/2 -translate-y-1/2 z-10 hidden group-hover:flex items-center justify-center w-10 h-10 rounded-full backdrop-blur bg-white/10 border border-white/20 text-white hover:bg-white/20 transition"
        >
          <ChevronRight size={24} />
        </button>
      )}
    </div>
  );
}
