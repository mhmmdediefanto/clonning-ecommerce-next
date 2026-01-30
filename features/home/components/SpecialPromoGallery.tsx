"use client";

import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const SpecialPromoGallery = () => {
  const mainBanners = [
    {
      id: 1,
      title: "Penawaran spesial di awal bulan.",
      price: "Rp8.749.000",
      subPrice: "atau Rp364.542/bulan",
      image: "bg-pink-100", // Placeholder
      brand: "iPhone 14",
    },
    {
      id: 2,
      title: "Gadget Impian Jadi Nyata",
      price: "Rp5.000.000",
      subPrice: "Cicilan 0%",
      image: "bg-blue-100",
      brand: "Samsung S23",
    },
  ];

  const sideBanners = [
    {
      id: 1,
      title: "iPad Pro Bertenaga.",
      desc: "Cicilan 0% Mulai Rp884.125/bulan",
      bg: "bg-gray-900 text-white",
      tag: "Gratis Ongkir",
    },
    {
      id: 2,
      title: "BCA Blibli",
      desc: "Apply Kartu Kredit & Dapatkan Bonus 650Rb",
      bg: "bg-blue-600 text-white",
      tag: "Partner Promo",
    },
    {
      id: 3,
      title: "Farmers Market",
      desc: "Diskon s.d. 50%",
      bg: "bg-indigo-900 text-white",
      tag: "Groceries",
    },
    {
      id: 4,
      title: "Stay With Benefits",
      desc: "Pesan hotel bisa dapet cashback hingga 1jt",
      bg: "bg-sky-500 text-white",
      tag: "Travel",
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % mainBanners.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [mainBanners.length]);

  return (
    <div className="mb-8">
      <h2 className="text-xl font-bold text-gray-800 mb-4">
        Galeri promo spesial
      </h2>

      <div className="flex flex-col lg:flex-row gap-4 h-auto lg:h-100">
        {/* Left Main Slider */}
        <div className="w-full lg:w-1/3 relative rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow group">
          <div
            className="flex h-full transition-transform duration-500 ease-out"
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {mainBanners.map((banner) => (
              <div
                key={banner.id}
                className={`w-full h-full shrink-0 ${banner.image} p-8 flex flex-col justify-center relative min-h-75`}
              >
                <div className="relative z-10 max-w-[80%]">
                  {/* Mock Logos */}
                  <div className="flex gap-2 mb-8 opacity-70">
                    <div className="w-16 h-6 bg-black/10 rounded"></div>
                    <div className="w-10 h-6 bg-black/10 rounded"></div>
                  </div>

                  <h3 className="text-3xl font-bold text-gray-800 mb-6 leading-tight">
                    {banner.title}
                  </h3>
                  <div className="mb-2">
                    <p className="text-gray-600 text-sm">Kini hanya</p>
                    <p className="text-2xl font-bold text-gray-900">
                      {banner.price}
                    </p>
                    <p className="text-xs text-gray-500">{banner.subPrice}</p>
                  </div>
                </div>

                {/* Mock Phone Image Placement */}
                <div className="absolute bottom-4 right-4 w-32 h-40 bg-black/5 rounded-lg rotate-[-10deg] backdrop-blur-sm border border-white/20"></div>
                <div className="absolute bottom-8 right-8 w-32 h-40 bg-black/10 rounded-lg shadow-xl"></div>
              </div>
            ))}
          </div>

          {/* Slider Indicators */}
          <div className="absolute bottom-4 left-8 flex gap-1.5 z-20">
            {mainBanners.map((_, idx) => (
              <div
                key={idx}
                className={`h-2 rounded-full transition-all duration-300 ${idx === currentSlide ? "w-8 bg-gray-800" : "w-2 bg-gray-800/30"}`}
              ></div>
            ))}
          </div>

          {/* Navigation Buttons (Hidden by default, shown on hover like other components logic if desired, keeping simple here) */}
          <button
            onClick={() =>
              setCurrentSlide(
                (curr) => (curr - 1 + mainBanners.length) % mainBanners.length,
              )
            }
            className="absolute left-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/50 hover:bg-white text-gray-800 opacity-0 group-hover:opacity-100 transition-opacity"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            onClick={() =>
              setCurrentSlide((curr) => (curr + 1) % mainBanners.length)
            }
            className="absolute right-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/50 hover:bg-white text-gray-800 opacity-0 group-hover:opacity-100 transition-opacity"
          >
            <ChevronRight size={20} />
          </button>
        </div>

        {/* Right Grid */}
        <div className="w-full lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-4">
          {sideBanners.map((banner) => (
            <div
              key={banner.id}
              className={`rounded-xl p-6 relative overflow-hidden shadow-sm hover:shadow-md transition-shadow cursor-pointer flex flex-col justify-center ${banner.bg} min-h-45`}
            >
              {/* Background Decor */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl -mr-10 -mt-10 pointer-events-none"></div>

              <div className="relative z-10 w-3/4">
                {/* Mock Logo */}
                <div className="w-20 h-5 bg-white/20 rounded mb-4"></div>

                <h4 className="text-xl font-bold mb-2 leading-tight">
                  {banner.title}
                </h4>
                <p className="text-sm opacity-90 mb-4">{banner.desc}</p>
                {/* Tag or Link */}
                <span className="text-xs font-bold underline opacity-80 decoration-white/50">
                  Cek Promo
                </span>
              </div>

              {/* Mock Image Placement */}
              <div className="absolute bottom-4 right-4 w-20 h-20 bg-white/10 rounded-lg rotate-12 backdrop-blur-md border border-white/10 shadow-lg"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SpecialPromoGallery;
