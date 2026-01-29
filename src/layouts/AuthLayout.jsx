import React from 'react';
import { Outlet } from 'react-router-dom';

const AuthLayout = () => {
    return (
        <div className="min-h-screen bg-slate-50 flex items-center justify-center p-4">
            {/* Background Decoration */}
            <div className="absolute top-0 left-0 w-full h-[500px] bg-gradient-to-b from-teal-50 to-slate-50 -z-10" />

            <Outlet />
        </div>
    );
};

export default AuthLayout;
