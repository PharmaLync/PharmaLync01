import React, { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { FileText, Clock, CheckCircle2, AlertCircle } from 'lucide-react';

const PrescriptionsPage = () => {
    const [activeTab, setActiveTab] = useState('issued'); // issued, partial, completed, expired

    const tabs = [
        { id: 'issued', label: 'Issued' },
        { id: 'partial', label: 'Partially Fulfilled' },
        { id: 'completed', label: 'Completed' },
        { id: 'expired', label: 'Expired' }
    ];

    // Mock Data
    const allPrescriptions = [
        // Issued (Fresh, untouched)
        {
            id: 'RX-2024-001',
            status: 'issued',
            doctor: 'Dr. Sarah Smith',
            specialty: 'General Physician',
            hospital: 'City Care Hospital',
            date: '28 Jan 2024',
            medicines: [
                { name: 'Dolo 650', dosage: '1-0-1', duration: '5 Days', timing: 'After Food' },
                { name: 'Citrizine', dosage: '0-0-1', duration: '3 Days', timing: 'Before Bed' },
                { name: 'Vitamin C', dosage: '1-0-0', duration: '10 Days', timing: 'Morning' }
            ],
            expiry: '28 Feb 2024'
        },
        {
            id: 'RX-2024-002',
            status: 'issued',
            doctor: 'Dr. Rajesh Kumar',
            specialty: 'Cardiologist',
            hospital: 'Heart & Soul Clinic',
            date: '27 Jan 2024',
            medicines: [
                { name: 'Telmisartan', dosage: '40mg', duration: '30 Days', timing: 'Morning' },
                { name: 'Metoprolol', dosage: '25mg', duration: '30 Days', timing: 'Morning' }
            ],
            expiry: '27 Mar 2024'
        },

        // Partially Fulfilled (Active, some bought)
        {
            id: 'RX-2024-010',
            status: 'partial',
            doctor: 'Dr. Anjali Desai',
            specialty: 'Dermatologist',
            hospital: 'Skin Deep Center',
            date: '15 Jan 2024',
            medicines: [
                { name: 'Isotretinoin', dosage: '10mg', duration: '20 Days', timing: 'After Dinner', status: 'Purchased' },
                { name: 'Sunscreen Gel', dosage: 'Apply Twice', duration: '-', timing: 'Topical', status: 'Pending' }
            ],
            expiry: '15 Mar 2024',
            progress: 50
        },

        // Completed (All bought, dosage ongoing)
        {
            id: 'RX-2023-099',
            status: 'completed',
            doctor: 'Dr. P. Venkat',
            specialty: 'Orthopedic',
            hospital: 'Ortho Care',
            date: '10 Jan 2024',
            medicines: [
                { name: 'Calcium D3', dosage: '1 Tab', duration: '30 Days', timing: 'Once Daily' },
                { name: 'Pain Relief Gel', dosage: 'Apply', duration: 'As needed', timing: 'Topical' }
            ],
            expiry: '10 Apr 2024'
        },
        {
            id: 'RX-2023-088',
            status: 'completed',
            doctor: 'Dr. Emily Blunt',
            specialty: 'Dentist',
            hospital: 'Smile Dental',
            date: '05 Jan 2024',
            medicines: [
                { name: 'Amoxicillin', dosage: '500mg', duration: '5 Days', timing: 'Thrice Daily' },
                { name: 'Ketorolac', dosage: '10mg', duration: '3 Days', timing: 'SOS' }
            ],
            expiry: '05 Feb 2024'
        },

        // Expired (Old)
        {
            id: 'RX-2023-001',
            status: 'expired',
            doctor: 'Dr. Sarah Smith',
            specialty: 'General Physician',
            hospital: 'City Care Hospital',
            date: '10 Oct 2023',
            medicines: [
                { name: 'Paracetamol', dosage: '500mg', duration: '3 Days', timing: 'SOS' },
                { name: 'Cough Syrup', dosage: '10ml', duration: '5 Days', timing: 'Thrice Daily' }
            ],
            expiry: '10 Nov 2023'
        }
    ];

    const filteredPrescriptions = allPrescriptions.filter(rx => rx.status === activeTab);

    return (
        <div className="min-h-screen px-4 py-6 max-w-md mx-auto pb-24">
            <h1 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-6">Prescriptions</h1>

            {/* Sub-Navigation */}
            <div className="flex space-x-2 overflow-x-auto pb-4 mb-4 scrollbar-hide">
                {tabs.map(tab => (
                    <button
                        key={tab.id}
                        onClick={() => setActiveTab(tab.id)}
                        className={`px-4 py-2 rounded-full text-xs font-semibold whitespace-nowrap transition-colors ${activeTab === tab.id
                                ? 'bg-teal-600 dark:bg-teal-500 text-white shadow-md'
                                : 'bg-white dark:bg-slate-900 text-slate-500 dark:text-slate-400 border border-slate-200 dark:border-slate-800'
                            }`}
                    >
                        {tab.label}
                    </button>
                ))}
            </div>

            {/* Content Area */}
            <div className="space-y-4">
                {filteredPrescriptions.length > 0 ? (
                    filteredPrescriptions.map(rx => (
                        <Card key={rx.id} className="border-0 shadow-md bg-white dark:bg-slate-900 overflow-hidden rounded-2xl dark:border dark:border-slate-800 transition-colors">
                            <div className={`h-1.5 w-full ${rx.status === 'issued' ? 'bg-blue-500' :
                                    rx.status === 'partial' ? 'bg-orange-500' :
                                        rx.status === 'completed' ? 'bg-green-500' :
                                            'bg-slate-300 dark:bg-slate-700'
                                }`} />

                            <div className="p-5">
                                {/* Header */}
                                <div className="flex justify-between items-start mb-4">
                                    <div>
                                        <h3 className="font-bold text-slate-900 dark:text-slate-100 text-lg">{rx.doctor}</h3>
                                        <p className="text-xs text-slate-500 dark:text-slate-400 font-medium">{rx.specialty}</p>
                                        <p className="text-xs text-slate-400 dark:text-slate-500">{rx.hospital}</p>
                                    </div>
                                    <div className="text-right">
                                        <Badge variant="outline" className="text-[10px] font-normal text-slate-500 dark:text-slate-400 border-slate-200 dark:border-slate-800 mb-1">
                                            {rx.date}
                                        </Badge>
                                        <p className="text-[10px] text-slate-300 dark:text-slate-600 font-mono">#{rx.id.split('-')[2]}</p>
                                    </div>
                                </div>

                                {/* Medicines List */}
                                <div className="bg-slate-50/80 dark:bg-slate-800/50 rounded-xl p-4 border border-slate-100 dark:border-slate-800 mb-4 transition-colors">
                                    <p className="text-[10px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest mb-3">Prescribed Medicines</p>
                                    <div className="space-y-3">
                                        {rx.medicines.map((med, idx) => (
                                            <div key={idx} className="flex justify-between items-start pb-2 border-b border-slate-100 dark:border-slate-700/50 last:border-0 last:pb-0">
                                                <div>
                                                    <p className="font-semibold text-slate-800 dark:text-slate-200 text-sm flex items-center gap-2">
                                                        {med.name}
                                                        {med.status && (
                                                            <span className={`text-[8px] px-1.5 py-0.5 rounded-full ${med.status === 'Purchased' ? 'bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400' : 'bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-400'}`}>
                                                                {med.status}
                                                            </span>
                                                        )}
                                                    </p>
                                                    <p className="text-xs text-slate-500 dark:text-slate-400">{med.timing}</p>
                                                </div>
                                                <div className="text-right">
                                                    <p className="font-bold text-slate-700 dark:text-slate-300 text-sm">{med.dosage}</p>
                                                    <p className="text-[10px] text-slate-400 dark:text-slate-500">{med.duration}</p>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Footer & Signature */}
                                <div className="flex justify-between items-end mt-2">
                                    <div className="text-xs">
                                        <p className="text-slate-400 dark:text-slate-500 mb-0.5">Valid Until</p>
                                        <p className={`font-semibold ${rx.status === 'expired' ? 'text-red-500 dark:text-red-400' : 'text-slate-700 dark:text-slate-300'
                                            }`}>
                                            {rx.expiry}
                                        </p>
                                    </div>

                                    <div className="text-center">
                                        {/* Mock Signature */}
                                        <div className="h-8 w-24 mb-1 relative">
                                            <div className="absolute bottom-1 right-0 font-[cursive] text-lg text-slate-400 dark:text-slate-500 rotate-[-5deg] opacity-70">
                                                {rx.doctor.split(' ').slice(1).join(' ')}
                                            </div>
                                        </div>
                                        <div className="h-px w-24 bg-slate-200 dark:bg-slate-700 mb-0.5"></div>
                                        <p className="text-[9px] text-teal-600 dark:text-teal-500 font-medium uppercase tracking-wider flex items-center justify-end gap-1">
                                            <CheckCircle2 size={8} /> Digitally Signed
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </Card>
                    ))
                ) : (
                    <div className="p-8 text-center text-slate-400 dark:text-slate-500 text-sm bg-slate-50 dark:bg-slate-900/50 rounded-2xl border border-slate-100 dark:border-slate-800 border-dashed">
                        {activeTab === 'issued' && <FileText className="mx-auto mb-2 text-slate-300 dark:text-slate-600" size={32} />}
                        {activeTab === 'partial' && <Clock className="mx-auto mb-2 text-slate-300 dark:text-slate-600" size={32} />}
                        {activeTab === 'completed' && <CheckCircle2 className="mx-auto mb-2 text-slate-300 dark:text-slate-600" size={32} />}
                        {activeTab === 'expired' && <AlertCircle className="mx-auto mb-2 text-slate-300 dark:text-slate-600" size={32} />}

                        <p>No prescriptions in "{tabs.find(t => t.id === activeTab)?.label}"</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default PrescriptionsPage;
