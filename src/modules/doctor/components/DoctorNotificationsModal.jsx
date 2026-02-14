import React from 'react';
import { motion } from 'framer-motion';
import { X, Bell, UserPlus, ClipboardList, AlertTriangle } from 'lucide-react';

const DoctorNotificationsModal = ({ isOpen, onClose }) => {
    // Mock Data for Doctor Notifications
    const notifications = [
        {
            id: 1,
            type: 'alert',
            title: 'Critical Lab Result',
            message: 'Patient Harish Kumar (ID: P-9921) has critical blood test results.',
            time: '15 mins ago',
            read: false,
            icon: AlertTriangle,
            color: 'text-red-500',
            bgColor: 'bg-red-50 dark:bg-red-900/20'
        },
        {
            id: 2,
            type: 'consultation',
            title: 'New Appointment',
            message: 'New consultation scheduled with Anita Roy for tomorrow at 11:00 AM.',
            time: '1 hour ago',
            read: false,
            icon: UserPlus,
            color: 'text-blue-500',
            bgColor: 'bg-blue-50 dark:bg-blue-900/20'
        },
        {
            id: 3,
            type: 'report',
            title: 'Daily Activity Report',
            message: 'Your activity summary for yesterday is ready for review.',
            time: '4 hours ago',
            read: true,
            icon: ClipboardList,
            color: 'text-teal-500',
            bgColor: 'bg-teal-50 dark:bg-teal-900/20'
        }
    ];

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm">
            <motion.div
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.95, opacity: 0 }}
                className="bg-white dark:bg-slate-900 w-full max-w-md rounded-2xl overflow-hidden shadow-2xl flex flex-col max-h-[80vh] border border-slate-200 dark:border-slate-800"
            >
                {/* Header */}
                <div className="p-4 border-b border-slate-100 dark:border-slate-800 flex justify-between items-center bg-slate-50 dark:bg-slate-950/50">
                    <h3 className="font-bold text-slate-800 dark:text-slate-100 flex items-center gap-2">
                        <Bell size={18} className="text-teal-600 dark:text-teal-500" /> Notifications
                    </h3>
                    <button onClick={onClose} className="p-1 rounded-full hover:bg-slate-200 dark:hover:bg-slate-800 text-slate-500 dark:text-slate-400 transition-colors">
                        <X size={20} />
                    </button>
                </div>

                {/* Notifications List */}
                <div className="flex-1 overflow-y-auto p-4 space-y-3">
                    {notifications.length > 0 ? (
                        notifications.map((notification) => (
                            <div
                                key={notification.id}
                                className={`flex items-start gap-3 p-3 rounded-xl border transition-colors ${notification.read ? 'bg-white dark:bg-slate-900 border-slate-100 dark:border-slate-800' : 'bg-teal-50/30 dark:bg-teal-900/10 border-teal-100 dark:border-teal-900/30'}`}
                            >
                                <div className={`p-2 rounded-lg ${notification.bgColor} ${notification.color}`}>
                                    <notification.icon size={18} />
                                </div>
                                <div className="flex-1">
                                    <h4 className={`text-sm font-semibold ${notification.read ? 'text-slate-700 dark:text-slate-300' : 'text-slate-900 dark:text-slate-100'}`}>
                                        {notification.title}
                                    </h4>
                                    <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 leading-relaxed">
                                        {notification.message}
                                    </p>
                                    <p className="text-[10px] text-slate-400 dark:text-slate-500 mt-2 font-medium">
                                        {notification.time}
                                    </p>
                                </div>
                                {!notification.read && (
                                    <div className="w-2 h-2 rounded-full bg-teal-500 mt-1.5" />
                                )}
                            </div>
                        ))
                    ) : (
                        <div className="text-center py-8 text-slate-400 dark:text-slate-500">
                            <p>No new notifications</p>
                        </div>
                    )}
                </div>
            </motion.div>
        </div>
    );
};

export default DoctorNotificationsModal;
