import React from 'react';
import { Outlet, Link, useLocation } from 'react-router-dom';
import { QrCode, ClipboardList, UserCircle } from 'lucide-react';
import { cn } from '@/lib/utils';
import DoctorHeader from '../modules/doctor/DoctorHeader';

const DoctorLayout = () => {
    const location = useLocation();
    const currentPath = location.pathname;

    const navItems = [
        { icon: QrCode, label: 'Scan QR', path: '/doctor/scan' }, // Dashboard landing
        { icon: ClipboardList, label: 'Activity Log', path: '/doctor/activity' },
        { icon: UserCircle, label: 'Profile', path: '/doctor/profile' },
    ];

    return (
        <div className="min-h-screen bg-slate-50 dark:bg-slate-950 pb-20 transition-colors duration-300"> {/* pb-20 for bottom nav */}
            {/* Background Decoration */}
            <div className="absolute top-0 left-0 w-full h-[500px] bg-gradient-to-b from-teal-50 to-slate-50 dark:from-slate-900 dark:to-slate-950 -z-10 transition-colors duration-300" />

            <DoctorHeader />

            <main className="max-w-md mx-auto min-h-[calc(100vh-140px)]">
                <Outlet />
            </main>

            {/* Bottom Navigation */}
            <div className="fixed bottom-0 left-0 w-full bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 px-6 py-2 pb-6 z-50 flex justify-around items-center shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.05)] dark:shadow-none transition-colors duration-300">
                {navItems.map((item) => {
                    // Simple active check
                    const isActive = currentPath === item.path || (item.path === '/doctor/scan' && currentPath === '/doctor/dashboard');

                    return (
                        <Link
                            key={item.label}
                            to={item.path}
                            className="flex flex-col items-center gap-1 min-w-[64px]"
                        >
                            <div className={cn(
                                "p-2 rounded-xl transition-all duration-300",
                                isActive ? "bg-teal-50 dark:bg-teal-500/20 text-teal-700 dark:text-teal-400 translate-y-[-4px] shadow-sm" : "text-slate-400 dark:text-slate-600 hover:bg-slate-50 dark:hover:bg-slate-800"
                            )}>
                                <item.icon size={24} strokeWidth={isActive ? 2.5 : 2} />
                            </div>
                            <span className={cn(
                                "text-[10px] font-medium transition-colors",
                                isActive ? "text-teal-700 dark:text-teal-400" : "text-slate-400 dark:text-slate-600"
                            )}>
                                {item.label}
                            </span>
                        </Link>
                    );
                })}
            </div>
        </div>
    );
};

export default DoctorLayout;
