import React from "react";

const items = [
    {
        n: 1,
        role: "Frontend (Projects)",
        where: "Personal / Academic",
        when: "2025",
        desc: "Built responsive UIs with React & Tailwind;Portfolio",
    },
    {
        n: 2,
        role: "Backend (Django)",
        where: "Student Management System",
        when: "2025",
        desc: "Auth, CRUD, and Admin Panel.",
    },
    {
        n: 3,
        role: "Automation",
        where: "Exam Duty Mail Reminder",
        when: "2025",
        desc: "Apps Script + Sheets; Automated mail notifications",
    },
];

export default function Experience() {
    return (
        <section id="experience" className="bg-dots">
            <div className="max-w-6xl mx-auto px-5 py-20">
                <span className="sketch">Experience</span>

                <div className="mt-10 grid md:grid-cols-2 gap-10">
                    {/* left caption like figma */}
                    <p className="text-slate-600">
                        Have been building for the web through projects and coursework.
                    </p>

                    {/* right list */}
                    <div className="border-t border-b border-slate-300 py-8 space-y-6">
                        {items.map((it) => (
                            <div key={it.n} className="flex gap-5 items-start">
                                <div className="w-12 h-12 rounded-lg bg-amber-200 flex items-center justify-center text-xl font-extrabold text-slate-900 shadow-[4px_5px_0_#1112]">
                                    {it.n}
                                </div>
                                <div>
                                    <h4 className="font-bold text-slate-900">
                                        {it.role} <span className="font-normal text-slate-700">— {it.where}</span>
                                    </h4>
                                    <p className="text-xs text-slate-500">{it.when}</p>
                                    <p className="mt-1 text-slate-700">{it.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
}
