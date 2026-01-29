import React, { useState } from 'react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Card } from '@/components/ui/card';
import { CalendarDays, X, CheckCircle2 } from 'lucide-react';
import PageTransition from '@/components/ui/PageTransition';
import { motion, AnimatePresence } from 'framer-motion';

const ActivityLogPage = () => {
    const [selectedActivity, setSelectedActivity] = useState(null);

    // Mock Data
    const activities = [
        {
            id: 1,
            patient: "Rahul Deshmukh",
            diagnosis: "Viral Fever",
            date: "Jan 29",
            time: "10:30 AM",
            details: {
                medicines: [
                    { name: 'Dolo 650mg', dosage: '1-0-1', duration: '5 Days' },
                    { name: 'Cetirizine 10mg', dosage: '0-0-1', duration: '3 Days' }
                ],
                notes: "Patient reported high fever and body ache. Hydration advised."
            }
        },
        {
            id: 2,
            patient: "Anita Sharma",
            diagnosis: "Hypertension",
            date: "Jan 29",
            time: "11:15 AM",
            details: {
                medicines: [
                    { name: 'Telma 40', dosage: '1-0-0', duration: '30 Days' }
                ],
                notes: "BP 150/90. advised salt restriction."
            }
        },
        {
            id: 3,
            patient: "Vikram Singh",
            diagnosis: "Migraine",
            date: "Jan 28",
            time: "04:45 PM",
            details: {
                medicines: [
                    { name: 'Naproxen 500', dosage: 'As needed', duration: 'SOS' },
                    { name: 'Rizact 10', dosage: 'SOS', duration: 'SOS' }
                ],
                notes: "Severe headache with aura. Dark room rest recommended."
            }
        },
        {
            id: 4,
            patient: "Sneha Patel",
            diagnosis: "Checkup",
            date: "Jan 28",
            time: "05:30 PM",
            details: {
                medicines: [],
                notes: "Routine health checkup. Vitals stable."
            }
        },
        {
            id: 5,
            patient: "Arjun Kumar",
            diagnosis: "Asthma",
            date: "Jan 27",
            time: "09:00 AM",
            details: {
                medicines: [
                    { name: 'Levolin Inhaler', dosage: '2 puffs', duration: 'SOS' },
                    { name: 'Montair LC', dosage: '0-0-1', duration: '15 Days' }
                ],
                notes: "History of wheezing. Triggered by cold weather."
            }
        }
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
                            <TableRow
                                key={activity.id}
                                className="border-b border-slate-50 last:border-0 hover:bg-slate-50/50 cursor-pointer active:bg-slate-100 transition-colors"
                                onClick={() => setSelectedActivity(activity)}
                            >
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

            {/* Detailed View Modal */}
            <AnimatePresence>
                {selectedActivity && (
                    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/40 backdrop-blur-sm" onClick={() => setSelectedActivity(null)}>
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.95 }}
                            transition={{ duration: 0.2 }}
                            className="bg-white w-full max-w-sm rounded-2xl shadow-2xl overflow-hidden"
                            onClick={e => e.stopPropagation()}
                        >
                            <div className="p-6 bg-slate-50 border-b border-slate-100 flex justify-between items-start">
                                <div>
                                    <h3 className="text-lg font-bold text-slate-900">Prescription Details</h3>
                                    <p className="text-xs text-slate-500 font-medium">Issued: {selectedActivity.date} at {selectedActivity.time}</p>
                                </div>
                                <button onClick={() => setSelectedActivity(null)} className="p-1 rounded-full hover:bg-slate-200 text-slate-400 hover:text-slate-600 transition-colors">
                                    <X size={20} />
                                </button>
                            </div>
                            <div className="p-6 space-y-4 max-h-[70vh] overflow-y-auto">
                                <div className="flex justify-between items-start">
                                    <div>
                                        <p className="text-[10px] font-bold text-slate-400 uppercase mb-1">Patient</p>
                                        <p className="font-bold text-slate-800 text-lg">{selectedActivity.patient}</p>
                                    </div>
                                    <div className="text-right">
                                        <p className="text-[10px] font-bold text-slate-400 uppercase mb-1">Diagnosis</p>
                                        <p className="font-medium text-slate-800">{selectedActivity.diagnosis}</p>
                                    </div>
                                </div>

                                <div className="bg-slate-50 p-4 rounded-xl border border-slate-100">
                                    <p className="text-[10px] font-bold text-slate-400 uppercase mb-3 flex items-center gap-1">
                                        RX • Prescribed Medicines
                                    </p>

                                    {selectedActivity.details.medicines.length > 0 ? (
                                        <ul className="space-y-3">
                                            {selectedActivity.details.medicines.map((med, idx) => (
                                                <li key={idx} className="flex justify-between items-center text-sm">
                                                    <span className="font-medium text-slate-700 flex items-center gap-2">
                                                        <span className="w-1.5 h-1.5 rounded-full bg-teal-500"></span>
                                                        {med.name}
                                                    </span>
                                                    <div className="flex flex-col items-end">
                                                        <span className="font-mono font-bold text-slate-500 text-xs bg-white px-1.5 py-0.5 rounded border border-slate-200">{med.dosage}</span>
                                                        <span className="text-[10px] text-slate-400 mt-0.5">{med.duration}</span>
                                                    </div>
                                                </li>
                                            ))}
                                        </ul>
                                    ) : (
                                        <p className="text-sm text-slate-400 italic">No medicines prescribed.</p>
                                    )}
                                </div>

                                <div>
                                    <p className="text-[10px] font-bold text-slate-400 uppercase mb-1">Doctor's Notes</p>
                                    <p className="text-sm text-slate-600 leading-relaxed bg-amber-50/50 p-3 rounded-lg border border-amber-100">
                                        "{selectedActivity.details.notes}"
                                    </p>
                                </div>
                            </div>
                            <div className="p-4 border-t border-slate-100 bg-slate-50/50">
                                <button onClick={() => setSelectedActivity(null)} className="w-full py-3 bg-slate-900 text-white rounded-xl font-bold shadow-lg shadow-slate-900/10 active:scale-[0.98] transition-all">Close Details</button>
                            </div>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </PageTransition>
    );
};

export default ActivityLogPage;
