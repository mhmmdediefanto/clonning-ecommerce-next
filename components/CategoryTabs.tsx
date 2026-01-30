"use client";

import React, { useState } from "react";
import { ThumbsUp } from "lucide-react";

const CategoryTabs = () => {
  const categories = [
    { id: "foryou", label: "Untukmu", icon: <ThumbsUp size={16} /> },
    { id: "favorites", label: "Dari seller favoritmu" },
    { id: "affiliate", label: "Zona affiliate" },
    { id: "beauty", label: "Kecantikan Halal" },
    { id: "spices", label: "Bumbu Masak" },
    { id: "instant", label: "Makanan Instan" },
    { id: "oil", label: "Minyak Masakan" },
    { id: "drinks", label: "Minuman Halal" },
    { id: "eggs", label: "Telur Ayam" },
  ];

  const [activeTab, setActiveTab] = useState("foryou");
  const [isSticky, setIsSticky] = useState(false);
  const wrapperRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    const handleScroll = () => {
      if (wrapperRef.current) {
        const { top } = wrapperRef.current.getBoundingClientRect();
        setIsSticky(top <= 89);
      }
    };

    window.addEventListener("scroll", handleScroll);
    // Check initial state
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      ref={wrapperRef}
      className={`w-full mx-auto overflow-x-auto scrollbar-hide border-b mb-6 scroll-smooth sticky top-22 z-40 pt-4 pb-2 transition-all duration-300 ${
        isSticky
          ? "bg-white shadow-sm border-gray-200"
          : "bg-transparent border-gray-300"
      }`}
    >
      <div className="max-w-7xl px-4 lg:px-8 mx-auto">
        <div className="flex gap-6 min-w-max px-2">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveTab(cat.id)}
              className={`flex items-center gap-2 pb-3 text-sm font-bold transition-colors relative ${
                activeTab === cat.id
                  ? "text-[#0095DA]"
                  : "text-gray-500 hover:text-gray-700"
              }`}
            >
              {cat.icon && <span>{cat.icon}</span>}
              {cat.label}

              {activeTab === cat.id && (
                <div className="absolute bottom-0 left-0 w-full h-1 bg-[#0095DA] rounded-t-full"></div>
              )}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategoryTabs;
