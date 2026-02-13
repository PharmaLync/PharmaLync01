
import React from 'react';
import { Outlet, NavLink, useLocation } from 'react-router-dom';
import { QrCode, ClipboardList, Package, User } from 'lucide-react';
import Logo from '@/components/ui/Logo';
import PharmacistHeader from '@/modules/pharmacist/PharmacistHeader';

const PharmacistLayout = () => {
    const location = useLocation();

    const tabs = [
        { path: '/pharmacist/scan', icon: QrCode, label: 'Scan' },
        { path: '/pharmacist/stock', icon: Package, label: 'Stock' },
        { path: '/pharmacist/history', icon: ClipboardList, label: 'History' },
        { path: '/pharmacist/profile', icon: User, label: 'Profile' },
    ];

    // Check if we are in the Dispense flow (which behaves like a sub-page of Scan)
    // If so, we might want to keep the 'Scan' tab active or hide the nav if strictly requested.
    // However, user said "Navbar must NEVER disappear".
    // "Scan" tab should probably be active even when in /dispense.
    const getActiveTab = (path) => {
        if (location.pathname.includes('/pharmacist/dispense')) return '/pharmacist/scan';
        return path;
    };

    return (
        <div className="min-h-screen bg-slate-50 dark:bg-slate-950 flex flex-col font-sans transition-colors duration-300">
            <div className="absolute top-0 left-0 w-full h-[300px] bg-gradient-to-b from-teal-50 to-slate-50 dark:from-slate-900 dark:to-slate-950 -z-10 transition-colors duration-300" />

            <PharmacistHeader />

            {/* Main Content Area */}
            <main className="flex-1 overflow-y-auto">
                <Outlet />
            </main>

            {/* Bottom Navigation */}
            <nav className="bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 fixed bottom-0 w-full z-50 pb-safe transition-colors duration-300">
                <div className="flex justify-around items-center h-16">
                    {tabs.map((tab) => {
                        const Icon = tab.icon;
                        const isActive = getActiveTab(tab.path) === tab.path || location.pathname === tab.path;

                        return (
                            <NavLink
                                key={tab.path}
                                to={tab.path}
                                className={`flex flex-col items-center justify-center w-full h-full space-y-1 transition-colors ${isActive ? 'text-teal-600 dark:text-teal-400' : 'text-slate-400 dark:text-slate-500 hover:text-slate-600 dark:hover:text-slate-300'}`}
                            >
                                <div className={`p-1 rounded-xl transition-all ${isActive ? 'bg-teal-50 dark:bg-teal-500/10' : 'bg-transparent'}`}>
                                    <Icon size={22} strokeWidth={isActive ? 2.5 : 2} />
                                </div>
                                <span className="text-[10px] font-bold">{tab.label}</span>
                            </NavLink>
                        );
                    })}
                </div>
            </nav>
        </div>
    );
};

export default PharmacistLayout;
