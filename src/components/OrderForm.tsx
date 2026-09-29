import React, { useState } from 'react';
import { ShieldCheck, Truck, ShoppingBag, CheckCircle2, Lock, ArrowRight, Gift, MapPin, Phone, User, Home, AlertTriangle, Sparkles } from 'lucide-react';
import confetti from 'canvas-confetti';
import { OFFER_PACKAGES, PHILIPPINE_PROVINCES } from '../data/funnelData';
import { OfferPackage, CodOrder } from '../types';

interface OrderFormProps {
  selectedPackage: OfferPackage;
  onSelectPackage: (pkg: OfferPackage) => void;
  onOrderSuccess: (order: CodOrder) => void;
}

export const OrderForm: React.FC<OrderFormProps> = ({
  selectedPackage,
  onSelectPackage,
  onOrderSuccess,
}) => {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    province: 'Metro Manila',
    city: '',
    barangay: '',
    streetAddress: '',
    landmark: '',
    deliveryNotes: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateForm = () => {
    const errs: Record<string, string> = {};
    if (!formData.fullName.trim()) errs.fullName = 'Pakilagay ang inyong buong pangalan';
    if (!formData.phone.trim()) {
      errs.phone = 'Pakilagay ang inyong mobile number';
    } else if (!/^(09|\+639)\d{9}$/.test(formData.phone.replace(/[\s-]/g, ''))) {
      errs.phone = 'Dapat 11 digits (hal. 09171234567)';
    }
    if (!formData.city.trim()) errs.city = 'Pakilagay ang inyong Bayan / Lungsod';
    if (!formData.barangay.trim()) errs.barangay = 'Pakilagay ang inyong Barangay';
    if (!formData.streetAddress.trim()) errs.streetAddress = 'Pakilagay ang House No. / Street Name';

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) {
      const firstErrorField = document.querySelector('[data-error="true"]');
      if (firstErrorField) {
        firstErrorField.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
      return;
    }

    setIsSubmitting(true);

    setTimeout(() => {
      const newOrder: CodOrder = {
        orderId: `SBG-COD-${Math.floor(100000 + Math.random() * 900000)}`,
        timestamp: new Date().toISOString(),
        customerName: formData.fullName,
        phone: formData.phone,
        fullAddress: `${formData.streetAddress}, Brgy. ${formData.barangay}, ${formData.city}, ${formData.province}`,
        barangay: formData.barangay,
        city: formData.city,
        province: formData.province,
        landmark: formData.landmark,
        packageId: selectedPackage.id,
        packageName: selectedPackage.name,
        quantity: 1,
        totalPrice: selectedPackage.promoPrice,
        deliveryNotes: formData.deliveryNotes,
        paymentMethod: 'COD',
        status: 'Pending Dispatch',
      };

      try {
        confetti({
          particleCount: 120,
          spread: 70,
          origin: { y: 0.6 },
        });
      } catch (err) {
        console.error(err);
      }

      setIsSubmitting(false);
      onOrderSuccess(newOrder);
    }, 1200);
  };

  return (
    <section id="order-section" className="py-16 lg:py-24 bg-stone-900 text-white relative">
      {/* Background glow */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-emerald-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-3">
            <Truck className="w-3.5 h-3.5 text-emerald-400" />
            100% Cash On Delivery (COD) Checkout
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold font-['Outfit'] text-white tracking-tight">
            Ipadala Ang Aking Salveo Barley Grass Order
          </h2>

          <p className="text-stone-300 text-sm sm:text-base mt-2">
            Punan ang delivery details sa ibaba. Walang advance payment — magbabayad ka lang kapag dumating na ang order mo sa bahay.
          </p>
        </div>

        {/* The Checkout Card */}
        <div className="bg-stone-950 rounded-3xl border border-stone-800 shadow-2xl p-6 sm:p-10">
          
          <form onSubmit={handleSubmit} className="space-y-8">
            
            {/* Step 1: Package Selector in Form */}
            <div>
              <div className="flex items-center justify-between gap-2 mb-4">
                <label className="text-sm font-bold uppercase tracking-wider text-emerald-400 flex items-center gap-1.5">
                  <span className="w-5 h-5 rounded-full bg-emerald-600 text-white flex items-center justify-center text-xs">1</span>
                  Piliin Ang Iyong Package:
                </label>
                <span className="text-xs text-stone-400">Pindutin para palitan</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {OFFER_PACKAGES.map((pkg) => {
                  const isChecked = selectedPackage.id === pkg.id;
                  return (
                    <div
                      key={pkg.id}
                      onClick={() => onSelectPackage(pkg)}
                      className={`p-4 rounded-2xl border transition-all cursor-pointer flex flex-col justify-between ${
                        isChecked
                          ? 'bg-emerald-950/80 border-emerald-500 shadow-md ring-2 ring-emerald-500/40'
                          : 'bg-stone-900/90 border-stone-800 hover:border-stone-700'
                      }`}
                    >
                      <div>
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-xs font-bold text-white font-['Outfit']">
                            {pkg.canistersCount} Canister{pkg.canistersCount > 1 ? 's' : ''}
                          </span>
                          <span className={`w-4 h-4 rounded-full border flex items-center justify-center ${
                            isChecked ? 'border-emerald-400 bg-emerald-500 text-stone-950' : 'border-stone-600'
                          }`}>
                            {isChecked && <CheckCircle2 className="w-3.5 h-3.5" />}
                          </span>
                        </div>
                        <p className="text-xs text-stone-400 font-medium">
                          {pkg.servingsCount} Servings
                        </p>
                      </div>

                      <div className="mt-3 pt-2 border-t border-stone-800 flex items-baseline justify-between">
                        <span className="text-lg font-black text-amber-400 font-['Outfit']">
                          ₱{pkg.promoPrice.toLocaleString()}
                        </span>
                        <span className="text-[10px] text-emerald-400 font-semibold bg-emerald-950 px-1.5 py-0.5 rounded border border-emerald-800">
                          Save ₱{pkg.savingsAmount}
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Step 2: Shipping Details Form */}
            <div>
              <label className="text-sm font-bold uppercase tracking-wider text-emerald-400 flex items-center gap-1.5 mb-4">
                <span className="w-5 h-5 rounded-full bg-emerald-600 text-white flex items-center justify-center text-xs">2</span>
                Impormasyon Para Sa Delivery (Courier Rider):
              </label>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                
                {/* Full Name */}
                <div className="sm:col-span-2">
                  <label className="block text-xs font-semibold text-stone-300 mb-1.5">
                    Buong Pangalan (Full Name) *
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-stone-400">
                      <User className="w-4 h-4" />
                    </div>
                    <input
                      type="text"
                      placeholder="Hal. Juan Dela Cruz"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      data-error={!!errors.fullName}
                      className={`w-full pl-10 pr-4 py-3 bg-stone-900 border rounded-xl text-white text-sm placeholder-stone-500 focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-all ${
                        errors.fullName ? 'border-rose-500 ring-1 ring-rose-500' : 'border-stone-800'
                      }`}
                    />
                  </div>
                  {errors.fullName && <p className="text-rose-400 text-xs mt-1">{errors.fullName}</p>}
                </div>

                {/* Phone */}
                <div className="sm:col-span-2">
                  <label className="block text-xs font-semibold text-stone-300 mb-1.5">
                    Mobile Phone Number (Tawagan / Text ng Rider) *
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-stone-400">
                      <Phone className="w-4 h-4" />
                    </div>
                    <input
                      type="tel"
                      placeholder="Hal. 09171234567"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      data-error={!!errors.phone}
                      className={`w-full pl-10 pr-4 py-3 bg-stone-900 border rounded-xl text-white text-sm placeholder-stone-500 focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-all ${
                        errors.phone ? 'border-rose-500 ring-1 ring-rose-500' : 'border-stone-800'
                      }`}
                    />
                  </div>
                  {errors.phone ? (
                    <p className="text-rose-400 text-xs mt-1">{errors.phone}</p>
                  ) : (
                    <p className="text-stone-400 text-[11px] mt-1">
                      Magpapadala ng SMS status updates ang courier bago i-deliver
                    </p>
                  )}
                </div>

                {/* Province */}
                <div>
                  <label className="block text-xs font-semibold text-stone-300 mb-1.5">
                    Probinsya (Province) *
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-stone-400">
                      <MapPin className="w-4 h-4" />
                    </div>
                    <select
                      value={formData.province}
                      onChange={(e) => setFormData({ ...formData, province: e.target.value })}
                      className="w-full pl-10 pr-4 py-3 bg-stone-900 border border-stone-800 rounded-xl text-white text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-all appearance-none"
                    >
                      {PHILIPPINE_PROVINCES.map((prov) => (
                        <option key={prov} value={prov} className="bg-stone-900 text-white">
                          {prov}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* City / Municipality */}
                <div>
                  <label className="block text-xs font-semibold text-stone-300 mb-1.5">
                    Lungsod / Bayan (City / Municipality) *
                  </label>
                  <input
                    type="text"
                    placeholder="Hal. Iloilo City / Quezon City"
                    value={formData.city}
                    onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                    data-error={!!errors.city}
                    className={`w-full px-4 py-3 bg-stone-900 border rounded-xl text-white text-sm placeholder-stone-500 focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-all ${
                      errors.city ? 'border-rose-500 ring-1 ring-rose-500' : 'border-stone-800'
                    }`}
                  />
                  {errors.city && <p className="text-rose-400 text-xs mt-1">{errors.city}</p>}
                </div>

                {/* Barangay */}
                <div>
                  <label className="block text-xs font-semibold text-stone-300 mb-1.5">
                    Barangay *
                  </label>
                  <input
                    type="text"
                    placeholder="Hal. Brgy. San Antonio"
                    value={formData.barangay}
                    onChange={(e) => setFormData({ ...formData, barangay: e.target.value })}
                    data-error={!!errors.barangay}
                    className={`w-full px-4 py-3 bg-stone-900 border rounded-xl text-white text-sm placeholder-stone-500 focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-all ${
                      errors.barangay ? 'border-rose-500 ring-1 ring-rose-500' : 'border-stone-800'
                    }`}
                  />
                  {errors.barangay && <p className="text-rose-400 text-xs mt-1">{errors.barangay}</p>}
                </div>

                {/* Landmark */}
                <div>
                  <label className="block text-xs font-semibold text-stone-300 mb-1.5">
                    Landmark / Palatandaan (Importante sa rider)
                  </label>
                  <input
                    type="text"
                    placeholder="Hal. Tapat ng Barangay Hall, Kulay Asul na Gate"
                    value={formData.landmark}
                    onChange={(e) => setFormData({ ...formData, landmark: e.target.value })}
                    className="w-full px-4 py-3 bg-stone-900 border border-stone-800 rounded-xl text-white text-sm placeholder-stone-500 focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-all"
                  />
                </div>

                {/* Street Address / House No */}
                <div className="sm:col-span-2">
                  <label className="block text-xs font-semibold text-stone-300 mb-1.5">
                    House No. / Building / Street Name *
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-stone-400">
                      <Home className="w-4 h-4" />
                    </div>
                    <input
                      type="text"
                      placeholder="Hal. #124 Mabini St., Block 3 Lot 8 Phase 2"
                      value={formData.streetAddress}
                      onChange={(e) => setFormData({ ...formData, streetAddress: e.target.value })}
                      data-error={!!errors.streetAddress}
                      className={`w-full pl-10 pr-4 py-3 bg-stone-900 border rounded-xl text-white text-sm placeholder-stone-500 focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-all ${
                        errors.streetAddress ? 'border-rose-500 ring-1 ring-rose-500' : 'border-stone-800'
                      }`}
                    />
                  </div>
                  {errors.streetAddress && <p className="text-rose-400 text-xs mt-1">{errors.streetAddress}</p>}
                </div>

                {/* Special Delivery notes */}
                <div className="sm:col-span-2">
                  <label className="block text-xs font-semibold text-stone-300 mb-1.5">
                    Bilin sa Rider (Optional)
                  </label>
                  <input
                    type="text"
                    placeholder="Hal. Iwan sa guard kung wala sa bahay / Tumawag bago mag-deliver"
                    value={formData.deliveryNotes}
                    onChange={(e) => setFormData({ ...formData, deliveryNotes: e.target.value })}
                    className="w-full px-4 py-3 bg-stone-900 border border-stone-800 rounded-xl text-white text-sm placeholder-stone-500 focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-all"
                  />
                </div>

              </div>
            </div>

            {/* Step 3: Order Breakdown & Payment Verification */}
            <div className="bg-stone-900 p-6 rounded-2xl border border-stone-800 space-y-3">
              <div className="flex items-center justify-between text-xs sm:text-sm text-stone-300">
                <span>Selected Package:</span>
                <span className="font-semibold text-white">{selectedPackage.name}</span>
              </div>
              <div className="flex items-center justify-between text-xs sm:text-sm text-stone-300">
                <span>Regular SRP:</span>
                <span className="line-through text-stone-500">₱{selectedPackage.originalPrice.toLocaleString()}</span>
              </div>
              <div className="flex items-center justify-between text-xs sm:text-sm text-emerald-400 font-semibold">
                <span>Distributor Discount Savings:</span>
                <span>-₱{selectedPackage.savingsAmount.toLocaleString()}</span>
              </div>
              <div className="flex items-center justify-between text-xs sm:text-sm text-stone-300">
                <span>Delivery & Handling:</span>
                <span className="text-emerald-400 font-bold uppercase">LIBRE (FREE PROMO)</span>
              </div>
              <div className="flex items-center justify-between text-xs sm:text-sm text-stone-300">
                <span>Payment Method:</span>
                <span className="bg-amber-400/20 text-amber-300 font-bold px-2 py-0.5 rounded text-xs border border-amber-400/30">
                  Cash On Delivery (COD)
                </span>
              </div>

              <div className="pt-3 border-t border-stone-800 flex items-center justify-between">
                <div>
                  <span className="text-sm font-bold text-white block">Kabuuang Babayaran sa Rider:</span>
                  <span className="text-[11px] text-stone-400">Walang dagdag na hidden fees</span>
                </div>
                <div className="text-2xl sm:text-3xl font-black text-amber-400 font-['Outfit']">
                  ₱{selectedPackage.promoPrice.toLocaleString()}
                </div>
              </div>
            </div>

            {/* Big Submit Button */}
            <div>
              <button
                type="submit"
                id="submit-cod-order-button"
                disabled={isSubmitting}
                className="w-full py-5 px-6 rounded-2xl bg-gradient-to-r from-emerald-500 via-emerald-600 to-teal-600 hover:from-emerald-400 hover:to-teal-500 text-white font-black text-base sm:text-lg tracking-wide uppercase shadow-2xl shadow-emerald-900/60 transition-all transform hover:-translate-y-0.5 flex items-center justify-center gap-3 cursor-pointer disabled:opacity-70 disabled:cursor-not-allowed border border-emerald-400/30"
              >
                {isSubmitting ? (
                  <div className="flex items-center gap-2">
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    <span>Pinoproseso ang inyong COD order...</span>
                  </div>
                ) : (
                  <>
                    <span>KUMPIRMAHIN ANG ORDER — BAYAD PAG-DATING</span>
                    <ArrowRight className="w-5 h-5" />
                  </>
                )}
              </button>

              <div className="mt-4 flex flex-wrap items-center justify-center gap-4 text-xs text-stone-400 text-center">
                <span className="flex items-center gap-1 text-emerald-400">
                  <ShieldCheck className="w-4 h-4" /> 100% COD Protected
                </span>
                <span className="flex items-center gap-1">
                  <Lock className="w-3.5 h-3.5 text-stone-400" /> Safe & Verified Data
                </span>
                <span className="flex items-center gap-1">
                  <Sparkles className="w-3.5 h-3.5 text-amber-400" /> Free Replacement Guarantee
                </span>
              </div>
            </div>

          </form>

        </div>

      </div>
    </section>
  );
};
