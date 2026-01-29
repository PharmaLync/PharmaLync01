import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { FileSignature, Plus, Search, X, Pill } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const MedicineChip = ({ label, selected, onClick }) => (
    <button
        onClick={onClick}
        className={`px-3 py-1 text-xs font-medium rounded-full transition-all border ${selected
                ? 'bg-teal-600 text-white border-teal-600 shadow-sm'
                : 'bg-white text-slate-500 border-slate-200 hover:border-teal-300 hover:text-teal-600'
            }`}
    >
        {label}
    </button>
);

const SmartRxForm = () => {
    const [medicines, setMedicines] = useState([]);
    const [currentMed, setCurrentMed] = useState('');

    const addMedicine = () => {
        if (!currentMed) return;
        setMedicines([...medicines, { name: currentMed, dosage: ['Morning', 'Night'], food: 'After Food' }]);
        setCurrentMed('');
    };

    return (
        <Card className="h-full border-0 shadow-lg flex flex-col bg-white">
            <CardHeader className="border-b border-slate-100 pb-4">
                <CardTitle className="flex items-center gap-2 text-teal-900">
                    <FileSignature size={20} className="text-teal-600" />
                    Digital Prescription Pad
                </CardTitle>
            </CardHeader>

            <CardContent className="flex-1 overflow-y-auto p-6 space-y-6">
                {/* Medicine Search */}
                <div className="space-y-2">
                    <label className="text-xs font-semibold text-slate-500 uppercase tracking-wide">Add Medicine</label>
                    <div className="flex gap-2">
                        <div className="relative flex-1">
                            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
                            <input
                                value={currentMed}
                                onChange={(e) => setCurrentMed(e.target.value)}
                                type="text"
                                placeholder="Search brand or generic name..."
                                className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 bg-slate-50 focus:outline-none focus:ring-2 focus:ring-teal-500/20 text-sm"
                            />
                        </div>
                        <Button size="icon" onClick={addMedicine} disabled={!currentMed} className="rounded-xl w-10 h-10 shrink-0">
                            <Plus size={20} />
                        </Button>
                    </div>
                </div>

                {/* Medicine List */}
                <div className="space-y-4">
                    <label className="text-xs font-semibold text-slate-500 uppercase tracking-wide">Prescribed Items ({medicines.length})</label>

                    <AnimatePresence>
                        {medicines.length === 0 && (
                            <motion.div
                                initial={{ opacity: 0 }} animate={{ opacity: 1 }}
                                className="text-center py-8 border-2 border-dashed border-slate-200 rounded-xl bg-slate-50/50"
                            >
                                <Pill size={24} className="mx-auto text-slate-300 mb-2" />
                                <p className="text-sm text-slate-400">No medicines added yet.</p>
                            </motion.div>
                        )}

                        {medicines.map((med, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, height: 0 }}
                                className="bg-slate-50 rounded-xl p-4 border border-slate-100 relative group"
                            >
                                <button className="absolute top-2 right-2 text-slate-300 hover:text-red-500 opacity-0 group-hover:opacity-100 transition-opacity">
                                    <X size={16} />
                                </button>

                                <h4 className="font-bold text-slate-800 mb-3">{med.name}</h4>

                                <div className="flex flex-wrap gap-2 mb-3">
                                    {['Morning', 'Noon', 'Night'].map(t => (
                                        <MedicineChip key={t} label={t} selected={med.dosage.includes(t)} onClick={() => { }} />
                                    ))}
                                </div>

                                <div className="flex flex-wrap gap-2">
                                    {['Before Food', 'After Food'].map(t => (
                                        <MedicineChip key={t} label={t} selected={med.food === t} onClick={() => { }} />
                                    ))}
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </div>
            </CardContent>

            <CardFooter className="border-t border-slate-100 p-6 bg-slate-50/50">
                <Button className="w-full gap-2 text-base font-semibold h-12 shadow-teal-900/10 shadow-xl">
                    <FileSignature size={18} />
                    Sign & Mint Rx
                </Button>
            </CardFooter>
        </Card>
    );
};

export default SmartRxForm;
