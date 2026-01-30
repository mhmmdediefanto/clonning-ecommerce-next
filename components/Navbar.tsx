import React from "react";
import { Search, ShoppingCart, Menu } from "lucide-react";
import Sidebar from "./Sidebar";
import Link from "next/link";

const Navbar = () => {
  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm border-b border-gray-100 font-sans">
      {/* Top Bar */}
      {/* Top Bar */}
      <div className="bg-gray-50">
        <div className="max-w-7xl mx-auto hidden md:flex justify-between items-center px-4 lg:px-8 py-1 text-xs text-gray-500">
          <div className="flex space-x-4">
            <a href="#" className="hover:text-[#0095DA]">
              Download Aplikasi Lumina
            </a>
            <a href="#" className="hover:text-[#0095DA]">
              Bantuan 24/7
            </a>
          </div>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-[#0095DA]">
              Jual di Lumina
            </a>
            <a href="#" className="hover:text-[#0095DA]">
              Lumina Rewards
            </a>
            <a href="#" className="hover:text-[#0095DA]">
              Cek Daftar Pesanan
            </a>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="bg-white">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-4 lg:px-8 py-3 gap-4">
          {/* Logo */}
          <div className="flex items-center">
            <Link
              href="/"
              className="text-2xl font-bold text-[#0095DA] tracking-tight"
            >
              Lumina<span className="text-[#F9941E]">.</span>
            </Link>
          </div>

          {/* Categories (Desktop) with Mega Menu Hover */}
          <div className="hidden lg:flex items-center text-gray-500 hover:text-[#0095DA] cursor-pointer gap-1 group relative">
            <div className="p-1 bg-gray-100 rounded group-hover:bg-blue-50">
              <Menu size={18} />
            </div>
            <span className="font-medium text-sm">Kategori</span>

            {/* Mega Menu Dropdown */}
            <div className="absolute top-8 left-0 pt-4 cursor-default">
              <Sidebar />
            </div>
          </div>

          {/* Search Bar */}
          <div className="flex-1 max-w-2xl relative">
            <div className="relative group">
              <input
                type="text"
                placeholder="Cari produk, brand, atau apa saja..."
                className="w-full py-2.5 pl-4 pr-12 text-sm text-gray-700 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:border-[#0095DA] focus:ring-1 focus:ring-[#0095DA]/20 transition-all placeholder:text-gray-400"
              />
              <button className="absolute right-1.5 top-1.5 p-1.5 bg-[#0095DA] text-white rounded-md hover:bg-[#0084c0] transition-colors">
                <Search size={18} />
              </button>
            </div>
          </div>

          {/* Actions */}
          <div className="flex items-center gap-1 sm:gap-3 text-gray-600">
            {/* Mobile Search Trigger */}
            <button className="lg:hidden p-2 hover:bg-gray-100 rounded-full">
              <Search size={22} />
            </button>

            <div className="h-8 w-px bg-gray-200 mx-1 hidden sm:block"></div>

            <button className="p-2 hover:bg-gray-100 rounded-full relative group">
              <ShoppingCart size={22} />
              <span className="absolute top-1 right-1 h-2 w-2 bg-[#F9941E] rounded-full ring-1 ring-white"></span>
              <span className="sr-only">Keranjang</span>
            </button>

            <div className="hidden sm:flex items-center gap-2">
              <button className="px-4 py-2 text-sm font-bold text-[#0095DA] border border-[#0095DA] rounded-lg hover:bg-blue-50 transition-colors">
                Masuk
              </button>
              <button className="px-4 py-2 text-sm font-bold text-white bg-[#0095DA] rounded-lg hover:bg-[#0084c0] shadow-[0_2px_8px_rgba(0,149,218,0.25)] transition-all">
                Daftar
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Sub-nav */}
      <div className="flex lg:hidden overflow-x-auto px-4 py-2 gap-3 text-xs whitespace-nowrap scrollbar-hide border-t border-gray-100">
        <span className="px-3 py-1 bg-red-50 text-red-600 rounded-full font-medium">
          Banting Harga
        </span>
        <span className="px-3 py-1 bg-green-50 text-green-600 rounded-full font-medium">
          Official Store
        </span>
        <span className="px-3 py-1 bg-blue-50 text-blue-600 rounded-full font-medium">
          Gadget
        </span>
        <span className="px-3 py-1 bg-yellow-50 text-yellow-700 rounded-full font-medium">
          Fashion
        </span>
      </div>
    </header>
  );
};

export default Navbar;
