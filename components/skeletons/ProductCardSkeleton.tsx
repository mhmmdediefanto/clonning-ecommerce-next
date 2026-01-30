import React from "react";

const ProductCardSkeleton = () => {
  return (
    <div className="flex h-full flex-col overflow-hidden rounded-lg bg-white shadow-sm">
      {/* Image Skeleton */}
      <div className="relative aspect-square w-full animate-pulse bg-gray-200" />

      {/* Content Skeleton */}
      <div className="flex flex-1 flex-col p-3">
        {/* Title */}
        <div className="mb-2 h-4 w-full animate-pulse rounded bg-gray-200" />
        <div className="mb-4 h-4 w-2/3 animate-pulse rounded bg-gray-200" />

        {/* Price */}
        <div className="mb-2 h-5 w-1/3 animate-pulse rounded bg-gray-200" />

        {/* Rating/Location */}
        <div className="mt-auto flex gap-2">
          <div className="h-3 w-1/4 animate-pulse rounded bg-gray-200" />
          <div className="h-3 w-1/4 animate-pulse rounded bg-gray-200" />
        </div>
      </div>
    </div>
  );
};

export default ProductCardSkeleton;
