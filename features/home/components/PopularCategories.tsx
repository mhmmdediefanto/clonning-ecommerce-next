"use client";

import React, { useState } from "react";
import {
  CreditCard,
  Smartphone,
  Zap,
  Globe,
  MoreHorizontal,
  Wallet,
  Gamepad2,
  Ticket,
} from "lucide-react";

const PopularCategories = () => {
  const [activeTab, setActiveTab] = useState("pulsa");

  const tabs = [
    { id: "pulsa", label: "Pulsa" },
    { id: "paket", label: "Paket Data" },
    { id: "pln", label: "Listrik PLN" },
    { id: "roaming", label: "Roaming" },
  ];

  const categories = [
    {
      label: "Kategori",
      icon: <MoreHorizontal size={20} className="text-gray-500" />,
    },
    {
      label: "Handphone & Tablet",
      icon: <Smartphone size={20} className="text-green-500" />,
    },
    {
      label: "Top-Up & Tagihan",
      icon: <CreditCard size={20} className="text-blue-500" />,
    },
    {
      label: "Elektronik",
      icon: <Zap size={20} className="text-yellow-500" />,
    },
    {
      label: "Perawatan Hewan",
      icon: <Globe size={20} className="text-orange-500" />,
    },
    {
      label: "Keuangan",
      icon: <Wallet size={20} className="text-purple-500" />,
    },
    {
      label: "Komputer & Laptop",
      icon: <Gamepad2 size={20} className="text-red-500" />,
    },
    {
      label: "Travel & Tiket",
      icon: <Ticket size={20} className="text-teal-500" />,
    },
  ];

  return (
    <section className="bg-white rounded-xl shadow-sm border border-gray-200 p-4 font-sans">
      <div className="flex flex-col lg:flex-row gap-6 mb-6">
        {/* Left: Promo Banner (Green) */}
        <div className="flex-1 bg-green-500 rounded-lg p-6 text-white relative overflow-hidden flex flex-col justify-center min-h-50">
          <div className="relative z-10 max-w-[60%]">
            <h3 className="text-2xl font-bold mb-2">Yuk, belanja di Lumina</h3>
            <p className="mb-6 opacity-90">
              Barang lengkap dari beragam kategori
            </p>
            <button className="px-4 py-2 bg-white text-green-600 font-bold rounded-md hover:bg-gray-50 transition-colors text-sm">
              Cek Sekarang
            </button>
          </div>
          {/* Decorative Illustration Placeholder */}
          <div className="absolute right-0 bottom-0 w-32 h-32 md:w-48 md:h-48 bg-green-400 rounded-tl-full opacity-50 translate-x-10 translate-y-10"></div>
          <div className="absolute right-4 bottom-4 w-24 h-24 bg-yellow-300 rounded-full opacity-80 mix-blend-multiply blur-xl animate-pulse"></div>
        </div>

        {/* Right: Top Up & Tagihan Widget */}
        <div className="flex-1 border border-gray-200 rounded-lg p-0 overflow-hidden">
          {/* Widget Header */}
          <div className="flex justify-between items-center px-4 py-3 border-b border-gray-100 bg-gray-50/50">
            <h3 className="font-bold text-gray-800">Top Up & Tagihan</h3>
            <a
              href="#"
              className="text-[#0095DA] text-sm font-semibold hover:underline"
            >
              Lihat Semua
            </a>
          </div>

          {/* Tabs */}
          <div className="flex border-b border-gray-100">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-6 py-3 text-sm font-medium transition-colors relative ${
                  activeTab === tab.id
                    ? "text-[#0095DA]"
                    : "text-gray-500 hover:text-gray-700 bg-gray-50/30"
                }`}
              >
                {tab.label}
                {activeTab === tab.id && (
                  <div className="absolute bottom-0 left-0 w-full h-0.5 bg-[#0095DA]"></div>
                )}
              </button>
            ))}
            <button className="px-4 py-3 text-gray-400 hover:text-gray-600 ml-auto">
              <MoreHorizontal size={16} />
            </button>
          </div>

          {/* Tab Content (Form) */}
          <div className="p-4">
            <div className="flex flex-col sm:flex-row gap-4 items-end">
              <div className="flex-1 w-full space-y-1">
                <label className="text-xs font-semibold text-gray-500">
                  Nomor Telepon
                </label>
                <input
                  type="text"
                  placeholder="Masukan Nomor"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#0095DA] text-sm"
                />
              </div>
              <div className="flex-1 w-full space-y-1">
                <label className="text-xs font-semibold text-gray-500">
                  Nominal
                </label>
                <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#0095DA] text-sm bg-white">
                  <option>Pilih Nominal</option>
                  <option>10.000</option>
                  <option>20.000</option>
                  <option>50.000</option>
                  <option>100.000</option>
                </select>
              </div>
              <button className="px-6 py-2 bg-gray-200 text-gray-400 font-bold rounded-lg cursor-not-allowed text-sm h-9.5 min-w-20">
                Beli
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Category Pills */}
      <div className="flex flex-wrap gap-2 lg:gap-3">
        <div className="font-bold text-lg mr-2 self-center hidden lg:block">
          Kategori Populer
        </div>
        {categories.map((cat, idx) => (
          <button
            key={idx}
            className="flex items-center gap-2 px-4 py-2 border border-gray-200 rounded-full hover:border-[#0095DA] hover:bg-blue-50 transition-all text-sm font-medium text-gray-600 group"
          >
            <span className="group-hover:scale-110 transition-transform">
              {cat.icon}
            </span>
            <span>{cat.label}</span>
          </button>
        ))}
      </div>
    </section>
  );
};

export default PopularCategories;
