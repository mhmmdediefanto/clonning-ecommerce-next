"use client";
import React from "react";
import { ChevronRight, ChevronLeft } from "lucide-react";
import ProductCard from "@/components/ProductCard";
import PromoSection from "@/components/PromoSection";

const NewMemberPromo = () => {
  const products = [
    {
      name: "Yoghurt Bites",
      price: "Rp8.275",
      original: "",
      discount: "",
      image: "bg-red-100",
    },
    {
      name: "Munchys Lexus",
      price: "Rp32.000",
      original: "Rp39.900",
      discount: "20%",
      image: "bg-purple-100",
    },
    {
      name: "iQOO Z9x 5G",
      price: "Rp2.799.000",
      original: "Rp2.999.000",
      discount: "7%",
      image: "bg-yellow-100",
    },
    {
      name: "Telur Ayam Negeri",
      price: "Rp32.500",
      original: "",
      discount: "",
      image: "bg-orange-100",
    },
    {
      name: "Paseo Facial Tissue",
      price: "Rp9.500",
      original: "Rp12.500",
      discount: "24%",
      image: "bg-green-100",
    },
    {
      name: "Samsung Tab A9",
      price: "Rp2.000.000",
      original: "",
      discount: "",
      image: "bg-blue-100",
    },
    {
      name: "Baby Hair Lotion",
      price: "Rp15.700",
      original: "",
      discount: "",
      image: "bg-pink-100",
    },
    {
      name: "Laptop Gaming",
      price: "Rp15.700.000",
      original: "Rp20.000.000",
      discount: "15%",
      image: "bg-gray-100",
    },
  ];

  const scrollContainerRef = React.useRef<HTMLDivElement>(null);

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
    <PromoSection className="bg-[#E5F4FF]" decorations={false}>
      {/* Background decorations specific to this promo */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-blue-200/20 rounded-full blur-3xl -mr-16 -mt-16 pointer-events-none"></div>

      <div className="flex items-center justify-between mb-4 relative z-10">
        <h2 className="text-lg md:text-xl font-bold text-gray-800">
          Member baru? Ini promomu!
        </h2>
        <a
          href="#"
          className="text-[#0095DA] text-sm font-bold hover:underline flex items-center"
        >
          Selengkapnya <ChevronRight size={16} />
        </a>
      </div>

      <div className="relative group/container">
        {/* Navigation Buttons */}
        <button
          onClick={() => slide("left")}
          className="absolute left-0 top-1/2 -translate-y-1/2 -ml-2 z-20 bg-white shadow-md rounded-full p-1.5 transition-opacity hover:bg-gray-50 text-gray-600 opacity-100 lg:opacity-0 lg:group-hover/container:opacity-100"
        >
          <ChevronLeft size={20} />
        </button>
        <button
          onClick={() => slide("right")}
          className="absolute right-0 top-1/2 -translate-y-1/2 -mr-2 z-20 bg-white shadow-md rounded-full p-1.5 transition-opacity hover:bg-gray-50 text-gray-600 opacity-100 lg:opacity-0 lg:group-hover/container:opacity-100"
        >
          <ChevronRight size={20} />
        </button>

        <div
          ref={scrollContainerRef}
          className="flex gap-4 overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-2 -mb-2"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {products.map((product, idx) => (
            <div key={idx} className="snap-start h-full shrink-0">
              <div
                className="w-[140px] md:w-[170px]"
                onClick={() => console.log("clicked", product.name)}
              >
                <ProductCard
                  name={product.name}
                  price={product.price}
                  originalPrice={product.original}
                  discount={product.discount}
                  image={product.image}
                  isOfficialStore={idx === 2} // Placeholder logic
                  className="h-full"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </PromoSection>
  );
};

export default NewMemberPromo;
