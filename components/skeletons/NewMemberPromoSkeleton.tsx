import React from "react";
import ProductCardSkeleton from "@/components/skeletons/ProductCardSkeleton";
import PromoSection from "@/components/PromoSection";

const NewMemberPromoSkeleton = () => {
  return (
    <PromoSection className="bg-[#E5F4FF]" decorations={false}>
      {/* Background decorations skeleton */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-blue-200/20 rounded-full blur-3xl -mr-16 -mt-16 pointer-events-none"></div>

      {/* Header Skeleton */}
      <div className="flex items-center justify-between mb-4 relative z-10">
        <div className="h-6 w-48 bg-gray-200 animate-pulse rounded"></div>
        <div className="h-4 w-24 bg-gray-200 animate-pulse rounded"></div>
      </div>

      {/* Carousel Skeleton */}
      <div className="flex gap-4 overflow-hidden pb-2 -mb-2">
        {Array.from({ length: 6 }).map((_, i) => (
          <div key={i} className="shrink-0">
            <div className="w-35 md:w-42.5 h-full">
              <ProductCardSkeleton />
            </div>
          </div>
        ))}
      </div>
    </PromoSection>
  );
};

export default NewMemberPromoSkeleton;
