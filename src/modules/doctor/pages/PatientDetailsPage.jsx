import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';
import { User, Droplets, AlertCircle, FileText, ChevronRight, Stethoscope, Clock, ShieldCheck, ChevronDown, CheckCircle2 } from 'lucide-react';
import PageTransition from '@/components/ui/PageTransition';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';

const PatientDetailsPage = () => {
    const { id } = useParams();
    const navigate = useNavigate();

    // Mock Patient Data - AUTHENTIC STRUCTURE
    const patient = {
        name: "Harish Kumar",
        age: 34,
        gender: "Male",
        bloodGroup: "O+",
        id: "P-12345",
        lastVisit: "2 days ago",
        // img: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&q=80&w=200&h=200",

        // Medical Summary
        summary: {
            allergies: ["Penicillin", "Peanuts", "Dust Mites"],
            chronicConditions: ["Hypertension (Stage 1)"],
            pastConditions: ["Typhoid (2018)", "Fractured Radius (2020)"]
        },

        history: [
            {
                id: 101,
                date: "15 Jan 2024",
                doctor: "Dr. Sharma",
                speciality: "General Physician",
                hospital: "Apollo Gleneagles",
                diagnosis: "Viral Fever",
                medicines: ["Dolo 650", "Cetirizine 10mg"],
                status: "Completed",
                isSelf: true // Prescribed by current doctor
            },
            {
                id: 102,
                date: "22 Dec 2023",
                doctor: "Dr. Anjali Gupta",
                speciality: "Pulmonologist",
                hospital: "Fortis Hospital",
                diagnosis: "Acute Bronchitis",
                medicines: ["Montelukast", "Levolin Inhaler"],
                status: "Active",
                isSelf: false
            }
        ]
    };

    return (
        <PageTransition className="px-4 py-6 pb-32 space-y-6">

            {/* Overview Section */}
            <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-5 shadow-sm flex items-start gap-4">
                <div className="w-20 h-20 rounded-xl overflow-hidden bg-slate-100 dark:bg-slate-800 flex-shrink-0 border border-slate-100 dark:border-slate-800">
                    <img src={patient.img} alt={patient.name} className="w-full h-full object-cover" />
                </div>
                <div className="flex-1">
                    <h1 className="text-xl font-bold text-slate-900 dark:text-slate-100 mb-1">{patient.name}</h1>
                    <div className="flex items-center gap-3 text-sm text-slate-500 dark:text-slate-400 mb-2">
                        <span>34 Yrs</span>
                        <span className="w-1 h-1 bg-slate-400 rounded-full" />
                        <span>Male</span>
                    </div>
                    <div className="flex gap-2">
                        <Badge variant="secondary" className="bg-red-50 dark:bg-red-900/20 text-red-700 dark:text-red-400 border-red-100 dark:border-red-900/30">
                            {patient.bloodGroup}
                        </Badge>
                        <Badge variant="outline" className="text-slate-500 dark:text-slate-400 border-slate-200 dark:border-slate-700">
                            ID: {id}
                        </Badge>
                    </div>
                </div>
            </div>

            {/* Medical Summary Section */}
            <div className="space-y-3">
                <h3 className="text-sm font-bold text-slate-900 dark:text-slate-100 uppercase tracking-wide">Medical Summary</h3>

                <div className="grid grid-cols-1 gap-3">
                    {/* Allergies */}
                    <div className="bg-orange-50/50 dark:bg-orange-900/10 border border-orange-100 dark:border-orange-900/30 p-4 rounded-xl">
                        <div className="flex items-center gap-2 mb-2 text-orange-800 dark:text-orange-400 font-semibold text-sm">
                            <AlertCircle size={16} /> Known Allergies
                        </div>
                        <div className="flex flex-wrap gap-2">
                            {patient.summary.allergies.map(a => (
                                <Badge key={a} variant="outline" className="bg-white dark:bg-slate-800 border-orange-200 dark:border-orange-900/50 text-slate-700 dark:text-slate-300">{a}</Badge>
                            ))}
                        </div>
                    </div>

                    {/* Conditions */}
                    <div className="bg-blue-50/50 dark:bg-blue-900/10 border border-blue-100 dark:border-blue-900/30 p-4 rounded-xl">
                        <div className="flex items-center gap-2 mb-2 text-blue-800 dark:text-blue-400 font-semibold text-sm">
                            <FileText size={16} /> Diagnosed Conditions
                        </div>
                        <div className="space-y-2">
                            <div className="flex items-center gap-2 text-sm text-slate-700 dark:text-slate-300">
                                <span className="w-2 h-2 rounded-full bg-red-400" />
                                <span>Current: <span className="font-medium">{patient.summary.chronicConditions.join(", ")}</span></span>
                            </div>
                            <div className="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400">
                                <span className="w-2 h-2 rounded-full bg-slate-300 dark:bg-slate-600" />
                                <span>Past: {patient.summary.pastConditions.join(", ")}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Action Button */}
            <Button
                onClick={() => navigate(`/doctor/diagnose/${id}`)}
                className="w-full h-14 text-lg font-bold bg-slate-900 dark:bg-teal-600 text-white rounded-xl shadow-xl shadow-slate-900/10 dark:shadow-teal-900/20 hover:bg-slate-800 dark:hover:bg-teal-500 transition-all active:scale-[0.98] flex items-center justify-center gap-3"
            >
                <Stethoscope size={22} /> Diagnose Patient
            </Button>

            {/* Medical History */}
            <div>
                <div className="flex items-center justify-between mb-4 mt-2">
                    <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100">Patient History</h3>
                    <Button variant="ghost" size="sm" className="text-blue-600 dark:text-blue-400 text-xs">View All</Button>
                </div>

                <div className="space-y-4">
                    {patient.history.map(record => (
                        <Card key={record.id} className="p-4 border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-sm">
                            <div className="flex justify-between items-start mb-3">
                                <div>
                                    <h4 className="font-bold text-slate-900 dark:text-slate-100 text-base">{record.diagnosis}</h4>
                                    <p className="text-xs text-slate-500 dark:text-slate-400 font-medium mt-0.5">
                                        {record.doctor} {record.isSelf && <span className="text-blue-600 dark:text-blue-400">(You)</span>}
                                    </p>
                                    <p className="text-[10px] text-slate-400 dark:text-slate-500">{record.hospital}</p>
                                </div>
                                <Badge variant={record.status === 'Active' ? 'default' : 'secondary'} className={record.status === 'Active' ? "bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 hover:bg-green-100 dark:hover:bg-green-900/30 border-none" : "bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 border-none"}>
                                    {record.status}
                                </Badge>
                            </div>

                            <div className="bg-slate-50 dark:bg-slate-800/50 rounded-lg p-3 text-sm border border-slate-100 dark:border-slate-800">
                                <p className="text-xs font-bold text-slate-400 dark:text-slate-500 uppercase mb-2">Prescription</p>
                                <ul className="space-y-1">
                                    {record.medicines.map((med, idx) => (
                                        <li key={idx} className="flex items-center gap-2 text-slate-700 dark:text-slate-300">
                                            <CheckCircle2 size={12} className="text-slate-400 dark:text-slate-500" /> {med}
                                        </li>
                                    ))}
                                </ul>
                                <div className="mt-3 pt-2 border-t border-slate-200 dark:border-slate-700 flex justify-between items-center">
                                    <span className="text-[10px] text-slate-400 dark:text-slate-500">{record.date}</span>
                                    {/* Mock Signature */}
                                    <div className="text-[10px] font-handwriting text-slate-600 dark:text-slate-400 italic">Signed: {record.doctor}</div>
                                </div>
                            </div>
                        </Card>
                    ))}
                </div>
            </div>

        </PageTransition>
    );
};

export default PatientDetailsPage;
