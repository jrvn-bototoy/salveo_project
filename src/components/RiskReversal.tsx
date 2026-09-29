import React from 'react';
import { ShieldCheck, RefreshCw, Truck, HeartHandshake, CheckCircle } from 'lucide-react';

export const RiskReversal: React.FC = () => {
  return (
    <section id="guarantee-section" className="py-16 lg:py-20 bg-stone-100 text-stone-900 border-t border-stone-200">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-stone-200/90 shadow-md">
          
          <div className="flex flex-col md:flex-row items-center gap-8">
            
            {/* Guarantee Shield Emblem */}
            <div className="w-28 h-28 sm:w-32 sm:h-32 rounded-3xl bg-gradient-to-br from-emerald-600 to-teal-700 text-white flex flex-col items-center justify-center p-4 text-center shrink-0 shadow-lg shadow-emerald-700/20 ring-4 ring-emerald-100">
              <ShieldCheck className="w-10 h-10 mb-1" />
              <span className="font-extrabold text-xs uppercase tracking-wider font-['Outfit']">
                100% Zero Risk
              </span>
              <span className="text-[9px] text-emerald-100 font-semibold">
                COD GUARANTEE
              </span>
            </div>

            {/* Copy from Google Doc */}
            <div className="flex-1 text-left">
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200 mb-2 inline-block">
                Customer Protection Policy
              </span>

              <h3 className="text-2xl sm:text-3xl font-extrabold font-['Outfit'] text-stone-900 mb-3">
                Hawakan Muna Bago Bayaran — Walang Panganib Sa Pera Mo
              </h3>

              <p className="text-stone-600 text-sm sm:text-base leading-relaxed mb-4">
                Kasama sa desisyon mo ang <strong>Cash On Delivery (COD)</strong> — hindi ka magbabayad hangga't hindi mo pa nakikita at nahahawakan ang produkto sa sarili mong mga kamay. Ito mismo ang pinakamalaking proteksyon mo bilang bagong customer.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-3 border-t border-stone-100 text-xs sm:text-sm text-stone-700">
                <div className="flex items-start gap-2">
                  <RefreshCw className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong>48-Hour Free Replacement:</strong> Kung may nasira sa byahe, papalitan agad ng libre nang walang extra shipping charge.</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong>7-Day Return Policy:</strong> Kung gusto mo i-return ang unopen at unused na canister, may 7 days ka mula pagtanggap.</span>
                </div>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
