import React from "react";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

export default function Footer() {
    return (
        <footer className="border-t border-gray-200">
            <div className="max-w-6xl mx-auto px-5 py-6 flex items-center justify-between">
                <span className="text-sm text-slate-600">© {new Date().getFullYear()} M L N Raju</span>
                <div className="flex gap-3">
                    <a className="social-circle hover:bg-slate-900 hover:text-white transition" href="https://www.linkedin.com/in/mln-raju/" target="_blank" rel="noreferrer"><FaLinkedin /></a>
                    <a className="social-circle hover:bg-slate-900 hover:text-white transition" href="https://github.com/yourusername" target="_blank" rel="noreferrer"><FaGithub /></a>
                    <a className="social-circle hover:bg-slate-900 hover:text-white transition" href="mailto:rajunarayan004@gmail.com"><FaEnvelope /></a>
                </div>
            </div>
        </footer>
    );
}
