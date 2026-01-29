import React, { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Pill, Check, Calendar, AlertCircle, ChevronRight, ShieldCheck, X, Store, Stethoscope, Banknote } from 'lucide-react';
import { cn } from '@/lib/utils';
import { motion, AnimatePresence } from 'framer-motion';

const TransactionDetails = ({ transaction, onClose }) => {
    if (!transaction) return null;

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-sm flex items-end sm:items-center justify-center p-0 sm:p-4"
            onClick={onClose}
        >
            <motion.div
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                exit={{ y: "100%" }}
                transition={{ type: "spring", damping: 25, stiffness: 300 }}
                className="w-full max-w-sm bg-white rounded-t-3xl sm:rounded-3xl overflow-hidden shadow-2xl relative"
                onClick={e => e.stopPropagation()}
            >
                {/* Header */}
                <div className="bg-teal-700 p-6 pt-8 text-white relative">
                    <button onClick={onClose} className="absolute top-4 right-4 text-white/70 hover:text-white bg-white/10 p-1 rounded-full">
                        <X size={20} />
                    </button>
                    <div className="flex items-start justify-between mb-4">
                        <div className="bg-white/20 p-3 rounded-2xl backdrop-blur-sm">
                            <Pill size={32} />
                        </div>
                        <Badge variant="glass" className="bg-green-500/20 text-white border-green-400/30">
                            Verified on Blockchain
                        </Badge>
                    </div>
                    <h2 className="text-2xl font-bold">{transaction.medicine}</h2>
                    <p className="text-teal-100 opacity-90">{transaction.dosage}</p>
                </div>

                {/* Body */}
                <div className="p-6 space-y-6">
                    {/* Pharmacy Info */}
                    <div className="flex items-start gap-3">
                        <div className="bg-slate-50 p-2.5 rounded-xl text-slate-500">
                            <Store size={20} />
                        </div>
                        <div>
                            <p className="text-xs text-slate-400 font-semibold uppercase tracking-wider">Dispensed By</p>
                            <p className="font-semibold text-slate-900">{transaction.pharmacy}</p>
                            <p className="text-xs text-slate-500">{transaction.branch}</p>
                        </div>
                    </div>

                    {/* Prescriber Info */}
                    <div className="flex items-start gap-3">
                        <div className="bg-slate-50 p-2.5 rounded-xl text-slate-500">
                            <Stethoscope size={20} />
                        </div>
                        <div>
                            <p className="text-xs text-slate-400 font-semibold uppercase tracking-wider">Prescribed By</p>
                            <p className="font-semibold text-slate-900">{transaction.doctor}</p>
                        </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                        {/* Date */}
                        <div className="flex items-start gap-3">
                            <div className="bg-slate-50 p-2.5 rounded-xl text-slate-500">
                                <Calendar size={20} />
                            </div>
                            <div>
                                <p className="text-xs text-slate-400 font-semibold uppercase tracking-wider">Date</p>
                                <p className="font-semibold text-slate-900">{transaction.date}</p>
                            </div>
                        </div>

                        {/* Cost */}
                        <div className="flex items-start gap-3">
                            <div className="bg-slate-50 p-2.5 rounded-xl text-slate-500">
                                <Banknote size={20} />
                            </div>
                            <div>
                                <p className="text-xs text-slate-400 font-semibold uppercase tracking-wider">Cost</p>
                                <p className="font-semibold text-slate-900">{transaction.price}</p>
                            </div>
                        </div>
                    </div>

                    <div className="pt-2">
                        <Button className="w-full bg-teal-50 text-teal-700 hover:bg-teal-100 border border-teal-200">
                            View Blockchain Receipt
                        </Button>
                    </div>
                </div>
            </motion.div>
        </motion.div>
    );
};

const mockTransactions = [
    {
        id: 1,
        medicine: 'Dolo 650',
        dosage: '650mg Tablet',
        pharmacy: 'Apollo Pharmacy',
        branch: 'Indiranagar, Bangalore',
        date: '24 Jan 2024',
        price: '₹32.00',
        doctor: 'Dr. Sharma'
    },
    {
        id: 2,
        medicine: 'Amoxicillin',
        dosage: '500mg Capsule',
        pharmacy: 'MedPlus',
        branch: 'Koramangala, Bangalore',
        date: '10 Jan 2024',
        price: '₹120.00',
        doctor: 'Dr. Anjali'
    },
    {
        id: 3,
        medicine: 'Cetirizine',
        dosage: '10mg Tablet',
        pharmacy: 'Apollo Pharmacy',
        branch: 'Indiranagar, Bangalore',
        date: '02 Jan 2024',
        price: '₹45.00',
        doctor: 'Dr. Rao'
    }
];

const MedicalRecords = () => {
    const [activeTab, setActiveTab] = useState('purchase'); // purchase | history
    const [selectedTx, setSelectedTx] = useState(null);

    return (
        <div className="mt-6 mb-24">
            <AnimatePresence>
                {selectedTx && (
                    <TransactionDetails transaction={selectedTx} onClose={() => setSelectedTx(null)} />
                )}
            </AnimatePresence>

            {/* Tabs */}
            <div className="flex p-1 bg-slate-200/50 rounded-xl mb-6">
                <button
                    className={cn(
                        "flex-1 py-2 text-sm font-medium rounded-lg transition-all",
                        activeTab === 'purchase' ? "bg-white shadow-sm text-teal-800" : "text-slate-500 hover:text-slate-700"
                    )}
                    onClick={() => setActiveTab('purchase')}
                >
                    Purchase History
                </button>
                <button
                    className={cn(
                        "flex-1 py-2 text-sm font-medium rounded-lg transition-all",
                        activeTab === 'history' ? "bg-white shadow-sm text-teal-800" : "text-slate-500 hover:text-slate-700"
                    )}
                    onClick={() => setActiveTab('history')}
                >
                    Medical History
                </button>
            </div>

            {activeTab === 'purchase' && (
                <div className="space-y-4">
                    {/* Pending Alert */}
                    <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
                        <Card className="border-orange-200 bg-orange-50/50">
                            <div className="p-4 flex gap-3 items-start">
                                <AlertCircle className="text-orange-600 shrink-0 mt-0.5" size={20} />
                                <div>
                                    <h4 className="font-semibold text-slate-800 text-sm">Action Required</h4>
                                    <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                                        <span className="font-medium text-slate-900">Dr. Sharma</span> prescribed 3 medicines.
                                        <br />Visit a pharmacy to fulfill.
                                    </p>
                                </div>
                            </div>
                        </Card>
                    </motion.div>

                    {/* History List */}
                    <div className="space-y-3">
                        <h3 className="text-sm font-semibold text-slate-500 px-1">Recent Transactions</h3>

                        {mockTransactions.map((item, i) => (
                            <motion.div
                                key={item.id}
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: i * 0.1 }}
                            >
                                <div
                                    onClick={() => setSelectedTx(item)}
                                    className="group flex items-center justify-between p-4 bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-all cursor-pointer"
                                >
                                    <div className="flex items-center gap-3">
                                        <div className="w-12 h-12 rounded-2xl bg-teal-50 flex items-center justify-center text-teal-600 shrink-0">
                                            <Pill size={20} />
                                        </div>
                                        <div>
                                            {/* Main Title: Medicine Name */}
                                            <h4 className="text-base font-bold text-slate-900 leading-tight">
                                                {item.medicine}
                                            </h4>
                                            {/* Subtitle: Pharmacy Name */}
                                            <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2 mt-0.5">
                                                <span className="text-xs text-slate-500 font-medium">{item.pharmacy}</span>
                                                <span className="hidden sm:inline w-1 h-1 rounded-full bg-slate-300" />
                                                <span className="text-[10px] text-green-600 bg-green-50 px-1.5 py-0.5 rounded-full font-medium flex items-center w-fit gap-0.5">
                                                    <Check size={8} /> Verified
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                    <ChevronRight size={20} className="text-slate-300 group-hover:text-teal-600 transition-colors" />
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            )}

            {activeTab === 'history' && (
                <div className="flex flex-col items-center justify-center py-10 text-slate-400">
                    <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mb-4">
                        <ShieldCheck size={32} className="opacity-50" />
                    </div>
                    <p className="text-sm">Medical history details locked.</p>
                </div>
            )}
        </div>
    );
};

export default MedicalRecords;
