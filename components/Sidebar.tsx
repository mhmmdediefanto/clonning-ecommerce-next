import React from "react";
import {
  Smartphone,
  Monitor,
  Shirt,
  Home,
  Zap,
  Gift,
  CreditCard,
  MoreHorizontal,
  ChevronRight,
} from "lucide-react";

const Sidebar = () => {
  // Data for the mega menu
  const categories = [
    {
      name: "HP & Tablet",
      icon: <Smartphone size={18} />,
      subcategories: [
        "iPhone",
        "Samsung",
        "Xiaomi",
        "Oppo",
        "Vivo",
        "Realme",
        "Tablet Android",
        "iPad",
      ],
    },
    {
      name: "Komputer & Laptop",
      icon: <Monitor size={18} />,
      subcategories: [
        "Laptop Gaming",
        "MacBook",
        "Laptop Windows",
        "PC Rakitan",
        "Monitor",
        "Aksesoris Komputer",
        "Printer",
      ],
    },
    {
      name: "Fashion Pria",
      icon: <Shirt size={18} />,
      subcategories: [
        "Kaos",
        "Kemeja",
        "Celana Jeans",
        "Sepatu Sneakers",
        "Jam Tangan Pria",
        "Tas Pria",
      ],
    },
    {
      name: "Fashion Wanita",
      icon: <Gift size={18} />,
      subcategories: [
        "Dress",
        "Blouse",
        "Rok",
        "Sepatu Heels",
        "Tas Wanita",
        "Perhiasan",
      ],
    },
    {
      name: "Peralatan Elektronik",
      icon: <Zap size={18} />,
      subcategories: [
        "Kulkas",
        "Mesin Cuci",
        "AC",
        "TV",
        "Kipas Angin",
        "Setrika",
      ],
    },
    {
      name: "Home & Living",
      icon: <Home size={18} />,
      subcategories: [
        "Furniture",
        "Dekorasi",
        "Alat Masak",
        "Bedcover",
        "Lampu",
      ],
    },
    {
      name: "Tiket & Voucher",
      icon: <CreditCard size={18} />,
      subcategories: [
        "Pulsa",
        "Paket Data",
        "Listrik PLN",
        "Tiket Pesawat",
        "Voucher Game",
      ],
    },
    {
      name: "Lihat Semua",
      icon: <MoreHorizontal size={18} />,
      subcategories: [],
    },
  ];

  return (
    <div className="absolute top-full left-0 mt-2 w-full min-w-200 h-125 bg-white rounded-lg shadow-xl border border-gray-200 z-50 flex overflow-hidden opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 ease-in-out">
      {/* Left Column: Main Categories */}
      <div className="w-64 bg-gray-50 border-r border-gray-100 shrink-0 py-2 overflow-y-auto custom-scrollbar">
        {categories.map((cat, idx) => (
          <div
            key={idx}
            className="group/item flex items-center justify-between px-4 py-3 text-sm text-gray-600 hover:text-[#0095DA] hover:bg-white cursor-pointer transition-colors"
          >
            <div className="flex items-center gap-3">
              <span className="text-gray-400 group-hover/item:text-[#0095DA]">
                {cat.icon}
              </span>
              <span className="font-medium text-gray-700 group-hover/item:text-[#0095DA]">
                {cat.name}
              </span>
            </div>
            {cat.subcategories.length > 0 && (
              <ChevronRight
                size={14}
                className="text-gray-300 group-hover/item:text-[#0095DA]"
              />
            )}
            <div className="hidden group-hover/item:block absolute left-64 top-0 right-0 bottom-0 bg-white p-6 overflow-y-auto">
              <h3 className="text-[#0095DA] font-bold text-lg mb-4 flex items-center gap-2">
                {cat.icon} {cat.name}
              </h3>
              <div className="grid grid-cols-3 gap-y-2 gap-x-8">
                {cat.subcategories.map((sub, sIdx) => (
                  <a
                    key={sIdx}
                    href="#"
                    className="text-sm text-gray-600 hover:text-[#0095DA] hover:underline block py-1"
                  >
                    {sub}
                  </a>
                ))}
                <div className="col-span-3 mt-4 p-4 bg-gray-50 rounded-lg flex items-center justify-between">
                  <div>
                    <p className="font-bold text-gray-800">
                      Promo Spesial {cat.name}
                    </p>
                    <p className="text-xs text-gray-500">
                      Diskon hingga 50% untuk produk pilihan
                    </p>
                  </div>
                  <button className="text-xs bg-[#0095DA] text-white px-3 py-1.5 rounded">
                    Lihat Promo
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="flex-1 p-6 bg-white pointer-events-none">
        <div className="h-full w-full flex flex-col items-center justify-center text-gray-400 opacity-50">
          <span className="mb-2">Silakan pilih kategori</span>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
