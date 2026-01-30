import Navbar from "@/components/Navbar";
import Hero from "@/features/home/components/Hero";
import PromoBanner from "@/features/home/components/PromoBanner";
import FlashSale from "@/features/home/components/FlashSale";
import NewMemberPromo from "@/features/home/components/NewMemberPromo";
import SpecialPromoGallery from "@/features/home/components/SpecialPromoGallery";
import PopularCategories from "@/features/home/components/PopularCategories";
import CategoryTabs from "@/components/CategoryTabs";
import ProductCard from "@/components/ProductCard";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100">
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
          <NewMemberPromo />
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
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
              {[
                {
                  name: "Betadine Obat Kumur Mouthwash 190ML",
                  price: "Rp50.200",
                  original: "Rp55.800",
                  discount: "10%",
                  location: "Disediakan Blibli",
                  rating: 4.9,
                  sold: 225,
                  img: "bg-blue-100",
                },
                {
                  name: "Ecolink Lampu Bohlam Multipack LED 9W Putih",
                  price: "Rp53.500",
                  original: "Rp89.200",
                  discount: "40%",
                  location: "Disediakan Blibli",
                  rating: 4.9,
                  sold: 1300,
                  img: "bg-gray-100",
                },
                {
                  name: "Sumo Beras Khusus Packaging Kuning 5Kg",
                  price: "Rp87.400",
                  original: "Rp90.700",
                  discount: "4%",
                  location: "Disediakan Blibli",
                  rating: 4.9,
                  sold: 22200,
                  img: "bg-yellow-100",
                },
                {
                  name: "Sepeda Motor Yamaha NMAX 155 Connected",
                  price: "Rp32.875.000",
                  location: "Yamaha Official",
                  isOfficial: true,
                  rating: 5.0,
                  sold: 12,
                  img: "bg-gray-800",
                },
                {
                  name: "Syrup Sirup Kurnia Raspberry 600ml Isi 6 Botol",
                  price: "Rp170.000",
                  location: "Kota Medan",
                  rating: 5.0,
                  sold: 1,
                  img: "bg-red-100",
                },
                {
                  name: "Peci Songkok Hitam Polos Kopi Ah Remaja",
                  price: "Rp16.200",
                  location: "Arnad Store Flagship",
                  rating: 4.8,
                  sold: 3,
                  img: "bg-gray-900",
                },
                {
                  name: "Samsung Galaxy A16 5G 8/256GB",
                  price: "Rp3.499.000",
                  isOfficial: true,
                  rating: 4.9,
                  sold: 50,
                  img: "bg-blue-50",
                },
                {
                  name: "Philips Airfryer 4.1L fry healthy",
                  price: "Rp850.000",
                  isOfficial: true,
                  rating: 4.8,
                  sold: 450,
                  img: "bg-gray-100",
                },
                {
                  name: "Baju Muslim Wanita Modern",
                  price: "Rp125.000",
                  location: "Kota Bandung",
                  rating: 4.7,
                  sold: 88,
                  img: "bg-pink-50",
                },
                {
                  name: "Daily Facial Moisturizer SPF15 PA++",
                  price: "Rp89.000",
                  isOfficial: true,
                  rating: 4.9,
                  sold: 1200,
                  img: "bg-green-100",
                },
                {
                  name: "Kopi Kapal Api Special Mix 10x24g",
                  price: "Rp12.500",
                  location: "Surabaya",
                  rating: 5.0,
                  sold: 5000,
                  img: "bg-amber-800",
                },
                {
                  name: "Minyak Goreng Sania 2L Pouch",
                  price: "Rp34.500",
                  location: "Jakarta Barat",
                  rating: 4.9,
                  sold: 15000,
                  img: "bg-yellow-200",
                },
              ].map((item, idx) => (
                <ProductCard
                  key={idx}
                  name={item.name}
                  price={item.price}
                  originalPrice={item.original}
                  discount={item.discount}
                  image={item.img}
                  location={item.location}
                  isOfficialStore={item.isOfficial}
                  rating={item.rating}
                  soldCount={item.sold}
                />
              ))}
            </div>
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
