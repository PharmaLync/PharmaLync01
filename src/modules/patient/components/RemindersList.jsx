import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Bell, CheckCircle2, Circle } from 'lucide-react';
import { cn } from '@/lib/utils';

const RemindersList = () => {
    // Mock Data - Synced to "today"
    const [reminders, setReminders] = useState([
        { id: 1, medicine: 'Dolo 650', time: '09:00 AM', dosage: '1 Tablet', taken: true },
        { id: 2, medicine: 'Amoxicillin', time: '02:00 PM', dosage: '1 Capsule', taken: false },
        { id: 3, medicine: 'Pantoprazole', time: '09:00 PM', dosage: '1 Tablet', taken: false },
    ]);

    const toggleReminder = (id) => {
        setReminders(prev => prev.map(rem => {
            if (rem.id === id && !rem.taken) {
                return { ...rem, taken: true };
            }
            if (rem.id === id && rem.taken) {
                return { ...rem, taken: false };
            }
            return rem;
        }));
    };

    return (
        <Card className="border-0 shadow-sm bg-white dark:bg-slate-900 transition-colors duration-300">
            <CardHeader className="pb-2 flex flex-row items-center justify-between">
                <CardTitle className="text-lg font-bold text-slate-800 dark:text-slate-100 flex items-center gap-2">
                    <Bell size={18} className="text-teal-600 dark:text-teal-500" />
                    Today's Reminders
                </CardTitle>
                <span className="text-xs text-slate-400 dark:text-slate-500 font-medium">
                    {new Date().toLocaleDateString('en-US', { weekday: 'long', month: 'short', day: 'numeric' })}
                </span>
            </CardHeader>
            <CardContent className="space-y-3">
                {reminders.map((rem) => (
                    <div
                        key={rem.id}
                        onClick={() => toggleReminder(rem.id)}
                        className={cn(
                            "flex items-center p-3 rounded-xl border transition-all cursor-pointer",
                            rem.taken
                                ? "bg-slate-50 dark:bg-slate-800/50 border-slate-100 dark:border-slate-800 opacity-60"
                                : "bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 hover:border-teal-300 dark:hover:border-teal-700 shadow-sm"
                        )}
                    >
                        <div className={cn(
                            "w-6 h-6 rounded-full border-2 flex items-center justify-center mr-3 transition-colors",
                            rem.taken
                                ? "bg-teal-500 border-teal-500 text-white"
                                : "border-slate-300 dark:border-slate-600 text-transparent"
                        )}>
                            <CheckCircle2 size={14} fill={rem.taken ? "currentColor" : "none"} />
                        </div>

                        <div className="flex-1">
                            <h4 className={cn(
                                "font-bold text-sm",
                                rem.taken ? "text-slate-500 dark:text-slate-400 line-through" : "text-slate-800 dark:text-slate-200"
                            )}>
                                {rem.medicine}
                            </h4>
                            <p className="text-xs text-slate-500 dark:text-slate-400">
                                {rem.dosage} • {rem.time}
                            </p>
                        </div>
                    </div>
                ))}

                {reminders.every(r => r.taken) && (
                    <p className="text-center text-xs text-green-600 dark:text-green-400 font-medium py-2">
                        🎉 All dosages completed for today!
                    </p>
                )}
            </CardContent>
        </Card>
    );
};

export default RemindersList;
