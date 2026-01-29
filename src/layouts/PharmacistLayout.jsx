import React from 'react';
import { Outlet } from 'react-router-dom';

// Simple wrapper for now, can be expanded
const PharmacistLayout = () => {
    return (
        <div className="min-h-screen bg-slate-50">
            <Outlet />
        </div>
    );
};

export default PharmacistLayout;
