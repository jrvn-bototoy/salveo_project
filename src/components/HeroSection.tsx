import React from 'react';
import { ShieldCheck, Truck, Sparkles, CheckCircle2, Star, ArrowRight, Award, Leaf, Zap, HeartPulse } from 'lucide-react';
import { HEADLINE_VARIATIONS } from '../data/funnelData';

interface HeroSectionProps {
  currentHeadlineIndex: number;
  onSelectHeadline: (index: number) => void;
  onOrderClick: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  currentHeadlineIndex,
  onSelectHeadline,
  onOrderClick,
}) => {
  const currentHeadline = HEADLINE_VARIATIONS[currentHeadlineIndex];

  return (
    <section id="hero-section" className="relative overflow-hidden bg-gradient-to-b from-emerald-950 via-stone-900 to-stone-950 text-white pt-10 pb-16 lg:py-20">
      {/* Background ambient lighting */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-emerald-500/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-1/4 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Headline Split-Testing Selector for Funnel Marketer / Visitor */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 mb-8 pb-4 border-b border-stone-800/80">
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-1 bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 text-xs font-semibold px-3 py-1 rounded-full">
              <Award className="w-3.5 h-3.5 text-emerald-400" />
              Top Organic Supplement sa Pilipinas at Asia
            </span>
          </div>

          <div className="flex items-center gap-1.5 text-xs text-stone-400 bg-stone-900/90 px-3 py-1.5 rounded-xl border border-stone-800">
            <span className="text-stone-400 hidden sm:inline font-medium">A/B Copy Angle:</span>
            <div className="flex items-center gap-1">
              {HEADLINE_VARIATIONS.map((h, idx) => (
                <button
                  key={h.id}
                  onClick={() => onSelectHeadline(idx)}
                  className={`px-2.5 py-1 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                    currentHeadlineIndex === idx
                      ? 'bg-emerald-600 text-white shadow-sm'
                      : 'bg-stone-800 text-stone-300 hover:bg-stone-700'
                  }`}
                  title={h.label}
                >
                  Angle #{idx + 1}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column: Direct Response Copy & CTA */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            
            {/* Social Trust Star Rating */}
            <div className="inline-flex items-center gap-2 bg-stone-900/80 border border-emerald-600/30 px-3.5 py-1.5 rounded-full mb-4">
              <div className="flex text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <span className="text-xs font-bold text-emerald-200">
                4.9/5 Rating (100,000+ Pinoy Users)
              </span>
            </div>

            {/* Dynamic Tested Headline */}
            <h1 className="text-[32px] leading-[65.2px] font-extrabold text-white font-['Syne',sans-serif] tracking-tight mb-5">
              {currentHeadline.headline}
            </h1>

            {/* Subheadline from Google Doc */}
            <p className="text-base sm:text-lg text-stone-300 font-normal leading-relaxed mb-6 border-l-3 border-emerald-500 pl-4 py-1">
              {currentHeadline.subheadline}
            </p>

            {/* Value bullets */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 w-full mb-8 text-xs sm:text-sm text-stone-200">
              <div className="flex items-center gap-2 bg-stone-900/60 p-2.5 rounded-xl border border-stone-800">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Ginhawa sa Ulcer, Acid Reflux & GERD</span>
              </div>
              <div className="flex items-center gap-2 bg-stone-900/60 p-2.5 rounded-xl border border-stone-800">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>100% Pure Organic • Walang Overdose</span>
              </div>
              <div className="flex items-center gap-2 bg-stone-900/60 p-2.5 rounded-xl border border-stone-800">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>80g Canister = 40 Malulusog na Servings</span>
              </div>
              <div className="flex items-center gap-2 bg-stone-900/60 p-2.5 rounded-xl border border-stone-800">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Bayad Pag-Dating (COD) Kahit Saan sa Pinas</span>
              </div>
            </div>

            {/* Big Primary Action Button */}
            <div className="w-full sm:w-auto flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <button
                id="hero-order-button"
                onClick={onOrderClick}
                className="group relative inline-flex items-center justify-center gap-3 bg-gradient-to-r from-emerald-500 via-emerald-600 to-teal-600 hover:from-emerald-400 hover:to-teal-500 text-white text-base sm:text-lg font-extrabold px-8 py-4.5 rounded-2xl shadow-xl shadow-emerald-900/40 hover:shadow-2xl hover:shadow-emerald-600/30 transform hover:-translate-y-1 transition-all duration-200 cursor-pointer border border-emerald-400/30"
              >
                <span className="tracking-wide uppercase font-['Outfit']">ORDER NGAYON — BAYAD PAG-DATING</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>

              <div className="flex flex-col text-xs text-stone-400">
                <span className="font-bold text-emerald-400 flex items-center gap-1">
                  <ShieldCheck className="w-4 h-4" /> 100% Zero-Risk COD
                </span>
                <span>Hawakan muna ang item bago magbayad</span>
              </div>
            </div>

            {/* Micro-guarantee strip */}
            <div className="flex items-center gap-6 mt-6 pt-4 border-t border-stone-800/80 text-xs text-stone-400 flex-wrap">
              <div className="flex items-center gap-1.5">
                <Truck className="w-4 h-4 text-emerald-400" />
                <span>Mabilis na Delivery (3-7 Araw)</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Leaf className="w-4 h-4 text-emerald-400" />
                <span>Puro at Organikong Barley Grass</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Zap className="w-4 h-4 text-amber-400" />
                <span>Official SRP Promo: ₱975 Lang</span>
              </div>
            </div>

          </div>

          {/* Right Column: Premium High-Conversion Visual Mockup */}
          <div className="lg:col-span-5 relative flex justify-center">
            
            {/* Visual Glass Container */}
            <div className="w-full max-w-md bg-gradient-to-b from-stone-800/90 to-stone-900/90 p-6 rounded-3xl border border-stone-700/60 shadow-2xl backdrop-blur-xl relative">
              
              {/* Top Badge Overlay */}
              <div className="flex items-center justify-between gap-2 mb-4 pb-3 border-b border-stone-700">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-emerald-500 animate-ping" />
                  <span className="text-xs font-bold uppercase tracking-wider text-emerald-400">
                    Official Trial Pack (80g)
                  </span>
                </div>
                <div className="bg-amber-400/20 text-amber-300 text-xs font-extrabold px-2.5 py-1 rounded-md border border-amber-400/40">
                  SAVE ₱225 TODAY
                </div>
              </div>

              {/* Graphical Product Showcase */}
              <div className="relative my-4 flex flex-col items-center justify-center py-6 bg-radial from-emerald-900/50 via-stone-900 to-stone-900/80 rounded-2xl border border-emerald-800/30 overflow-hidden">
                
                {/* Visual Canister representation */}
                <div className="relative z-10 flex flex-col items-center">
                  <div className="w-40 h-52 bg-gradient-to-b from-emerald-700 via-emerald-800 to-stone-900 rounded-3xl border-4 border-emerald-400/60 shadow-2xl flex flex-col items-center justify-between p-3 text-center relative overflow-hidden ring-4 ring-emerald-500/20">
                    
                    {/* Canister Lid */}
                    <div className="w-32 h-6 bg-gradient-to-r from-emerald-500 via-emerald-400 to-emerald-600 rounded-t-lg shadow-md border-b-2 border-emerald-900" />
                    
                    {/* Brand & Details on Jar */}
                    <div className="my-auto">
                      <div className="inline-block bg-white text-emerald-950 text-[10px] font-black uppercase px-2 py-0.5 rounded tracking-widest mb-1 shadow-xs">
                        SALVEO
                      </div>
                      <h4 className="text-sm font-black text-amber-300 tracking-tight font-['Outfit']">
                        BARLEY GRASS
                      </h4>
                      <p className="text-[9px] text-emerald-100 font-semibold tracking-wide">
                        100% PURE ORGANIC
                      </p>
                      
                      <div className="mt-2 bg-emerald-950/80 px-2 py-1 rounded border border-emerald-600/40 text-[9px] text-emerald-300 font-mono">
                        Net Wt. 80g • 40 Servings
                      </div>
                    </div>

                    {/* Quality Stamp */}
                    <div className="w-full bg-emerald-900/90 py-1 text-[8px] font-bold text-amber-200 rounded tracking-wider border-t border-emerald-600/40">
                      PREMIUM DIGESTIVE FORMULA
                    </div>
                  </div>

                  {/* Free Scoop Badge */}
                  <div className="mt-3 flex items-center gap-1.5 bg-stone-950/90 px-3 py-1 rounded-full border border-emerald-500/40 text-xs text-emerald-300 font-medium shadow-md">
                    <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                    <span>May Libreng Measuring Scoop sa Loob</span>
                  </div>
                </div>

                {/* Floating Benefit Pills */}
                <div className="absolute top-4 left-3 bg-emerald-900/90 text-emerald-100 text-[10px] font-bold px-2.5 py-1 rounded-lg border border-emerald-500/40 backdrop-blur-xs flex items-center gap-1 shadow-lg">
                  <HeartPulse className="w-3 h-3 text-emerald-400" />
                  <span>Soothes Ulcer & GERD</span>
                </div>

                <div className="absolute bottom-6 right-3 bg-teal-900/90 text-teal-100 text-[10px] font-bold px-2.5 py-1 rounded-lg border border-teal-500/40 backdrop-blur-xs flex items-center gap-1 shadow-lg">
                  <Leaf className="w-3 h-3 text-teal-300" />
                  <span>Rich Chlorophyll & Fiber</span>
                </div>
              </div>

              {/* Pricing Box */}
              <div className="bg-stone-950 p-4 rounded-2xl border border-stone-800 text-center">
                <div className="flex items-center justify-center gap-3">
                  <span className="text-stone-500 line-through text-lg font-medium">₱1,200 SRP</span>
                  <span className="text-3xl font-black text-amber-400 font-['Outfit']">₱975</span>
                  <span className="bg-emerald-500/20 text-emerald-300 text-xs font-bold px-2 py-0.5 rounded border border-emerald-500/30">
                    Save ₱225
                  </span>
                </div>
                <p className="text-xs text-stone-400 mt-1">
                  1 Canister (40 servings) = <span className="text-emerald-300 font-semibold">₱24 bawat baso lang</span>
                </p>
              </div>

              {/* Quick Checkout Trigger */}
              <button
                onClick={onOrderClick}
                className="w-full mt-4 bg-emerald-600 hover:bg-emerald-500 text-white font-bold py-3 px-4 rounded-xl text-sm transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Piliin Ang Trial Pack (COD)</span>
                <ArrowRight className="w-4 h-4" />
              </button>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
