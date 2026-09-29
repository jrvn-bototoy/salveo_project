import React, { useState, useEffect } from 'react';
import { ShoppingBag, CheckCircle, X } from 'lucide-react';
import { LIVE_BUYER_NOTIFICATIONS } from '../data/funnelData';
import { LiveBuyerAlert } from '../types';

export const LivePurchaseNotification: React.FC = () => {
  const [currentAlert, setCurrentAlert] = useState<LiveBuyerAlert | null>(null);
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [isDismissed, setIsDismissed] = useState<boolean>(false);

  useEffect(() => {
    if (isDismissed) return;

    let index = 0;
    const interval = setInterval(() => {
      setCurrentAlert(LIVE_BUYER_NOTIFICATIONS[index]);
      setIsVisible(true);

      const hideTimeout = setTimeout(() => {
        setIsVisible(false);
      }, 5000);

      index = (index + 1) % LIVE_BUYER_NOTIFICATIONS.length;

      return () => clearTimeout(hideTimeout);
    }, 12000);

    return () => clearInterval(interval);
  }, [isDismissed]);

  if (!currentAlert || isDismissed) return null;

  return (
    <div
      id="live-buyer-toast"
      className={`fixed bottom-20 left-4 z-40 max-w-xs sm:max-w-sm bg-stone-900/95 text-white p-3.5 rounded-2xl border border-stone-700 shadow-2xl backdrop-blur-md transition-all duration-300 transform ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0 pointer-events-none'
      }`}
    >
      <div className="flex items-start gap-3">
        <div className="w-10 h-10 rounded-xl bg-emerald-600/30 border border-emerald-500/50 flex items-center justify-center shrink-0 text-emerald-400">
          <ShoppingBag className="w-5 h-5" />
        </div>
        
        <div className="flex-1 min-w-0 pr-2">
          <div className="flex items-center gap-1">
            <span className="font-bold text-xs text-white truncate">{currentAlert.name}</span>
            <CheckCircle className="w-3 h-3 text-emerald-400 shrink-0" />
            <span className="text-[10px] text-stone-400">({currentAlert.location})</span>
          </div>
          <p className="text-[11px] text-emerald-300 font-semibold truncate mt-0.5">
            Nag-order ng {currentAlert.packageName}
          </p>
          <div className="flex items-center gap-2 mt-1">
            <span className="text-[9px] text-amber-400 font-bold bg-amber-400/20 px-1.5 py-0.2 rounded border border-amber-400/30">
              COD Verified
            </span>
            <span className="text-[10px] text-stone-400">{currentAlert.timeAgo}</span>
          </div>
        </div>

        <button
          onClick={() => setIsDismissed(true)}
          className="text-stone-400 hover:text-white p-1 rounded-md transition-colors"
          title="Close alert"
        >
          <X className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
};
