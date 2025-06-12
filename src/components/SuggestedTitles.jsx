"use client";

import { useRef, useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function SuggestedTitles({
  source = "netflix",
  title,
  suggest,
  onNavigateStart,
}) {
  const router = useRouter();
  const containerRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  useEffect(() => {
    const checkScroll = () => {
      const el = containerRef.current;
      if (!el) return;
      setCanScrollLeft(el.scrollLeft > 0);
      setCanScrollRight(el.scrollLeft + el.clientWidth < el.scrollWidth);
    };

    checkScroll();
    const container = containerRef.current;
    container?.addEventListener("scroll", checkScroll);
    window.addEventListener("resize", checkScroll);

    return () => {
      container?.removeEventListener("scroll", checkScroll);
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

  const handleNavigation = (id) => {
    if (onNavigateStart) onNavigateStart(); // Trigger parent loading
    source == "netflix"
      ? router.replace(`/page/details/netflix/${id}`)
      : source == "pv"
      ? router.replace(`/page/details/pv/${id}`)
      : router.replace(`/page/details/dp/${id}`);
  };

  return (
    <div className="relative group w-full mb-8 ">
      <h2 className="text-xl font-bold mb-2 text-center px-4 mb-5">{title}</h2>

      {/* Left Scroll Button */}
      {canScrollLeft && (
        <button
          onClick={() => scroll("left")}
          className="absolute justify-center left-2 top-1/2 -translate-y-1/2 z-10 hidden group-hover:flex items-center  w-10 h-10 rounded-full backdrop-blur bg-white/10 border border-white/20 text-white hover:bg-white/20 transition"
        >
          <ChevronLeft size={24} />
        </button>
      )}

      {/* Scrollable Row */}
      <div
        ref={containerRef}
        className="flex gap-3 overflow-x-auto px-4 scroll-smooth scrollbar-hide "
      >
        {suggest?.map((sugg) => (
          <div
            key={sugg.id}
            onClick={() => handleNavigation(sugg.id)}
            className="cursor-pointer"
          >
            <img
              src={`${
                source == "netflix"
                  ? `https://imgcdn.media/poster/v/${sugg.id}.jpg`
                  : source == "pv"
                  ? `https://imgcdn.media/pv/v/${sugg.id}.jpg`
                  : `https://imgcdn.media/hs/v/700/${sugg.id}.jpg`
              }`}
              alt={`${sugg.t} Poster`}
              className="min-w-[140px] max-w-[140px] h-[200px] sm:h-[230px] object-cover rounded-xl hover:scale-105 transition duration-300"
            />
          </div>
        ))}
      </div>

      {/* Right Scroll Button */}
      {canScrollRight && (
        <button
          onClick={() => scroll("right")}
          className="absolute justify-center right-2 top-1/2 -translate-y-1/2 z-10 hidden group-hover:flex items-center  w-10 h-10 rounded-full backdrop-blur bg-white/10 border border-white/20 text-white hover:bg-white/20 transition"
        >
          <ChevronRight size={24} />
        </button>
      )}
    </div>
  );
}
