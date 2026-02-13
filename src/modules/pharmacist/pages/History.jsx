
import React, { useState } from 'react';
import { usePharmacyStore } from '../store';
import { History as HistoryIcon, Search } from 'lucide-react';
import { Input } from '@/components/ui/input';

const HistoryPage = () => {
    const transactions = usePharmacyStore(state => state.transactions);
    const [search, setSearch] = useState('');

    const filtered = transactions.filter(t =>
        t.patientName.toLowerCase().includes(search.toLowerCase()) ||
        t.medicineName.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <div className="p-4 pb-24">
            <h2 className="text-xl font-bold text-slate-800 dark:text-slate-100 mb-4 flex items-center gap-2">
                <HistoryIcon className="text-teal-600 dark:text-teal-400" /> Transaction Log
            </h2>
            <div className="relative mb-6">
                <Search className="absolute left-3 top-3 text-slate-400 dark:text-slate-500" size={18} />
                <Input
                    placeholder="Search patient or medicine..."
                    className="pl-10 dark:bg-slate-900"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />
            </div>

            <div className="space-y-3">
                {filtered.length === 0 ? (
                    <p className="text-center text-slate-400 dark:text-slate-500 py-8">No transactions found.</p>
                ) : filtered.map(t => (
                    <div key={t.id} className="bg-white dark:bg-slate-900 p-4 rounded-xl border border-slate-100 dark:border-slate-800 shadow-sm">
                        <div className="flex justify-between items-start mb-2">
                            <div>
                                <p className="font-bold text-slate-800 dark:text-slate-200">{t.medicineName}</p>
                                <p className="text-xs text-slate-500 dark:text-slate-400">{t.patientName}</p>
                            </div>
                            <div className="text-right">
                                <span className="font-mono font-semibold text-slate-900 dark:text-slate-100">₹{t.totalPrice}</span>
                                <p className="text-xs text-slate-400 dark:text-slate-500">{t.time}</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-2 text-xs">
                            <span className="bg-slate-100 dark:bg-slate-800 px-2 py-0.5 rounded text-slate-600 dark:text-slate-300 font-medium">Qty: {t.quantity}</span>
                            <span className={`px-2 py-0.5 rounded font-medium ${t.type === 'Prescription' ? 'bg-indigo-50 dark:bg-indigo-900/20 text-indigo-600 dark:text-indigo-300' : 'bg-orange-50 dark:bg-orange-900/20 text-orange-600 dark:text-orange-300'}`}>
                                {t.type}
                            </span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default HistoryPage;
