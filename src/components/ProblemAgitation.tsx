import React from 'react';
import { AlertCircle, Flame, Moon, UtensilsCrossed, Frown, Sparkles, CheckCircle2, ArrowDown } from 'lucide-react';

interface ProblemAgitationProps {
  onLearnMechanism: () => void;
}

export const ProblemAgitation: React.FC<ProblemAgitationProps> = ({ onLearnMechanism }) => {
  const painPoints = [
    {
      icon: Flame,
      title: 'Hapdi Pagkagising & Pagkatapos Kumain',
      desc: 'Yung pakiramdam na parang may apoy sa dibdib at sikmura mo na hindi mo maintindihan kahit konti lang ang kinain mo.',
    },
    {
      icon: UtensilsCrossed,
      title: 'Takot Kang Kumain ng Masasarap',
      desc: 'Iniiwasan mo ang mga handaan, kainan kasama ang pamilya o mga kaibigan dahil sa takot na bigla na lang aatake ang sakit ng tiyan.',
    },
    {
      icon: Moon,
      title: 'Hindi Makatulog sa Gabi sa Sobrang Hapdi',
      desc: 'Minsan nauuwi pa sa pagkasuka o pagbalik ng asido (acid reflux) sa lalamunan kaya laging puyat at pagod kinabukasan.',
    },
    {
      icon: Frown,
      title: 'Paulit-ulit na Gamot na Walang Katapusan',
      desc: 'Umiinom ka ng gamot o antacid, gumagaan saglit pero kinabukasan nandoon na naman ang sakit. Nakakapagod at magastos.',
    },
  ];

  return (
    <section id="problem-section" className="py-16 lg:py-24 bg-stone-100 text-stone-900 relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="inline-flex items-center gap-1.5 bg-rose-100 text-rose-800 border border-rose-200 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-4">
            <AlertCircle className="w-3.5 h-3.5 text-rose-600" />
            Alam Namin Kung Ano Ang Pakiramdam
          </span>
          
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold font-['Outfit'] text-stone-900 tracking-tight leading-snug">
            "Kumakain ka, tapos bigla na lang sumasakit ang tiyan mo... Umiinom ka ng gamot pero paulit-ulit lang."
          </h2>
          
          <p className="text-stone-600 text-base sm:text-lg mt-4 leading-relaxed">
            Nakakapagod na. Lalo na kung parte na ito ng araw-araw mong buhay — kinakailangan mong mag-ingat sa lahat ng kakainin mo at minsan naiiritable ka na sa sobrang discomfort.
          </p>
        </div>

        {/* Pain Points Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-12">
          {painPoints.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="bg-white p-6 rounded-2xl border border-stone-200 shadow-xs hover:shadow-md transition-shadow flex gap-4 items-start"
              >
                <div className="w-12 h-12 rounded-xl bg-rose-50 border border-rose-200 flex items-center justify-center shrink-0 text-rose-600">
                  <Icon className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-stone-900 font-['Outfit'] mb-1.5">
                    {item.title}
                  </h3>
                  <p className="text-sm text-stone-600 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Empathy & Hope Pivot Box */}
        <div className="bg-gradient-to-br from-emerald-900 via-emerald-800 to-teal-900 text-white rounded-3xl p-8 sm:p-10 shadow-xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/20 rounded-full blur-2xl pointer-events-none" />
          
          <div className="relative z-10 max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-1.5 bg-emerald-700/80 text-emerald-200 px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-4 border border-emerald-500/30">
              <Sparkles className="w-3.5 h-3.5 text-amber-300" />
              May Pag-asa at Natural Na Solusyon
            </div>

            <h3 className="text-2xl sm:text-3xl font-extrabold font-['Outfit'] text-white mb-4">
              Hindi Ka Nag-Iisa Dito.
            </h3>

            <p className="text-emerald-100 text-base sm:text-lg leading-relaxed mb-6 font-normal">
              Libo-libong Pilipino ang parehong dinadaanan mo ngayon, at marami sa kanila ang nakahanap ng totoong ginhawa sa isang <span className="text-amber-300 font-bold underline decoration-amber-400">simpleng bagay na dinadagdag na lang nila sa tubig tuwing umaga</span>.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4 text-xs sm:text-sm font-semibold text-emerald-200">
              <span className="flex items-center gap-1.5 bg-emerald-950/60 px-3.5 py-1.5 rounded-xl border border-emerald-700/60">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                Walang Mapait na Gamot
              </span>
              <span className="flex items-center gap-1.5 bg-emerald-950/60 px-3.5 py-1.5 rounded-xl border border-emerald-700/60">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                100% Pure Organic Superfood
              </span>
              <span className="flex items-center gap-1.5 bg-emerald-950/60 px-3.5 py-1.5 rounded-xl border border-emerald-700/60">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                Alkaline & Gut Soothing
              </span>
            </div>

            <div className="mt-8">
              <button
                onClick={onLearnMechanism}
                className="inline-flex items-center gap-2 bg-amber-400 hover:bg-amber-300 text-stone-950 font-bold px-6 py-3 rounded-xl text-sm transition-all shadow-md cursor-pointer"
              >
                <span>Tuklasin Kung Bakit Mabisa Ito</span>
                <ArrowDown className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
