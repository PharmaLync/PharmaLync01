import React from 'react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Search } from 'lucide-react';

const ActivityLogPage = () => {
    // Mock Activity Data (Current Week)
    const logs = [
        { id: 1, name: "Rahul Deshmukh", diagnosis: "Viral Pyrexia", date: "Today", time: "10:30 AM", status: "Prescribed" },
        { id: 2, name: "Priya Sharma", diagnosis: "Migraine", date: "Yesterday", time: "04:15 PM", status: "Referred" },
        { id: 3, name: "Amit Kumar", diagnosis: "General Checkup", date: "28 Jan", time: "11:00 AM", status: "Completed" },
        { id: 4, name: "Sarah Khan", diagnosis: "Stomach Pain", date: "28 Jan", time: "09:45 AM", status: "Prescribed" },
    ];

    return (
        <div className="px-4 py-6 pb-24 space-y-6">
            <h1 className="text-xl font-bold text-slate-900">Activity Log</h1>

            {/* Search */}
            <div className="relative">
                <Search className="absolute left-4 top-3.5 text-slate-400" size={20} />
                <input
                    type="text"
                    placeholder="Search patients..."
                    className="w-full pl-12 pr-4 py-3 rounded-xl bg-white border border-slate-200 shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-500/20"
                />
            </div>

            {/* Logs List */}
            <div className="space-y-4">
                <h3 className="text-sm font-bold text-slate-500 uppercase tracking-wider mb-2">This Week</h3>
                {logs.map(log => (
                    <Card key={log.id} className="p-4 border-0 shadow-sm flex justify-between items-center group hover:bg-slate-50 transition-colors cursor-pointer">
                        <div>
                            <h4 className="font-bold text-slate-800">{log.name}</h4>
                            <p className="text-xs text-slate-500 font-medium">{log.diagnosis}</p>
                        </div>
                        <div className="text-right">
                            <p className="text-xs font-bold text-slate-900">{log.date}</p>
                            <p className="text-[10px] text-slate-400 mb-1">{log.time}</p>
                            <Badge variant="outline" className={`text-[10px] py-0 h-5 border-0 ${log.status === 'Prescribed' ? 'bg-green-100 text-green-700' :
                                    log.status === 'Referred' ? 'bg-orange-100 text-orange-700' : 'bg-slate-100 text-slate-600'
                                }`}>
                                {log.status}
                            </Badge>
                        </div>
                    </Card>
                ))}
            </div>
        </div>
    );
};

export default ActivityLogPage;
