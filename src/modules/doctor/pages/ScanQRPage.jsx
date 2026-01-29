import React, { useState, useEffect } from 'react';
import { QrCode, Search, User, ScanLine, Smartphone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import PageTransition from '@/components/ui/PageTransition';

const ScanQRPage = () => {
    const navigate = useNavigate();

    // Mock scan effect
    useEffect(() => {
        // Just purely visual simulation logic
        const timer = setTimeout(() => {
            // handleScanSuccess(); // Auto-trigger disabled for control in demo
        }, 3000);
        return () => clearTimeout(timer);
    }, []);

    const handleScanSuccess = () => {
        navigate('/doctor/patient/P-12345');
    };

    return (
        <PageTransition className="flex flex-col items-center justify-center min-h-[85vh] px-6 relative overflow-hidden">
            {/* Ambient Background */}
            <div className="absolute top-0 left-0 w-full h-full skew-y-12 opacity-30 pointer-events-none -z-10 bg-slate-50 dark:bg-slate-950">
                <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-teal-200/20 dark:bg-teal-900/10 rounded-full blur-[80px]" />
                <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-blue-200/20 dark:bg-blue-900/10 rounded-full blur-[80px]" />
            </div>

            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center mb-8"
            >
                <div className="inline-flex items-center gap-2 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-full px-4 py-1.5 shadow-sm text-xs font-semibold text-slate-500 mb-4">
                    <span className="w-2 h-2 rounded-full bg-teal-500 animate-pulse" />
                    Doctor Terminal Active
                </div>
                <h1 className="text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">Patient Identification</h1>
                <p className="text-slate-500 dark:text-slate-400 mt-2">Scan Digital ID or Access Card</p>
            </motion.div>

            {/* Scanner UI */}
            <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ type: "spring", stiffness: 200, damping: 25, delay: 0.1 }}
                className="relative w-80 h-80 rounded-[2.5rem] overflow-hidden shadow-2xl shadow-teal-900/20 border-[8px] border-slate-900 dark:border-slate-800 bg-slate-950 mb-10 group"
            >
                {/* Simulated Camera Feed */}
                <div className="absolute inset-0 bg-slate-900 flex items-center justify-center">
                    <div className="grid grid-cols-8 grid-rows-8 w-full h-full opacity-20">
                        {[...Array(64)].map((_, i) => (
                            <div key={i} className="border-[0.5px] border-white/5" />
                        ))}
                    </div>
                    <User className="text-slate-700 w-32 h-32 opacity-40 absolute z-0" strokeWidth={1} />
                </div>

                {/* HUD Overlay */}
                <div className="absolute inset-0 z-20 p-6 flex flex-col justify-between">
                    <div className="flex justify-between w-full opacity-60">
                        <div className="w-8 h-8 border-t-2 border-l-2 border-teal-400 rounded-tl-xl" />
                        <div className="w-8 h-8 border-t-2 border-r-2 border-teal-400 rounded-tr-xl" />
                    </div>

                    {/* Scanning Beam */}
                    <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-40 w-full flex items-center justify-center overflow-hidden pointer-events-none">
                        <motion.div
                            animate={{ top: ['10%', '90%', '10%'] }}
                            transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut" }}
                            className="absolute left-6 right-6 h-0.5 bg-teal-400 shadow-[0_0_20px_2px_rgba(45,212,191,0.6)] z-30"
                        >
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-teal-200 to-transparent opacity-80" />
                        </motion.div>
                        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 border border-teal-500/30 rounded-2xl animate-pulse" />
                    </div>

                    <div className="flex justify-between w-full opacity-60">
                        <div className="w-8 h-8 border-b-2 border-l-2 border-teal-400 rounded-bl-xl" />
                        <div className="w-8 h-8 border-b-2 border-r-2 border-teal-400 rounded-br-xl" />
                    </div>
                </div>

                {/* Status Text inside Camera */}
                <div className="absolute bottom-6 left-0 right-0 text-center z-30">
                    <span className="bg-black/60 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-mono text-teal-300 border border-teal-500/30">
                        SEARCHING FOR QR PATTERN...
                    </span>
                </div>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="w-full max-w-xs space-y-4"
            >
                <Button
                    onClick={handleScanSuccess}
                    className="w-full h-14 bg-slate-900 dark:bg-white dark:text-slate-900 text-white hover:bg-slate-800 rounded-2xl text-base font-semibold shadow-lg hover:shadow-xl transition-all hover:scale-[1.02] active:scale-[0.98]"
                >
                    <ScanLine className="mr-2" size={20} /> Simulate Scan
                </Button>

                <div className="relative py-2">
                    <div className="absolute inset-0 flex items-center">
                        <span className="w-full border-t border-slate-200 dark:border-slate-800" />
                    </div>
                </div>

                <div className="group relative">
                    <input
                        type="text"
                        placeholder="Or enter Patient ID manually"
                        className="w-full px-4 py-3.5 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-500/20 text-center text-sm transition-all"
                    />
                    <div className="absolute right-3 top-1/2 -translate-y-1/2 bg-slate-100 dark:bg-slate-800 p-1.5 rounded-lg text-slate-400 cursor-pointer hover:bg-teal-50 hover:text-teal-600 transition-colors">
                        <Search size={16} />
                    </div>
                </div>
            </motion.div>
        </PageTransition>
    );
};

export default ScanQRPage;
