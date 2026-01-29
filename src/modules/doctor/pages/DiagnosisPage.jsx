import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { ArrowLeft, Stethoscope, ChevronRight } from 'lucide-react';

const DiagnosisPage = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [symptoms, setSymptoms] = useState('');
    const [diagnosis, setDiagnosis] = useState('');

    const handleProceed = () => {
        if (!diagnosis) {
            alert("Please enter a diagnosis.");
            return;
        }
        // Save to state/context in real app
        navigate(`/doctor/prescription/${id}`);
    };

    return (
        <div className="px-4 py-6 pb-24 space-y-6">
            <div className="flex items-center gap-3">
                <Button variant="ghost" size="icon" onClick={() => navigate(-1)} className="shrink-0">
                    <ArrowLeft size={24} />
                </Button>
                <h1 className="text-xl font-bold text-slate-900">Diagnosis</h1>
            </div>

            <Card className="p-6 border-0 shadow-sm space-y-6">
                <div className="space-y-3">
                    <label className="text-sm font-bold text-slate-700 uppercase">
                        Reason for Visit / Symptoms
                    </label>
                    <textarea
                        className="w-full p-4 rounded-xl bg-slate-50 border-0 focus:ring-2 focus:ring-teal-500/20 min-h-[100px] text-slate-900 placeholder:text-slate-400 font-medium"
                        placeholder="e.g. Severe headache since 2 days, mild fever..."
                        value={symptoms}
                        onChange={e => setSymptoms(e.target.value)}
                    />
                </div>

                <div className="space-y-3">
                    <label className="text-sm font-bold text-slate-700 uppercase flex items-center gap-2">
                        <Stethoscope size={16} className="text-teal-600" /> Clinical Diagnosis
                    </label>
                    <input
                        type="text"
                        className="w-full p-4 rounded-xl bg-teal-50 border-0 focus:ring-2 focus:ring-teal-500/20 text-teal-900 placeholder:text-teal-400/70 font-bold text-lg"
                        placeholder="e.g. Viral Pyrexia"
                        value={diagnosis}
                        onChange={e => setDiagnosis(e.target.value)}
                    />
                </div>
            </Card>

            <div className="fixed bottom-20 left-0 w-full p-4 bg-white/80 backdrop-blur-md border-t border-slate-100">
                <Button
                    onClick={handleProceed}
                    className="w-full h-14 bg-teal-700 hover:bg-teal-800 text-lg shadow-xl shadow-teal-900/20 rounded-2xl"
                >
                    Proceed to Prescription <ChevronRight className="ml-2" />
                </Button>
            </div>
        </div>
    );
};

export default DiagnosisPage;
