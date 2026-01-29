import React from 'react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Card } from '@/components/ui/card';
import { CalendarDays } from 'lucide-react';
import PageTransition from '@/components/ui/PageTransition';

const ActivityLogPage = () => {
    // Mock Data - Formatted for specific requirement
    const activities = [
        { id: 1, patient: "Rahul Deshmukh", diagnosis: "Viral Fever", date: "Jan 29", time: "10:30 AM" },
        { id: 2, patient: "Anita Sharma", diagnosis: "Hypertension", date: "Jan 29", time: "11:15 AM" },
        { id: 3, patient: "Vikram Singh", diagnosis: "Migraine", date: "Jan 28", time: "04:45 PM" },
        { id: 4, patient: "Sneha Patel", diagnosis: "Checkup", date: "Jan 28", time: "05:30 PM" },
        { id: 5, patient: "Arjun Kumar", diagnosis: "Asthma", date: "Jan 27", time: "09:00 AM" }
    ];

    return (
        <PageTransition className="px-4 py-6 pb-24">
            <div className="flex items-center justify-between mb-6">
                <h1 className="text-xl font-bold text-slate-900">Activity Log</h1>
                <div className="flex items-center gap-2 px-3 py-1.5 bg-slate-100 rounded-full text-xs font-semibold text-slate-600">
                    <CalendarDays size={14} /> This Week
                </div>
            </div>

            <Card className="overflow-hidden border border-slate-200 shadow-sm bg-white rounded-xl">
                <Table>
                    <TableHeader>
                        <TableRow className="bg-slate-50 hover:bg-slate-50 border-b border-slate-100">
                            <TableHead className="w-[120px] font-bold text-slate-500 text-xs uppercase">Patient</TableHead>
                            <TableHead className="font-bold text-slate-500 text-xs uppercase">Diagnosis</TableHead>
                            <TableHead className="text-right font-bold text-slate-500 text-xs uppercase">Date/Time</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {activities.map((activity) => (
                            <TableRow key={activity.id} className="border-b border-slate-50 last:border-0 hover:bg-slate-50/50">
                                <TableCell className="font-bold text-slate-800 text-sm">
                                    {activity.patient}
                                </TableCell>
                                <TableCell className="text-slate-600 text-sm">
                                    {activity.diagnosis}
                                </TableCell>
                                <TableCell className="text-right">
                                    <div className="flex flex-col items-end">
                                        <span className="text-xs font-semibold text-slate-700">{activity.date}</span>
                                        <span className="text-[10px] text-slate-400">{activity.time}</span>
                                    </div>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </Card>
        </PageTransition>
    );
};

export default ActivityLogPage;
