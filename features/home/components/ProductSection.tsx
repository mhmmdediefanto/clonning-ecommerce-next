import { homeService } from "@/features/home/services/homeService";
import ProductCard from "@/components/ProductCard";

export default async function ProductSection() {
  const products = await homeService.getRecommendations();

  return (
    <div className="grid grid-cols-2 gap-4 md:grid-cols-4 lg:grid-cols-6">
      {products.map((item) => (
        <ProductCard
          key={item.id}
          name={item.title}
          price={item.price}
          originalPrice={
            item.discountPercentage
              ? item.price * (1 + item.discountPercentage / 100)
              : undefined
          }
          discount={item.discountPercentage}
          image={item.thumbnail}
          location={undefined}
          brand={item.brand}
          rating={item.rating}
          soldCount={item.stock}
        />
      ))}
    </div>
  );
}
