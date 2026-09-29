import React, { useState } from 'react';
import { CheckCircle2, Truck, Copy, Check, X, ShieldCheck, Phone, MapPin, Package, Heart } from 'lucide-react';
import { CodOrder } from '../types';

interface OrderSuccessModalProps {
  order: CodOrder | null;
  onClose: () => void;
}

export const OrderSuccessModal: React.FC<OrderSuccessModalProps> = ({ order, onClose }) => {
  const [copied, setCopied] = useState(false);

  if (!order) return null;

  const orderSummaryText = `SALVEO BARLEY GRASS COD ORDER CONFIRMATION
Order ID: ${order.orderId}
Customer: ${order.customerName}
Mobile: ${order.phone}
Address: ${order.fullAddress}
Package: ${order.packageName}
Total COD Amount: ₱${order.totalPrice.toLocaleString()} (Bayad Pag-Dating)
Status: ${order.status}`;

  const handleCopy = () => {
    navigator.clipboard.writeText(orderSummaryText);
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-stone-950/80 backdrop-blur-sm overflow-y-auto">
      <div className="bg-stone-900 border border-stone-800 text-white rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl relative text-left my-8">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-stone-400 hover:text-white p-2 rounded-full hover:bg-stone-800 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Success Icon */}
        <div className="text-center mb-6">
          <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 flex items-center justify-center mx-auto mb-3">
            <CheckCircle2 className="w-10 h-10" />
          </div>
          <span className="text-xs font-bold uppercase tracking-wider text-amber-400 bg-amber-400/20 px-3 py-1 rounded-full border border-amber-400/30">
            Salamat sa Pag-Order!
          </span>
          <h3 className="text-2xl sm:text-3xl font-black font-['Outfit'] text-white mt-2">
            Matagumpay Na Naitala Ang Iyong COD Order
          </h3>
          <p className="text-xs text-stone-300 mt-1">
            Naka-queue na ang iyong package para sa batch packaging at dispatch.
          </p>
        </div>

        {/* Order Details Card */}
        <div className="bg-stone-950 p-5 rounded-2xl border border-stone-800 space-y-3.5 text-xs sm:text-sm">
          
          <div className="flex items-center justify-between pb-3 border-b border-stone-800">
            <span className="text-stone-400">Tracking / Order ID:</span>
            <span className="font-mono font-bold text-amber-400 text-sm">{order.orderId}</span>
          </div>

          <div className="flex items-start justify-between">
            <span className="text-stone-400">Pangalan:</span>
            <span className="font-semibold text-white text-right">{order.customerName}</span>
          </div>

          <div className="flex items-start justify-between">
            <span className="text-stone-400">Mobile Number:</span>
            <span className="font-semibold text-white">{order.phone}</span>
          </div>

          <div className="flex items-start justify-between">
            <span className="text-stone-400">Delivery Address:</span>
            <span className="font-semibold text-white text-right max-w-[65%]">{order.fullAddress}</span>
          </div>

          <div className="flex items-start justify-between">
            <span className="text-stone-400">Package:</span>
            <span className="font-semibold text-emerald-400">{order.packageName}</span>
          </div>

          <div className="pt-3 border-t border-stone-800 flex items-center justify-between">
            <span className="text-white font-bold">Kabuuang Ibibigay sa Rider:</span>
            <span className="text-xl font-black text-amber-400 font-['Outfit']">
              ₱{order.totalPrice.toLocaleString()}
            </span>
          </div>
        </div>

        {/* Courier dispatch notice */}
        <div className="mt-4 bg-emerald-950/60 p-3.5 rounded-xl border border-emerald-700/60 flex items-start gap-2.5 text-xs text-emerald-200">
          <Truck className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
          <div>
            <strong>Paalala sa Delivery:</strong> Magpapadala ang aming courier rider ng SMS o tatawag bago dumating sa inyong bahay (karaniwan 2-5 araw). Mangyaring ihanda ang eksaktong <strong>₱{order.totalPrice.toLocaleString()}</strong> pagkatanggap ng item.
          </div>
        </div>

        {/* Action Buttons */}
        <div className="mt-6 space-y-2.5">
          <button
            onClick={handleCopy}
            className="w-full bg-stone-800 hover:bg-stone-700 text-stone-200 font-semibold py-3 px-4 rounded-xl text-xs flex items-center justify-center gap-2 transition-all cursor-pointer border border-stone-700"
          >
            {copied ? (
              <>
                <Check className="w-4 h-4 text-emerald-400" />
                <span className="text-emerald-400">Nakopya na ang Order Summary!</span>
              </>
            ) : (
              <>
                <Copy className="w-4 h-4 text-stone-400" />
                <span>Kopyahin ang Order Receipt (SMS / Viber)</span>
              </>
            )}
          </button>

          <button
            onClick={onClose}
            className="w-full bg-emerald-600 hover:bg-emerald-500 text-white font-bold py-3 px-4 rounded-xl text-xs transition-all shadow-md cursor-pointer"
          >
            Bumalik sa Website
          </button>
        </div>

      </div>
    </div>
  );
};
