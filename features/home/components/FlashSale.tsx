"use client";

import React, { useState, useEffect } from "react";
import { ChevronRight, ChevronLeft, Zap } from "lucide-react";
import ProductCard from "@/components/ProductCard";
import PromoSection from "@/components/PromoSection";

const FlashSale = () => {
  // Countdown Timer Logic
  const [timeLeft, setTimeLeft] = useState({
    hours: 2,
    minutes: 7,
    seconds: 3,
  });
  const scrollContainerRef = React.useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) return { ...prev, seconds: prev.seconds - 1 };
        if (prev.minutes > 0)
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        if (prev.hours > 0)
          return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        return prev; // Timer finished
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = (num: number) => num.toString().padStart(2, "0");

  const products = [
    {
      name: "Philips Airfryer",
      price: 644000,
      original: 1200000,
      discount: 46,
      image: "bg-gray-200",
      stock: 80,
    },
    {
      name: "Bear Brand Milk",
      price: 8.900,
      original: 12.000,
      discount: 15,
      image: "bg-gray-200",
      stock: 5,
    }, // Low stock: Sisa 1 logic
    {
      name: "Ultra Milk",
      price: 16900,
      original: 20000,
      discount: 13,
      image: "bg-gray-200",
      stock: 10,
    },
    {
      name: "Anker Charger",
      price: 87500,
      original: 200000,
      discount: 56,
      image: "bg-gray-200",
      stock: 100,
    },
    {
      name: "Stand Mixer",
      price: 494400,
      original: 900000,
      discount: 45,
      image: "bg-gray-200",
      stock: 60,
    },
    {
      name: "Kipas Angin",
      price: 341050,
      original: 500000,
      discount: 32,
      image: "bg-gray-200",
      stock: 40,
    },
  ];

  const slide = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const scrollAmount =
        container.clientWidth /
        (window.innerWidth < 640 ? 2 : window.innerWidth < 1024 ? 3 : 5);
      const targetScroll =
        container.scrollLeft +
        (direction === "right" ? scrollAmount : -scrollAmount);

      container.scrollTo({
        left: targetScroll,
        behavior: "smooth",
      });
    }
  };

  return (
    <PromoSection className="bg-[#FF423E] text-white" decorations={false}>
      {/* Header */}
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-6 gap-4">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-1 font-bold italic text-2xl">
            <Zap className="fill-yellow-400 text-yellow-400" size={28} />
            <span>
              FLA<span className="text-yellow-400">⚡</span>H SALE
            </span>
          </div>

          {/* Timer Box */}
          <div className="flex items-center gap-2 text-black font-bold text-lg">
            <div className="bg-white/90 backdrop-blur rounded px-2 py-1">
              {formatTime(timeLeft.hours)}
            </div>
            <span className="text-white">:</span>
            <div className="bg-white/90 backdrop-blur rounded px-2 py-1">
              {formatTime(timeLeft.minutes)}
            </div>
            <span className="text-white">:</span>
            <div className="bg-white/90 backdrop-blur rounded px-2 py-1">
              {formatTime(timeLeft.seconds)}
            </div>
          </div>
        </div>

        <a
          href="#"
          className="hidden md:flex items-center text-white text-sm font-bold hover:underline"
        >
          Lihat semua <ChevronRight size={16} />
        </a>
      </div>

      <div className="flex gap-4">
        {/* Banner Left (Desktop only) */}
        <div className="hidden lg:block w-60 shrink-0 bg-[#D6001C] rounded-lg p-6 relative overflow-hidden flex flex-col justify-center text-center">
          <div className="absolute inset-0 bg-red-800/20"></div>
          <div className="relative z-10">
            <h3 className="text-2xl font-black italic mb-2">BELI 3</h3>
            <div className="bg-yellow-400 text-red-600 font-bold px-2 py-1 transform -rotate-2 inline-block mb-2 shadow-sm">
              EXTRA DISKON
            </div>
            <p className="font-bold text-xl">s.d. 500rb</p>
          </div>
        </div>

        {/* Carousel */}
        <div className="relative flex-1 overflow-hidden group/container">
          {/* Navigation Buttons */}
          <button
            onClick={() => slide("left")}
            className="absolute left-0 top-1/2 -translate-y-1/2 -ml-2 z-20 bg-white shadow-md rounded-full p-1.5 transition-opacity hover:bg-gray-50 text-gray-600 opacity-100 lg:opacity-0 lg:group-hover/container:opacity-100 disabled:opacity-50"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            onClick={() => slide("right")}
            className="absolute right-0 top-1/2 -translate-y-1/2 -mr-2 z-20 bg-white shadow-md rounded-full p-1.5 transition-opacity hover:bg-gray-50 text-gray-600 opacity-100 lg:opacity-0 lg:group-hover/container:opacity-100 disabled:opacity-50"
          >
            <ChevronRight size={20} />
          </button>

          <div
            ref={scrollContainerRef}
            className="flex gap-3 overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-2 -mb-2"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {products.map((product, idx) => (
              <div key={idx} className="snap-start h-full shrink-0">
                <div className="w-35 md:w-42.5">
                  {/* Wrapper to enforce width */}
                  <ProductCard
                    name={product.name}
                    price={product.price}
                    originalPrice={product.original}
                    discount={product.discount}
                    image={product.image}
                  />
                  {/* Stock Bar Overlay */}
                  <div className="mt-2">
                    <div className="w-full bg-red-200 rounded-full h-1.5 mb-1 overflow-hidden">
                      <div
                        className="bg-yellow-400 h-full rounded-full"
                        style={{ width: `${product.stock}%` }}
                      ></div>
                    </div>
                    <div className="text-[10px] font-bold text-white flex justify-between">
                      {product.stock < 10 ? (
                        <span className="text-yellow-200">Segera Habis!</span>
                      ) : (
                        <span className="opacity-80">Tersedia</span>
                      )}
                      <span>
                        {product.stock < 10
                          ? `Sisa ${product.stock}`
                          : `${product.stock}%`}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </PromoSection>
  );
};

export default FlashSale;
