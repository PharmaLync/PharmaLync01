import React from 'react';
import ProfileHeader from './ProfileHeader';
import DigitalIdentityCard from './DigitalIdentityCard';
import RemindersList from './components/RemindersList';
import MedVerifierFAB from './MedVerifierFAB';

// This is the "Home" tab content
const PatientDashboard = () => {
    return (
        <div className="min-h-screen relative">
            <ProfileHeader />

            <main className="px-4 pt-6 space-y-6 max-w-md mx-auto">
                <DigitalIdentityCard />
                <RemindersList />
            </main>

            <MedVerifierFAB />
        </div>
    );
};

export default PatientDashboard;
