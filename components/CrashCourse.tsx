"use client";

import React, { useState, useEffect } from "react";
import {
  Calendar,
  Clock,
  ArrowRight,
  Zap,
  Users,
  Maximize2,
  X,
  IndianRupee,
} from "lucide-react";

interface CrashCourseProps {
  onEnquireCrashCourse?: (courseName?: string, className?: string) => void;
}

export default function CrashCourse({ onEnquireCrashCourse }: CrashCourseProps) {
  // Target date matching official poster: 20th November 2026 at 09:00 AM IST
  const targetTime = new Date("2026-11-20T09:00:00+05:30").getTime();

  const [timeLeft, setTimeLeft] = useState<{
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
  }>({
    days: 8,
    hours: 17,
    minutes: 20,
    seconds: 0,
  });

  const [mounted, setMounted] = useState(false);
  const [showPosterModal, setShowPosterModal] = useState(false);

  useEffect(() => {
    setMounted(true);
    const updateCountdown = () => {
      const now = new Date().getTime();
      const difference = targetTime - now;

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);
        setTimeLeft({ days, hours, minutes, seconds });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);
    return () => clearInterval(interval);
  }, [targetTime]);

  useEffect(() => {
    if (!showPosterModal) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setShowPosterModal(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [showPosterModal]);

  const feeTracks = [
    {
      label: "Class 10th",
      fee: "₹10,000",
      course: "Boards",
      classLevel: "10th",
      note: "Full Course Fee",
    },
    {
      label: "Class 12th",
      fee: "₹12,000",
      course: "Boards",
      classLevel: "12th",
      note: "Full Course Fee",
    },
    {
      label: "IIT-JEE",
      fee: "₹20,000",
      course: "IIT-JEE",
      classLevel: "12th",
      note: "Full Course Fee",
    },
    {
      label: "NEET",
      fee: "₹20,000",
      course: "NEET",
      classLevel: "12th",
      note: "Full Course Fee",
    },
  ];

  const handleEnquire = (courseName = "Boards", className = "12th") => {
    if (onEnquireCrashCourse) {
      onEnquireCrashCourse(courseName, className);
    }
    const element = document.getElementById("admissions");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="crash-course"
      className="py-20 lg:py-28 relative overflow-hidden bg-gradient-to-br from-[#071D43] via-[#480c14] to-[#123C78] text-white"
    >
      {/* Background Decorative Patterns */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-32 -right-32 w-96 h-96 bg-[#D71920]/40 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-[#FFC928]/20 rounded-full blur-3xl"></div>
        <div
          className="absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage: `radial-gradient(#FFC928 1px, transparent 1px)`,
            backgroundSize: "28px 28px",
          }}
        ></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column: Details, Countdown & Fee Cards */}
          <div className="lg:col-span-7 text-center lg:text-left">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#D71920]/80 border border-[#FFC928]/40 shadow-lg mb-6 backdrop-blur-md">
              <Zap className="w-4 h-4 text-[#FFC928] animate-bounce" />
              <span className="text-xs sm:text-sm font-extrabold text-white uppercase tracking-wider">
                Intensive Fast-Track Batch &bull; Limited Seats
              </span>
            </div>

            {/* Main Heading */}
            <h2
              className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white uppercase mb-3"
              style={{ fontFamily: "'Outfit', sans-serif" }}
            >
              CRASH COURSE{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFC928] via-[#FFE27D] to-[#FFC928]">
                2026
              </span>
            </h2>

            <p className="text-lg sm:text-xl font-bold text-slate-200 mb-6">
              Give Your Preparation the Final Push — Empowering Your Future, Securing Your Success!
            </p>

            {/* Starting Date & Eligibility */}
            <div className="flex flex-col sm:flex-row items-center lg:items-stretch justify-center lg:justify-start gap-3 mb-8">
              <div className="inline-block p-1 rounded-2xl bg-gradient-to-r from-[#FFC928] via-[#D71920] to-[#FFC928] shadow-xl">
                <div className="px-5 py-3 rounded-xl bg-[#071D43] flex items-center justify-center gap-2.5">
                  <Calendar className="w-5 h-5 text-[#FFC928] flex-shrink-0" />
                  <span className="text-sm sm:text-lg font-extrabold text-white tracking-wide">
                    Starting From <span className="text-[#FFC928]">20th November 2026</span>
                  </span>
                </div>
              </div>

              <div className="inline-flex items-center gap-2 px-4 py-3 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 text-white font-bold text-sm">
                <Users className="w-4 h-4 text-[#FFC928]" />
                <span>Class 10th, 12th, IIT-JEE &amp; NEET</span>
              </div>
            </div>

            {/* Countdown Clock */}
            <div className="mb-8">
              <p className="text-xs sm:text-sm uppercase tracking-widest text-[#FFC928] font-bold mb-3 flex items-center justify-center lg:justify-start gap-2">
                <Clock className="w-4 h-4" />
                Batch Starts In
              </p>

              <div className="grid grid-cols-4 gap-2 sm:gap-3 max-w-md mx-auto lg:mx-0">
                {[
                  { label: "Days", value: mounted ? timeLeft.days : 8 },
                  { label: "Hours", value: mounted ? timeLeft.hours : 17 },
                  { label: "Minutes", value: mounted ? timeLeft.minutes : 20 },
                  { label: "Seconds", value: mounted ? timeLeft.seconds : 0 },
                ].map((item, index) => (
                  <div
                    key={index}
                    className="p-3 sm:p-4 rounded-2xl bg-[#071D43]/90 border border-white/20 shadow-xl backdrop-blur-md flex flex-col items-center justify-center"
                  >
                    <span className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#FFC928] tabular-nums font-mono">
                      {String(item.value).padStart(2, "0")}
                    </span>
                    <span className="text-[10px] sm:text-xs uppercase font-bold text-slate-300 mt-1 tracking-wider">
                      {item.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Official Course Fee Structure from Poster */}
            <div className="mb-8">
              <p className="text-xs uppercase tracking-widest text-slate-300 font-semibold mb-3 flex items-center justify-center lg:justify-start gap-1.5">
                <IndianRupee className="w-3.5 h-3.5 text-[#FFC928]" />
                Official Crash Course Fee Structure (Click a Track to Enquire)
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {feeTracks.map((track) => (
                  <button
                    key={track.label}
                    type="button"
                    onClick={() => handleEnquire(track.course, track.classLevel)}
                    className="p-3.5 rounded-2xl bg-white/10 hover:bg-white/20 border border-white/20 hover:border-[#FFC928] text-left transition-all hover:-translate-y-0.5 cursor-pointer group"
                  >
                    <span className="block text-xs font-extrabold uppercase tracking-wider text-[#FFC928]">
                      {track.label}
                    </span>
                    <span className="block text-[11px] text-slate-300 mt-0.5">
                      {track.note}
                    </span>
                    <span className="block text-xl sm:text-2xl font-black text-white mt-1 group-hover:text-[#FFC928] transition-colors">
                      {track.fee}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <button
                type="button"
                onClick={() => handleEnquire("Boards", "12th")}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-black text-base text-[#071D43] bg-gradient-to-r from-[#FFC928] via-[#FFD858] to-[#FFC928] hover:shadow-[0_8px_30px_rgba(255,201,40,0.6)] border border-[#E0AD15] transition-all hover:scale-105 active:scale-95 cursor-pointer"
              >
                <span>Enquire About Crash Course</span>
                <ArrowRight className="w-5 h-5 text-[#071D43]" />
              </button>
              <a
                href="tel:6390247880"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl font-bold text-sm text-white bg-white/10 hover:bg-white/20 border border-white/20 transition-all"
              >
                <span>Call 6390247880 / 7390092459</span>
              </a>
            </div>

            <p className="text-xs text-slate-300 mt-5">
              * Limited intake per batch at Neelkanth Complex, Sadar Cantt, Lucknow.
            </p>
          </div>

          {/* Right Column: Crash Course Brochure & JEE ₹51,000 Prize Poster */}
          <div className="lg:col-span-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 items-center">
              <div className="relative">
                <div className="absolute -inset-2 bg-gradient-to-tr from-[#FFC928]/35 via-[#D71920]/25 to-[#123C78]/35 rounded-3xl blur-lg opacity-75"></div>
                <button
                  type="button"
                  onClick={() => setShowPosterModal(true)}
                  aria-label="Zoom official Crash Course 2026 poster"
                  className="relative w-full rounded-2xl overflow-hidden border-2 border-[#FFC928]/60 shadow-2xl bg-white group cursor-pointer block"
                >
                  <img
                    src="/media/posters/crash-course-2026.jpeg"
                    alt="Evolution Career Institute Crash Course 2026 official poster starting 20th November"
                    className="w-full h-auto object-contain group-hover:scale-[1.02] transition-transform duration-300"
                    loading="lazy"
                  />
                  <div className="absolute bottom-2.5 right-2.5 inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-[#071D43]/90 text-[#FFC928] text-[11px] font-bold shadow-lg border border-white/20">
                    <Maximize2 className="w-3 h-3" />
                    <span>Zoom</span>
                  </div>
                </button>
              </div>

              <div className="rounded-2xl overflow-hidden shadow-2xl border-2 border-[#FFC928]/40 bg-[#071D43]">
                <img
                  src="/images/gallery/jee-prize-poster.jpg"
                  alt="Evolution Career Institute JEE Mains and Advanced ₹51,000 Prize Poster"
                  className="w-full h-auto block hover:scale-[1.02] transition-transform duration-500"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Poster Zoom Modal */}
      {showPosterModal && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Crash Course 2026 Official Poster"
          onClick={() => setShowPosterModal(false)}
          className="fixed inset-0 z-50 bg-slate-950/90 backdrop-blur-sm flex items-center justify-center p-4"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-2xl w-full bg-[#071D43] rounded-2xl border border-[#FFC928]/40 shadow-2xl overflow-hidden"
          >
            <div className="flex items-center justify-between px-5 py-3 border-b border-white/10 text-white">
              <span className="text-sm font-bold text-[#FFC928]">
                Crash Course 2026 — Official Brochure
              </span>
              <button
                type="button"
                onClick={() => setShowPosterModal(false)}
                aria-label="Close poster preview"
                className="p-1.5 rounded-lg text-slate-300 hover:text-white hover:bg-white/10"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="p-3 bg-black/40 flex justify-center">
              <img
                src="/media/posters/crash-course-2026.jpeg"
                alt="Evolution Career Institute Crash Course 2026 official poster"
                className="max-h-[80vh] w-auto object-contain rounded-lg"
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
