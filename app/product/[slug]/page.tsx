import { ProductGallery } from "@/features/product/components/ProductGallery";
import { ProductInfo } from "@/features/product/components/ProductInfo";
import { ActionPanel } from "@/features/product/components/ActionPanel";
import { ProductTabs } from "@/features/product/components/ProductTabs";
import { ProductVariants } from "@/features/product/components/ProductVariants";
import Navbar from "@/components/Navbar";

// Dummy Data
const PRODUCT = {
  id: "1",
  title: "Headphone Bluetooth Sony WH-1000XM5 Noise Cancelling Wireless",
  price: 5999000,
  originalPrice: 6500000,
  rating: 4.9,
  sold: 1250,
  description: "Headphone terbaik dengan noise cancelling kelas dunia.",
  images: [
    "https://placehold.co/600x600/1a1a1a/ffffff?text=Sony+WH-1000XM5",
    "https://placehold.co/600x600/333333/ffffff?text=Side+View",
    "https://placehold.co/600x600/555555/ffffff?text=Back+View",
    "https://placehold.co/600x600/777777/ffffff?text=Case",
    "https://placehold.co/600x600/999999/ffffff?text=In+Use",
  ],
  variants: {
    colors: [
      {
        name: "Hitam",
        image: "https://placehold.co/100x100/1a1a1a/ffffff?text=Hitam",
      },
      {
        name: "Putih",
        image: "https://placehold.co/100x100/f5f5f5/333333?text=Putih",
      },
    ],
    sizes: ["Regular", "Bundle Case", "Bundle Stand"],
  },
};

export default function ProductPage({ params }: { params: { slug: string } }) {
  return (
    <div className="min-h-screen bg-white pb-24 md:pb-0">
      <Navbar />

      <main className="mx-auto max-w-7xl md:px-8 lg:py-12">
        <div className="grid lg:grid-cols-12 lg:gap-8">
          {/* Column 1: Gallery (~25-33%) */}
          <div className="lg:col-span-4 xl:col-span-3">
            <div className="lg:sticky lg:top-24">
              <ProductGallery images={PRODUCT.images} />
            </div>
          </div>

          {/* Column 2: Info & Description & Tabs (Main Content) */}
          <div className="min-w-0 px-4 py-6 lg:col-span-5 lg:p-0 xl:col-span-6">
            <ProductInfo
              title={PRODUCT.title}
              price={PRODUCT.price}
              originalPrice={PRODUCT.originalPrice}
              rating={PRODUCT.rating}
              sold={PRODUCT.sold}
            />

            <ProductVariants
              colors={PRODUCT.variants.colors}
              sizes={PRODUCT.variants.sizes}
            />

            <div className="mt-8 border-t border-gray-100 pt-8">
              <ProductTabs />
            </div>
          </div>

          {/* Column 3: Action Panel (Sticky Right) */}
          <div className="hidden lg:col-span-3 md:block">
            <div className="sticky top-24">
              <div className="rounded-xl border border-gray-200 p-4 shadow-sm">
                <h3 className="mb-4 font-bold text-gray-900">
                  Atur Jumlah dan Catatan
                </h3>
                <ActionPanel price={PRODUCT.price} />
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Mobile Sticky Action Panel */}
      <div className="md:hidden">
        <ActionPanel price={PRODUCT.price} />
      </div>
    </div>
  );
}
