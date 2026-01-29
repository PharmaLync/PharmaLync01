import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { QrCode, User } from 'lucide-react';
import { usePharmacyStore } from '../store';
import { api } from '@/lib/api';

const ScanQR = () => {
    const navigate = useNavigate();
    const setPatient = usePharmacyStore(state => state.setPatient);
    const [isLoading, setIsLoading] = useState(false);

    const handleScan = async () => {
        const token = prompt("Scan Patient or Prescription QR:", "Paste-Token-Here");
        if (!token) return;

        setIsLoading(true);
        try {
            // First try to verify as a prescription
            const result = await api.prescriptions.verifyQr(token);

            // Map backend patient to store
            const patientData = {
                id: result.prescription.patientId,
                name: result.prescription.patient.name,
                age: 25, // Mock age if not in DB
                prescriptions: [result.prescription]
            };

            // Update store
            setPatient(patientData.id);
            navigate('/pharmacist/dispense');
        } catch (error) {
            alert("Verification Failed: " + error.message);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-[80vh] p-6 text-center">
            <div className={`bg-slate-100 p-8 rounded-full mb-8 ${isLoading ? 'animate-spin' : 'animate-pulse'}`}>
                <QrCode size={64} className="text-teal-600" />
            </div>
            <h2 className="text-2xl font-bold text-slate-800 mb-2">
                {isLoading ? 'Verifying...' : 'Scan QR Code'}
            </h2>
            <p className="text-slate-500 mb-8 max-w-xs">
                Point camera at patient's digital health card or prescription QR code.
            </p>
            <Button
                size="lg"
                className="w-full max-w-xs h-14 text-lg bg-teal-600 hover:bg-teal-700"
                onClick={handleScan}
                disabled={isLoading}
            >
                <User className="mr-2" /> {isLoading ? 'Processing...' : 'Start Scanner'}
            </Button>
        </div>
    );
};

export default ScanQR;
