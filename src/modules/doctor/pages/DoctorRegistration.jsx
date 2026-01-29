import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Building2, FileBadge, MapPin, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Logo from '@/components/ui/Logo';

const DoctorRegistration = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        licenseNumber: '',
        hospitalName: '',
        branch: ''
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        // Here we would typically save to backend
        console.log("Registered:", formData);
        navigate('/doctor/dashboard');
    };

    return (
        <div className="min-h-screen bg-slate-50 flex flex-col items-center justify-center p-4">
            <div className="w-full max-w-md space-y-8">
                <div className="text-center flex flex-col items-center">
                    <Logo size="lg" className="mb-4" />
                    <h2 className="text-2xl font-bold text-slate-900">Final Step</h2>
                    <p className="text-slate-500">Complete your profile to start practicing</p>
                </div>

                <Card className="border-0 shadow-xl">
                    <CardHeader>
                        <CardTitle>Professional Details</CardTitle>
                        <CardDescription>
                            Please verify your medical credentials.
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <form onSubmit={handleSubmit} className="space-y-5">
                            <div className="space-y-2">
                                <label className="text-xs font-semibold text-slate-500 uppercase flex items-center gap-2">
                                    <FileBadge size={14} /> Medical License Number
                                </label>
                                <input
                                    required
                                    type="text"
                                    placeholder="e.g. WBMC-2023-8821"
                                    className="w-full p-3 rounded-xl border border-slate-200 bg-slate-50 focus:outline-none focus:ring-2 focus:ring-teal-500/20"
                                    value={formData.licenseNumber}
                                    onChange={e => setFormData({ ...formData, licenseNumber: e.target.value })}
                                />
                            </div>

                            <div className="space-y-2">
                                <label className="text-xs font-semibold text-slate-500 uppercase flex items-center gap-2">
                                    <Building2 size={14} /> Hospital / Clinic Name
                                </label>
                                <input
                                    required
                                    type="text"
                                    placeholder="e.g. Apollo Gleneagles"
                                    className="w-full p-3 rounded-xl border border-slate-200 bg-slate-50 focus:outline-none focus:ring-2 focus:ring-teal-500/20"
                                    value={formData.hospitalName}
                                    onChange={e => setFormData({ ...formData, hospitalName: e.target.value })}
                                />
                            </div>

                            <div className="space-y-2">
                                <label className="text-xs font-semibold text-slate-500 uppercase flex items-center gap-2">
                                    <MapPin size={14} /> Branch / Location
                                </label>
                                <input
                                    required
                                    type="text"
                                    placeholder="e.g. Salt Lake, Sector V"
                                    className="w-full p-3 rounded-xl border border-slate-200 bg-slate-50 focus:outline-none focus:ring-2 focus:ring-teal-500/20"
                                    value={formData.branch}
                                    onChange={e => setFormData({ ...formData, branch: e.target.value })}
                                />
                            </div>

                            <Button className="w-full h-12 text-lg mt-6 bg-teal-700 hover:bg-teal-800" type="submit">
                                Complete Registration <ArrowRight className="ml-2" size={18} />
                            </Button>
                        </form>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
};

export default DoctorRegistration;
