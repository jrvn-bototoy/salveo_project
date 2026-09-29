import React, { useState } from 'react';
import { Star, ShieldCheck, MapPin, CheckCircle, ThumbsUp, MessageSquare } from 'lucide-react';
import { REVIEWS_DATA } from '../data/funnelData';

export const ProofSection: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string>('all');

  const filteredReviews = activeFilter === 'all'
    ? REVIEWS_DATA
    : REVIEWS_DATA.filter(r => 
        activeFilter === 'gerd' ? r.condition.includes('GERD') || r.condition.includes('Acid')
        : activeFilter === 'ulcer' ? r.condition.includes('Ulcer')
        : activeFilter === 'bowel' ? r.condition.includes('Bowel') || r.condition.includes('Bloating')
        : true
      );

  return (
    <section id="proof-section" className="py-16 lg:py-24 bg-stone-100 text-stone-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="inline-flex items-center gap-1.5 bg-emerald-100 text-emerald-800 border border-emerald-200 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-4">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
            Verified Customer Experiences
          </span>

          <h2 className="text-3xl sm:text-4xl font-extrabold font-['Outfit'] text-stone-900 tracking-tight leading-tight">
            Tunay Na Karanasan Mula Sa Mga Pilipinong Nakaranas Ng Ginhawa
          </h2>

          <p className="text-stone-600 text-base sm:text-lg mt-3">
            Narito ang mga totoong patotoo mula sa mga verified buyers ng Salveo Barley Grass sa buong Pilipinas.
          </p>

          {/* Aggregate Rating Banner */}
          <div className="mt-6 inline-flex flex-wrap items-center justify-center gap-4 bg-white px-6 py-3 rounded-2xl border border-stone-200 shadow-xs">
            <div className="flex items-center gap-1">
              <span className="text-2xl font-black text-stone-900 font-['Outfit']">4.9</span>
              <div className="flex text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                ))}
              </div>
            </div>
            <div className="h-6 w-px bg-stone-200 hidden sm:block" />
            <div className="text-xs sm:text-sm text-stone-600">
              <strong className="text-emerald-700 font-bold">100,000+ Pinoy Families</strong> ang nagtitiwala sa Salveo Barley Grass
            </div>
          </div>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          <button
            onClick={() => setActiveFilter('all')}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
              activeFilter === 'all'
                ? 'bg-emerald-700 text-white shadow-sm'
                : 'bg-white text-stone-600 hover:bg-stone-50 border border-stone-200'
            }`}
          >
            Lahat ng Patotoo ({REVIEWS_DATA.length})
          </button>
          <button
            onClick={() => setActiveFilter('gerd')}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
              activeFilter === 'gerd'
                ? 'bg-emerald-700 text-white shadow-sm'
                : 'bg-white text-stone-600 hover:bg-stone-50 border border-stone-200'
            }`}
          >
            GERD & Acid Reflux
          </button>
          <button
            onClick={() => setActiveFilter('ulcer')}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
              activeFilter === 'ulcer'
                ? 'bg-emerald-700 text-white shadow-sm'
                : 'bg-white text-stone-600 hover:bg-stone-50 border border-stone-200'
            }`}
          >
            Sakit ng Tiyan & Ulcer
          </button>
          <button
            onClick={() => setActiveFilter('bowel')}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
              activeFilter === 'bowel'
                ? 'bg-emerald-700 text-white shadow-sm'
                : 'bg-white text-stone-600 hover:bg-stone-50 border border-stone-200'
            }`}
          >
            Bowel Movement & Bloating
          </button>
        </div>

        {/* Review Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredReviews.map((review) => (
            <div
              key={review.id}
              className="bg-white rounded-2xl p-6 border border-stone-200/90 shadow-xs hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div>
                {/* Rating and Condition Badge */}
                <div className="flex items-center justify-between gap-2 mb-3">
                  <div className="flex text-amber-400">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <span className="bg-emerald-50 text-emerald-800 text-[11px] font-bold px-2 py-0.5 rounded-md border border-emerald-200">
                    {review.timeframe}
                  </span>
                </div>

                {/* Quote */}
                <p className="text-stone-700 text-sm sm:text-base leading-relaxed italic mb-4 font-normal">
                  "{review.quote}"
                </p>
              </div>

              {/* Author and verification metadata */}
              <div className="pt-4 border-t border-stone-100 flex items-center gap-3">
                <div className={`w-10 h-10 rounded-full ${review.avatarBg} text-white font-bold flex items-center justify-center text-sm shrink-0 shadow-xs`}>
                  {review.author.charAt(0)}
                </div>
                <div className="min-w-0 flex-1">
                  <div className="flex items-center gap-1.5">
                    <h4 className="font-bold text-stone-900 text-xs sm:text-sm truncate">
                      {review.author}
                    </h4>
                    <CheckCircle className="w-3.5 h-3.5 text-emerald-600 shrink-0" title="Verified COD Buyer" />
                  </div>
                  <div className="flex items-center gap-1 text-xs text-stone-500">
                    <MapPin className="w-3 h-3 text-stone-400 shrink-0" />
                    <span className="truncate">{review.location}</span>
                  </div>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
