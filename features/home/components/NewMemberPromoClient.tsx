"use client";

import React, { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import ProductCard from "@/components/ProductCard";
import { Product } from "@/features/product/types/ProductType";

interface NewMemberPromoClientProps {
  products: Product[];
}

const NewMemberPromoClient = ({ products }: NewMemberPromoClientProps) => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

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
    <div className="group/container relative">
      {/* Navigation Buttons */}
      <button
        onClick={() => slide("left")}
        className="absolute left-0 top-1/2 z-20 -ml-2 -translate-y-1/2 rounded-full bg-white p-1.5 text-gray-600 shadow-md opacity-100 transition-opacity hover:bg-gray-50 lg:opacity-0 lg:group-hover/container:opacity-100"
      >
        <ChevronLeft size={20} />
      </button>
      <button
        onClick={() => slide("right")}
        className="absolute right-0 top-1/2 z-20 -mr-2 -translate-y-1/2 rounded-full bg-white p-1.5 text-gray-600 shadow-md opacity-100 transition-opacity hover:bg-gray-50 lg:opacity-0 lg:group-hover/container:opacity-100"
      >
        <ChevronRight size={20} />
      </button>

      <div
        ref={scrollContainerRef}
        className="scrollbar-hide -mb-2 flex snap-x snap-mandatory gap-4 overflow-x-auto pb-2"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {products.map((product) => (
          <div key={product.id} className="h-full shrink-0 snap-start">
            <div className="w-35 md:w-42.5">
              <ProductCard
                name={product.title}
                price={product.price}
                originalPrice={
                  product.discountPercentage
                    ? product.price * (1 + product.discountPercentage / 100)
                    : undefined
                }
                discount={product.discountPercentage}
                image={product.thumbnail}
                brand={product.brand}
                rating={product.rating}
                soldCount={product.stock}
                className="h-full"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewMemberPromoClient;
