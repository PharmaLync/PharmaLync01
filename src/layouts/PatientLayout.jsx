import React, { useState } from 'react';
import { Outlet, useNavigate, useLocation } from 'react-router-dom';
import { Home, User, Stethoscope, Pill } from 'lucide-react';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';

const BottomNav = () => {
    const navigate = useNavigate();
    const location = useLocation();

    const navItems = [
        { id: 'dashboard', icon: Home, label: 'Home', path: '/patient/dashboard' },
        { id: 'log', icon: Pill, label: 'Medicine Log', path: '/patient/medicine-log' }, // New Tab
        { id: 'profile', icon: User, label: 'Profile', path: '/patient/profile' }
    ];

    return (
        <div className="fixed bottom-0 left-0 w-full bg-white border-t border-slate-100 px-6 py-2 pb-6 z-50 flex justify-around items-center shadow-[0_-4px_20px_rgba(0,0,0,0.05)]">
            {navItems.map((item) => {
                const isActive = location.pathname === item.path;
                return (
                    <button
                        key={item.id}
                        onClick={() => navigate(item.path)}
                        className="flex flex-col items-center gap-1.5 relative w-16"
                    >
                        {isActive && (
                            <motion.div
                                layoutId="nav-bg"
                                className="absolute -top-2 w-10 h-1 bg-teal-600 rounded-b-lg"
                            />
                        )}
                        <item.icon
                            size={24}
                            className={cn(
                                "transition-colors duration-300",
                                isActive ? "text-teal-700" : "text-slate-400"
                            )}
                        />
                        <span className={cn(
                            "text-[10px] font-medium transition-colors",
                            isActive ? "text-teal-900" : "text-slate-400"
                        )}>
                            {item.label}
                        </span>
                    </button>
                )
            })}
        </div>
    );
};

const PatientLayout = () => {
    return (
        <div className="min-h-screen bg-slate-50 pb-24">
            {/* Reuse the background decoration */}
            <div className="absolute top-0 left-0 w-full h-[500px] bg-gradient-to-b from-teal-50 to-slate-50 -z-10" />

            <Outlet />

            <BottomNav />
        </div>
    );
};

export default PatientLayout;
