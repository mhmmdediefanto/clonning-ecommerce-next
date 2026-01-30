"use client";

import { useState } from "react";

const tabs = [
  { id: "description", label: "Deskripsi Produk" },
  { id: "specs", label: "Spesifikasi" },
  { id: "reviews", label: "Info Penting" },
];

export const ProductTabs = () => {
  const [activeTab, setActiveTab] = useState("description");

  return (
    <div className="mt-8 flex flex-col gap-6">
      <div className="flex border-b border-neutral-200 overflow-x-auto scrollbar-hide">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`whitespace-nowrap border-b-2 px-6 py-3 text-sm font-medium transition-colors ${
              activeTab === tab.id
                ? "border-neutral-900 text-neutral-900"
                : "border-transparent text-neutral-500 hover:text-neutral-700"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <div className="min-h-50 py-4 text-neutral-600 leading-relaxed">
        {activeTab === "description" && (
          <div className="space-y-4">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
            <p>
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
              cupidatat non proident, sunt in culpa qui officia deserunt mollit
              anim id est laborum.
            </p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Material berkualitas premium</li>
              <li>Desain ergonomis</li>
              <li>Tahan lama dan awet</li>
              <li>Garansi resmi 1 tahun</li>
            </ul>
          </div>
        )}
        {activeTab === "specs" && (
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <div className="grid grid-cols-2 gap-4 border-b border-neutral-100 py-2">
              <span className="text-neutral-500">Berat</span>
              <span className="font-medium">500 gram</span>
            </div>
            <div className="grid grid-cols-2 gap-4 border-b border-neutral-100 py-2">
              <span className="text-neutral-500">Dimensi</span>
              <span className="font-medium">20 x 10 x 5 cm</span>
            </div>
            <div className="grid grid-cols-2 gap-4 border-b border-neutral-100 py-2">
              <span className="text-neutral-500">Warna</span>
              <span className="font-medium">Hitam, Putih</span>
            </div>
          </div>
        )}
        {activeTab === "reviews" && (
          <div className="rounded-lg bg-yellow-50 p-4 text-sm text-yellow-800">
            <p className="font-bold mb-2">Kebijakan Pengembalian</p>
            <p>
              Barang yang sudah dibeli tidak dapat dikembalikan kecuali terdapat
              cacat produksi. Wajib menyertakan video unboxing untuk klaim
              garansi.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};
