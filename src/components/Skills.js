import React from "react";
import { FaJs, FaReact, FaNodeJs, FaJava } from "react-icons/fa";
import { SiMongodb, SiExpress } from "react-icons/si";

const skills = [
    { name: "MongoDB", Icon: SiMongodb, color: "sticker-yellow", rot: "-rotate-2", tag: "Database" },
    { name: "Express.js", Icon: SiExpress, color: "sticker-blue", rot: "rotate-1", tag: "Backend" },
    { name: "JavaScript", Icon: FaJs, color: "sticker-pink", rot: "-rotate-1", tag: "Web" },
    { name: "React", Icon: FaReact, color: "sticker-blue", rot: "rotate-[-2deg]", tag: "UI" },
    { name: "Node.js", Icon: FaNodeJs, color: "sticker-yellow", rot: "rotate-2", tag: "Backend" },
    { name: "Java", Icon: FaJava, color: "sticker-pink", rot: "-rotate-1", tag: "Programming" },
];

export default function Skills() {
    return (
        <section id="skills" className="bg-dots">
            <div className="max-w-6xl mx-auto px-5 py-20">
                <span className="sketch">What I do?</span>
                <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {skills.map(({ name, Icon, color, rot, tag }) => (
                        <div
                            key={name}
                            className={`sticker ${color} ${rot} p-8 hover:scale-[1.03] transition`}
                        >
                            <div className="flex items-center justify-between">
                                <span className="note-tag">{tag}</span>
                            </div>
                            <div className="mt-6 flex items-center gap-4">
                                <Icon className="text-slate-900" size={46} />
                                <h3 className="h2 text-2xl font-extrabold text-slate-900">{name}</h3>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
