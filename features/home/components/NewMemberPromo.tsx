import React from "react";
import { ChevronRight } from "lucide-react";
import PromoSection from "@/components/PromoSection";
import { homeService } from "@/features/home/services/homeService";
import NewMemberPromoClient from "./NewMemberPromoClient";

const NewMemberPromo = async () => {
  const products = await homeService.getNewMemberProducts();

  if (!products.length) return null;

  return (
    <PromoSection className="bg-[#E5F4FF]" decorations={false}>
      {/* Background decorations specific to this promo */}
      <div className="absolute -mr-16 -mt-16 h-64 w-64 rounded-full bg-blue-200/20 blur-3xl pointer-events-none top-0 right-0"></div>

      <div className="relative z-10 mb-4 flex items-center justify-between">
        <h2 className="text-lg font-bold text-gray-800 md:text-xl">
          Member baru? Ini promomu!
        </h2>
        <a
          href="#"
          className="flex items-center text-sm font-bold text-[#0095DA] hover:underline"
        >
          Selengkapnya <ChevronRight size={16} />
        </a>
      </div>

      <NewMemberPromoClient products={products} />
    </PromoSection>
  );
};

export default NewMemberPromo;
