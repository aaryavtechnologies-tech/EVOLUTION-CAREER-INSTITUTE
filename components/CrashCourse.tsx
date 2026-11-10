"use client";

import React, { useState, useEffect } from "react";
import {
  Calendar,
  Clock,
  Sparkles,
  ArrowRight,
  Target,
  Zap,
  CheckCircle2,
  Users,
} from "lucide-react";

interface CrashCourseProps {
  onEnquireCrashCourse?: () => void;
}

export default function CrashCourse({ onEnquireCrashCourse }: CrashCourseProps) {
  // Target date: 15th November 2026 at 09:00 AM IST
  const targetTime = new Date("2026-11-15T09:00:00+05:30").getTime();

  const [timeLeft, setTimeLeft] = useState<{
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
  }>({
    days: 4,
    hours: 21,
    minutes: 57,
    seconds: 43,
  });

  const [mounted, setMounted] = useState(false);

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

  const exams = ["NEET", "IIT-JEE", "CUET", "NDA", "BOARDS"];

  const handleEnquire = () => {
    if (onEnquireCrashCourse) {
      onEnquireCrashCourse();
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
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#D71920]/80 border border-[#FFC928]/40 shadow-lg mb-6 backdrop-blur-md">
            <Zap className="w-4 h-4 text-[#FFC928] animate-bounce" />
            <span className="text-xs sm:text-sm font-extrabold text-white uppercase tracking-wider">
              Intensive Fast-Track Batch
            </span>
          </div>

          {/* Main Heading */}
          <h2
            className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white uppercase mb-4"
            style={{ fontFamily: "'Outfit', sans-serif" }}
          >
            CRASH COURSE{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFC928] via-[#FFE27D] to-[#FFC928]">
              2026
            </span>
          </h2>

          {/* Supporting text */}
          <p className="text-xl sm:text-2xl font-bold text-slate-200 mb-6">
            Give Your Preparation the Final Push!
          </p>

          {/* Highlight Starting Date */}
          <div className="inline-block p-1 rounded-2xl bg-gradient-to-r from-[#FFC928] via-[#D71920] to-[#FFC928] mb-10 shadow-xl">
            <div className="px-6 sm:px-10 py-3 sm:py-4 rounded-xl bg-[#071D43] flex items-center justify-center gap-3">
              <Calendar className="w-6 h-6 text-[#FFC928] flex-shrink-0" />
              <span className="text-lg sm:text-2xl font-extrabold text-white tracking-wide">
                Starting From <span className="text-[#FFC928]">15th November 2026</span>
              </span>
            </div>
          </div>

          {/* Target Grade Badge */}
          <div className="mb-10">
            <span className="text-xs uppercase tracking-widest text-slate-300 font-semibold block mb-2">
              Eligible Students
            </span>
            <div className="inline-flex items-center gap-2 px-5 py-2 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 text-white font-extrabold text-base sm:text-lg">
              <Users className="w-5 h-5 text-[#FFC928]" />
              Class 9th to 12th
            </div>
          </div>

          {/* Countdown Clock */}
          <div className="mb-12">
            <p className="text-xs sm:text-sm uppercase tracking-widest text-[#FFC928] font-bold mb-4 flex items-center justify-center gap-2">
              <Clock className="w-4 h-4" />
              Batch Starts In
            </p>

            <div className="grid grid-cols-4 gap-2 sm:gap-4 max-w-lg mx-auto">
              {[
                { label: "Days", value: mounted ? timeLeft.days : 4 },
                { label: "Hours", value: mounted ? timeLeft.hours : 21 },
                { label: "Minutes", value: mounted ? timeLeft.minutes : 50 },
                { label: "Seconds", value: mounted ? timeLeft.seconds : 0 },
              ].map((item, index) => (
                <div
                  key={index}
                  className="p-3 sm:p-5 rounded-2xl bg-[#071D43]/90 border border-white/20 shadow-2xl backdrop-blur-md flex flex-col items-center justify-center"
                >
                  <span className="text-2xl sm:text-4xl lg:text-5xl font-black text-[#FFC928] tabular-nums font-mono">
                    {String(item.value).padStart(2, "0")}
                  </span>
                  <span className="text-[10px] sm:text-xs uppercase font-bold text-slate-300 mt-1 tracking-wider">
                    {item.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Examinations Covered */}
          <div className="mb-10">
            <p className="text-xs uppercase tracking-widest text-slate-300 font-semibold mb-3">
              Targeted Examinations
            </p>
            <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3">
              {exams.map((exam, idx) => (
                <span
                  key={idx}
                  className="px-4 py-2 rounded-lg bg-white/15 border border-white/20 text-white text-xs sm:text-sm font-bold tracking-wide shadow-sm hover:border-[#FFC928] transition-colors"
                >
                  {exam}
                </span>
              ))}
            </div>
          </div>

          {/* CTA Button */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              type="button"
              onClick={handleEnquire}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-black text-base text-[#071D43] bg-gradient-to-r from-[#FFC928] via-[#FFD858] to-[#FFC928] hover:shadow-[0_8px_30px_rgba(255,201,40,0.6)] border border-[#E0AD15] transition-all hover:scale-105 active:scale-95"
            >
              <span>Enquire About Crash Course</span>
              <ArrowRight className="w-5 h-5 text-[#071D43]" />
            </button>
            <a
              href="tel:6390247880"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl font-bold text-sm text-white bg-white/10 hover:bg-white/20 border border-white/20 transition-all"
            >
              <span>Call For Batch Timings</span>
            </a>
          </div>

          {/* Notice info */}
          <p className="text-xs text-slate-300 mt-6">
            * Limited intake per batch to ensure dedicated mentor-to-student ratio and problem solving.
          </p>
        </div>
      </div>
    </section>
  );
}
