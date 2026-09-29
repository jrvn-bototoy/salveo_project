import React, { useState } from 'react';
import { Leaf, Droplet, Sparkles, ShieldCheck, HeartPulse, Check, Info, Clock, RefreshCw } from 'lucide-react';

export const MechanismSection: React.FC = () => {
  const [selectedScoops, setSelectedScoops] = useState<number>(2);

  return (
    <section id="mechanism-section" className="py-16 lg:py-24 bg-white text-stone-900 border-y border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-flex items-center gap-1.5 bg-emerald-100 text-emerald-800 border border-emerald-200 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-4">
            <Leaf className="w-3.5 h-3.5 text-emerald-600" />
            Bakit Mabisa at Paano Gumagana
          </span>

          <h2 className="text-3xl sm:text-4xl font-extrabold font-['Outfit'] text-stone-900 tracking-tight leading-tight">
            Purong Organic Barley Grass Powder: Natural na Ginhawa Para Sa Tiyan Mo
          </h2>

          <p className="text-stone-600 text-base sm:text-lg mt-4 leading-relaxed">
            Ang Salveo Barley Grass ay mayaman sa fiber, natural na live enzymes, at antioxidants na natural na tumutulong mag-balanse ng acid at sumuporta sa malusog na digestion.
          </p>
        </div>

        {/* 3 Core Mechanism Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          
          {/* Card 1 */}
          <div className="bg-stone-50 border border-stone-200/80 rounded-2xl p-6 relative overflow-hidden group hover:border-emerald-300 hover:shadow-md transition-all">
            <div className="w-12 h-12 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center mb-4">
              <HeartPulse className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-stone-900 font-['Outfit'] mb-2">
              Natural Living Enzymes
            </h3>
            <p className="text-sm text-stone-600 leading-relaxed">
              Tumutulong sa mabilis na pagtunaw ng pagkain upang hindi mabulok o bumuo ng labis na gas at asido sa sikmura na nagdudulot ng hapdi.
            </p>
            <div className="mt-4 pt-3 border-t border-stone-200 flex items-center gap-1 text-xs font-semibold text-emerald-700">
              <Check className="w-3.5 h-3.5" />
              <span>Soothes stomach lining</span>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-stone-50 border border-stone-200/80 rounded-2xl p-6 relative overflow-hidden group hover:border-emerald-300 hover:shadow-md transition-all">
            <div className="w-12 h-12 rounded-xl bg-teal-100 text-teal-700 flex items-center justify-center mb-4">
              <Leaf className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-stone-900 font-['Outfit'] mb-2">
              Rich Dietary Fiber & Chlorophyll
            </h3>
            <p className="text-sm text-stone-600 leading-relaxed">
              Sumusuporta sa regular at maayos na bowel movement sa loob lang ng ilang araw. Nililinis ang digestive tract mula sa toxins.
            </p>
            <div className="mt-4 pt-3 border-t border-stone-200 flex items-center gap-1 text-xs font-semibold text-teal-700">
              <Check className="w-3.5 h-3.5" />
              <span>Regular na pagdumi araw-araw</span>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-stone-50 border border-stone-200/80 rounded-2xl p-6 relative overflow-hidden group hover:border-emerald-300 hover:shadow-md transition-all">
            <div className="w-12 h-12 rounded-xl bg-amber-100 text-amber-800 flex items-center justify-center mb-4">
              <Sparkles className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-stone-900 font-['Outfit'] mb-2">
              Alkaline Superfood Balance
            </h3>
            <p className="text-sm text-stone-600 leading-relaxed">
              Tumutulong i-neutralize ang hyperacidity ng katawan sanhi ng stress, irregular na pagkain, kape, at matatabang pagkain.
            </p>
            <div className="mt-4 pt-3 border-t border-stone-200 flex items-center gap-1 text-xs font-semibold text-amber-800">
              <Check className="w-3.5 h-3.5" />
              <span>Proteksyon laban sa acid reflux</span>
            </div>
          </div>

        </div>

        {/* How to Use / Daily Routine Guide */}
        <div className="bg-emerald-950 text-white rounded-3xl p-8 sm:p-12 border border-emerald-800/60 shadow-xl">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8 pb-8 border-b border-emerald-800">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-400 flex items-center gap-1 mb-2">
                <Clock className="w-4 h-4" />
                Napakadaling Inumin Araw-araw
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold font-['Outfit']">
                Paano Gamitin Ang Salveo Barley Grass
              </h3>
              <p className="text-emerald-200 text-sm sm:text-base mt-1">
                3 Simpleng Hakbang Para Sa Ginhawa ng Sikmura
              </p>
            </div>

            {/* Interactive Scoop Tester */}
            <div className="bg-emerald-900/80 p-3 rounded-2xl border border-emerald-700/60 flex items-center gap-3">
              <span className="text-xs text-emerald-200 font-semibold pl-2">Scoops per glass:</span>
              <div className="flex gap-1.5">
                {[1, 2, 3, 4].map(num => (
                  <button
                    key={num}
                    onClick={() => setSelectedScoops(num)}
                    className={`w-9 h-9 rounded-xl font-bold text-xs transition-all cursor-pointer ${
                      selectedScoops === num
                        ? 'bg-amber-400 text-emerald-950 shadow-md scale-105'
                        : 'bg-emerald-800 text-emerald-100 hover:bg-emerald-700'
                    }`}
                  >
                    {num}x
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* 3 Step Visual Breakdown */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
            
            {/* Step 1 */}
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-2xl bg-emerald-800/80 border border-emerald-600 flex items-center justify-center text-2xl font-black text-amber-300 font-['Outfit'] mb-4 shadow-md">
                1
              </div>
              <h4 className="text-base font-bold text-white mb-2">
                Ihanda ang Tubig
              </h4>
              <p className="text-xs sm:text-sm text-emerald-200/90 leading-relaxed">
                Kumuha ng 1 baso (200ml) ng malamig o room-temperature na tubig. <strong className="text-amber-300 font-semibold">(Huwag mainit na tubig)</strong> upang mapanatili ang live active enzymes.
              </p>
            </div>

            {/* Step 2 */}
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-2xl bg-emerald-800/80 border border-emerald-600 flex items-center justify-center text-2xl font-black text-amber-300 font-['Outfit'] mb-4 shadow-md">
                2
              </div>
              <h4 className="text-base font-bold text-white mb-2">
                I-mix ang {selectedScoops} Scoops
              </h4>
              <p className="text-xs sm:text-sm text-emerald-200/90 leading-relaxed">
                Gamitin ang libreng scoop sa canister. Ihalo ang {selectedScoops} scoops sa tubig at haluing mabuti o i-shake gamit ang shaker bottle hanggang matunaw.
              </p>
            </div>

            {/* Step 3 */}
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-2xl bg-emerald-800/80 border border-emerald-600 flex items-center justify-center text-2xl font-black text-amber-300 font-['Outfit'] mb-4 shadow-md">
                3
              </div>
              <h4 className="text-base font-bold text-white mb-2">
                Inumin 1-3x Araw-araw
              </h4>
              <p className="text-xs sm:text-sm text-emerald-200/90 leading-relaxed">
                Pinakamainam inumin <strong>30 minutes bago kumain</strong> (sa umaga) o <strong>2 oras pagkatapos kumain</strong>. Walang overdose risk ang purong barley grass!
              </p>
            </div>

          </div>

          {/* Mandatory Compliance Note */}
          <div className="mt-10 bg-emerald-900/60 p-4 rounded-2xl border border-emerald-700/60 flex items-start gap-3 text-xs text-emerald-200">
            <Info className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
            <div>
              <strong className="text-white font-semibold">Tandaan:</strong> Hindi ito gamot. Ito ay purong food supplement na dinisenyo para suportahan ang katawan mo sa natural na paraan, kaya naman marami sa mga umiinom nito ang nag-uulat ng pagiging magaan ng tiyan at regular na bowel movement sa loob lang ng ilang araw.
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
