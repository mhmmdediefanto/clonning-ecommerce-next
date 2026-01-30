import React from "react";
import { Star, MapPin, BadgeCheck } from "lucide-react";

interface ProductCardProps {
  name: string;
  price: string;
  originalPrice?: string;
  discount?: string;
  image?: string;
  isOfficialStore?: boolean;
  rating?: number;
  soldCount?: number;
  location?: string;
  className?: string;
}

const ProductCard: React.FC<ProductCardProps> = ({
  name,
  price,
  originalPrice,
  discount,
  image = "bg-gray-100",
  isOfficialStore = false,
  rating,
  soldCount,
  location,
  className = "",
}) => {
  return (
    <div
      className={`bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow cursor-pointer flex flex-col h-full overflow-hidden ${className}`}
    >
      {/* Full width image container */}
      <div
        className={`w-full aspect-square relative ${image} flex items-center justify-center text-gray-400 text-xs`}
      >
        {/* Custom Discount Badge */}
        {discount && (
          <span className="absolute top-0 left-0 bg-red-100 text-red-600 text-[10px] font-bold px-1.5 py-0.5 rounded-br-lg z-10">
            {discount}
          </span>
        )}
      </div>

      {/* Content */}
      <div className="p-3 flex-1 flex flex-col">
        <h3 className="text-sm text-gray-800 line-clamp-2 mb-1 leading-snug min-h-[2.5em]">
          {name}
        </h3>

        <div className="mt-1">
          <div className="text-[#F9941E] font-bold text-sm">{price}</div>
          {(originalPrice || discount) && (
            <div className="flex items-center gap-1 mt-0.5">
              {originalPrice && (
                <div className="text-[10px] text-gray-400 line-through decoration-gray-400">
                  {originalPrice}
                </div>
              )}
            </div>
          )}
        </div>

        {/* Rating and Location - Push to bottom */}
        <div className="mt-auto pt-2 space-y-1">
          {(rating || soldCount) && (
            <div className="flex items-center gap-1 text-[10px] text-gray-500">
              {rating && (
                <div className="flex items-center gap-0.5">
                  <Star size={10} className="fill-yellow-400 text-yellow-400" />
                  <span>{rating}</span>
                </div>
              )}
              {rating && soldCount && <span>•</span>}
              {soldCount && <span>Terjual {soldCount}</span>}
            </div>
          )}

          <div className="flex items-center gap-1 text-[10px] text-gray-500">
            {isOfficialStore ? (
              <div className="flex items-center gap-1 text-[#0095DA] font-bold">
                <BadgeCheck size={12} className="fill-[#0095DA] text-white" />
                <span>Official Store</span>
              </div>
            ) : (
              location && (
                <div className="flex items-center gap-1">
                  <MapPin size={10} />
                  <span className="truncate max-w-30">{location}</span>
                </div>
              )
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
