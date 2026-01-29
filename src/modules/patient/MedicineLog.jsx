import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Search, Filter, Pill, ChevronRight, History } from 'lucide-react';

const medicines = [
    { id: 1, name: 'Dolo 650', dosage: '650mg', type: 'Tablet', count: '10', date: '24 Jan 2024' },
    { id: 2, name: 'Amoxicillin', dosage: '500mg', type: 'Capsule', count: '6', date: '10 Jan 2024' },
    { id: 3, name: 'Cetirizine', dosage: '10mg', type: 'Tablet', count: '10', date: '02 Jan 2024' },
    { id: 4, name: 'Pantoprazole', dosage: '40mg', type: 'Tablet', count: '15', date: '15 Dec 2023' },
    { id: 5, name: 'Azithromycin', dosage: '250mg', type: 'Tablet', count: '3', date: '02 Dec 2023' },
];

const MedicineLog = () => {
    return (
        <div className="min-h-screen px-4 py-6 max-w-md mx-auto pb-24">
            {/* Header */}
            <div className="flex items-center gap-3 mb-6">
                <div className="bg-teal-100 p-2.5 rounded-xl text-teal-700">
                    <History size={24} />
                </div>
                <div>
                    <h1 className="text-2xl font-bold text-slate-900">Medicine Log</h1>
                    <p className="text-sm text-slate-500">Your complete medication history</p>
                </div>
            </div>

            {/* Search Bar */}
            <div className="relative mb-6">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                <input
                    type="text"
                    placeholder="Search medicines..."
                    className="w-full pl-10 pr-4 py-3 rounded-xl bg-white border border-slate-200 shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-500/20 text-sm"
                />
                <button className="absolute right-3 top-1/2 -translate-y-1/2 bg-slate-100 p-1.5 rounded-lg text-slate-500">
                    <Filter size={14} />
                </button>
            </div>

            {/* Timeline/List */}
            <div className="space-y-4">
                {medicines.map((med) => (
                    <div key={med.id} className="bg-white p-4 rounded-2xl border border-slate-100 shadow-sm flex items-center justify-between group cursor-pointer hover:shadow-md transition-all">
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 bg-indigo-50 text-indigo-600 rounded-2xl flex items-center justify-center shrink-0">
                                <Pill size={22} />
                            </div>
                            <div>
                                <h3 className="font-bold text-slate-900">{med.name}</h3>
                                <div className="flex gap-2 text-xs mt-1">
                                    <Badge variant="secondary" className="bg-slate-100 text-slate-600 font-normal px-1.5">
                                        {med.dosage}
                                    </Badge>
                                    <span className="text-slate-400">•</span>
                                    <span className="text-slate-500">{med.date}</span>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col items-end gap-1">
                            <span className="text-xs bg-slate-50 px-2 py-1 rounded-md text-slate-600 font-medium">x{med.count}</span>
                        </div>
                    </div>
                ))}
            </div>

            <div className="mt-8 text-center">
                <p className="text-xs text-slate-400">Showing last 6 months</p>
            </div>
        </div>
    );
};

export default MedicineLog;
