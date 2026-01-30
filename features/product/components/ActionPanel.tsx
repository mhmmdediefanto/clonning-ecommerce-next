"use client";

import { useState } from "react";
import { Minus, Plus, ShoppingCart, ShoppingBag } from "lucide-react";

interface ActionPanelProps {
  price: number;
}

export const ActionPanel = ({ price }: ActionPanelProps) => {
  const [quantity, setQuantity] = useState(1);

  const handleDecrease = () => {
    if (quantity > 1) setQuantity(quantity - 1);
  };

  const handleIncrease = () => {
    setQuantity(quantity + 1);
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 border-t border-neutral-200 bg-white p-4 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)] md:relative md:z-auto md:border-t-0 md:bg-transparent md:p-0 md:shadow-none">
      <div className="mx-auto flex max-w-7xl flex-col gap-4">
        {/* Quantity Selector - Hidden on Mobile sticky view to save space, shown above on desktop */}
        <div className="hidden items-center gap-3 md:flex">
          <span className="text-sm font-medium text-neutral-600">
            Atur Jumlah:
          </span>
          <div className="flex items-center rounded-lg border border-neutral-200 bg-white">
            <button
              onClick={handleDecrease}
              className="p-2 text-neutral-600 hover:bg-neutral-50 hover:text-neutral-900"
              disabled={quantity <= 1}
            >
              <Minus className="h-4 w-4" />
            </button>
            <input
              type="number"
              value={quantity}
              onChange={(e) =>
                setQuantity(Math.max(1, parseInt(e.target.value) || 1))
              }
              className="w-12 border-none bg-transparent text-center text-sm font-medium focus:ring-0"
            />
            <button
              onClick={handleIncrease}
              className="p-2 text-neutral-600 hover:bg-neutral-50 hover:text-neutral-900"
            >
              <Plus className="h-4 w-4" />
            </button>
          </div>
          <span className="text-sm text-neutral-500">
            Stok: <span className="text-neutral-900">145</span>
          </span>
        </div>

        {/* Subtotal - Desktop Only */}
        <div className="hidden items-center justify-between py-2 md:flex">
          <span className="text-neutral-500">Subtotal</span>
          <span className="text-xl font-bold text-neutral-900">
            Rp {(price * quantity).toLocaleString("id-ID")}
          </span>
        </div>

        {/* Action Buttons */}
        <div className="grid grid-cols-2 gap-3 md:grid-cols-1 md:gap-4">
          <button className="flex items-center justify-center gap-2 rounded-xl border border-neutral-900 bg-transparent py-3 text-sm font-bold text-neutral-900 transition-all hover:bg-neutral-50 active:scale-95 md:w-full md:py-3.5">
            <ShoppingCart className="h-4 w-4" />
            <span className="md:inline">Keranjang</span>
          </button>
          <button className="flex items-center justify-center gap-2 rounded-xl bg-neutral-900 py-3 text-sm font-bold text-white shadow-lg shadow-neutral-500/20 transition-all hover:bg-neutral-800 active:scale-95 md:w-full md:py-3.5">
            <ShoppingBag className="h-4 w-4" />
            Beli Langsung
          </button>
        </div>
      </div>
    </div>
  );
};
