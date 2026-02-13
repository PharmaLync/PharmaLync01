
import React from 'react';
import { usePharmacyStore } from '../store';
import { AlertCircle, Package } from 'lucide-react';

const Stock = () => {
    const inventory = usePharmacyStore(state => state.inventory);

    return (
        <div className="p-4 pb-24">
            <h2 className="text-xl font-bold text-slate-800 mb-4 flex items-center gap-2">
                <Package className="text-teal-600" /> Inventory
            </h2>
            <div className="space-y-3">
                {inventory.map(item => {
                    const isLow = item.stock <= item.threshold;
                    return (
                        <div key={item.id} className={`flex justify-between items-center p-4 rounded-xl border ${isLow ? 'bg-red-50 dark:bg-red-900/10 border-red-200 dark:border-red-900/30' : 'bg-white dark:bg-slate-900 border-slate-100 dark:border-slate-800'}`}>
                            <div>
                                <p className={`font-semibold ${isLow ? 'text-red-700 dark:text-red-400' : 'text-slate-800 dark:text-slate-200'}`}>{item.name}</p>
                                <p className="text-xs text-slate-500 dark:text-slate-400">{item.category} • ₹{item.price}/unit</p>
                            </div>
                            <div className="text-right">
                                <span className={`text-lg font-bold block ${isLow ? 'text-red-600 dark:text-red-400' : 'text-teal-600 dark:text-teal-400'}`}>
                                    {item.stock}
                                </span>
                                {isLow && <span className="text-[10px] uppercase font-bold text-red-500 dark:text-red-400 flex items-center justify-end gap-1"><AlertCircle size={10} /> Low Stock</span>}
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default Stock;
