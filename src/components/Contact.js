import React, { useState } from "react";
import { Send } from "lucide-react"; // telegram-like airplane icon

export default function Contact() {
  const [hover, setHover] = useState(false);
  const HIGHLIGHT = "rgb(15, 23, 42)";

  return (
    <section className="bg-dots py-20" id="contact">
      <div className="max-w-6xl mx-auto px-5">
        {/* Heading and subtext wrapper */}
        <div className="mb-8">
          <span className="sketch">Contact Here</span>
          <p className="text-slate-600 mt-10">
            Have a project idea? Just send me hi.
          </p>
        </div>

        {/* Minimalistic Button */}
        <div className="text-center">
          <a
            href="mailto:rajunarayan004@gmail.com"
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
            className="inline-flex items-center gap-2 px-5 py-2.5 border rounded-md font-medium transition-all duration-150"
            style={{
              borderColor: HIGHLIGHT,
              color: HIGHLIGHT,
              background: hover ? "rgba(172, 189, 205, 0.12)" : "transparent",
              transform: hover ? "translateY(-4px)" : "none",
            }}
          >
            Let’s Get in Touch
            <Send size={18} />
          </a>
        </div>
      </div>
    </section>
  );
}
