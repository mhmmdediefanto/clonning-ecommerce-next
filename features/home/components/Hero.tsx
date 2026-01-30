import React from "react";

const Hero = () => {
  return (
    <div className="relative w-full h-full min-h-[300px] lg:min-h-[380px] rounded-xl overflow-hidden shadow-lg group">
      {/* Main Banner Image - Placeholder using a gradient/abstract if no image provided, but mimicking a promo banner */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#0095DA] to-[#00C2FF] flex items-center justify-center text-white">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80')] bg-cover bg-center opacity-40 mix-blend-overlay"></div>

        <div className="relative z-10 text-center px-6">
          <span className="inline-block py-1 px-3 rounded-full bg-white/20 backdrop-blur-sm text-xs font-bold mb-4 border border-white/30">
            BIG SALE 12.12
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-4 tracking-tight drop-shadow-sm">
            DISKON HINGGA <span className="text-[#F9941E]">80%</span>
          </h1>
          <p className="text-lg md:text-xl font-medium mb-8 max-w-lg mx-auto opacity-90">
            Dapatkan gadget impianmu dengan harga termurah se-Indonesia.
          </p>
          <button className="px-8 py-3 bg-white text-[#0095DA] font-bold rounded-lg shadow-lg hover:bg-gray-50 transform hover:-translate-y-1 transition-all duration-300">
            Belanja Sekarang
          </button>
        </div>
      </div>

      {/* Carousel Dots */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
        <div className="w-8 h-2 bg-white rounded-full shadow-sm"></div>
        <div className="w-2 h-2 bg-white/50 rounded-full hover:bg-white transition-colors cursor-pointer"></div>
        <div className="w-2 h-2 bg-white/50 rounded-full hover:bg-white transition-colors cursor-pointer"></div>
        <div className="w-2 h-2 bg-white/50 rounded-full hover:bg-white transition-colors cursor-pointer"></div>
      </div>

      {/* Navigation Arrows */}
      <div className="absolute top-1/2 -translate-y-1/2 left-4 p-2 bg-white/30 backdrop-blur-md rounded-full text-white cursor-pointer hover:bg-white/50 opacity-0 group-hover:opacity-100 transition-opacity">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="m15 18-6-6 6-6" />
        </svg>
      </div>
      <div className="absolute top-1/2 -translate-y-1/2 right-4 p-2 bg-white/30 backdrop-blur-md rounded-full text-white cursor-pointer hover:bg-white/50 opacity-0 group-hover:opacity-100 transition-opacity">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="m9 18 6-6-6-6" />
        </svg>
      </div>
    </div>
  );
};

export default Hero;
