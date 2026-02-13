import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea'; // Assuming exists, if not using standard textarea
import { Card } from '@/components/ui/card';
import { Activity, ArrowRight, Save } from 'lucide-react';
import PageTransition from '@/components/ui/PageTransition';

const DiagnosisPage = () => {
    const { id } = useParams(); // Patient ID
    const navigate = useNavigate();
    const [symptoms, setSymptoms] = useState('');
    const [diagnosis, setDiagnosis] = useState('');

    const handleSaveAndProceed = () => {
        if (!diagnosis) {
            alert("Please enter a diagnosis.");
            return;
        }
        navigate(`/doctor/prescription/${id}`);
    };

    return (
        <PageTransition className="px-5 py-6 space-y-6">
            <div className="mb-6">
                <p className="text-sm font-bold text-slate-400 dark:text-slate-500 uppercase">Step 1 of 2</p>
                <h1 className="text-2xl font-bold text-slate-900 dark:text-slate-100">Diagnosis & Vitals</h1>
            </div>

            <div className="space-y-6">
                <div className="space-y-2">
                    <label className="text-sm font-semibold text-slate-700 dark:text-slate-300 flex items-center gap-2">
                        <Activity size={18} className="text-blue-500 dark:text-blue-400" />
                        Reason for Visit / Symptoms
                    </label>
                    <textarea
                        className="w-full min-h-[100px] p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-500/20 text-slate-900 dark:text-slate-100 resize-none shadow-sm dark:shadow-none placeholder:text-slate-400 dark:placeholder:text-slate-500"
                        placeholder="e.g. Severe headache since 2 days, Nausea..."
                        value={symptoms}
                        onChange={(e) => setSymptoms(e.target.value)}
                    />
                </div>

                <div className="space-y-2">
                    <label className="text-sm font-semibold text-slate-700 dark:text-slate-300">Detailed Diagnosis</label>
                    <textarea
                        className="w-full min-h-[120px] p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-500/20 text-slate-900 dark:text-slate-100 resize-none shadow-sm dark:shadow-none font-medium placeholder:text-slate-400 dark:placeholder:text-slate-500"
                        placeholder="e.g. Migraine without aura (G43.0)"
                        value={diagnosis}
                        onChange={(e) => setDiagnosis(e.target.value)}
                    />
                </div>

                <Card className="p-4 bg-yellow-50/50 dark:bg-yellow-900/10 border-yellow-100 dark:border-yellow-900/30">
                    <h4 className="text-xs font-bold text-yellow-700 dark:text-yellow-500 uppercase mb-2">Note</h4>
                    <p className="text-sm text-yellow-800 dark:text-yellow-400">This diagnosis will be recorded in the patient's permanent medical history.</p>
                </Card>
            </div>

            <div className="fixed bottom-20 left-0 w-full px-6 py-4 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border-t border-slate-200 dark:border-slate-800">
                <Button
                    onClick={handleSaveAndProceed}
                    className="w-full max-w-md mx-auto h-12 bg-slate-900 dark:bg-teal-600 hover:bg-slate-800 dark:hover:bg-teal-500 text-white rounded-xl shadow-lg dark:shadow-teal-900/20"
                >
                    Proceed to Prescription <ArrowRight className="ml-2" size={18} />
                </Button>
            </div>
        </PageTransition>
    );
};

export default DiagnosisPage;
