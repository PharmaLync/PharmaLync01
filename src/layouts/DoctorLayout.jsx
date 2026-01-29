import React from 'react';
import { Outlet } from 'react-router-dom';
import { Stethoscope, Bell, Settings, LogOut } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

import Logo from '@/components/ui/Logo';

const DoctorHeader = () => {
    return (
        <header className="sticky top-0 z-50 w-full glass-header px-6 py-3 flex items-center justify-between">
            <div className="flex items-center gap-3">
                <Logo size="sm" />
                <div className="hidden sm:block">
                    {/* <span className="text-xs text-slate-500 font-medium ml-2">Doctor Portal</span> */}
                </div>
            </div>

            <div className="flex items-center gap-4">
                <Button variant="ghost" size="icon" className="relative text-slate-500 hover:text-teal-700">
                    <Bell size={20} />
                    <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full border border-white" />
                </Button>

                <div className="h-8 w-px bg-slate-200" />

                <div className="flex items-center gap-3">
                    <div className="text-right hidden sm:block">
                        <p className="text-sm font-semibold text-slate-900">Dr. Sharma</p>
                        <p className="text-xs text-slate-500">General Physician</p>
                    </div>
                    <div className="w-10 h-10 rounded-full bg-slate-200 overflow-hidden ring-2 ring-white shadow-sm">
                        <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Doctor" alt="Doc" />
                    </div>
                </div>
            </div>
        </header>
    );
};

const DoctorLayout = () => {
    return (
        <div className="min-h-screen bg-slate-50">
            <DoctorHeader />
            <main>
                <Outlet />
            </main>
        </div>
    );
};

export default DoctorLayout;
