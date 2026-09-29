import React from 'react';
import { Check, Sparkles, ShoppingBag, ShieldCheck, ArrowRight, Star, Flame } from 'lucide-react';
import { OFFER_PACKAGES } from '../data/funnelData';
import { OfferPackage } from '../types';

interface OfferPackagesProps {
  selectedPackageId: string;
  onSelectPackage: (pkg: OfferPackage) => void;
}

export const OfferPackages: React.FC<OfferPackagesProps> = ({
  selectedPackageId,
  onSelectPackage,
}) => {
  return (
    <section id="packages-section" className="py-16 lg:py-24 bg-stone-50 text-stone-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="inline-flex items-center gap-1.5 bg-emerald-100 text-emerald-800 border border-emerald-200 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
            Official Discounted Pricing (COD Available)
          </span>

          <h2 className="text-3xl sm:text-4xl font-extrabold font-['Outfit'] text-stone-900 tracking-tight leading-tight">
            Piliin Ang Tamang Package Para Sa Kalusugan Ng Iyong Tiyan
          </h2>

          <p className="text-stone-600 text-base sm:text-lg mt-3">
            Lahat ng packages ay 100% Cash on Delivery — walang babayaran sa advance, bayaran mo na lang pag-dating ng rider.
          </p>
        </div>

        {/* 3 Tier Pricing Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch max-w-6xl mx-auto">
          {OFFER_PACKAGES.map((pkg) => {
            const isSelected = selectedPackageId === pkg.id;

            return (
              <div
                key={pkg.id}
                onClick={() => onSelectPackage(pkg)}
                className={`relative rounded-3xl p-6 sm:p-8 flex flex-col justify-between transition-all duration-200 cursor-pointer ${
                  pkg.isPopular
                    ? 'bg-gradient-to-b from-stone-900 to-stone-950 text-white shadow-2xl ring-3 ring-emerald-500 transform lg:-translate-y-2'
                    : isSelected
                    ? 'bg-white text-stone-900 shadow-xl ring-2 ring-emerald-600'
                    : 'bg-white text-stone-900 shadow-md hover:shadow-lg border border-stone-200'
                }`}
              >
                {/* Popular Badge */}
                {pkg.badge && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span
                      className={`text-xs font-extrabold px-4 py-1.5 rounded-full uppercase tracking-wider shadow-md flex items-center gap-1 ${
                        pkg.isPopular
                          ? 'bg-gradient-to-r from-amber-400 to-amber-500 text-stone-950 ring-2 ring-stone-900'
                          : 'bg-emerald-700 text-white'
                      }`}
                    >
                      {pkg.isPopular && <Flame className="w-3.5 h-3.5 fill-stone-950" />}
                      {pkg.badge}
                    </span>
                  </div>
                )}

                <div>
                  {/* Top Header info */}
                  <div className="text-center mt-2 mb-6">
                    <h3 className={`text-xl font-bold font-['Outfit'] ${pkg.isPopular ? 'text-white' : 'text-stone-900'}`}>
                      {pkg.name}
                    </h3>
                    <p className={`text-xs mt-1 ${pkg.isPopular ? 'text-emerald-300' : 'text-emerald-700 font-semibold'}`}>
                      {pkg.tagline}
                    </p>
                  </div>

                  {/* Servings & Weight highlights */}
                  <div className={`py-3 px-4 rounded-xl text-center mb-6 text-xs font-semibold ${
                    pkg.isPopular ? 'bg-stone-800/80 text-emerald-200 border border-stone-700' : 'bg-stone-100 text-stone-700'
                  }`}>
                    {pkg.weightGrams}g Pure Organic Powder • <span className="font-bold text-amber-500">{pkg.servingsCount} Servings</span>
                  </div>

                  {/* Pricing */}
                  <div className="text-center mb-6">
                    <div className="flex items-center justify-center gap-2">
                      <span className={`text-sm line-through ${pkg.isPopular ? 'text-stone-500' : 'text-stone-400'}`}>
                        ₱{pkg.originalPrice.toLocaleString()} SRP
                      </span>
                      <span className={`text-3xl sm:text-4xl font-black font-['Outfit'] ${
                        pkg.isPopular ? 'text-amber-400' : 'text-emerald-700'
                      }`}>
                        ₱{pkg.promoPrice.toLocaleString()}
                      </span>
                    </div>
                    <div className="mt-1.5">
                      <span className={`inline-block text-xs font-bold px-2.5 py-0.5 rounded-md ${
                        pkg.isPopular ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30' : 'bg-emerald-100 text-emerald-800'
                      }`}>
                        Makatipid ng ₱{pkg.savingsAmount.toLocaleString()}
                      </span>
                    </div>
                    <p className={`text-[11px] mt-2 ${pkg.isPopular ? 'text-stone-400' : 'text-stone-500'}`}>
                      ~₱{Math.round(pkg.promoPrice / pkg.servingsCount)} lang bawat baso
                    </p>
                  </div>

                  {/* Features List */}
                  <div className={`space-y-3 pt-6 border-t ${pkg.isPopular ? 'border-stone-800' : 'border-stone-100'}`}>
                    <p className={`text-xs font-bold uppercase tracking-wider ${pkg.isPopular ? 'text-stone-400' : 'text-stone-500'}`}>
                      Kasama sa Order Mo:
                    </p>
                    {pkg.features.map((feat, i) => (
                      <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm">
                        <Check className={`w-4 h-4 shrink-0 mt-0.5 ${pkg.isPopular ? 'text-emerald-400' : 'text-emerald-600'}`} />
                        <span className={pkg.isPopular ? 'text-stone-200' : 'text-stone-700'}>{feat}</span>
                      </div>
                    ))}

                    {pkg.freebies.map((freebie, i) => (
                      <div key={`free-${i}`} className="flex items-start gap-2.5 text-xs sm:text-sm font-medium">
                        <Sparkles className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                        <span className={pkg.isPopular ? 'text-amber-200' : 'text-emerald-800 font-semibold'}>{freebie}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Select Button */}
                <div className="mt-8">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      onSelectPackage(pkg);
                    }}
                    className={`w-full py-3.5 px-4 rounded-xl text-sm font-extrabold flex items-center justify-center gap-2 transition-all shadow-md cursor-pointer ${
                      pkg.isPopular
                        ? 'bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-400 hover:to-teal-400 text-white shadow-emerald-900/40'
                        : isSelected
                        ? 'bg-emerald-700 hover:bg-emerald-800 text-white'
                        : 'bg-stone-900 hover:bg-stone-800 text-white'
                    }`}
                  >
                    <ShoppingBag className="w-4 h-4" />
                    <span>{isSelected ? 'Pinili — Mag-Checkout Na' : `Piliin Ang ${pkg.name}`}</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                  <p className={`text-[11px] text-center mt-2 ${pkg.isPopular ? 'text-stone-400' : 'text-stone-500'}`}>
                    Cash on Delivery • Walang Risk
                  </p>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
