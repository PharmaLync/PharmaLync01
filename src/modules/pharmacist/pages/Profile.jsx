
import React from 'react';
import { UserCircle, LogOut } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

const Profile = () => {
    const navigate = useNavigate();

    return (
        <div className="p-6">
            <div className="flex flex-col items-center py-8">
                <div className="w-24 h-24 bg-teal-100 dark:bg-teal-900/30 rounded-full flex items-center justify-center text-teal-600 dark:text-teal-400 mb-4">
                    <UserCircle size={64} />
                </div>
                <h2 className="text-2xl font-bold text-slate-800 dark:text-slate-100">Lokesh Pharmacist</h2>
                <p className="text-slate-500 dark:text-slate-400">ID: PH-IND-8921</p>
                <div className="mt-2 px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 rounded-full text-xs font-bold">
                    Active Session
                </div>
            </div>

            <div className="bg-white dark:bg-slate-900 rounded-xl border border-slate-100 dark:border-slate-800 p-4 space-y-4">
                <div className="flex justify-between py-2 border-b border-slate-50 dark:border-slate-800">
                    <span className="text-slate-500 dark:text-slate-400">Branch</span>
                    <span className="font-medium text-slate-800 dark:text-slate-200">Indiranagar, BLR</span>
                </div>
                <div className="flex justify-between py-2 border-b border-slate-50 dark:border-slate-800">
                    <span className="text-slate-500 dark:text-slate-400">Shift</span>
                    <span className="font-medium text-slate-800 dark:text-slate-200">09:00 - 18:00</span>
                </div>
                <div className="flex justify-between py-2">
                    <span className="text-slate-500 dark:text-slate-400">Role</span>
                    <span className="font-medium text-slate-800 dark:text-slate-200">Senior Pharmacist</span>
                </div>
            </div>

            <Button variant="destructive" className="w-full mt-8" onClick={() => navigate('/login')}>
                <LogOut className="mr-2" size={18} /> Logout
            </Button>
        </div>
    );
}

export default Profile;
