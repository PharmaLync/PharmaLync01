import React, { useState } from 'react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Search, Filter, Pill, ChevronRight, History, X, User, Building2, Store } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

// Mock Data
const prescriptions = [
    {
        id: 'rx-001',
        name: 'Viral Fever Treatment',
        doctor: 'Dr. Sarah Smith',
        hospital: 'City Care Hospital',
        pharmacy: 'Green Cross Pharmacy',
        date: '24 Jan 2024',
        medicines: [
            { id: 1, name: 'Dolo 650', dosage: '650mg', type: 'Tablet', count: '10' },
            { id: 2, name: 'Amoxicillin', dosage: '500mg', type: 'Capsule', count: '6' }
        ]
    },
    {
        id: 'rx-002',
        name: 'Allergy Relief',
        doctor: 'Dr. John Doe',
        hospital: 'Health Plus Clinic',
        pharmacy: 'Apollo Pharmacy',
        date: '02 Jan 2024',
        medicines: [
            { id: 3, name: 'Cetirizine', dosage: '10mg', type: 'Tablet', count: '10' },
            { id: 4, name: 'Montelukast', dosage: '10mg', type: 'Tablet', count: '10' }
        ]
    }
];

const otcMedicines = [
    { id: 5, name: 'Vicks VapoRub', dosage: '50g', type: 'Balm', count: '1', date: '15 Jan 2024' },
    { id: 6, name: 'Band-Aid', dosage: 'Standard', type: 'Strips', count: '10', date: '10 Jan 2024' }
];

const MedicineLog = () => {
    const [selectedRx, setSelectedRx] = useState(null);

    // Filter Logic (Mock Only - Visual UI)
    const filters = ['Date', 'Time', 'Doctor', 'Prescription'];

    return (
        <div className="min-h-screen px-4 py-6 max-w-md mx-auto pb-24">
            {/* Header */}
            <div className="flex items-center gap-3 mb-6">
                <div className="bg-teal-100 dark:bg-teal-900/30 p-2.5 rounded-xl text-teal-700 dark:text-teal-400">
                    <History size={24} />
                </div>
                <div>
                    <h1 className="text-2xl font-bold text-slate-900 dark:text-slate-100">Medicine Log</h1>
                    <p className="text-sm text-slate-500 dark:text-slate-400">Your medication history</p>
                </div>
            </div>

            {/* Search & Filter */}
            <div className="flex gap-2 mb-6">
                <div className="relative flex-1">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 dark:text-slate-500" size={18} />
                    <input
                        type="text"
                        placeholder="Search..."
                        className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-500/20 text-sm text-slate-900 dark:text-slate-100 placeholder:text-slate-400"
                    />
                </div>
                <button className="bg-slate-100 dark:bg-slate-800 p-2.5 rounded-xl text-slate-500 dark:text-slate-400 border border-slate-200 dark:border-slate-700">
                    <Filter size={20} />
                </button>
            </div>

            {/* Filter Tags */}
            <div className="flex gap-2 overflow-x-auto pb-4 mb-2 scrollbar-hide">
                {filters.map(f => (
                    <Badge key={f} variant="outline" className="bg-white dark:bg-slate-900 text-slate-500 dark:text-slate-400 border-slate-200 dark:border-slate-800 font-normal px-3 py-1 whitespace-nowrap">
                        {f}
                    </Badge>
                ))}
            </div>

            <div className="space-y-6">

                {/* Prescribed Medicines - Grouped */}
                <section>
                    <h3 className="text-sm font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-3">Prescribed</h3>
                    <div className="space-y-4">
                        {prescriptions.map(rx => (
                            <div key={rx.id} className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden">
                                {/* Prescription Header - Clickable */}
                                <div
                                    onClick={() => setSelectedRx(rx)}
                                    className="p-3 bg-slate-50 dark:bg-slate-800/50 border-b border-slate-100 dark:border-slate-800 flex justify-between items-center cursor-pointer hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                                >
                                    <div>
                                        <h4 className="font-bold text-slate-800 dark:text-slate-100 text-sm flex items-center gap-2">
                                            {rx.name} <ChevronRight size={14} className="text-slate-400" />
                                        </h4>
                                        <p className="text-xs text-slate-500 dark:text-slate-400">{rx.date} • {rx.doctor}</p>
                                    </div>
                                    <Badge className="bg-teal-100 dark:bg-teal-900/30 text-teal-700 dark:text-teal-400 hover:bg-teal-200 px-2 border-0">
                                        {rx.medicines.length} Meds
                                    </Badge>
                                </div>

                                {/* Medicines List */}
                                <div className="divide-y divide-slate-100 dark:divide-slate-800">
                                    {rx.medicines.map(med => (
                                        <div key={med.id} className="p-3 pl-4 flex items-center gap-3">
                                            <div className="w-8 h-8 bg-indigo-50 dark:bg-indigo-900/20 text-indigo-600 dark:text-indigo-400 rounded-lg flex items-center justify-center shrink-0">
                                                <Pill size={16} />
                                            </div>
                                            <div className="flex-1">
                                                <div className="flex justify-between">
                                                    <span className="font-medium text-slate-900 dark:text-slate-100 text-sm">{med.name}</span>
                                                    <span className="text-xs bg-slate-50 dark:bg-slate-800 px-1.5 py-0.5 rounded text-slate-500 dark:text-slate-400">x{med.count}</span>
                                                </div>
                                                <p className="text-xs text-slate-400 dark:text-slate-500">{med.dosage} • {med.type}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* OTC Medicines - Standalone */}
                <section>
                    <h3 className="text-sm font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-3">Over The Counter (OTC)</h3>
                    <div className="space-y-3">
                        {otcMedicines.map(med => (
                            <div key={med.id} className="bg-white dark:bg-slate-900 p-3 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm flex items-center gap-3">
                                <div className="w-10 h-10 bg-orange-50 dark:bg-orange-900/20 text-orange-600 dark:text-orange-400 rounded-xl flex items-center justify-center shrink-0">
                                    <Store size={20} />
                                </div>
                                <div className="flex-1">
                                    <div className="flex justify-between">
                                        <h4 className="font-bold text-slate-800 dark:text-slate-100 text-sm">{med.name}</h4>
                                        <span className="text-xs bg-slate-50 dark:bg-slate-800 px-2 py-1 rounded text-slate-600 dark:text-slate-400 font-medium">x{med.count}</span>
                                    </div>
                                    <p className="text-xs text-slate-500 dark:text-slate-400">{med.dosage} • {med.date}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
            </div>

            {/* Prescription Details Modal */}
            <AnimatePresence>
                {selectedRx && (
                    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm">
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            className="bg-white dark:bg-slate-900 w-full max-w-sm rounded-[2rem] overflow-hidden shadow-2xl border border-slate-200 dark:border-slate-800"
                        >
                            <div className="bg-teal-600 dark:bg-teal-700 p-6 text-white relative">
                                <button
                                    onClick={() => setSelectedRx(null)}
                                    className="absolute top-4 right-4 bg-white/20 p-2 rounded-full hover:bg-white/30 transition-colors"
                                >
                                    <X size={18} />
                                </button>
                                <h3 className="text-xl font-bold mb-1">{selectedRx.name}</h3>
                                <p className="text-teal-100 text-sm">Issued: {selectedRx.date}</p>
                            </div>

                            <div className="p-6 space-y-6">
                                <div className="flex items-start gap-4">
                                    <div className="bg-blue-50 dark:bg-blue-900/20 p-3 rounded-2xl text-blue-600 dark:text-blue-400">
                                        <User size={24} />
                                    </div>
                                    <div>
                                        <p className="text-xs text-slate-500 dark:text-slate-400 font-bold uppercase tracking-wide">Issued By</p>
                                        <p className="font-bold text-slate-800 dark:text-slate-100 text-lg">{selectedRx.doctor}</p>
                                        <div className="flex items-center gap-1 text-slate-500 dark:text-slate-400 text-sm mt-1">
                                            <Building2 size={14} />
                                            <span>{selectedRx.hospital}</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="h-px bg-slate-100 dark:bg-slate-800 w-full" />

                                <div className="flex items-start gap-4">
                                    <div className="bg-green-50 dark:bg-green-900/20 p-3 rounded-2xl text-green-600 dark:text-green-400">
                                        <Store size={24} />
                                    </div>
                                    <div>
                                        <p className="text-xs text-slate-500 dark:text-slate-400 font-bold uppercase tracking-wide">Dispensed At</p>
                                        <p className="font-bold text-slate-800 dark:text-slate-100 text-lg">{selectedRx.pharmacy}</p>
                                        <p className="text-slate-500 dark:text-slate-400 text-sm mt-1">Verified Partner</p>
                                    </div>
                                </div>

                                <Button className="w-full bg-slate-900 dark:bg-slate-800 text-white rounded-xl h-12 hover:bg-slate-800 dark:hover:bg-slate-700" onClick={() => setSelectedRx(null)}>
                                    Close Details
                                </Button>
                            </div>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>

        </div>
    );
};

export default MedicineLog;
