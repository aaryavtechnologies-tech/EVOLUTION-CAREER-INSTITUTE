"use client";

import React from "react";
import {
  GraduationCap,
  Award,
  BookOpen,
  CheckCircle2,
  Calendar,
  Sparkles,
  ArrowRight,
  TrendingUp,
  FileCheck2,
} from "lucide-react";

export default function Hero() {
  const badges = [
    { text: "Classes 9th to 12th", icon: GraduationCap, color: "text-[#FFC928]" },
    { text: "Expert Faculty Guidance", icon: Award, color: "text-[#FFC928]" },
    { text: "Regular Tests & Analysis", icon: FileCheck2, color: "text-[#FFC928]" },
    { text: "Exam-Focused Preparation", icon: TrendingUp, color: "text-[#FFC928]" },
  ];

  return (
    <section
      id="home"
      className="relative overflow-hidden bg-gradient-to-br from-[#071D43] via-[#0B2555] to-[#123C78] text-white pt-12 pb-20 lg:pt-16 lg:pb-28"
    >
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Soft Ambient Light Glows */}
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-[#123C78]/60 rounded-full blur-3xl opacity-70"></div>
        <div className="absolute bottom-10 right-0 w-[30rem] h-[30rem] bg-[#D71920]/20 rounded-full blur-3xl opacity-40"></div>
        <div className="absolute top-10 right-1/4 w-80 h-80 bg-[#FFC928]/15 rounded-full blur-3xl opacity-50"></div>

        {/* Subtle Geometric Grid Pattern */}
        <div
          className="absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, #ffffff 1px, transparent 0)`,
            backgroundSize: "32px 32px",
          }}
        ></div>

        {/* Floating Academic Icons */}
        <div className="absolute top-20 right-16 hidden xl:block opacity-20 text-[#FFC928] animate-float">
          <GraduationCap className="w-16 h-16" />
        </div>
        <div className="absolute bottom-24 left-12 hidden xl:block opacity-15 text-white animate-pulse-slow">
          <BookOpen className="w-14 h-14" />
        </div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Content */}
          <div className="lg:col-span-7 flex flex-col items-start text-left z-10">
            {/* Super Tagline Pill */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 mb-6 shadow-sm">
              <span className="w-2.5 h-2.5 rounded-full bg-[#FFC928] animate-ping"></span>
              <span className="text-xs sm:text-sm font-semibold tracking-wide text-slate-100">
                An Initiative of IIT JEE Qualified Mentors
              </span>
            </div>

            {/* Institute Name */}
            <h2 className="text-sm sm:text-base font-extrabold tracking-widest text-[#FFC928] uppercase mb-2">
              EVOLUTION CAREER INSTITUTE
            </h2>

            {/* Main Headline */}
            <h1
              className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.1] mb-6 text-white"
              style={{ fontFamily: "'Outfit', sans-serif" }}
            >
              Your Success Story <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFC928] via-[#FFE27D] to-[#FFC928]">
                Starts Here.
              </span>
            </h1>

            {/* Supporting Description */}
            <p className="text-base sm:text-lg text-slate-200 leading-relaxed max-w-2xl mb-8 font-normal">
              Build strong concepts, prepare with expert guidance, and achieve your academic goals
              with structured preparation for{" "}
              <strong className="text-white font-semibold">
                NEET, IIT-JEE, CUET, NDA, and Board Examinations
              </strong>
              .
            </p>

            {/* Badges Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-2 gap-3 w-full max-w-xl mb-9">
              {badges.map((badge, index) => {
                const IconComponent = badge.icon;
                return (
                  <div
                    key={index}
                    className="flex items-center gap-2.5 p-2.5 sm:p-3 rounded-xl bg-white/10 backdrop-blur-md border border-white/15 hover:border-[#FFC928]/50 transition-all hover:bg-white/15"
                  >
                    <div className="p-1.5 rounded-lg bg-white/10 flex-shrink-0">
                      <IconComponent className={`w-4 h-4 sm:w-5 sm:h-5 ${badge.color}`} />
                    </div>
                    <span className="text-xs sm:text-sm font-semibold text-slate-100">
                      {badge.text}
                    </span>
                  </div>
                );
              })}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto">
              <a
                href="#courses"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl font-bold text-sm sm:text-base text-white bg-gradient-to-r from-[#123C78] to-[#1E4D94] hover:from-[#1E4D94] hover:to-[#255DB5] border border-white/30 shadow-lg hover:shadow-xl transition-all hover:-translate-y-0.5 active:translate-y-0"
              >
                <span>Explore Our Programs</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#admissions"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl font-extrabold text-sm sm:text-base text-[#071D43] bg-gradient-to-r from-[#FFC928] via-[#FFD650] to-[#FFC928] hover:shadow-[0_8px_25px_rgba(255,201,40,0.5)] border border-[#E0AD15] transition-all hover:-translate-y-0.5 active:translate-y-0"
              >
                <span>Enquire for Admission</span>
                <Sparkles className="w-4 h-4 text-[#D71920]" />
              </a>
            </div>

            {/* Quick Notice Badge */}
            <div className="mt-8 flex items-center gap-3 text-xs text-slate-300">
              <span className="inline-flex items-center px-2 py-0.5 rounded bg-[#D71920] text-white font-bold text-[10px] uppercase">
                New
              </span>
              <span>
                Crash Course 2026 begins <strong>15th November 2026</strong> &bull; Limited Batch
                Size
              </span>
            </div>
          </div>

          {/* Right Column: High Quality Imagery & Visual Badges */}
          <div className="lg:col-span-5 relative mt-4 lg:mt-0">
            {/* Visual Frame */}
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Outer Glow Ring */}
              <div className="absolute -inset-3 bg-gradient-to-tr from-[#FFC928]/30 via-[#D71920]/20 to-[#123C78]/40 rounded-3xl blur-xl opacity-75"></div>

              {/* Main Image Container */}
              <div className="relative rounded-2xl overflow-hidden border-2 border-white/20 shadow-2xl bg-[#0B234F]">
                <img
                  src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=900&auto=format&fit=crop"
                  alt="Confident Indian students studying together for competitive exams"
                  className="w-full h-[400px] sm:h-[480px] object-cover object-top hover:scale-105 transition-transform duration-700"
                  loading="eager"
                />

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#071D43] via-transparent to-transparent opacity-80"></div>

                {/* Overlaid Bottom Details */}
                <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-white/10 backdrop-blur-md border border-white/20">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-xs uppercase tracking-wider text-[#FFC928] font-bold">
                        Targeting Academic Excellence
                      </p>
                      <p className="text-sm font-bold text-white mt-0.5">
                        NEET &bull; IIT-JEE &bull; CUET &bull; NDA
                      </p>
                    </div>
                    <span className="px-2.5 py-1 rounded-md bg-[#D71920] text-white text-xs font-bold shadow">
                      Class 9 - 12
                    </span>
                  </div>
                </div>
              </div>

              {/* Floating Highlight Card 1 - Top Left */}
              <div className="absolute -top-5 -left-4 sm:-left-6 bg-white text-[#071D43] p-3.5 rounded-xl shadow-2xl border border-slate-100 flex items-center gap-3 animate-float max-w-[210px]">
                <div className="p-2 rounded-lg bg-[#FFC928]/20 text-[#071D43] flex-shrink-0">
                  <GraduationCap className="w-5 h-5 text-[#071D43]" />
                </div>
                <div>
                  <p className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">
                    Mentorship
                  </p>
                  <p className="text-xs font-extrabold text-[#071D43]">IIT JEE Qualified</p>
                </div>
              </div>

              {/* Floating Highlight Card 2 - Bottom Right */}
              <div className="absolute -bottom-5 -right-3 sm:-right-5 bg-white text-[#071D43] p-3.5 rounded-xl shadow-2xl border border-slate-100 flex items-center gap-3 max-w-[220px]">
                <div className="p-2 rounded-lg bg-[#D71920]/15 text-[#D71920] flex-shrink-0">
                  <Calendar className="w-5 h-5 text-[#D71920]" />
                </div>
                <div>
                  <p className="text-[11px] font-bold text-[#D71920] uppercase tracking-wider">
                    Crash Course 2026
                  </p>
                  <p className="text-xs font-extrabold text-[#071D43]">Starts 15th Nov</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
