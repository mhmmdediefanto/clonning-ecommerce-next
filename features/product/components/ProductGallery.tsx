"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface ProductGalleryProps {
  images: string[];
}

export const ProductGallery = ({ images }: ProductGalleryProps) => {
  const [activeImage, setActiveImage] = useState(0);

  return (
    <div className="flex flex-col gap-4">
      {/* Main Image */}
      <div className="relative aspect-square w-full overflow-hidden bg-neutral-100 md:rounded-2xl">
        <Image
          src={images[activeImage]}
          alt="Product Image"
          fill
          className="object-cover transition-transform duration-500 hover:scale-105"
        />

        {/* Navigation Arrows for Mobile */}
        <button
          onClick={() =>
            setActiveImage((prev) => (prev > 0 ? prev - 1 : images.length - 1))
          }
          className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-white/80 p-2 text-neutral-900 backdrop-blur-sm lg:hidden"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>
        <button
          onClick={() =>
            setActiveImage((prev) => (prev < images.length - 1 ? prev + 1 : 0))
          }
          className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-white/80 p-2 text-neutral-900 backdrop-blur-sm lg:hidden"
        >
          <ChevronRight className="h-5 w-5" />
        </button>
      </div>

      {/* Thumbnails */}
      <div className="grid grid-cols-5 gap-3 px-4 md:px-0">
        {images.map((img, index) => (
          <button
            key={index}
            onClick={() => setActiveImage(index)}
            className={`relative aspect-square overflow-hidden rounded-lg border-2 transition-all ${
              activeImage === index
                ? "border-neutral-900"
                : "border-transparent hover:border-neutral-300"
            }`}
          >
            <Image
              src={img}
              alt={`Thumbnail ${index + 1}`}
              fill
              className="object-cover"
            />
          </button>
        ))}
      </div>
    </div>
  );
};
