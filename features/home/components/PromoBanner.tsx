"use client";

import React, { useState, useEffect } from "react";

const PromoBanner = () => {
  const banners = [
    {
      id: 1,
      bg: "bg-[#FFC700]",
      mainText: "Diskon s.d. 5jt*",
      subText: "Cuma 3 Hari",
      brandText: "VISA",
      brandHighlight: "DAY!",
      themeColor: "text-[#003B72]",
    },
    {
      id: 2,
      bg: "bg-[#E42529]", // Red styling for bank promo
      mainText: "Cashback 50%",
      subText: "Spesial Imlek",
      brandText: "MEGA",
      brandHighlight: "SALE",
      themeColor: "text-white",
    },
    {
      id: 3,
      bg: "bg-[#0095DA]", // Blibli blue
      mainText: "Gratis Ongkir",
      subText: "Tanpa Minimum",
      brandText: "BLIBLI",
      brandHighlight: "MART",
      themeColor: "text-white",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % banners.length);
    }, 4000); // Slide every 4 seconds

    return () => clearInterval(interval);
  }, [banners.length]);

  return (
    <div className="w-full mt-6 mb-8">
      <div className="relative w-full h-25 md:h-30 rounded-xl overflow-hidden shadow-sm cursor-pointer hover:shadow-md transition-shadow group">
        {/* Slides Container */}
        <div
          className="w-full h-full transition-transform duration-500 ease-out flex"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {banners.map((banner) => (
            <div
              key={banner.id}
              className={`w-full h-full flex-shrink-0 relative ${banner.bg} flex items-center justify-between px-8 md:px-16`}
            >
              <div className={`flex flex-col ${banner.themeColor}`}>
                <span className="text-2xl font-bold italic">
                  {banner.mainText}
                </span>
                <span className="bg-white/90 px-2 py-0.5 rounded-full text-xs font-bold w-fit mt-1 text-black">
                  {banner.subText}
                </span>
              </div>

              <div className="flex items-center gap-4">
                <div className="hidden md:flex flex-col items-end drop-shadow-md">
                  <span
                    className={`font-bold text-3xl italic ${banner.bg === "bg-[#FFC700]" ? "text-white" : "text-white/80"}`}
                  >
                    {banner.brandText}
                  </span>
                  <span
                    className={`font-black text-4xl italic uppercase tracking-tighter drop-shadow-none ${banner.themeColor}`}
                  >
                    {banner.brandHighlight}
                  </span>
                </div>
                {/* Decorative element */}
                <div className="h-20 w-32 bg-white/20 rotate-12 backdrop-blur-sm rounded-lg border border-white/40"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Dots Indicator */}
        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1.5 z-10">
          {banners.map((_, idx) => (
            <div
              key={idx}
              className={`h-1.5 rounded-full transition-all duration-300 ${idx === currentIndex ? "w-6 bg-white" : "w-1.5 bg-white/50"}`}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PromoBanner;
