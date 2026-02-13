import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '@/context/ThemeContext';
import {
    Bell,
    Moon,
    Sun,
    LogOut,
    User,
    ClipboardList,
} from 'lucide-react';
import Logo from '@/components/ui/Logo';
import { Link } from 'react-router-dom';

const PharmacistHeader = () => {
    const [showMenu, setShowMenu] = useState(false);
    const { theme, toggleTheme } = useTheme();

    return (
        <header className="sticky top-0 z-50 w-full glass-header px-6 py-3 flex items-center justify-between border-b border-slate-200 dark:border-slate-800 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md transition-colors duration-300">
            <div className="flex items-center gap-3">
                <Logo size="sm" />
                <div className="hidden sm:block">
                    <span className="text-xs text-slate-500 dark:text-slate-400 font-medium ml-2">Pharmacist Portal</span>
                </div>
            </div>

            <div className="flex items-center gap-4">
                <Button variant="ghost" size="icon" className="relative text-slate-500 hover:text-teal-700 dark:text-slate-400 dark:hover:text-teal-400">
                    <Bell size={20} />
                    <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full border border-white dark:border-slate-900" />
                </Button>

                <div className="h-8 w-px bg-slate-200 dark:bg-slate-700" />

                <div className="flex items-center gap-3">
                    <div className="text-right hidden sm:block">
                        <p className="text-sm font-semibold text-slate-900 dark:text-slate-100">C.P. Gupta</p>
                        <p className="text-xs text-slate-500 dark:text-slate-400">Senior Pharmacist</p>
                    </div>

                    {/* Profile Dropdown Trigger */}
                    <div className="relative">
                        <button
                            onClick={() => setShowMenu(!showMenu)}
                            className="w-10 h-10 rounded-full bg-slate-200 dark:bg-slate-700 overflow-hidden ring-2 ring-white dark:ring-slate-800 shadow-sm transition-transform active:scale-95 focus:outline-none focus:ring-2 focus:ring-teal-400"
                        >
                            <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Pharmacist" alt="Pharmacist" />
                        </button>

                        {/* Profile Dropdown Menu */}
                        <AnimatePresence>
                            {showMenu && (
                                <div className="absolute top-12 right-0 w-64 z-50">
                                    <div
                                        className="fixed inset-0 z-40"
                                        onClick={() => setShowMenu(false)}
                                    />
                                    <motion.div
                                        initial={{ opacity: 0, scale: 0.95, y: -10 }}
                                        animate={{ opacity: 1, scale: 1, y: 0 }}
                                        exit={{ opacity: 0, scale: 0.95, y: -10 }}
                                        className="relative z-50 bg-white dark:bg-slate-900 rounded-xl shadow-xl border border-slate-200 dark:border-slate-800 overflow-hidden py-1"
                                    >
                                        <div className="px-4 py-3 border-b border-slate-100 dark:border-slate-800 sm:hidden">
                                            <p className="text-sm font-semibold text-slate-900 dark:text-slate-100">C.P. Gupta</p>
                                            <p className="text-xs text-slate-500 dark:text-slate-400">Senior Pharmacist</p>
                                        </div>

                                        {/* Theme Toggle */}
                                        <button
                                            onClick={(e) => {
                                                e.stopPropagation();
                                                toggleTheme();
                                            }}
                                            className="w-full text-left px-4 py-3 text-sm font-medium text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-800 flex items-center justify-between group"
                                        >
                                            <span className="flex items-center gap-3">
                                                {theme === 'dark' ? <Moon size={16} className="text-indigo-400" /> : <Sun size={16} className="text-orange-400" />}
                                                Appearance
                                            </span>

                                            {/* Visual Switch */}
                                            <div className={`w-9 h-5 rounded-full relative transition-colors duration-300 ${theme === 'dark' ? 'bg-teal-600' : 'bg-slate-300'}`}>
                                                <div className={`absolute top-1 left-1 w-3 h-3 rounded-full bg-white transition-transform duration-300 ${theme === 'dark' ? 'translate-x-4' : 'translate-x-0'}`} />
                                            </div>
                                        </button>

                                        <div className="h-px bg-slate-100 dark:bg-slate-800 my-1" />

                                        <Link
                                            to="/pharmacist/profile"
                                            onClick={() => setShowMenu(false)}
                                            className="w-full text-left px-4 py-3 text-sm font-medium text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-800 flex items-center gap-3"
                                        >
                                            <User size={16} className="text-teal-500" />
                                            My Profile
                                        </Link>

                                        <Link
                                            to="/pharmacist/history"
                                            onClick={() => setShowMenu(false)}
                                            className="w-full text-left px-4 py-3 text-sm font-medium text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-800 flex items-center gap-3"
                                        >
                                            <ClipboardList size={16} className="text-blue-500" />
                                            History
                                        </Link>

                                        <div className="h-px bg-slate-100 dark:bg-slate-800 my-1" />

                                        {/* Sign Out */}
                                        <button className="w-full text-left px-4 py-3 text-sm font-medium text-slate-500 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 flex items-center gap-3">
                                            <LogOut size={16} />
                                            Sign Out
                                        </button>

                                    </motion.div>
                                </div>
                            )}
                        </AnimatePresence>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default PharmacistHeader;
