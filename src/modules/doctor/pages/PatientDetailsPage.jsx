import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { User, Droplets, AlertCircle, FileText, ChevronRight, Stethoscope, Clock, ShieldCheck } from 'lucide-react';
import { motion } from 'framer-motion';
import MotionCard from '@/components/ui/MotionCard';
import PageTransition from '@/components/ui/PageTransition';

const PatientDetailsPage = () => {
    const { id } = useParams();
    const navigate = useNavigate();

    // Mock Patient Data
    const patient = {
        name: "Rahul Deshmukh",
        age: 34,
        bloodGroup: "O+",
        img: "https://api.dicebear.com/7.x/avataaars/svg?seed=Rahul",
        allergies: ["Penicillin", "Peanuts"],
        conditions: ["Hypertension (Stage 1)", "Mild Asthma"],
        history: [
            { id: 1, date: "15 Jan 2024", doctor: "Dr. Sharma", speciality: "General Physician", diagnosis: "Viral Fever" },
            { id: 2, date: "10 Nov 2023", doctor: "Dr. Anjali", speciality: "Pulmonologist", diagnosis: "Asthma Checkup" }
        ]
    };

    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const item = {
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0 }
    };

    return (
        <PageTransition className="px-4 py-8 pb-32 space-y-8">
            {/* Header / ID Card Style */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="relative overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-slate-900 to-slate-800 text-white shadow-2xl shadow-slate-900/20"
            >
                <div className="absolute top-0 right-0 w-64 h-64 bg-teal-500/10 rounded-full -mr-20 -mt-20 blur-3xl pointer-events-none" />

                <div className="relative z-10 p-8 flex flex-col md:flex-row gap-6 items-center md:items-start text-center md:text-left">
                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        className="w-24 h-24 rounded-full border-4 border-white/10 shadow-xl overflow-hidden bg-white/5 backdrop-blur-sm shrink-0"
                    >
                        <img src={patient.img} alt={patient.name} className="w-full h-full object-cover" />
                    </motion.div>

                    <div className="flex-1">
                        <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-bold tracking-wider uppercase mb-3 border border-white/10">
                            <ShieldCheck size={12} className="text-teal-400" /> Verified Patient
                        </div>
                        <h1 className="text-3xl font-bold tracking-tight mb-2">{patient.name}</h1>
                        <div className="flex items-center justify-center md:justify-start gap-4 text-slate-300 text-sm font-medium">
                            <span>34 Years</span>
                            <span className="w-1 h-1 bg-slate-500 rounded-full" />
                            <span>Male</span>
                        </div>
                    </div>

                    <div className="bg-white/10 backdrop-blur-md border border-white/10 p-4 rounded-2xl min-w-[100px] text-center">
                        <Droplets className="mx-auto mb-2 text-red-400" size={24} />
                        <span className="block text-2xl font-bold tracking-tight">{patient.bloodGroup}</span>
                        <span className="text-[10px] uppercase opacity-60 font-bold tracking-wider">Blood Type</span>
                    </div>
                </div>
            </motion.div>

            <motion.div variants={container} initial="hidden" animate="show" className="space-y-6">

                {/* Clinical Warnings */}
                <motion.div variants={item} className="grid grid-cols-2 gap-4">
                    <MotionCard className="bg-orange-50 border-orange-100 dark:bg-orange-950/30 dark:border-orange-900/50" noHover>
                        <div className="p-5">
                            <div className="flex items-center gap-2 text-orange-700 dark:text-orange-400 font-bold text-xs uppercase tracking-wider mb-3">
                                <AlertCircle size={14} /> Critical Allergies
                            </div>
                            <div className="flex flex-wrap gap-2">
                                {patient.allergies.map(a => (
                                    <Badge key={a} variant="outline" className="bg-white dark:bg-orange-900/40 text-orange-800 dark:text-orange-200 border-orange-200 dark:border-orange-800">
                                        {a}
                                    </Badge>
                                ))}
                            </div>
                        </div>
                    </MotionCard>

                    <MotionCard className="bg-blue-50 border-blue-100 dark:bg-blue-950/30 dark:border-blue-900/50" noHover>
                        <div className="p-5">
                            <div className="flex items-center gap-2 text-blue-700 dark:text-blue-400 font-bold text-xs uppercase tracking-wider mb-3">
                                <FileText size={14} /> Conditions
                            </div>
                            <div className="flex flex-wrap gap-2">
                                {patient.conditions.map(c => (
                                    <Badge key={c} variant="outline" className="bg-white dark:bg-blue-900/40 text-blue-800 dark:text-blue-200 border-blue-200 dark:border-blue-800">
                                        {c}
                                    </Badge>
                                ))}
                            </div>
                        </div>
                    </MotionCard>
                </motion.div>

                {/* Primary Action */}
                <motion.div variants={item} whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                    <Button
                        onClick={() => navigate(`/doctor/diagnose/${id}`)}
                        className="w-full h-20 text-xl font-bold bg-slate-900 dark:bg-white dark:text-slate-900 text-white shadow-2xl shadow-slate-900/20 dark:shadow-white/10 hover:bg-slate-800 rounded-3xl flex items-center justify-between px-8 group transition-all"
                    >
                        <div className="flex items-center gap-4">
                            <div className="bg-white/20 dark:bg-slate-900/10 p-2.5 rounded-xl group-hover:scale-110 transition-transform">
                                <Stethoscope size={28} />
                            </div>
                            Start Diagnosis
                        </div>
                        <div className="bg-white/20 dark:bg-slate-900/10 p-2 rounded-full">
                            <ChevronRight size={24} />
                        </div>
                    </Button>
                </motion.div>

                {/* History */}
                <motion.div variants={item}>
                    <div className="flex items-center justify-between mb-4 px-2">
                        <h3 className="text-sm font-bold text-slate-400 uppercase tracking-widest">Recent Visits</h3>
                        <Button variant="ghost" className="text-teal-600 h-8 text-xs hover:bg-teal-50">View All</Button>
                    </div>

                    <div className="space-y-4">
                        {patient.history.map(record => (
                            <div key={record.id} className="group relative pl-8 pb-2">
                                {/* Timeline Line */}
                                <div className="absolute left-3 top-2 bottom-0 w-0.5 bg-slate-100 dark:bg-slate-800 group-last:bottom-auto group-last:h-full" />
                                <div className="absolute left-[5px] top-3 w-4 h-4 rounded-full border-4 border-white dark:border-slate-950 bg-slate-300 dark:bg-slate-700 group-first:bg-teal-500 shadow-sm z-10" />

                                <MotionCard className="border-0 bg-white dark:bg-slate-900 shadow-soft dark:shadow-none dark:border dark:border-slate-800 rounded-2xl">
                                    <div className="p-4 flex justify-between items-center">
                                        <div>
                                            <h4 className="font-bold text-slate-900 dark:text-slate-100 group-first:text-teal-700 dark:group-first:text-teal-400 text-lg">
                                                {record.diagnosis}
                                            </h4>
                                            <p className="text-sm text-slate-500 dark:text-slate-400 font-medium mt-0.5">
                                                {record.doctor} • <span className="text-slate-400">{record.speciality}</span>
                                            </p>
                                        </div>
                                        <div className="text-right">
                                            <div className="flex items-center gap-1.5 text-xs font-bold text-slate-400 mb-1 justify-end">
                                                <Clock size={12} /> {record.date}
                                            </div>
                                            <Badge variant="secondary" className="bg-slate-100 text-slate-600 border-0">
                                                Completed
                                            </Badge>
                                        </div>
                                    </div>
                                </MotionCard>
                            </div>
                        ))}
                    </div>
                </motion.div>
            </motion.div>
        </PageTransition>
    );
};

export default PatientDetailsPage;
