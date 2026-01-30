import React from "react";
import {
  Facebook,
  Instagram,
  Twitter,
  Youtube,
  Phone,
  Mail,
  MapPin,
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-white pt-12 border-t border-gray-200 mt-16 font-sans text-gray-600">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          {/* Section 1: Customer Care */}
          <div className="lg:col-span-1">
            <h3 className="text-gray-900 font-bold mb-4">Layanan Pelanggan</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="hover:text-[#0095DA]">
                  Bantuan
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#0095DA]">
                  Metode Pembayaran
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#0095DA]">
                  Lacak Pesanan
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#0095DA]">
                  Hubungi Kami
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#0095DA]">
                  Garansi Pengembalian
                </a>
              </li>
            </ul>
          </div>

          {/* Section 2: About Lumina */}
          <div className="lg:col-span-1">
            <h3 className="text-gray-900 font-bold mb-4">Jelajahi Lumina</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="hover:text-[#0095DA]">
                  Tentang Kami
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#0095DA]">
                  Karir
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#0095DA]">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#0095DA]">
                  Mitra Blog
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#0095DA]">
                  Toko Member
                </a>
              </li>
            </ul>
          </div>

          {/* Section 3: Contact */}
          <div className="lg:col-span-1">
            <h3 className="text-gray-900 font-bold mb-4">Hubungi Kami</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <MapPin size={18} className="shrink-0 text-[#0095DA]" />
                <span>Jl. Jenderal Sudirman No. 1, Jakarta Pusat</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail size={18} className="shrink-0 text-[#0095DA]" />
                <span>support@lumina.com</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone size={18} className="shrink-0 text-[#0095DA]" />
                <span>0800-1-LUMINA</span>
              </li>
            </ul>
          </div>

          {/* Section 4 & 5: Socials & Download */}
          <div className="lg:col-span-2">
            <h3 className="text-gray-900 font-bold mb-4">Ikuti Kami</h3>
            <div className="flex gap-4 mb-8">
              <a
                href="#"
                className="p-2 bg-gray-100 rounded-full hover:bg-blue-50 hover:text-[#0095DA] transition-colors"
              >
                <Facebook size={20} />
              </a>
              <a
                href="#"
                className="p-2 bg-gray-100 rounded-full hover:bg-pink-50 hover:text-pink-500 transition-colors"
              >
                <Instagram size={20} />
              </a>
              <a
                href="#"
                className="p-2 bg-gray-100 rounded-full hover:bg-blue-50 hover:text-blue-400 transition-colors"
              >
                <Twitter size={20} />
              </a>
              <a
                href="#"
                className="p-2 bg-gray-100 rounded-full hover:bg-red-50 hover:text-red-500 transition-colors"
              >
                <Youtube size={20} />
              </a>
            </div>

            <h3 className="text-gray-900 font-bold mb-4">
              Download Aplikasi Lumina
            </h3>
            <div className="flex gap-4">
              <div className="h-10 w-32 bg-gray-800 rounded-md flex items-center justify-center text-white text-xs font-bold cursor-pointer hover:bg-gray-700">
                Google Play
              </div>
              <div className="h-10 w-32 bg-gray-800 rounded-md flex items-center justify-center text-white text-xs font-bold cursor-pointer hover:bg-gray-700">
                App Store
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Payments & Copyright */}
        <div className="border-t border-gray-200 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex flex-wrap gap-4 items-center opacity-60 grayscale hover:grayscale-0 transition-all">
              {/* Placeholder for Payment Logos text-xs text-gray-400 */}
              <span className="font-bold text-lg text-blue-600">BCA</span>
              <span className="font-bold text-lg text-yellow-600">Mandiri</span>
              <span className="font-bold text-lg text-orange-600">BNI</span>
              <span className="font-bold text-lg text-red-600">Visa</span>
              <span className="font-bold text-lg text-blue-800">
                Mastercard
              </span>
            </div>
            <div className="text-sm text-gray-500">
              &copy; {new Date().getFullYear()} Lumina. All Rights Reserved.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
