import React from 'react';
import { ShoppingBag, ArrowRight, ShieldCheck, Truck, Sparkles, HeartPulse } from 'lucide-react';

interface FinalCtaProps {
  onOrderClick: () => void;
}

export const FinalCta: React.FC<FinalCtaProps> = ({ onOrderClick }) => {
  return (
    <section id="final-cta-section" className="py-20 bg-gradient-to-br from-emerald-950 via-emerald-900 to-teal-950 text-white text-center relative overflow-hidden">
      {/* Glow */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[36rem] h-[36rem] bg-emerald-500/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="inline-flex items-center gap-1.5 bg-emerald-700/60 text-emerald-200 border border-emerald-500/40 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-6">
          <HeartPulse className="w-4 h-4 text-amber-300" />
          Simulan Ang Iyong Pagpapanumbalik Ng Kalusugan
        </div>

        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black font-['Outfit'] text-white tracking-tight leading-tight mb-6">
          Hindi Mo Na Kailangang Tiisin Ang Paulit-ulit Na Sakit Ng Tiyan.
        </h2>

        <p className="text-base sm:text-lg text-emerald-100 max-w-2xl mx-auto leading-relaxed mb-8">
          Libo-libong Pilipino na ang nakahanap ng ginhawa sa Salveo Barley Grass — <strong className="text-amber-300">panahon na para subukan mo rin ito nang walang anumang panganib sa pera mo.</strong>
        </p>

        {/* Big CTA */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={onOrderClick}
            id="bottom-order-button"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 text-stone-950 font-black text-base sm:text-lg px-8 py-4.5 rounded-2xl shadow-2xl shadow-amber-500/30 transform hover:-translate-y-1 transition-all cursor-pointer border border-amber-300/40 font-['Outfit']"
          >
            <span>ORDER NGAYON — BAYAD PAG-DATING, ₱975 LANG</span>
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>

        {/* Reassurance text */}
        <div className="mt-8 pt-6 border-t border-emerald-800/80 flex flex-wrap items-center justify-center gap-6 text-xs text-emerald-200/90">
          <span className="flex items-center gap-1.5">
            <Truck className="w-4 h-4 text-emerald-400" /> Cash on Delivery Nationwide
          </span>
          <span className="flex items-center gap-1.5">
            <ShieldCheck className="w-4 h-4 text-emerald-400" /> 100% Pure Organic Supplement
          </span>
          <span className="flex items-center gap-1.5">
            <Sparkles className="w-4 h-4 text-amber-300" /> Verified Authorized Distributor: GreenHealth Wellness
          </span>
        </div>

      </div>
    </section>
  );
};
