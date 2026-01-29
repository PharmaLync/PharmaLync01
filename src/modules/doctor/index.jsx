import React from 'react';
import PatientScannerWidget from './PatientScannerWidget';
import ClinicalTimeline from './ClinicalTimeline';
import SmartRxForm from './SmartRxForm';

const DoctorModule = () => {
    return (
        <div className="min-h-screen p-6 pt-8 pb-24 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-6 bg-slate-50">
            {/* Left Column: Patient Info & History (4 cols) */}
            <div className="lg:col-span-4 space-y-6 flex flex-col h-full">
                <div className="shrink-0">
                    <PatientScannerWidget />
                </div>
                <div className="flex-1 min-h-[400px]">
                    <ClinicalTimeline />
                </div>
            </div>

            {/* Right Column: Prescription Pad (8 cols) */}
            <div className="lg:col-span-8 h-full min-h-[600px]">
                <SmartRxForm />
            </div>
        </div>
    );
};

export default DoctorModule;
