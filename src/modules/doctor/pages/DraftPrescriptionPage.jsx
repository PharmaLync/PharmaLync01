import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Plus, Trash2, Search, CheckCircle2, ShieldCheck, PenTool } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const DraftPrescriptionPage = () => {
    const { id } = useParams();
    const navigate = useNavigate();

    // Med Database Mock
    const medDatabase = [
        { id: 'm1', name: 'Dolo 650', type: 'Tablet' },
        { id: 'm2', name: 'Amoxicillin 500mg', type: 'Capsule' },
        { id: 'm3', name: 'Azithromycin 500mg', type: 'Tablet' },
        { id: 'm4', name: 'Pantoprazole 40mg', type: 'Tablet' },
        { id: 'm5', name: 'Cough Syrup', type: 'Syrup' },
    ];

    const [search, setSearch] = useState('');
    const [selectedMeds, setSelectedMeds] = useState([]);
    const [showSignature, setShowSignature] = useState(false);

    // Add Med
    const addMed = (med) => {
        setSelectedMeds([...selectedMeds, { ...med, dosage: '1-0-1', duration: '3 Days', timing: 'After Food' }]);
        setSearch('');
    };

    // Remove Med
    const removeMed = (index) => {
        const newMeds = [...selectedMeds];
        newMeds.splice(index, 1);
        setSelectedMeds(newMeds);
    };

    // Update Med Details
    const updateMed = (index, field, value) => {
        const newMeds = [...selectedMeds];
        newMeds[index][field] = value;
        setSelectedMeds(newMeds);
    };

    const handleIssue = () => {
        if (selectedMeds.length === 0) {
            alert("Add at least one medicine.");
            return;
        }
        setShowSignature(true);
        setTimeout(() => {
            alert("Prescription Issued Successfully!");
            navigate('/doctor/activity');
        }, 1500);
    };

    return (
        <div className="px-4 py-6 pb-32 space-y-6">
            <h1 className="text-xl font-bold text-slate-900">Draft Prescription</h1>

            {/* Search Bar */}
            <div className="relative z-20">
                <Search className="absolute left-4 top-3.5 text-slate-400" size={20} />
                <input
                    type="text"
                    placeholder="Search medicines (e.g. Dolo)"
                    className="w-full pl-12 pr-4 py-3 rounded-xl bg-white border border-slate-200 shadow-sm focus:ring-2 focus:ring-teal-500/20 focus:outline-none"
                    value={search}
                    onChange={e => setSearch(e.target.value)}
                />
                {/* Search Dropdown */}
                {search && (
                    <div className="absolute top-full left-0 w-full bg-white rounded-xl shadow-xl mt-2 border border-slate-100 overflow-hidden">
                        {medDatabase.filter(m => m.name.toLowerCase().includes(search.toLowerCase())).map(med => (
                            <div
                                key={med.id}
                                onClick={() => addMed(med)}
                                className="p-3 hover:bg-slate-50 border-b border-slate-50 last:border-0 cursor-pointer flex justify-between items-center"
                            >
                                <span className="font-medium text-slate-800">{med.name}</span>
                                <span className="text-xs text-slate-400 bg-slate-100 px-2 py-0.5 rounded">{med.type}</span>
                            </div>
                        ))}
                    </div>
                )}
            </div>

            {/* Selected Meds List */}
            <div className="space-y-4">
                <AnimatePresence>
                    {selectedMeds.map((med, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, height: 0 }}
                            className="bg-white p-4 rounded-xl shadow-sm border border-slate-200 relative"
                        >
                            <button onClick={() => removeMed(idx)} className="absolute top-2 right-2 text-slate-400 hover:text-red-500">
                                <Trash2 size={16} />
                            </button>

                            <h3 className="font-bold text-slate-900 mb-3">{med.name}</h3>

                            <div className="grid grid-cols-2 gap-3">
                                <div>
                                    <label className="text-[10px] uppercase font-bold text-slate-400">Dosage</label>
                                    <input
                                        type="text"
                                        value={med.dosage}
                                        onChange={e => updateMed(idx, 'dosage', e.target.value)}
                                        className="w-full p-2 rounded bg-slate-50 border border-slate-100 text-sm font-medium"
                                    />
                                </div>
                                <div>
                                    <label className="text-[10px] uppercase font-bold text-slate-400">Duration</label>
                                    <input
                                        type="text"
                                        value={med.duration}
                                        onChange={e => updateMed(idx, 'duration', e.target.value)}
                                        className="w-full p-2 rounded bg-slate-50 border border-slate-100 text-sm font-medium"
                                    />
                                </div>
                            </div>
                            <div className="mt-2">
                                <label className="text-[10px] uppercase font-bold text-slate-400">Timing</label>
                                <select
                                    value={med.timing}
                                    onChange={e => updateMed(idx, 'timing', e.target.value)}
                                    className="w-full p-2 rounded bg-slate-50 border border-slate-100 text-sm font-medium"
                                >
                                    <option>After Food</option>
                                    <option>Before Food</option>
                                    <option>Before Bed</option>
                                </select>
                            </div>
                        </motion.div>
                    ))}
                </AnimatePresence>

                {selectedMeds.length === 0 && !search && (
                    <div className="text-center py-10 text-slate-400">
                        <Plus className="mx-auto w-12 h-12 opacity-20 mb-2" />
                        <p>Search and add medicines above</p>
                    </div>
                )}
            </div>

            {/* Signature Block */}
            <div className="border-t-2 border-dashed border-slate-200 pt-4 mt-8 flex justify-end">
                <div className="text-right">
                    {showSignature ? (
                        <div className="flex flex-col items-end">
                            <img src="https://upload.wikimedia.org/wikipedia/commons/e/ec/Signature_sample.svg" alt="Signature" className="h-10 opacity-70 mb-1" />
                            <div className="flex items-center gap-1 text-teal-600 text-[10px] font-bold uppercase tracking-wider">
                                <ShieldCheck size={12} /> Digitally Signed
                            </div>
                        </div>
                    ) : (
                        <div className="h-14 w-32 bg-slate-100 rounded flex items-center justify-center text-xs text-slate-400 border border-slate-200">
                            Signature Placeholder
                        </div>
                    )}
                    <p className="text-xs font-bold text-slate-900 mt-1">Dr. Sharma</p>
                    <p className="text-[10px] text-slate-500">License: WBMC-8821</p>
                </div>
            </div>

            {/* Footer Action */}
            <div className="fixed bottom-20 left-0 w-full p-4 bg-white/80 backdrop-blur-md border-t border-slate-100 z-40">
                <Button
                    onClick={handleIssue}
                    disabled={selectedMeds.length === 0}
                    className="w-full h-14 bg-teal-700 hover:bg-teal-800 text-lg shadow-xl shadow-teal-900/20 rounded-2xl"
                >
                    {showSignature ? 'Sending...' : 'Issue Prescription'} <CheckCircle2 className="ml-2" />
                </Button>
            </div>
        </div>
    );
};

export default DraftPrescriptionPage;
