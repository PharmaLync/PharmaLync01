import React from 'react';
import ProfileHeader from './ProfileHeader';
import DigitalIdentityCard from './DigitalIdentityCard';
import MedicalRecords from './MedicalRecords';
import MedVerifierFAB from './MedVerifierFAB';

// This is the "Home" tab content
const PatientDashboard = () => {
    return (
        <div className="min-h-screen relative">
            <ProfileHeader />

            <main className="px-4 pt-6 space-y-6 max-w-md mx-auto">
                <DigitalIdentityCard />
                <MedicalRecords />
            </main>

            <MedVerifierFAB />
        </div>
    );
};

export default PatientDashboard;
