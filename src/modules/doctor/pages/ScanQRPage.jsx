import React, { useState, useEffect } from 'react';
import { Html5Qrcode } from 'html5-qrcode';
import { QrCode, Search, User, ScanLine, Smartphone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
import PageTransition from '@/components/ui/PageTransition';

const ScanQRPage = () => {
    const navigate = useNavigate();
    const [scannerActive, setScannerActive] = useState(false);
    const [errorMsg, setErrorMsg] = useState('');
    const html5QrCodeRef = React.useRef(null);

    const startScanner = async () => {
        setScannerActive(true);
        setErrorMsg('');

        // Wait for DOM to render the scanner container
        setTimeout(async () => {
            try {
                if (!html5QrCodeRef.current) {
                    html5QrCodeRef.current = new Html5Qrcode("reader");
                }

                const config = {
                    fps: 10,
                    qrbox: { width: 250, height: 250 },
                    aspectRatio: 1.0
                };

                await html5QrCodeRef.current.start(
                    { facingMode: "environment" },
                    config,
                    async (decodedText) => {
                        await stopScanner();
                        handleScanSuccess(decodedText);
                    }
                );
            } catch (err) {
                console.error("Scanner Error", err);
                setErrorMsg("Could not access camera. Please check permissions.");
                setScannerActive(false);
            }
        }, 100);
    };

    const stopScanner = async () => {
        if (html5QrCodeRef.current && html5QrCodeRef.current.isScanning) {
            try {
                await html5QrCodeRef.current.stop();
            } catch (err) {
                console.error("Failed to stop scanner", err);
            }
        }
    };

    const handleScanSuccess = (decodedText) => {
        try {
            const data = JSON.parse(decodedText);
            if (data.type === 'patient' && data.id) {
                navigate(`/doctor/patient/${data.id}`);
            } else {
                setErrorMsg("Invalid QR Code: Not a patient ID card.");
                setScannerActive(false);
            }
        } catch (e) {
            // Fallback for simple ID strings if legacy support needed, or error
            if (decodedText.startsWith('P-')) {
                navigate(`/doctor/patient/${decodedText}`);
            } else {
                setErrorMsg("Invalid QR Format");
                setScannerActive(false);
            }
        }
    };

    const closeScanner = async () => {
        await stopScanner();
        setScannerActive(false);
    };

    useEffect(() => {
        return () => {
            if (html5QrCodeRef.current && html5QrCodeRef.current.isScanning) {
                html5QrCodeRef.current.stop().catch(console.error);
            }
        };
    }, []);

    return (
        <PageTransition className="flex flex-col items-center justify-start min-h-[85vh] px-6 pt-12 pb-20">

            <div className="text-center mb-10">
                <h1 className="text-2xl font-bold text-slate-900 dark:text-white tracking-tight mb-2">Patient Identification</h1>
                <p className="text-slate-500 dark:text-slate-400 text-sm">Scan Patient QR or Government ID to proceed</p>
            </div>

            {errorMsg && (
                <div className="mb-6 p-4 bg-red-50 text-red-600 rounded-xl text-sm border border-red-100 max-w-xs">
                    {errorMsg}
                </div>
            )}

            {/* Professional Scanner UI */}
            {!scannerActive ? (
                <div className="relative w-72 h-72 rounded-3xl overflow-hidden shadow-xl bg-slate-50 dark:bg-slate-900 border-4 border-slate-200 dark:border-slate-800 mb-8 relative group cursor-pointer" onClick={startScanner}>

                    {/* Camera Placeholder */}
                    <div className="absolute inset-0 flex items-center justify-center bg-slate-100 dark:bg-slate-800">
                        <User className="text-slate-300 dark:text-slate-700 w-24 h-24" strokeWidth={1.5} />
                    </div>

                    {/* Scan Overlay */}
                    <div className="absolute inset-0 z-10 p-6 flex flex-col justify-between">
                        <div className="flex justify-between w-full opacity-60">
                            <div className="w-10 h-10 border-t-4 border-l-4 border-blue-500 rounded-tl-xl" />
                            <div className="w-10 h-10 border-t-4 border-r-4 border-blue-500 rounded-tr-xl" />
                        </div>
                        <div className="flex justify-between w-full opacity-60">
                            <div className="w-10 h-10 border-b-4 border-l-4 border-blue-500 rounded-bl-xl" />
                            <div className="w-10 h-10 border-b-4 border-r-4 border-blue-500 rounded-br-xl" />
                        </div>
                    </div>

                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/20 backdrop-blur-[1px] z-20">
                        <span className="bg-white text-slate-900 px-4 py-2 rounded-full font-bold shadow-lg text-sm flex items-center gap-2">
                            <ScanLine size={16} /> Tap to Scan
                        </span>
                    </div>
                </div>
            ) : (
                <div className="fixed inset-0 z-50 bg-slate-900 flex flex-col items-center justify-center p-6">
                    <button
                        onClick={closeScanner}
                        className="absolute top-8 right-8 text-white/50 hover:text-white p-2 bg-white/10 rounded-full"
                    >
                        <ScanLine size={24} className="rotate-45" /> {/* Close icon */}
                    </button>

                    <div className="w-full max-w-sm space-y-8 flex flex-col items-center">
                        <div className="text-center">
                            <h3 className="text-white text-xl font-bold">Scanning Patient ID</h3>
                        </div>

                        <div className="w-full aspect-square bg-black rounded-3xl border-2 border-white/10 relative overflow-hidden ring-4 ring-blue-500/20">
                            <div id="reader" className="w-full h-full"></div>
                        </div>
                        <p className="text-white/60 text-sm">Align QR code within the frame</p>
                    </div>
                </div>
            )}

            <div className="w-full max-w-xs space-y-6">

                <div className="relative py-2">
                    <div className="absolute inset-0 flex items-center">
                        <span className="w-full border-t border-slate-200 dark:border-slate-800" />
                    </div>
                    <div className="relative flex justify-center text-xs uppercase">
                        <span className="bg-slate-50 dark:bg-slate-950 px-2 text-slate-500">Or manually enter ID</span>
                    </div>
                </div>

                <div className="relative">
                    <input
                        type="text"
                        placeholder="Patient ID / Mobile"
                        className="w-full px-4 py-3.5 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/20 text-slate-900 dark:text-white transition-all shadow-sm placeholder:text-slate-400 dark:placeholder:text-slate-500"
                        onKeyDown={(e) => {
                            if (e.key === 'Enter') navigate(`/doctor/patient/${e.target.value}`)
                        }}
                    />
                    <div className="absolute right-2 top-1/2 -translate-y-1/2 p-2 bg-slate-100 rounded-lg text-slate-500">
                        <Search size={18} />
                    </div>
                </div>
            </div>
        </PageTransition>
    );
};

export default ScanQRPage;
