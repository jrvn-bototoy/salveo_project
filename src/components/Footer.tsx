import React from 'react';
import { ShieldCheck, MapPin, Building, Globe, Heart, Phone, Mail } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer id="main-footer" className="bg-stone-950 text-stone-400 text-xs pt-16 pb-24 border-t border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 pb-12 border-b border-stone-800">
          
          {/* Brand info */}
          <div className="space-y-3">
            <div className="flex items-center gap-2.5">
              <div className="w-10 h-10 rounded-xl bg-emerald-700 flex items-center justify-center text-white font-extrabold font-['Outfit']">
                SBG
              </div>
              <div>
                <h4 className="font-extrabold text-white text-base tracking-tight font-['Outfit']">
                  SALVEO BARLEY GRASS
                </h4>
                <p className="text-[11px] text-emerald-400 font-semibold">
                  Authorized Distributor • GreenHealth Wellness
                </p>
              </div>
            </div>
            <p className="text-stone-400 leading-relaxed text-[11px]">
              Top Organic Supplement sa Pilipinas at Asia. Pinagkakatiwalaan ng mahigit 100,000 Pilipino para sa natural na ginhawa sa panunaw at sikmura.
            </p>
          </div>

          {/* Headquarters & Official Website */}
          <div className="space-y-2">
            <h5 className="font-bold text-white uppercase tracking-wider text-[11px] font-['Outfit']">
              Headquarters & Official Portal
            </h5>
            <p className="text-[11px] flex items-start gap-2">
              <Building className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
              <span>Main Office: Pandan, Angeles City, Pampanga</span>
            </p>
            <p className="text-[11px] flex items-start gap-2">
              <Globe className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
              <span>Official Company Domain: <a href="https://salveowell.com" target="_blank" rel="noreferrer" className="text-emerald-400 hover:underline">salveowell.com</a></span>
            </p>
          </div>

          {/* Physical Branches */}
          <div className="space-y-2">
            <h5 className="font-bold text-white uppercase tracking-wider text-[11px] font-['Outfit']">
              Regional Stores & Hubs
            </h5>
            <ul className="space-y-1 text-[11px] text-stone-400">
              <li className="flex items-center gap-1.5"><MapPin className="w-3 h-3 text-emerald-500" /> Iloilo City Retail Hub</li>
              <li className="flex items-center gap-1.5"><MapPin className="w-3 h-3 text-emerald-500" /> Bacolod City Branch</li>
              <li className="flex items-center gap-1.5"><MapPin className="w-3 h-3 text-emerald-500" /> Silay City Partner Outlet</li>
              <li className="flex items-center gap-1.5"><MapPin className="w-3 h-3 text-emerald-500" /> Guimaras Distribution Point</li>
            </ul>
          </div>

          {/* Assurance & Support */}
          <div className="space-y-2">
            <h5 className="font-bold text-white uppercase tracking-wider text-[11px] font-['Outfit']">
              Customer Support & Delivery
            </h5>
            <p className="text-[11px] text-stone-400">
              May tanong bago mag-order? Magpadala ng mensahe o tumawag sa aming dispatch desk.
            </p>
            <div className="bg-stone-900 p-3 rounded-xl border border-stone-800 text-[11px] space-y-1 text-emerald-300">
              <p className="font-semibold text-white">Cash on Delivery (COD) Priority Line</p>
              <p>Lunes hanggang Sabado, 8:00 AM - 7:00 PM</p>
            </div>
          </div>

        </div>

        {/* Legal Disclaimer Box */}
        <div className="pt-8 text-center max-w-3xl mx-auto space-y-3">
          <p className="text-[11px] text-stone-500 leading-relaxed">
            <strong>Mahalagang Paunawa (Disclaimer):</strong> Ang Salveo Barley Grass ay isang 100% purong organic dietary food supplement. Hindi ito gamot at hindi dapat gamiting panggamot sa anumang uri ng sakit (No Approved Therapeutic Claims). Para sa mga buntis, nagpapasuso, o may malulubhang kondisyong medikal, kumonsulta sa doktor bago uminom ng anumang bagong food supplement.
          </p>

          <p className="text-[11px] text-stone-500">
            © {new Date().getFullYear()} Salveo Barley Grass Funnel — GreenHealth Wellness Authorized Fulfillment. Lahat ng karapatan ay reserbado.
          </p>
        </div>

      </div>
    </footer>
  );
};
