import React, { useState } from 'react';
import { HelpCircle, ChevronDown, ChevronUp, ShieldCheck, Clock, ShoppingBag, DollarSign } from 'lucide-react';
import { FAQ_ITEMS } from '../data/funnelData';

export const FaqSection: React.FC = () => {
  const [openFaqId, setOpenFaqId] = useState<string>('faq-1');

  const toggleFaq = (id: string) => {
    setOpenFaqId(prev => (prev === id ? '' : id));
  };

  const getCategoryIcon = (cat: string) => {
    switch (cat) {
      case 'trust':
        return <ShieldCheck className="w-4 h-4 text-emerald-600" />;
      case 'shipping':
        return <Clock className="w-4 h-4 text-blue-600" />;
      case 'price':
        return <DollarSign className="w-4 h-4 text-amber-600" />;
      default:
        return <ShoppingBag className="w-4 h-4 text-teal-600" />;
    }
  };

  return (
    <section id="faq-section" className="py-16 lg:py-24 bg-white text-stone-900 border-t border-stone-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="inline-flex items-center gap-1.5 bg-emerald-100 text-emerald-800 border border-emerald-200 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-4">
            <HelpCircle className="w-3.5 h-3.5 text-emerald-600" />
            Mga Madalas Itanong (FAQ)
          </span>

          <h2 className="text-3xl sm:text-4xl font-extrabold font-['Outfit'] text-stone-900 tracking-tight">
            May Mga Katanungan Ka Pa Ba Bago Mag-Order?
          </h2>

          <p className="text-stone-600 text-sm sm:text-base mt-2">
            Narito ang mga kasagutan sa mga katanungan ng mga unang beses sumubok ng Salveo Barley Grass.
          </p>
        </div>

        {/* Accordion list */}
        <div className="space-y-3.5">
          {FAQ_ITEMS.map((faq) => {
            const isOpen = openFaqId === faq.id;

            return (
              <div
                key={faq.id}
                className={`rounded-2xl border transition-all ${
                  isOpen
                    ? 'bg-stone-50 border-emerald-400 shadow-sm'
                    : 'bg-white border-stone-200 hover:border-stone-300'
                }`}
              >
                <button
                  onClick={() => toggleFaq(faq.id)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 cursor-pointer"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-stone-100 flex items-center justify-center shrink-0">
                      {getCategoryIcon(faq.category)}
                    </div>
                    <span className="text-sm sm:text-base font-bold text-stone-900 font-['Outfit']">
                      {faq.question}
                    </span>
                  </div>

                  <div className="w-7 h-7 rounded-full bg-stone-100 flex items-center justify-center text-stone-600 shrink-0">
                    {isOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-6 pt-1 text-xs sm:text-sm text-stone-600 leading-relaxed border-t border-stone-200/60 mt-1">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
