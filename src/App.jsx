import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';

// Layouts
import AuthLayout from './layouts/AuthLayout';
import PatientLayout from './layouts/PatientLayout';
import DoctorLayout from './layouts/DoctorLayout';
import PharmacistLayout from './layouts/PharmacistLayout';

// Pages
import LoginPage from './pages/auth/LoginPage';
import SignupPage from './pages/auth/SignupPage';

// Modules (Now acting as Dashboard Pages)
import PatientDashboard from './modules/patient';
import PatientProfile from './modules/patient/ProfilePage';
import MedicineLog from './modules/patient/MedicineLog';
import PrescriptionsPage from './modules/patient/pages/PrescriptionsPage';

import DoctorDashboard from './modules/doctor';
import DoctorRegistration from './modules/doctor/pages/DoctorRegistration';
import ScanQRPage from './modules/doctor/pages/ScanQRPage';
import PatientDetailsPage from './modules/doctor/pages/PatientDetailsPage';
import DiagnosisPage from './modules/doctor/pages/DiagnosisPage';
import DraftPrescriptionPage from './modules/doctor/pages/DraftPrescriptionPage';
import ActivityLogPage from './modules/doctor/pages/ActivityLogPage';
import DoctorProfilePage from './modules/doctor/pages/DoctorProfilePage';
import PharmacistDashboard from './modules/pharmacist';

// Pharmacist Pages
import ScanQR from './modules/pharmacist/pages/ScanQR';
import DispensePage from './modules/pharmacist/pages/DispensePage';
import Stock from './modules/pharmacist/pages/Stock';
import HistoryPage from './modules/pharmacist/pages/History';
import Profile from './modules/pharmacist/pages/Profile';

function App() {
    return (
        <ThemeProvider>
            <BrowserRouter>
                <Routes>
                    {/* Public Routes */}
                    <Route element={<AuthLayout />}>
                        <Route path="/login" element={<LoginPage />} />
                        <Route path="/signup" element={<SignupPage />} />
                        <Route path="/" element={<Navigate to="/login" replace />} />
                    </Route>

                    {/* Patient Routes */}
                    <Route element={<PatientLayout />}>
                        <Route path="/patient/dashboard" element={<PatientDashboard />} />
                        <Route path="/patient/medicine-log" element={<MedicineLog />} />
                        <Route path="/patient/prescriptions" element={<PrescriptionsPage />} />
                        <Route path="/patient/profile" element={<PatientProfile />} />
                    </Route>

                    {/* Doctor Routes */}
                    <Route path="/doctor/register" element={<DoctorRegistration />} />
                    <Route element={<DoctorLayout />}>
                        <Route path="/doctor/dashboard" element={<Navigate to="/doctor/scan" replace />} />
                        <Route path="/doctor/scan" element={<ScanQRPage />} />
                        <Route path="/doctor/patient/:id" element={<PatientDetailsPage />} />
                        <Route path="/doctor/diagnose/:id" element={<DiagnosisPage />} />
                        <Route path="/doctor/prescription/:id" element={<DraftPrescriptionPage />} />
                        <Route path="/doctor/activity" element={<ActivityLogPage />} />
                        <Route path="/doctor/profile" element={<DoctorProfilePage />} />
                    </Route>

                    {/* Pharmacist Routes */}
                    <Route element={<PharmacistLayout />}>
                        <Route path="/pharmacist" element={<Navigate to="/pharmacist/scan" replace />} />
                        <Route path="/pharmacist/scan" element={<ScanQR />} />
                        <Route path="/pharmacist/dispense" element={<DispensePage />} />
                        <Route path="/pharmacist/stock" element={<Stock />} />
                        <Route path="/pharmacist/history" element={<HistoryPage />} />
                        <Route path="/pharmacist/profile" element={<Profile />} />
                    </Route>

                    {/* Fallback */}
                    <Route path="*" element={<Navigate to="/login" replace />} />
                </Routes>
            </BrowserRouter>
        </ThemeProvider>
    );
}

export default App;
