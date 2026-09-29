import React, { useState } from 'react';
import { X, Sparkles, CheckCircle2, ArrowRight, ShieldCheck, HeartPulse, DollarSign, Droplet } from 'lucide-react';
import { OFFER_PACKAGES } from '../data/funnelData';
import { OfferPackage } from '../types';

interface InteractiveQuizModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectRecommended: (pkg: OfferPackage) => void;
}

export const InteractiveQuizModal: React.FC<InteractiveQuizModalProps> = ({
  isOpen,
  onClose,
  onSelectRecommended,
}) => {
  const [step, setStep] = useState<number>(1);
  const [symptom, setSymptom] = useState<string>('gerd');
  const [duration, setDuration] = useState<string>('months');
  const [weeklyMedsSpend, setWeeklyMedsSpend] = useState<number>(350);

  if (!isOpen) return null;

  const monthlyMedsCost = weeklyMedsSpend * 4;
  const recommendedPackage = symptom === 'ulcer' || duration === 'years' 
    ? OFFER_PACKAGES[1] // Duo Pack
    : OFFER_PACKAGES[0]; // Trial Pack

  const monthlySalveoCost = Math.round(recommendedPackage.promoPrice / (recommendedPackage.canistersCount === 2 ? 2 : 1));
  const estimatedSavings = Math.max(0, monthlyMedsCost - monthlySalveoCost);

  const handleApply = () => {
    onSelectRecommended(recommendedPackage);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-stone-950/80 backdrop-blur-sm overflow-y-auto">
      <div className="bg-stone-900 border border-stone-800 text-white rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl relative">
        
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-stone-400 hover:text-white p-2 rounded-full hover:bg-stone-800 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="flex items-center gap-2 text-emerald-400 text-xs font-bold uppercase tracking-wider mb-2">
          <Sparkles className="w-4 h-4 text-amber-400" />
          <span>Symptom & Dosage Calculator</span>
        </div>

        <h3 className="text-xl sm:text-2xl font-bold font-['Outfit'] mb-2 text-white">
          Alamin Ang Tamang Paraan Ng Pag-inom at Matitipid Mo
        </h3>

        <p className="text-xs sm:text-sm text-stone-400 mb-6">
          Sagutin ang 3 mabilis na tanong upang makita ang pinaka-angkop na daily routine para sa iyong tiyan.
        </p>

        {/* Step 1 */}
        {step === 1 && (
          <div className="space-y-4">
            <label className="block text-sm font-bold text-stone-200">
              1. Anong pinaka-madalas mong nararamdaman sa tiyan?
            </label>
            <div className="space-y-2">
              {[
                { id: 'gerd', label: 'Acid Reflux / GERD / Hapdi sa dibdib at lalamunan' },
                { id: 'ulcer', label: 'Sakit ng tiyan pagkagising o pagkatapos kumain (Ulcer)' },
                { id: 'bloating', label: 'Laging bloated, kabagin, at hirap sa panunaw' },
                { id: 'bowel', label: 'Irregular na pagdumi / Constipation / Mabigat na tiyan' },
              ].map((opt) => (
                <button
                  key={opt.id}
                  onClick={() => setSymptom(opt.id)}
                  className={`w-full text-left p-3.5 rounded-xl text-xs sm:text-sm font-medium transition-all flex items-center justify-between border cursor-pointer ${
                    symptom === opt.id
                      ? 'bg-emerald-950/80 border-emerald-500 text-white shadow-sm'
                      : 'bg-stone-950 border-stone-800 text-stone-300 hover:border-stone-700'
                  }`}
                >
                  <span>{opt.label}</span>
                  {symptom === opt.id && <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />}
                </button>
              ))}
            </div>

            <button
              onClick={() => setStep(2)}
              className="w-full mt-4 bg-emerald-600 hover:bg-emerald-500 text-white font-bold py-3 px-4 rounded-xl text-sm transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>Susunod na Tanong</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        )}

        {/* Step 2 */}
        {step === 2 && (
          <div className="space-y-4">
            <label className="block text-sm font-bold text-stone-200">
              2. Gaano mo na katagal nararanasan ang discomfort na ito?
            </label>
            <div className="space-y-2">
              {[
                { id: 'weeks', label: 'Ilang linggo pa lang (Kamakailan lang)' },
                { id: 'months', label: 'Ilang buwan na (Paulit-ulit na bumabalik)' },
                { id: 'years', label: 'Matagal na / Mahigit 1 taon na (Chronic maintenance)' },
              ].map((opt) => (
                <button
                  key={opt.id}
                  onClick={() => setDuration(opt.id)}
                  className={`w-full text-left p-3.5 rounded-xl text-xs sm:text-sm font-medium transition-all flex items-center justify-between border cursor-pointer ${
                    duration === opt.id
                      ? 'bg-emerald-950/80 border-emerald-500 text-white shadow-sm'
                      : 'bg-stone-950 border-stone-800 text-stone-300 hover:border-stone-700'
                  }`}
                >
                  <span>{opt.label}</span>
                  {duration === opt.id && <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />}
                </button>
              ))}
            </div>

            <div className="flex gap-2 mt-4">
              <button
                onClick={() => setStep(1)}
                className="w-1/3 bg-stone-800 hover:bg-stone-700 text-stone-300 font-semibold py-3 px-4 rounded-xl text-sm transition-all cursor-pointer"
              >
                Bumalik
              </button>
              <button
                onClick={() => setStep(3)}
                className="w-2/3 bg-emerald-600 hover:bg-emerald-500 text-white font-bold py-3 px-4 rounded-xl text-sm transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Susunod</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}

        {/* Step 3 */}
        {step === 3 && (
          <div className="space-y-4">
            <label className="block text-sm font-bold text-stone-200">
              3. Magkano ang nagagastos mo kada linggo sa antacids o gamot sa tiyan?
            </label>
            <div className="bg-stone-950 p-4 rounded-2xl border border-stone-800 space-y-3">
              <div className="flex justify-between text-sm">
                <span className="text-stone-400">Weekly Spend sa Gamot:</span>
                <span className="text-amber-400 font-bold font-['Outfit']">₱{weeklyMedsSpend} / linggo</span>
              </div>
              <input
                type="range"
                min="100"
                max="1200"
                step="50"
                value={weeklyMedsSpend}
                onChange={(e) => setWeeklyMedsSpend(Number(e.target.value))}
                className="w-full accent-emerald-500"
              />
              <div className="flex justify-between text-[10px] text-stone-500">
                <span>₱100 / linggo</span>
                <span>₱600 / linggo</span>
                <span>₱1,200 / linggo</span>
              </div>
            </div>

            <div className="flex gap-2 mt-4">
              <button
                onClick={() => setStep(2)}
                className="w-1/3 bg-stone-800 hover:bg-stone-700 text-stone-300 font-semibold py-3 px-4 rounded-xl text-sm transition-all cursor-pointer"
              >
                Bumalik
              </button>
              <button
                onClick={() => setStep(4)}
                className="w-2/3 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white font-extrabold py-3 px-4 rounded-xl text-sm transition-all flex items-center justify-center gap-2 cursor-pointer shadow-md"
              >
                <span>Tingnan Ang Resulta</span>
                <Sparkles className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}

        {/* Step 4: Assessment Results */}
        {step === 4 && (
          <div className="space-y-4">
            {/* Recommendation summary */}
            <div className="bg-gradient-to-b from-emerald-950 to-stone-950 p-5 rounded-2xl border border-emerald-700/60 text-center">
              <span className="text-[11px] font-bold uppercase tracking-wider text-amber-400 bg-amber-400/20 px-3 py-1 rounded-full border border-amber-400/30">
                Rekomendadong Daily Routine
              </span>
              <h4 className="text-lg font-bold text-white mt-3 font-['Outfit']">
                2 Scoops sa 1 Basong Tubig Tuwing Umaga
              </h4>
              <p className="text-xs text-emerald-200 mt-1">
                Inumin 30 minutes bago mag-almusal para natural na mabalot at ma-soothe ang sikmura.
              </p>
            </div>

            {/* Cost Comparison */}
            <div className="grid grid-cols-2 gap-3 text-xs">
              <div className="bg-stone-950 p-3.5 rounded-xl border border-stone-800 text-center">
                <span className="text-stone-400 block mb-1">Gastos sa Gamot / Buwan:</span>
                <span className="text-base font-black text-rose-400 font-['Outfit']">
                  ₱{monthlyMedsCost.toLocaleString()}
                </span>
                <span className="text-[10px] text-stone-500 block mt-0.5">(Paulit-ulit na gastos)</span>
              </div>

              <div className="bg-emerald-950/60 p-3.5 rounded-xl border border-emerald-700/60 text-center">
                <span className="text-emerald-300 block mb-1">Salveo Organic / Buwan:</span>
                <span className="text-base font-black text-amber-400 font-['Outfit']">
                  ₱{monthlySalveoCost.toLocaleString()}
                </span>
                <span className="text-[10px] text-emerald-400 block mt-0.5">
                  {estimatedSavings > 0 ? `Tipid ka ng ~₱${estimatedSavings.toLocaleString()}` : 'Natural & Organic'}
                </span>
              </div>
            </div>

            {/* Recommended Pack */}
            <div className="p-4 bg-stone-950 rounded-2xl border border-stone-800 flex items-center justify-between">
              <div>
                <span className="text-[10px] font-bold text-emerald-400 uppercase">Perpektong Package:</span>
                <h5 className="text-sm font-bold text-white font-['Outfit']">{recommendedPackage.name}</h5>
                <p className="text-xs text-stone-400">₱{recommendedPackage.promoPrice.toLocaleString()} (Bayad Pag-Dating)</p>
              </div>

              <button
                onClick={handleApply}
                className="bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs px-4 py-2.5 rounded-xl transition-all shadow-md cursor-pointer"
              >
                Piliin Ito
              </button>
            </div>

            <button
              onClick={() => {
                handleApply();
                const formEl = document.getElementById('order-section');
                if (formEl) formEl.scrollIntoView({ behavior: 'smooth' });
              }}
              className="w-full bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 text-stone-950 font-black py-3.5 px-4 rounded-xl text-sm transition-all flex items-center justify-center gap-2 cursor-pointer shadow-lg font-['Outfit']"
            >
              <span>MAG-ORDER VIA COD (₱{recommendedPackage.promoPrice.toLocaleString()})</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        )}

      </div>
    </div>
  );
};
