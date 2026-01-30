import React from 'react';
import { Card } from '@/components/ui/card';
import { Activity, Calendar, CheckCircle2, Clock, FileText, Stethoscope } from 'lucide-react';
import { motion } from 'framer-motion';

const ActivityLogPage = () => {
    const activities = [
        {
            id: 1,
            type: 'diagnosis',
            title: 'Diagnosed Patient #PT-8821',
            description: 'Viral Fever - Prescribed Paracetamol & Rest',
            time: '10:30 AM',
            date: 'Today',
            icon: Stethoscope,
            color: 'text-blue-600',
            bg: 'bg-blue-100'
        },
        {
            id: 2,
            type: 'prescription',
            title: 'Issued Prescription',
            description: 'Patient #PT-9923 - Amoxicillin 500mg',
            time: '11:15 AM',
            date: 'Today',
            icon: FileText,
            color: 'text-teal-600',
            bg: 'bg-teal-100'
        },
        {
            id: 3,
            type: 'registration',
            title: 'New Patient Registration',
            description: 'Rahul Verma assigned to your queue',
            time: '09:00 AM',
            date: 'Today',
            icon: CheckCircle2,
            color: 'text-green-600',
            bg: 'bg-green-100'
        },
        {
            id: 4,
            type: 'diagnosis',
            title: 'Follow-up Consultation',
            description: 'Patient #PT-7712 - Recovery satisfactory',
            time: '04:45 PM',
            date: 'Yesterday',
            icon: Stethoscope,
            color: 'text-blue-600',
            bg: 'bg-blue-100'
        },
        {
            id: 5,
            type: 'prescription',
            title: 'Prescription Renewal',
            description: 'Patient #PT-5521 - Metformin 500mg',
            time: '02:30 PM',
            date: 'Yesterday',
            icon: FileText,
            color: 'text-teal-600',
            bg: 'bg-teal-100'
        }
    ];

    return (
        <div className="px-4 py-6 pb-24 space-y-6">
            <h1 className="text-xl font-bold text-slate-900 flex items-center gap-2">
                <Activity className="text-teal-600" />
                Weekly Activity Log
            </h1>

            <div className="space-y-4">
                {activities.map((item, index) => (
                    <motion.div
                        key={item.id}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                    >
                        <Card className="p-4 border-0 shadow-sm flex gap-4 items-start hover:bg-slate-50 transition-colors">
                            <div className={`p-3 rounded-full ${item.bg} ${item.color} shrink-0`}>
                                <item.icon size={20} />
                            </div>
                            <div className="flex-1">
                                <div className="flex justify-between items-start">
                                    <h3 className="font-semibold text-slate-900">{item.title}</h3>
                                    <span className="text-xs font-medium text-slate-400 bg-slate-100 px-2 py-1 rounded-full flex items-center gap-1">
                                        <Clock size={10} /> {item.time}
                                    </span>
                                </div>
                                <p className="text-sm text-slate-600 mt-1">{item.description}</p>
                                <div className="mt-2 flex items-center gap-1 text-xs text-slate-400">
                                    <Calendar size={12} />
                                    <span>{item.date}</span>
                                </div>
                            </div>
                        </Card>
                    </motion.div>
                ))}
            </div>

            <div className="text-center pt-4">
                <p className="text-xs text-slate-400">Showing last 7 days of activity</p>
            </div>
        </div>
    );
};

export default ActivityLogPage;
