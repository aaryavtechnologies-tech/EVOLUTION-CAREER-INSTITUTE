"use client";

import React from "react";
import { Sparkles, Gift, ArrowRight, Flame, Percent } from "lucide-react";

interface DiwaliOfferProps {
  onClaimOffer?: () => void;
}

export default function DiwaliOffer({ onClaimOffer }: DiwaliOfferProps) {
  const handleClaim = () => {
    if (onClaimOffer) {
      onClaimOffer();
    }
    const element = document.getElementById("admissions");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="special-offer"
      className="py-20 lg:py-28 relative overflow-hidden bg-gradient-to-br from-[#4A050E] via-[#680C17] to-[#39040A] text-white"
    >
      {/* Decorative Festive Background */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Warm Golden Glow Centers */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[38rem] h-[38rem] bg-[#EA580C]/25 rounded-full blur-3xl"></div>
        <div className="absolute top-10 left-1/4 w-72 h-72 bg-[#FFC928]/20 rounded-full blur-2xl"></div>
        <div className="absolute bottom-10 right-1/4 w-72 h-72 bg-[#FFC928]/20 rounded-full blur-2xl"></div>

        {/* Intricate Mandala / Rangoli Circular Pattern Background */}
        <div className="absolute inset-0 flex items-center justify-center opacity-10">
          <svg className="w-[600px] h-[600px] text-[#FFC928]" viewBox="0 0 200 200" fill="currentColor">
            <circle cx="100" cy="100" r="90" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="4 4" />
            <circle cx="100" cy="100" r="70" fill="none" stroke="currentColor" strokeWidth="1.5" />
            <circle cx="100" cy="100" r="50" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="3 3" />
            <circle cx="100" cy="100" r="30" fill="none" stroke="currentColor" strokeWidth="2" />
            {[...Array(12)].map((_, i) => (
              <g key={i} transform={`rotate(${i * 30} 100 100)`}>
                <path d="M100 10 C96 30 96 40 100 50 C104 40 104 30 100 10 Z" fill="currentColor" />
                <circle cx="100" cy="60" r="3" fill="currentColor" />
              </g>
            ))}
          </svg>
        </div>

        {/* Hanging Lanterns / Fairy Light Sparkles */}
        <div className="absolute top-0 left-0 right-0 flex justify-around opacity-40">
          {[...Array(8)].map((_, i) => (
            <div key={i} className="flex flex-col items-center">
              <div
                className="w-px bg-gradient-to-b from-yellow-200 to-[#FFC928]"
                style={{ height: `${20 + (i % 3) * 18}px` }}
              ></div>
              <div className="w-2.5 h-2.5 rounded-full bg-[#FFC928] shadow-[0_0_10px_#FFC928] animate-pulse"></div>
            </div>
          ))}
        </div>
      </div>

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Festive Banner Container */}
        <div className="relative rounded-3xl p-8 sm:p-12 lg:p-16 border-2 border-[#FFC928]/40 bg-gradient-to-b from-[#580B15]/90 via-[#40060E]/90 to-[#580B15]/90 shadow-[0_10px_50px_rgba(215,25,32,0.3)] backdrop-blur-md">
          {/* Diyas Graphic Header */}
          <div className="flex items-center justify-center gap-6 sm:gap-12 mb-8">
            {/* Left Diya */}
            <div className="flex flex-col items-center">
              {/* Flame */}
              <div className="diya-flame w-6 h-8 sm:w-8 sm:h-10 mb-1">
                <svg viewBox="0 0 40 60" className="w-full h-full drop-shadow-[0_0_12px_#FFC928]">
                  <path
                    d="M20 2 C12 18 6 30 10 45 C14 55 26 55 30 45 C34 30 28 18 20 2 Z"
                    fill="url(#diyaFlameL)"
                  />
                  <defs>
                    <linearGradient id="diyaFlameL" x1="20" y1="2" x2="20" y2="55" gradientUnits="userSpaceOnUse">
                      <stop offset="0%" stopColor="#FFFFFF" />
                      <stop offset="30%" stopColor="#FFE066" />
                      <stop offset="65%" stopColor="#EA580C" />
                      <stop offset="100%" stopColor="#D71920" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
              {/* Base */}
              <div className="w-14 sm:w-20 h-5 sm:h-7">
                <svg viewBox="0 0 100 40" className="w-full h-full">
                  <path
                    d="M10 10 C30 38 70 38 90 10 C70 18 30 18 10 10 Z"
                    fill="#C2410C"
                    stroke="#FFC928"
                    strokeWidth="2"
                  />
                  <path d="M5 10 Q50 20 95 10" stroke="#FFE066" strokeWidth="2" fill="none" />
                </svg>
              </div>
            </div>

            {/* Central Festive Pill */}
            <div className="inline-flex items-center gap-2 px-4 sm:px-6 py-2 rounded-full bg-[#FFC928]/20 border border-[#FFC928] text-[#FFC928] shadow-lg">
              <Gift className="w-4 h-4 sm:w-5 sm:h-5 text-[#FFC928]" />
              <span className="text-xs sm:text-sm font-extrabold tracking-widest uppercase">
                Special Early Bird Offer
              </span>
            </div>

            {/* Right Diya */}
            <div className="flex flex-col items-center">
              {/* Flame */}
              <div className="diya-flame w-6 h-8 sm:w-8 sm:h-10 mb-1">
                <svg viewBox="0 0 40 60" className="w-full h-full drop-shadow-[0_0_12px_#FFC928]">
                  <path
                    d="M20 2 C12 18 6 30 10 45 C14 55 26 55 30 45 C34 30 28 18 20 2 Z"
                    fill="url(#diyaFlameR)"
                  />
                  <defs>
                    <linearGradient id="diyaFlameR" x1="20" y1="2" x2="20" y2="55" gradientUnits="userSpaceOnUse">
                      <stop offset="0%" stopColor="#FFFFFF" />
                      <stop offset="30%" stopColor="#FFE066" />
                      <stop offset="65%" stopColor="#EA580C" />
                      <stop offset="100%" stopColor="#D71920" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
              {/* Base */}
              <div className="w-14 sm:w-20 h-5 sm:h-7">
                <svg viewBox="0 0 100 40" className="w-full h-full">
                  <path
                    d="M10 10 C30 38 70 38 90 10 C70 18 30 18 10 10 Z"
                    fill="#C2410C"
                    stroke="#FFC928"
                    strokeWidth="2"
                  />
                  <path d="M5 10 Q50 20 95 10" stroke="#FFE066" strokeWidth="2" fill="none" />
                </svg>
              </div>
            </div>
          </div>

          {/* Heading */}
          <div className="text-center">
            <h2
              className="text-3xl sm:text-5xl lg:text-6xl font-black uppercase tracking-wider text-[#FFC928] mb-4 drop-shadow-[0_4px_12px_rgba(0,0,0,0.6)]"
              style={{ fontFamily: "'Outfit', sans-serif" }}
            >
              DIWALI SPECIAL OFFER
            </h2>

            {/* Supporting Text */}
            <p className="text-lg sm:text-2xl font-bold text-white mb-8">
              Celebrate Diwali with the Gift of Education!
            </p>

            {/* GIANT 50% DISCOUNT HIGHLIGHT */}
            <div className="my-6 inline-block">
              <div className="relative px-8 sm:px-14 py-6 sm:py-8 rounded-3xl bg-gradient-to-r from-[#D71920] via-[#B51218] to-[#D71920] border-4 border-[#FFC928] shadow-[0_0_40px_rgba(255,201,40,0.5)]">
                <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                  <span
                    className="text-6xl sm:text-8xl lg:text-9xl font-black text-[#FFC928] tracking-tighter leading-none drop-shadow-[0_4px_8px_rgba(0,0,0,0.7)]"
                    style={{ fontFamily: "'Outfit', sans-serif" }}
                  >
                    50%
                  </span>
                  <div className="text-center sm:text-left">
                    <span
                      className="block text-3xl sm:text-5xl lg:text-6xl font-black text-white uppercase tracking-tight leading-none"
                      style={{ fontFamily: "'Outfit', sans-serif" }}
                    >
                      DISCOUNT
                    </span>
                    <span className="text-xs sm:text-sm font-bold uppercase tracking-widest text-[#FFC928] mt-1 block">
                      Special Early Bird Privilege
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Supporting Subtext */}
            <p className="text-base sm:text-lg text-slate-200 max-w-xl mx-auto mt-6 mb-8 font-medium">
              Limited seats available. Take the first step towards a brighter academic future.
            </p>

            {/* CTA Button */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                type="button"
                onClick={handleClaim}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-10 py-4 rounded-2xl font-black text-base sm:text-lg text-[#071D43] bg-gradient-to-r from-[#FFC928] via-[#FFD858] to-[#FFC928] shadow-[0_6px_25px_rgba(255,201,40,0.6)] hover:shadow-[0_10px_35px_rgba(255,201,40,0.8)] border-2 border-[#E0AD15] transition-all hover:scale-105 active:scale-95"
              >
                <Sparkles className="w-5 h-5 text-[#D71920]" />
                <span>Claim Your Offer Now</span>
                <ArrowRight className="w-5 h-5 text-[#071D43]" />
              </button>

              <a
                href="tel:6390247880"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 rounded-2xl font-bold text-sm sm:text-base text-white bg-white/10 hover:bg-white/20 border border-white/20 transition-all"
              >
                <span>Call Helpline: 6390247880</span>
              </a>
            </div>

            {/* Offer Terms Note */}
            <p className="text-[11px] sm:text-xs text-yellow-200/80 mt-6 tracking-wide">
              * Early bird admission benefit available on registration. Connect with the institute for batch allocation.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

