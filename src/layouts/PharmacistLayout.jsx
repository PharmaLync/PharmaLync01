
import React from 'react';
import { Outlet, NavLink, useLocation } from 'react-router-dom';
import { QrCode, ClipboardList, Package, User } from 'lucide-react';
import Logo from '@/components/ui/Logo';

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
        <div className="min-h-screen bg-slate-50 flex flex-col font-sans">
            {/* Top Bar - Minimal */}
            <header className="bg-white border-b border-slate-100 px-4 py-3 flex items-center justify-between sticky top-0 z-10">
                <Logo size="sm" />
                <span className="text-xs font-medium text-slate-400">POS v2.0</span>
            </header>

            {/* Main Content Area */}
            <main className="flex-1 overflow-y-auto">
                <Outlet />
            </main>

            {/* Bottom Navigation */}
            <div className="bg-white border-t border-slate-200 fixed bottom-0 w-full z-50 pb-safe px-6 py-2">
                <div className="flex justify-around items-center h-16">
                    {tabs.map((tab) => {
                        const Icon = tab.icon;
                        const isActive = getActiveTab(tab.path) === tab.path || location.pathname === tab.path;

                        return (
                            <NavLink
                                key={tab.path}
                                to={tab.path}
                                className="flex flex-col items-center gap-1 min-w-[64px]"
                            >
                                <div className={`p-2 rounded-xl transition-all duration-300 ${isActive ? 'bg-teal-50 text-teal-700 translate-y-[-4px] shadow-sm' : 'text-slate-400 hover:bg-slate-50'}`}>
                                    <Icon size={24} strokeWidth={isActive ? 2.5 : 2} />
                                </div>
                                <span className={`text-[10px] font-medium transition-colors ${isActive ? 'text-teal-700' : 'text-slate-400'}`}>
                                    {tab.label}
                                </span>
                            </NavLink>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default PharmacistLayout;
