import React, { useState } from 'react';
import { ShieldCheck, Award, MapPin, Building2, Globe, Truck, CheckCircle2, HelpCircle, Eye } from 'lucide-react';
import { PHYSICAL_STORES } from '../data/funnelData';

export const TrustSection: React.FC = () => {
  const [showAllStores, setShowAllStores] = useState(false);

  return (
    <section id="trust-section" className="py-16 lg:py-24 bg-white text-stone-900 border-t border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="inline-flex items-center gap-1.5 bg-amber-100 text-amber-900 border border-amber-200 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-4">
            <HelpCircle className="w-3.5 h-3.5 text-amber-700" />
            #1 Objection Answered: Anti-Counterfeit
          </span>

          <h2 className="text-3xl sm:text-4xl font-extrabold font-['Outfit'] text-stone-900 tracking-tight leading-tight">
            "Paano Ko Malalaman Na Hindi Ito Peke?"
          </h2>

          <p className="text-stone-600 text-base sm:text-lg mt-3 leading-relaxed">
            Kami po ay verified at authorized distributor ng <strong className="text-emerald-800 font-bold">Salveo Barley Grass</strong> sa ilalim ng <strong className="text-emerald-800 font-bold">GreenHealth Wellness</strong>. Hindi po kami basta online reseller lang na walang pinanggagalingan.
          </p>
        </div>

        {/* 5 Core Trust Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-14">
          
          {/* Pillar 1 */}
          <div className="bg-stone-50 p-6 rounded-2xl border border-stone-200 hover:border-emerald-300 transition-all">
            <div className="w-12 h-12 rounded-xl bg-amber-100 text-amber-800 flex items-center justify-center mb-4">
              <Award className="w-6 h-6" />
            </div>
            <h3 className="text-base font-bold text-stone-900 font-['Outfit'] mb-2">
              11 Years Na Sa Industriya
            </h3>
            <p className="text-sm text-stone-600 leading-relaxed">
              Award-winning bilang <strong>Top Organic Supplement sa Pilipinas at Asia</strong> na may daan-daang libong loyal at satisfied users nationwide.
            </p>
          </div>

          {/* Pillar 2 */}
          <div className="bg-stone-50 p-6 rounded-2xl border border-stone-200 hover:border-emerald-300 transition-all">
            <div className="w-12 h-12 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center mb-4">
              <Building2 className="w-6 h-6" />
            </div>
            <h3 className="text-base font-bold text-stone-900 font-['Outfit'] mb-2">
              May Mga Physical Stores
            </h3>
            <p className="text-sm text-stone-600 leading-relaxed">
              May aktibong walk-in branches at distribution centers sa Iloilo City, Bacolod City, Guimaras, at Silay City — <strong>hindi kami nagtatago</strong>.
            </p>
          </div>

          {/* Pillar 3 */}
          <div className="bg-stone-50 p-6 rounded-2xl border border-stone-200 hover:border-emerald-300 transition-all">
            <div className="w-12 h-12 rounded-xl bg-teal-100 text-teal-800 flex items-center justify-center mb-4">
              <Globe className="w-6 h-6" />
            </div>
            <h3 className="text-base font-bold text-stone-900 font-['Outfit'] mb-2">
              Official Company Integrity
            </h3>
            <p className="text-sm text-stone-600 leading-relaxed">
              Official company site: <strong>salveowell.com</strong> na may main corporate headquarters sa Pandan, Angeles City, Pampanga.
            </p>
          </div>

          {/* Pillar 4 */}
          <div className="bg-stone-50 p-6 rounded-2xl border border-stone-200 hover:border-emerald-300 transition-all">
            <div className="w-12 h-12 rounded-xl bg-blue-100 text-blue-800 flex items-center justify-center mb-4">
              <Truck className="w-6 h-6" />
            </div>
            <h3 className="text-base font-bold text-stone-900 font-['Outfit'] mb-2">
              100% Cash On Delivery (COD)
            </h3>
            <p className="text-sm text-stone-600 leading-relaxed">
              Hindi ka mananakot na mawawalan ng pera bago pa dumating ang order mo. Magbabayad ka lang kapag hawak mo na ang package.
            </p>
          </div>

          {/* Pillar 5 */}
          <div className="bg-stone-50 p-6 rounded-2xl border border-stone-200 hover:border-emerald-300 transition-all">
            <div className="w-12 h-12 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center mb-4">
              <Eye className="w-6 h-6" />
            </div>
            <h3 className="text-base font-bold text-stone-900 font-['Outfit'] mb-2">
              Original Sealed Packaging
            </h3>
            <p className="text-sm text-stone-600 leading-relaxed">
              Bawat canister ay may intact safety seal, official measuring scoop sa loob, at batch expiration code para sa kaligtasan mo.
            </p>
          </div>

          {/* Pillar 6 */}
          <div className="bg-stone-50 p-6 rounded-2xl border border-stone-200 hover:border-emerald-300 transition-all">
            <div className="w-12 h-12 rounded-xl bg-stone-200 text-stone-800 flex items-center justify-center mb-4">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <h3 className="text-base font-bold text-stone-900 font-['Outfit'] mb-2">
              48-Hour Damaged Replacement
            </h3>
            <p className="text-sm text-stone-600 leading-relaxed">
              Kung nagkaroon man ng pinsala habang dinadala ng courier, papalitan agad namin ng libre nang walang dagdag na bayad.
            </p>
          </div>

        </div>

        {/* Physical Store Directory Accordion / Display */}
        <div className="bg-stone-900 text-white rounded-3xl p-6 sm:p-10 border border-stone-800">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-6 border-b border-stone-800">
            <div>
              <div className="flex items-center gap-2">
                <Building2 className="w-5 h-5 text-emerald-400" />
                <h3 className="text-xl font-bold font-['Outfit']">
                  Mga Physical Store at Authorized Centers
                </h3>
              </div>
              <p className="text-xs sm:text-sm text-stone-400 mt-1">
                Bukas para sa walk-in inquiry at provincial direct fulfillment
              </p>
            </div>

            <button
              onClick={() => setShowAllStores(!showAllStores)}
              className="text-xs font-semibold text-emerald-400 hover:text-emerald-300 underline cursor-pointer"
            >
              {showAllStores ? 'Itago ang ibang lokasyon' : 'Ipakita lahat ng 5 branch'}
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
            {(showAllStores ? PHYSICAL_STORES : PHYSICAL_STORES.slice(0, 3)).map((store, i) => (
              <div key={i} className="bg-stone-950/80 p-4 rounded-2xl border border-stone-800">
                <div className="flex items-center justify-between gap-2 mb-2">
                  <span className="text-xs font-bold text-emerald-300 flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-emerald-400" />
                    {store.city}
                  </span>
                  <span className="text-[10px] bg-emerald-950 text-emerald-400 border border-emerald-800 px-2 py-0.5 rounded-full font-medium">
                    Verified
                  </span>
                </div>
                <h4 className="text-sm font-semibold text-white mb-1">
                  {store.address}
                </h4>
                <p className="text-xs text-stone-400">{store.province}</p>
                <div className="mt-3 pt-2 border-t border-stone-800/80 text-[11px] text-stone-500 flex items-center gap-1">
                  <CheckCircle2 className="w-3 h-3 text-emerald-500" />
                  <span>{store.type}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
