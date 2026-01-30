import Navbar from "@/components/Navbar";
import Hero from "@/features/home/components/Hero";
import PromoBanner from "@/features/home/components/PromoBanner";
import FlashSale from "@/features/home/components/FlashSale";
import NewMemberPromo from "@/features/home/components/NewMemberPromo";
import SpecialPromoGallery from "@/features/home/components/SpecialPromoGallery";
import PopularCategories from "@/features/home/components/PopularCategories";
import CategoryTabs from "@/components/CategoryTabs";
import Footer from "@/components/Footer";
import { Suspense } from "react";
import ProductSection from "@/features/home/components/ProductSection";
import ProductCardSkeleton from "@/components/skeletons/ProductCardSkeleton";
import NewMemberPromoSkeleton from "@/components/skeletons/NewMemberPromoSkeleton";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <h1 className="sr-only">Lumina - Toko Online Terlengkap & Terpercaya</h1>
      <Navbar />

      <main className="container mx-auto  pt-6">
        <div className="flex flex-col lg:flex-row gap-6 max-w-7xl px-4 lg:px-8 mx-auto">
          {/* Hero Section - Full width now as sidebar is in navbar */}
          <div className="flex-1 w-full h-auto md:h-95">
            <Hero />
          </div>
        </div>

        {/* Popular Categories */}
        <div className="max-w-7xl px-4 lg:px-8 mx-auto mt-6">
          <PopularCategories />
        </div>

        {/* Promo Banner */}
        <div className="max-w-7xl px-4 lg:px-8 mx-auto mt-6">
          <PromoBanner />
        </div>

        {/* New Member Promo Section */}
        <div className="max-w-7xl px-4 lg:px-8 mx-auto">
          <Suspense fallback={<NewMemberPromoSkeleton />}>
            <NewMemberPromo />
          </Suspense>
        </div>

        {/* Flash Sale Section */}
        <div className="max-w-7xl px-4 lg:px-8 mx-auto">
          <FlashSale />
        </div>

        {/* Special Promo Gallery */}
        <div className="max-w-7xl px-4 lg:px-8 mx-auto">
          <SpecialPromoGallery />
        </div>

        {/* Rekomendasi Section with Tabs */}
        <div className="mt-8">
          <CategoryTabs />

          <div className="max-w-7xl px-4 lg:px-8 mx-auto">
            <Suspense
              fallback={
                <div className="grid grid-cols-2 gap-4 md:grid-cols-4 lg:grid-cols-6">
                  {Array.from({ length: 12 }).map((_, i) => (
                    <ProductCardSkeleton key={i} />
                  ))}
                </div>
              }
            >
              <ProductSection />
            </Suspense>
          </div>

          <div className="mt-8 flex justify-center">
            <button className="px-6 py-2 border border-[#0095DA] text-[#0095DA] font-bold rounded-lg hover:bg-blue-50 transition-colors">
              Lihat Selengkapnya
            </button>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
