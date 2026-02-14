import React from 'react';
import { motion } from 'framer-motion';
import { X, Calendar, User, Building2, Stethoscope, CheckCircle2 } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';

const PatientHistoryModal = ({ isOpen, onClose, history }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm">
            <motion.div
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.95, opacity: 0 }}
                className="bg-white dark:bg-slate-900 w-full max-w-lg rounded-2xl overflow-hidden shadow-2xl flex flex-col max-h-[85vh] border border-slate-200 dark:border-slate-800"
            >
                {/* Header */}
                <div className="p-4 border-b border-slate-100 dark:border-slate-800 flex justify-between items-center bg-slate-50 dark:bg-slate-950/50">
                    <h3 className="font-bold text-slate-800 dark:text-slate-100 flex items-center gap-2">
                        <Stethoscope size={18} className="text-teal-600 dark:text-teal-500" />
                        Patient Medical History
                    </h3>
                    <button
                        onClick={onClose}
                        className="p-1 rounded-full hover:bg-slate-200 dark:hover:bg-slate-800 text-slate-500 dark:text-slate-400 transition-colors"
                    >
                        <X size={20} />
                    </button>
                </div>

                {/* Content */}
                <div className="flex-1 overflow-y-auto p-4 space-y-4">
                    {history && history.length > 0 ? (
                        history.map((record) => (
                            <Card key={record.id} className="p-4 border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-sm">
                                <div className="flex justify-between items-start mb-3">
                                    <div>
                                        <h4 className="font-bold text-slate-900 dark:text-slate-100 text-base">{record.diagnosis}</h4>
                                        <p className="text-xs text-slate-500 dark:text-slate-400 font-medium mt-0.5 flex items-center gap-1">
                                            <User size={10} /> {record.doctor} {record.isSelf && <span className="text-blue-600 dark:text-blue-400">(You)</span>}
                                        </p>
                                        <p className="text-[10px] text-slate-400 dark:text-slate-500 flex items-center gap-1 mt-0.5">
                                            <Building2 size={10} /> {record.hospital}
                                        </p>
                                    </div>
                                    <Badge variant={record.status === 'Active' ? 'default' : 'secondary'} className={record.status === 'Active' ? "bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 hover:bg-green-100 dark:hover:bg-green-900/30 border-none" : "bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 border-none"}>
                                        {record.status}
                                    </Badge>
                                </div>

                                <div className="bg-slate-50 dark:bg-slate-800/50 rounded-lg p-3 text-sm border border-slate-100 dark:border-slate-800">
                                    <p className="text-xs font-bold text-slate-400 dark:text-slate-500 uppercase mb-2">Prescription</p>
                                    <ul className="space-y-1">
                                        {record.medicines.map((med, idx) => (
                                            <li key={idx} className="flex items-center gap-2 text-slate-700 dark:text-slate-300">
                                                <CheckCircle2 size={12} className="text-slate-400 dark:text-slate-500" /> {med}
                                            </li>
                                        ))}
                                    </ul>
                                    <div className="mt-3 pt-2 border-t border-slate-200 dark:border-slate-700 flex justify-between items-center">
                                        <div className="flex items-center gap-1 text-[10px] text-slate-400 dark:text-slate-500">
                                            <Calendar size={10} /> {record.date}
                                        </div>
                                        {/* Mock Signature */}
                                        <div className="text-[10px] font-handwriting text-slate-600 dark:text-slate-400 italic">Signed: {record.doctor}</div>
                                    </div>
                                </div>
                            </Card>
                        ))
                    ) : (
                        <div className="text-center py-8 text-slate-400 dark:text-slate-500">
                            <p>No medical history found.</p>
                        </div>
                    )}
                </div>
            </motion.div>
        </div>
    );
};

export default PatientHistoryModal;
