import React from 'react';
import { ShieldCheck, PhoneCall, ShoppingBag, Sparkles, LayoutDashboard } from 'lucide-react';

interface NavbarProps {
  onOpenQuiz: () => void;
  onOpenAdmin: () => void;
  ordersCount: number;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenQuiz, onOpenAdmin, ordersCount }) => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header id="main-navbar" className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-stone-200 shadow-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        
        {/* Brand identity */}
        <div className="flex items-center gap-3 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-600 to-teal-700 flex items-center justify-center text-white shadow-md shadow-emerald-700/20 ring-2 ring-emerald-500/20">
            <span className="font-extrabold text-xl font-['Outfit'] tracking-tight">SBG</span>
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-extrabold text-lg sm:text-xl text-stone-900 tracking-tight font-['Outfit']">
                SALVEO BARLEY GRASS
              </span>
              <span className="hidden sm:inline-flex items-center gap-1 bg-emerald-100 text-emerald-800 text-[11px] font-bold px-2 py-0.5 rounded-full">
                <ShieldCheck className="w-3 h-3 text-emerald-600" />
                Authorized
              </span>
            </div>
            <p className="text-xs text-stone-500 font-medium">
              Official Distributor <span className="text-emerald-700 font-semibold">• GreenHealth Wellness</span>
            </p>
          </div>
        </div>

        {/* Desktop Quick Nav Links */}
        <nav className="hidden lg:flex items-center gap-6 text-sm font-semibold text-stone-600">
          <button onClick={() => scrollToSection('problem-section')} className="hover:text-emerald-700 transition-colors">
            Sakit ng Tiyan?
          </button>
          <button onClick={() => scrollToSection('mechanism-section')} className="hover:text-emerald-700 transition-colors">
            Paano Gumagana
          </button>
          <button onClick={() => scrollToSection('proof-section')} className="hover:text-emerald-700 transition-colors">
            Mga Patotoo (Reviews)
          </button>
          <button onClick={() => scrollToSection('trust-section')} className="hover:text-emerald-700 transition-colors">
            Tunay vs Peke
          </button>
          <button onClick={() => scrollToSection('faq-section')} className="hover:text-emerald-700 transition-colors">
            FAQ
          </button>
        </nav>

        {/* Action Buttons */}
        <div className="flex items-center gap-2.5">
          <button
            id="nav-quiz-button"
            onClick={onOpenQuiz}
            className="hidden sm:flex items-center gap-1.5 px-3 py-2 rounded-lg text-xs font-bold text-emerald-800 bg-emerald-50 hover:bg-emerald-100 border border-emerald-200/80 transition-all cursor-pointer"
            title="Alamin ang tamang dosage at cost savings mo"
          >
            <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
            <span>Dosage Calculator</span>
          </button>

          <button
            id="nav-admin-button"
            onClick={onOpenAdmin}
            className="flex items-center gap-1.5 px-2.5 py-2 rounded-lg text-xs font-semibold text-stone-600 bg-stone-100 hover:bg-stone-200 border border-stone-200 transition-all cursor-pointer relative"
            title="Merchant & Leads Dashboard"
          >
            <LayoutDashboard className="w-3.5 h-3.5 text-stone-500" />
            <span className="hidden md:inline">Orders</span>
            {ordersCount > 0 && (
              <span className="bg-emerald-600 text-white font-mono text-[10px] font-bold px-1.5 py-0.2 rounded-full">
                {ordersCount}
              </span>
            )}
          </button>

          <button
            id="nav-order-button"
            onClick={() => scrollToSection('order-section')}
            className="flex items-center gap-2 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white px-4 sm:px-5 py-2.5 rounded-xl font-bold text-xs sm:text-sm shadow-md shadow-emerald-700/25 hover:shadow-lg transition-all transform hover:-translate-y-0.5 cursor-pointer"
          >
            <ShoppingBag className="w-4 h-4" />
            <span>Order COD — ₱975</span>
          </button>
        </div>

      </div>
    </header>
  );
};
