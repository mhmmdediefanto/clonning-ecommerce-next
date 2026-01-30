"use client";

import { useState } from "react";
import Image from "next/image";

interface ColorVariant {
  name: string;
  image: string;
}

interface ProductVariantsProps {
  colors: ColorVariant[];
  sizes: string[];
}

export const ProductVariants = ({ colors, sizes }: ProductVariantsProps) => {
  const [selectedColor, setSelectedColor] = useState(colors[0].name);
  const [selectedSize, setSelectedSize] = useState(sizes[0]);

  return (
    <div className="flex flex-col gap-6 border-t border-gray-100 py-6">
      {/* Color Selection */}
      <div className="space-y-3">
        <h3 className="font-semibold text-gray-900">
          Pilih Warna:{" "}
          <span className="font-normal text-gray-500">{selectedColor}</span>
        </h3>
        <div className="flex flex-wrap gap-3">
          {colors.map((color) => (
            <button
              key={color.name}
              onClick={() => setSelectedColor(color.name)}
              className={`group relative flex h-14 min-w-20 items-center gap-2 rounded-lg border px-2 py-1 transition-all hover:bg-gray-50 ${
                selectedColor === color.name
                  ? "border-green-600 bg-green-50 ring-1 ring-green-600"
                  : "border-gray-200"
              }`}
            >
              <div className="relative h-10 w-10 shrink-0 overflow-hidden rounded-md">
                <Image
                  src={color.image}
                  alt={color.name}
                  fill
                  className="object-cover"
                />
              </div>
              <span className="text-sm font-medium text-gray-700">
                {color.name}
              </span>

              {/* Selected Checkmark (CSS only for now or Icon) */}
              {selectedColor === color.name && (
                <div className="absolute top-0 right-0 -mr-1 -mt-1 h-3 w-3 rounded-full bg-green-600 border border-white" />
              )}
            </button>
          ))}
        </div>
      </div>

      {/* Size Selection */}
      <div className="space-y-3">
        <h3 className="font-semibold text-gray-900">
          Pilih Ukuran:{" "}
          <span className="font-normal text-gray-500">{selectedSize}</span>
        </h3>
        <div className="flex flex-wrap gap-2">
          {sizes.map((size) => (
            <button
              key={size}
              onClick={() => setSelectedSize(size)}
              className={`min-w-12 rounded-lg border px-4 py-2 text-sm font-medium transition-all ${
                selectedSize === size
                  ? "border-green-600 bg-green-50 text-green-700 ring-1 ring-green-600"
                  : "border-gray-200 text-gray-600 hover:border-gray-300 hover:bg-gray-50"
              }`}
            >
              {size}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};
