"use client";

import React, { useState, useEffect } from "react";
import { Phone, MessageSquare, ArrowUp, Sparkles } from "lucide-react";

export default function FloatingContact() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const checkScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener("scroll", checkScroll, { passive: true });
    return () => window.removeEventListener("scroll", checkScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      {/* Mobile Floating Sticky Action Bar */}
      <div className="fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-slate-200 py-2 px-3 flex sm:hidden items-center justify-between gap-2 shadow-[0_-4px_12px_rgba(0,0,0,0.1)]">
        <a
          href="tel:6390247880"
          className="flex-1 flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-lg bg-[#071D43] text-white text-xs font-bold shadow-sm"
        >
          <Phone className="w-3.5 h-3.5 text-[#FFC928]" />
          <span>Call Us</span>
        </a>

        <a
          href="https://wa.me/916390247880?text=Hello%20Evolution%20Career%20Institute%2C%20I%20would%20like%20to%20enquire%20about%20admissions."
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-lg bg-[#25D366] text-white text-xs font-bold shadow-sm"
        >
          <MessageSquare className="w-3.5 h-3.5" />
          <span>WhatsApp</span>
        </a>

        <a
          href="#admissions"
          className="flex-1 flex items-center justify-center gap-1 py-2.5 px-2 rounded-lg bg-[#FFC928] text-[#071D43] text-xs font-extrabold shadow-sm text-center"
        >
          <span>Enquire</span>
        </a>
      </div>

      {/* Desktop Floating Speed Dial */}
      <div className="fixed bottom-6 right-6 z-40 hidden sm:flex flex-col items-end gap-3">
        {/* WhatsApp Button */}
        <a
          href="https://wa.me/916390247880?text=Hello%20Evolution%20Career%20Institute%2C%20I%20would%20like%20to%20enquire%20about%20admissions."
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat on WhatsApp"
          className="group flex items-center gap-2 p-3.5 rounded-full bg-[#25D366] text-white shadow-xl hover:shadow-2xl hover:scale-110 active:scale-95 transition-all"
        >
          <span className="max-w-0 overflow-hidden whitespace-nowrap group-hover:max-w-xs transition-all duration-300 text-xs font-bold pl-1">
            Chat on WhatsApp
          </span>
          <MessageSquare className="w-6 h-6" />
        </a>

        {/* Scroll To Top Button */}
        {showScrollTop && (
          <button
            type="button"
            onClick={scrollToTop}
            aria-label="Scroll to top"
            className="p-3 rounded-full bg-[#071D43] text-[#FFC928] hover:bg-[#123C78] shadow-lg hover:scale-110 active:scale-95 transition-all border border-[#FFC928]/30"
          >
            <ArrowUp className="w-5 h-5" />
          </button>
        )}
      </div>
    </>
  );
}
