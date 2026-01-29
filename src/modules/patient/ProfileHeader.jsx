import React from 'react';
import { Badge } from '@/components/ui/badge';
import { User, ShieldCheck } from 'lucide-react';

import Logo from '@/components/ui/Logo';

const ProfileHeader = () => {
    return (
        <header className="sticky top-0 z-40 w-full glass-header px-4 py-3 flex items-center justify-between">
            <div className="flex items-center gap-3">
                {/* Logo for brand identity */}
                <div className="sm:hidden">
                    <Logo variant="icon-only" size="sm" />
                </div>
                <div className="hidden sm:block">
                    <Logo size="sm" />
                </div>

                {/* Greeting */}
                <div className="flex flex-col border-l border-slate-200 pl-3 ml-1">
                    <span className="text-[10px] text-slate-500 font-medium uppercase tracking-wider">Welcome</span>
                    <span className="text-sm font-bold text-teal-900 leading-none">Harish</span>
                </div>
            </div>

            <div className="flex items-center gap-3">
                {/* Verification Badge */}
                <Badge variant="success" className="gap-1 hidden sm:flex">
                    <ShieldCheck size={12} />
                    <span>Aadhaar Verified</span>
                </Badge>
                {/* Mobile Badge version (icon only) */}
                <div className="sm:hidden text-medical-green bg-green-100 p-1.5 rounded-full">
                    <ShieldCheck size={16} />
                </div>

                {/* Avatar */}
                <div className="h-10 w-10 rounded-full bg-slate-200 overflow-hidden border-2 border-white shadow-sm ring-1 ring-teal-100">
                    <img
                        src="https://api.dicebear.com/7.x/avataaars/svg?seed=Harish"
                        alt="Profile"
                        className="h-full w-full object-cover"
                    />
                </div>
            </div>
        </header>
    );
};

export default ProfileHeader;
