import React, { useState } from "react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="sticky top-0 bg-white/80 backdrop-blur border-b border-gray-200 z-50">
      <div className="max-w-6xl mx-auto px-5 py-4 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#home"
          className="flex items-center gap-2 font-extrabold h1 text-xl text-slate-900"
        >
          <span className="inline-block w-3 h-3 bg-slate-900 rounded-full rotate-45"></span>
          M L N Raju
        </a>

        {/* Desktop Nav */}
        <nav className="hidden sm:flex items-center gap-8 text-slate-700">
          <a href="#home" className="hover:text-slate-900">
            Home
          </a>
          <a href="#skills" className="hover:text-slate-900">
            Skills
          </a>
          <a href="#projects" className="hover:text-slate-900">
            Projects
          </a>
          <a href="#experience" className="hover:text-slate-900">
            Experience
          </a>
          <a href="#contact" className="hover:text-slate-900">
            Contact
          </a>
        </nav>

        {/* Hamburger for Mobile */}
        <button
          className="sm:hidden flex flex-col gap-1.5 w-6 h-6 justify-center items-center"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <span
            className={`block h-0.5 w-full transition-transform duration-300 origin-center`}
            style={{
              backgroundColor: "rgb(15, 23, 42)",
              transform: isOpen ? "rotate(45deg) translateY(6px)" : "none",
            }}
          ></span>
          <span
            className={`block h-0.5 w-full transition-opacity duration-300`}
            style={{
              backgroundColor: "rgb(15, 23, 42)",
              opacity: isOpen ? 0 : 1,
            }}
          ></span>
          <span
            className={`block h-0.5 w-full transition-transform duration-300 origin-center`}
            style={{
              backgroundColor: "rgb(15, 23, 42)",
              transform: isOpen ? "rotate(-45deg) translateY(-6px)" : "none",
            }}
          ></span>
        </button>


      </div>

      {/* Mobile Menu with slide-down animation */}
      <div
        className={`sm:hidden overflow-hidden transition-all duration-300 ${isOpen ? "max-h-96 py-4" : "max-h-0"
          } bg-white/95 backdrop-blur border-t border-gray-200`}
      >
        <div className="flex flex-col gap-4 px-5">
          <a
            href="#home"
            className="hover:text-slate-900"
            onClick={() => setIsOpen(false)}
          >
            Home
          </a>
          <a
            href="#skills"
            className="hover:text-slate-900"
            onClick={() => setIsOpen(false)}
          >
            Skills
          </a>
          <a
            href="#projects"
            className="hover:text-slate-900"
            onClick={() => setIsOpen(false)}
          >
            Projects
          </a>
          <a
            href="#experience"
            className="hover:text-slate-900"
            onClick={() => setIsOpen(false)}
          >
            Experience
          </a>
          <a
            href="#contact"
            className="hover:text-slate-900"
            onClick={() => setIsOpen(false)}
          >
            Contact
          </a>
        </div>
      </div>
    </header>
  );
}
