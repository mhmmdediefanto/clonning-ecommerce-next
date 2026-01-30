import { Star, Share2, Heart } from "lucide-react";

interface ProductInfoProps {
  title: string;
  price: number;
  originalPrice?: number;
  rating: number;
  sold: number;
}

export const ProductInfo = ({
  title,
  price,
  originalPrice,
  rating,
  sold,
}: ProductInfoProps) => {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-start justify-between gap-4">
        <h1 className="text-2xl font-bold leading-tight text-neutral-900 md:text-3xl">
          {title}
        </h1>
        <div className="flex gap-2">
          <button className="rounded-full bg-neutral-100 p-2 text-neutral-600 transition-colors hover:bg-neutral-200">
            <Heart className="h-5 w-5" />
          </button>
          <button className="rounded-full bg-neutral-100 p-2 text-neutral-600 transition-colors hover:bg-neutral-200">
            <Share2 className="h-5 w-5" />
          </button>
        </div>
      </div>

      <div className="flex items-center gap-4 text-sm text-neutral-500">
        <div className="flex items-center gap-1 text-yellow-500">
          <Star className="h-4 w-4 fill-current" />
          <span className="font-medium text-neutral-900">{rating}</span>
          <span className="text-neutral-400">/5.0</span>
        </div>
        <div className="h-4 w-px bg-neutral-300"></div>
        <div>
          Terjual <span className="font-medium text-neutral-900">{sold}</span>
        </div>
      </div>

      <div className="mt-2 flex flex-col gap-1">
        <div className="flex items-end gap-3">
          <span className="text-3xl font-bold text-neutral-900">
            Rp {price.toLocaleString("id-ID")}
          </span>
          {originalPrice && (
            <span className="mb-1 text-lg text-neutral-400 line-through decoration-red-500">
              Rp {originalPrice.toLocaleString("id-ID")}
            </span>
          )}
        </div>
        {originalPrice && (
          <div className="self-start rounded bg-red-100 px-2 py-0.5 text-xs font-bold text-red-600">
            Hemat {Math.round(((originalPrice - price) / originalPrice) * 100)}%
          </div>
        )}
      </div>
    </div>
  );
};
