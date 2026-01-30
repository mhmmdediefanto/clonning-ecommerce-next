import { Product } from "@/features/product/types/ProductType";
import { productService } from "@/features/product/services/productService";

export const homeService = {
  /**
   * Fetch products specifically for the New Member Promo section
   */
  getNewMemberProducts: async (): Promise<Product[]> => {
    // Logic specific to this promo (e.g., skip first 10, limit 8)
    return productService.getAllProducts(8, 10);
  },

  /**
   * Fetch recommended products for the home page grid
   */
  getRecommendations: async (): Promise<Product[]> => {
    // Logic for home page recommendations (e.g., limit 12)
    return productService.getAllProducts(12, 0);
  },
};
