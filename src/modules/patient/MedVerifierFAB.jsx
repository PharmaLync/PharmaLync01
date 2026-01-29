import React, { useState } from 'react';
import { Scan, ShieldCheck, X, Pill, Clock } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const MedVerifierFAB = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scanStep, setScanStep] = useState('camera'); // camera | result

    const handleScanClick = () => {
        setIsOpen(true);
        setScanStep('camera');
        // Simulate scan delay
        setTimeout(() => {
            setScanStep('result');
        }, 2000);
    };

    const closeScanner = () => {
        setIsOpen(false);
        setScanStep('camera');
    };

    return (
        <>
            {/* FAB - Z-Index bumped to be above BottomNav (z-50) */}
            <div className="fixed bottom-24 left-1/2 -translate-x-1/2 z-[60]">
                <Button
                    onClick={handleScanClick}
                    className="rounded-full w-14 h-14 bg-teal-700 dark:bg-teal-600 text-white shadow-lg flex items-center justify-center hover:bg-teal-800 dark:hover:bg-teal-700 hover:scale-110 transition-all border-4 border-slate-50 dark:border-slate-800 ring-2 ring-teal-100 dark:ring-teal-900"
                >
                    <Scan size={24} />
                </Button>
            </div>

            {/* Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[70] bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-4"
                    >
                        <div className="absolute top-4 right-4">
                            <button onClick={closeScanner} className="text-white bg-white/10 p-2 rounded-full hover:bg-white/20">
                                <X size={24} />
                            </button>
                        </div>

                        {scanStep === 'camera' && (
                            <motion.div
                                initial={{ scale: 0.9 }}
                                animate={{ scale: 1 }}
                                className="w-full max-w-sm aspect-square bg-black/50 rounded-3xl border border-white/30 relative overflow-hidden"
                            >
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <div className="w-64 h-64 border-2 border-white/50 rounded-2xl relative">
                                        {/* Scanning Line Animation */}
                                        <motion.div
                                            animate={{ top: ['0%', '100%', '0%'] }}
                                            transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
                                            className="absolute left-0 right-0 h-0.5 bg-medical-green shadow-[0_0_10px_#10B981]"
                                        />
                                    </div>
                                </div>
                                <div className="absolute bottom-6 w-full text-center text-white/80 font-medium tracking-wide">
                                    Align Med Strip QR
                                </div>
                            </motion.div>
                        )}

                        {scanStep === 'result' && (
                            <motion.div
                                initial={{ scale: 0.8, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                className="w-full max-w-sm"
                            >
                                <Card className="border-medical-green/50 bg-white/95 dark:bg-slate-900/95 backdrop-blur-xl shadow-2xl relative overflow-hidden dark:border-slate-700">
                                    <div className="absolute top-0 left-0 w-full h-1 bg-medical-green" />

                                    <div className="p-6 flex flex-col items-center">
                                        <motion.div
                                            initial={{ scale: 0, rotate: -45 }}
                                            animate={{ scale: 1, rotate: 0 }}
                                            className="w-16 h-16 bg-green-100 dark:bg-green-900/30 text-medical-green dark:text-green-400 rounded-full flex items-center justify-center mb-4"
                                        >
                                            <ShieldCheck size={32} />
                                        </motion.div>

                                        <h2 className="text-xl font-bold text-teal-900 dark:text-teal-100 mb-1">Authentic Medicine</h2>
                                        <p className="text-xs text-slate-500 dark:text-slate-400 uppercase tracking-widest mb-6">Verified by PharmaLync Ledger</p>

                                        <div className="w-full bg-slate-50 dark:bg-slate-800 rounded-xl p-4 border border-slate-100 dark:border-slate-700 flex flex-col gap-3">
                                            <div className="flex items-center gap-3">
                                                <div className="bg-teal-100 dark:bg-teal-900/30 text-teal-700 dark:text-teal-400 p-2 rounded-lg">
                                                    <Pill size={20} />
                                                </div>
                                                <div>
                                                    <h4 className="font-semibold text-slate-900 dark:text-slate-100">Dolo 650mg</h4>
                                                    <p className="text-xs text-slate-500 dark:text-slate-400">Batch #8922A • Exp: Dec 2026</p>
                                                </div>
                                            </div>

                                            <div className="h-px w-full bg-slate-200 dark:bg-slate-700" />

                                            <div className="flex justify-between items-center text-sm">
                                                <span className="text-slate-500 dark:text-slate-400">Schedule</span>
                                                <div className="flex gap-2">
                                                    <span className="px-2 py-0.5 rounded bg-yellow-100 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-400 text-xs font-medium flex items-center gap-1">
                                                        <Clock size={10} /> After Food
                                                    </span>
                                                </div>
                                            </div>
                                        </div>

                                        <Button className="w-full mt-6 bg-slate-900 dark:bg-teal-600 text-white hover:dark:bg-teal-700" onClick={closeScanner}>Done</Button>
                                    </div>
                                </Card>
                            </motion.div>
                        )}
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default MedVerifierFAB;
