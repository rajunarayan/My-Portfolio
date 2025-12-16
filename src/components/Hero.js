import React, { useState } from "react";
import { Typewriter } from "react-simple-typewriter";
import { Send } from "lucide-react";

const HIGHLIGHT = "rgb(15, 23, 42)";

export default function Hero() {
    const [hover, setHover] = useState(false);

    return (
        <section id="home" className="bg-dots">
            <div className="max-w-6xl mx-auto px-5 py-20 grid md:grid-cols-2 gap-10 items-center">
                {/* left headline */}
                <div>
                    <span className="sketch mb-3">Raju → (Explorer)</span>
                    <h1 className="h1 text-5xl md:text-6xl font-extrabold text-slate-900 leading-tight mt-4">
                        I create designs <br />that speaks simplicity
                    </h1>

                    <p className="mt-6 text-xl text-slate-800">
                        Hello, I’m <span className="font-semibold">M L N Raju</span>. I am a{" "}
                        <span className="text-slate-900 font-bold">
                            <Typewriter
                                words={["Web Developer", "Gamer"]}
                                loop={0}
                                typeSpeed={95}
                                deleteSpeed={50}
                                delaySpeed={1200}
                                cursor
                            />
                        </span>
                    </p>
                </div>

                {/* right mini-copy + CTA */}
                <div className="md:justify-self-end">
                    <p className="text-slate-700 max-w-md">
                        I’ll design and build clean, fast web experiences with modern stacks.
                    </p>

                    <a
                        href="#contact"
                        onMouseEnter={() => setHover(true)}
                        onMouseLeave={() => setHover(false)}
                        className="inline-flex items-center mt-6 px-5 py-2.5 border rounded-md font-medium transition-all duration-150"
                        style={{
                            borderColor: HIGHLIGHT,
                            color: HIGHLIGHT,
                            background: hover ? "rgba(172, 189, 205, 0.12)" : "transparent",
                            transform: hover ? "translateY(-4px)" : "none",
                        }}
                    >
                        Hire me
                    </a>

                </div>
            </div>
        </section>
    );
}
