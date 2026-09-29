import React from 'react';
import { ShoppingBag, ArrowRight, ShieldCheck, Flame } from 'lucide-react';
import { OfferPackage } from '../types';

interface StickyMobileCtaProps {
  selectedPackage: OfferPackage;
  onOrderClick: () => void;
}

export const StickyMobileCta: React.FC<StickyMobileCtaProps> = ({
  selectedPackage,
  onOrderClick,
}) => {
  return (
    <div id="sticky-mobile-cta" className="lg:hidden fixed bottom-0 left-0 right-0 z-40 bg-stone-950/95 backdrop-blur-md border-t border-stone-800 p-3 shadow-2xl">
      <div className="flex items-center justify-between gap-3 max-w-md mx-auto">
        <div className="flex flex-col">
          <div className="flex items-center gap-1">
            <span className="text-xs font-bold text-stone-300">
              {selectedPackage.name}
            </span>
            <span className="bg-emerald-950 text-emerald-400 text-[10px] font-bold px-1.5 py-0.2 rounded border border-emerald-800">
              COD
            </span>
          </div>
          <div className="flex items-baseline gap-2">
            <span className="text-lg font-black text-amber-400 font-['Outfit']">
              ₱{selectedPackage.promoPrice.toLocaleString()}
            </span>
            <span className="text-xs text-stone-500 line-through">
              ₱{selectedPackage.originalPrice.toLocaleString()}
            </span>
          </div>
        </div>

        <button
          onClick={onOrderClick}
          className="flex-1 bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-400 hover:to-teal-400 text-white font-extrabold py-3 px-4 rounded-xl text-xs sm:text-sm flex items-center justify-center gap-1.5 shadow-lg shadow-emerald-900/50 cursor-pointer"
        >
          <ShoppingBag className="w-4 h-4" />
          <span>ORDER COD NA</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};
