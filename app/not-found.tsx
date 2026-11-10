import React from "react";
import Logo from "@/components/Logo";
import { ArrowLeft, Home, Phone, MessageSquare } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#071D43] via-[#0B2555] to-[#123C78] text-white flex flex-col justify-between p-6">
      <div className="max-w-7xl mx-auto w-full pt-6">
        <a href="/" className="inline-block">
          <Logo variant="light" size="md" />
        </a>
      </div>

      <div className="max-w-2xl mx-auto text-center py-16 px-4">
        <span className="inline-block px-3 py-1 rounded-full bg-[#FFC928]/20 border border-[#FFC928] text-[#FFC928] text-xs font-bold uppercase tracking-wider mb-4">
          Error 404 &bull; Page Not Found
        </span>

        <h1
          className="text-5xl sm:text-7xl font-black text-white mb-4 tracking-tight"
          style={{ fontFamily: "'Outfit', sans-serif" }}
        >
          Lost Your Way?
        </h1>

        <p className="text-base sm:text-lg text-slate-200 max-w-lg mx-auto mb-8">
          The page you are looking for doesn’t exist or has been moved. Let’s get you back on track to academic excellence!
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="/"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-bold text-sm text-[#071D43] bg-[#FFC928] hover:bg-[#FFD858] transition-all shadow-lg"
          >
            <Home className="w-4 h-4" />
            <span>Return to Homepage</span>
          </a>

          <a
            href="https://wa.me/916390247880?text=Hello%20Evolution%20Career%20Institute%2C%20I%20need%20help%20with%20course%20information."
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-bold text-sm text-white bg-[#25D366] hover:bg-[#1EBE5D] transition-all"
          >
            <MessageSquare className="w-4 h-4" />
            <span>Chat on WhatsApp</span>
          </a>
        </div>

        <div className="mt-10 pt-8 border-t border-white/10 text-xs text-slate-300">
          Need immediate admission assistance? Call our helpline at{" "}
          <a href="tel:6390247880" className="text-[#FFC928] font-bold underline">
            +91 6390247880
          </a>
        </div>
      </div>

      <div className="max-w-7xl mx-auto w-full text-center text-xs text-slate-400 pb-4">
        &copy; 2026 Evolution Career Institute. All Rights Reserved.
      </div>
    </div>
  );
}

