import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, FileHeart, AlertTriangle } from 'lucide-react';
import { Card } from '@/components/ui/card';

const MedicalHistoryModal = ({ isOpen, onClose }) => {
    if (!isOpen) return null;

    // Mock Data
    const allergies = [
        { id: 1, allergen: 'Penicillin', severity: 'High', reaction: 'Anaphylaxis' },
        { id: 2, allergen: 'Peanuts', severity: 'Moderate', reaction: 'Hives' }
    ];

    const history = [
        { id: 1, condition: 'Type 2 Diabetes', diagnosed: '2019', status: 'Managed' },
        { id: 2, condition: 'Hypertension', diagnosed: '2021', status: 'Active' },
        { id: 3, condition: 'Appendectomy', diagnosed: '2015', status: 'Resolved' }
    ];

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm">
            <motion.div
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.95, opacity: 0 }}
                className="bg-white dark:bg-slate-900 w-full max-w-md rounded-2xl overflow-hidden shadow-2xl flex flex-col max-h-[85vh] border border-slate-200 dark:border-slate-800"
            >
                {/* Header */}
                <div className="p-4 border-b border-slate-100 dark:border-slate-800 flex justify-between items-center bg-slate-50 dark:bg-slate-950/50">
                    <h3 className="font-bold text-slate-800 dark:text-slate-100 flex items-center gap-2">
                        <FileHeart size={18} className="text-teal-600 dark:text-teal-500" />
                        Medical History
                    </h3>
                    <button
                        onClick={onClose}
                        className="p-1 rounded-full hover:bg-slate-200 dark:hover:bg-slate-800 text-slate-500 dark:text-slate-400 transition-colors"
                    >
                        <X size={20} />
                    </button>
                </div>

                {/* Content */}
                <div className="flex-1 overflow-y-auto p-4 space-y-6">

                    {/* Allergies Section */}
                    <section>
                        <h4 className="text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider mb-3 flex items-center gap-2">
                            <AlertTriangle size={14} className="text-orange-500" /> Allergy History
                        </h4>
                        <div className="space-y-3">
                            {allergies.map(item => (
                                <div key={item.id} className="p-3 rounded-xl border border-orange-100 dark:border-orange-900/30 bg-orange-50/50 dark:bg-orange-950/20">
                                    <div className="flex justify-between items-start">
                                        <p className="font-bold text-slate-800 dark:text-slate-200">{item.allergen}</p>
                                        <span className="text-[10px] bg-orange-100 dark:bg-orange-900/40 text-orange-700 dark:text-orange-400 px-2 py-0.5 rounded-full font-medium">
                                            {item.severity}
                                        </span>
                                    </div>
                                    <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">Reaction: {item.reaction}</p>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* Past History Section */}
                    <section>
                        <h4 className="text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider mb-3">Past Medical History</h4>
                        <div className="space-y-3">
                            {history.map(item => (
                                <div key={item.id} className="flex items-center justify-between p-3 border border-slate-100 dark:border-slate-800 rounded-xl bg-slate-50/30 dark:bg-slate-900/30">
                                    <div>
                                        <p className="font-medium text-slate-700 dark:text-slate-300 text-sm">{item.condition}</p>
                                        <p className="text-xs text-slate-400 dark:text-slate-500">Diagnosed: {item.diagnosed}</p>
                                    </div>
                                    <span className={`text-[10px] font-medium px-2 py-1 rounded ${item.status === 'Active'
                                            ? 'bg-blue-50 text-blue-600 dark:bg-blue-900/20 dark:text-blue-400'
                                            : 'bg-slate-100 text-slate-500 dark:bg-slate-800 dark:text-slate-400'
                                        }`}>
                                        {item.status}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </section>

                </div>
            </motion.div>
        </div>
    );
};

export default MedicalHistoryModal;
