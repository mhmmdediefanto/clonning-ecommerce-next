import { Product } from "@/features/product/types/ProductType";

const BASE_URL = "https://dummyjson.com";

export const productService = {
  /**
   * Fetch all products with optional pagination
   */
  getAllProducts: async (limit = 30, skip = 0): Promise<Product[]> => {
    try {
      const res = await fetch(
        `${BASE_URL}/products?limit=${limit}&skip=${skip}`,
      );
      if (!res.ok) throw new Error("Failed to fetch products");
      const data = await res.json();
      return data.products;
    } catch (error) {
      console.error("Error fetching all products:", error);
      return [];
    }
  },

  getProductBySlug: async (slug: string): Promise<Product | null> => {
    try {
      const res = await fetch(`${BASE_URL}/products/${slug}`);
      if (!res.ok) return null;
      return await res.json();
    } catch (error) {
      console.error(`Error fetching product ${slug}:`, error);
      return null;
    }
  },
};
