import React, { useState, useEffect } from 'react';
import { Truck, ShieldCheck, Clock, Flame } from 'lucide-react';

export const AnnouncementBar: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState<{ minutes: number; seconds: number }>({ minutes: 14, seconds: 48 });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { minutes: prev.minutes - 1, seconds: 59 };
        } else {
          return { minutes: 15, seconds: 0 };
        }
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatNumber = (num: number) => (num < 10 ? `0${num}` : num);

  return (
    <div id="announcement-bar" className="bg-gradient-to-r from-emerald-900 via-emerald-800 to-teal-900 text-white text-xs sm:text-sm font-medium py-2.5 px-4 shadow-sm border-b border-emerald-700/50">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2 text-center sm:text-left">
        <div className="flex items-center gap-2 flex-wrap justify-center">
          <span className="inline-flex items-center gap-1 bg-amber-400/20 text-amber-300 px-2.5 py-0.5 rounded-full text-xs font-bold uppercase tracking-wider border border-amber-400/40">
            <Flame className="w-3.5 h-3.5 text-amber-400 fill-amber-400 animate-pulse" />
            COD Nationwide Available
          </span>
          <span className="text-emerald-100 flex items-center gap-1.5">
            <Truck className="w-4 h-4 text-emerald-300 shrink-0" />
            <span className="font-['Barlow_Condensed',sans-serif] font-black italic tracking-wide text-sm uppercase">
              Bayad Pag-Dating • 100% Authentic Guaranteed • Walang Advance Payment
            </span>
          </span>
        </div>

        <div className="flex items-center gap-3 text-xs">
          <div className="flex items-center gap-1.5 bg-emerald-950/60 px-3 py-1 rounded-md border border-emerald-700/60 text-emerald-200">
            <Clock className="w-3.5 h-3.5 text-amber-400" />
            <span>Today's Batch Dispatch Reservation:</span>
            <span className="font-mono font-bold text-amber-300 bg-emerald-900/80 px-1.5 py-0.5 rounded">
              {formatNumber(timeLeft.minutes)}:{formatNumber(timeLeft.seconds)}
            </span>
          </div>
          <div className="hidden md:flex items-center gap-1 text-emerald-200">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
            <span>11 Years Trusted</span>
          </div>
        </div>
      </div>
    </div>
  );
};
