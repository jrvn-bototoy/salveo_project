import React, { useState } from 'react';
import { X, Download, Trash2, CheckCircle, Clock, Truck, ShieldCheck, DollarSign, PackageCheck, Filter, UserCheck, PlusCircle } from 'lucide-react';
import { CodOrder } from '../types';

interface MerchantDashboardModalProps {
  isOpen: boolean;
  onClose: () => void;
  orders: CodOrder[];
  onUpdateStatus: (orderId: string, newStatus: CodOrder['status']) => void;
  onClearOrders: () => void;
  onAddSampleOrder: () => void;
}

export const MerchantDashboardModal: React.FC<MerchantDashboardModalProps> = ({
  isOpen,
  onClose,
  orders,
  onUpdateStatus,
  onClearOrders,
  onAddSampleOrder,
}) => {
  const [filterStatus, setFilterStatus] = useState<string>('all');

  if (!isOpen) return null;

  const totalRevenue = orders.reduce((sum, o) => sum + o.totalPrice, 0);
  const avgOrderValue = orders.length > 0 ? Math.round(totalRevenue / orders.length) : 0;

  const filteredOrders = filterStatus === 'all'
    ? orders
    : orders.filter(o => o.status === filterStatus);

  const exportCsv = () => {
    if (orders.length === 0) return;
    const headers = ['Order ID', 'Timestamp', 'Customer Name', 'Phone', 'Address', 'Province', 'Package', 'Total Price', 'Status', 'Notes'];
    const rows = orders.map(o => [
      o.orderId,
      o.timestamp,
      `"${o.customerName}"`,
      `"${o.phone}"`,
      `"${o.fullAddress}"`,
      `"${o.province}"`,
      `"${o.packageName}"`,
      o.totalPrice,
      o.status,
      `"${o.deliveryNotes || ''}"`
    ]);

    const csvContent = 'data:text/csv;charset=utf-8,' + [headers.join(','), ...rows.map(e => e.join(','))].join('\n');
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement('a');
    link.setAttribute('href', encodedUri);
    link.setAttribute('download', `salveo_cod_orders_${new Date().toISOString().slice(0, 10)}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-stone-950/85 backdrop-blur-md overflow-y-auto">
      <div className="bg-stone-900 border border-stone-800 text-white rounded-3xl max-w-5xl w-full p-6 sm:p-8 shadow-2xl relative my-8 max-h-[90vh] flex flex-col">
        
        {/* Top Header */}
        <div className="flex items-center justify-between pb-4 border-b border-stone-800">
          <div>
            <div className="flex items-center gap-2">
              <h3 className="text-xl sm:text-2xl font-bold font-['Outfit'] text-white">
                Merchant Fulfillment & Lead Portal
              </h3>
              <span className="bg-emerald-950 text-emerald-400 text-xs font-bold px-2 py-0.5 rounded border border-emerald-800">
                Live COD Orders
              </span>
            </div>
            <p className="text-xs text-stone-400 mt-0.5">
              Tingnan at i-manage ang mga pumasok na Cash on Delivery orders mula sa funnel
            </p>
          </div>

          <button
            onClick={onClose}
            className="text-stone-400 hover:text-white p-2 rounded-full hover:bg-stone-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Metrics Bar */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 my-4">
          <div className="bg-stone-950 p-3.5 rounded-2xl border border-stone-800">
            <span className="text-[11px] text-stone-400 block font-medium">Kabuuang Orders</span>
            <span className="text-2xl font-black text-white font-['Outfit']">{orders.length}</span>
          </div>

          <div className="bg-stone-950 p-3.5 rounded-2xl border border-stone-800">
            <span className="text-[11px] text-stone-400 block font-medium">Total COD Value</span>
            <span className="text-2xl font-black text-amber-400 font-['Outfit']">₱{totalRevenue.toLocaleString()}</span>
          </div>

          <div className="bg-stone-950 p-3.5 rounded-2xl border border-stone-800">
            <span className="text-[11px] text-stone-400 block font-medium">Average Order Value</span>
            <span className="text-2xl font-black text-emerald-400 font-['Outfit']">₱{avgOrderValue.toLocaleString()}</span>
          </div>

          <div className="bg-stone-950 p-3.5 rounded-2xl border border-stone-800">
            <span className="text-[11px] text-stone-400 block font-medium">Pending Dispatch</span>
            <span className="text-2xl font-black text-blue-400 font-['Outfit']">
              {orders.filter(o => o.status === 'Pending Dispatch').length}
            </span>
          </div>
        </div>

        {/* Action Controls & Filters */}
        <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
          <div className="flex items-center gap-1.5 overflow-x-auto text-xs">
            {['all', 'Pending Dispatch', 'Confirmed', 'In Transit', 'Delivered'].map((st) => (
              <button
                key={st}
                onClick={() => setFilterStatus(st)}
                className={`px-3 py-1.5 rounded-xl font-medium transition-all cursor-pointer whitespace-nowrap ${
                  filterStatus === st
                    ? 'bg-emerald-600 text-white font-bold'
                    : 'bg-stone-800 text-stone-300 hover:bg-stone-700'
                }`}
              >
                {st === 'all' ? 'Lahat' : st}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={onAddSampleOrder}
              className="px-3 py-1.5 bg-stone-800 hover:bg-stone-700 text-emerald-300 rounded-xl text-xs font-semibold flex items-center gap-1.5 transition-all cursor-pointer border border-stone-700"
              title="Magdagdag ng test order para sa testing"
            >
              <PlusCircle className="w-3.5 h-3.5" />
              <span>Add Test Lead</span>
            </button>

            <button
              onClick={exportCsv}
              disabled={orders.length === 0}
              className="px-3 py-1.5 bg-emerald-700 hover:bg-emerald-600 disabled:opacity-50 text-white rounded-xl text-xs font-semibold flex items-center gap-1.5 transition-all cursor-pointer"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Export CSV</span>
            </button>

            {orders.length > 0 && (
              <button
                onClick={onClearOrders}
                className="px-3 py-1.5 bg-rose-950 hover:bg-rose-900 text-rose-300 rounded-xl text-xs font-semibold flex items-center gap-1.5 transition-all cursor-pointer border border-rose-800"
                title="I-clear ang order records"
              >
                <Trash2 className="w-3.5 h-3.5" />
              </button>
            )}
          </div>
        </div>

        {/* Orders Table Container */}
        <div className="flex-1 overflow-y-auto border border-stone-800 rounded-2xl bg-stone-950/80">
          {filteredOrders.length === 0 ? (
            <div className="p-12 text-center text-stone-500 text-sm">
              Walang orders na natagpuan sa napiling filter. Subukang mag-fill up sa Order Form sa website!
            </div>
          ) : (
            <div className="divide-y divide-stone-800 text-xs">
              {filteredOrders.map((ord) => (
                <div key={ord.orderId} className="p-4 hover:bg-stone-900/60 transition-colors flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <span className="font-mono font-bold text-amber-400">{ord.orderId}</span>
                      <span className="font-bold text-white text-sm">{ord.customerName}</span>
                      <span className="text-stone-400 font-mono">({ord.phone})</span>
                    </div>

                    <p className="text-stone-400">
                      {ord.fullAddress} {ord.landmark && <span className="text-stone-500">• Landmark: {ord.landmark}</span>}
                    </p>

                    <div className="flex items-center gap-2 text-stone-300">
                      <span className="text-emerald-400 font-semibold">{ord.packageName}</span>
                      <span>•</span>
                      <span className="font-bold text-white">₱{ord.totalPrice.toLocaleString()} (COD)</span>
                      <span>•</span>
                      <span className="text-[10px] text-stone-500">{new Date(ord.timestamp).toLocaleString()}</span>
                    </div>
                  </div>

                  {/* Status Dropdown */}
                  <div className="flex items-center gap-2 shrink-0">
                    <select
                      value={ord.status}
                      onChange={(e) => onUpdateStatus(ord.orderId, e.target.value as CodOrder['status'])}
                      className={`text-xs font-bold py-1.5 px-3 rounded-xl border bg-stone-900 cursor-pointer focus:outline-none ${
                        ord.status === 'Delivered'
                          ? 'text-emerald-400 border-emerald-600'
                          : ord.status === 'In Transit'
                          ? 'text-blue-400 border-blue-600'
                          : ord.status === 'Confirmed'
                          ? 'text-amber-400 border-amber-600'
                          : 'text-stone-300 border-stone-700'
                      }`}
                    >
                      <option value="Pending Dispatch">Pending Dispatch</option>
                      <option value="Confirmed">Confirmed via Call</option>
                      <option value="In Transit">In Transit (Courier)</option>
                      <option value="Delivered">Delivered & Paid</option>
                    </select>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

      </div>
    </div>
  );
};
