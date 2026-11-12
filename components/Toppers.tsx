"use client";

import React from "react";
import { Trophy, Award, Sparkles, ArrowRight, Star } from "lucide-react";

interface TopperStudent {
  name: string;
  image: string;
  featured?: boolean;
  scores: {
    subject: string;
    percentage: string;
  }[];
}

export default function Toppers() {
  const toppers: TopperStudent[] = [
    {
      name: "Safiya Qureshi",
      image: "/images/toppers/safiya-qureshi.png",
      scores: [
        { subject: "Science", percentage: "91%" },
        { subject: "Maths", percentage: "88%" },
      ],
    },
    {
      name: "Mahi Singh",
      image: "/images/toppers/mahi-singh.png",
      featured: true,
      scores: [
        { subject: "Science", percentage: "96%" },
        { subject: "Maths", percentage: "97%" },
      ],
    },
    {
      name: "Tuba Mariyam",
      image: "/images/toppers/tuba-mariyam.png",
      scores: [
        { subject: "Science", percentage: "96%" },
        { subject: "English", percentage: "87%" },
      ],
    },
  ];

  return (
    <section
      id="toppers"
      className="py-20 lg:py-24 bg-gradient-to-b from-white via-slate-50 to-white relative overflow-hidden"
    >
      {/* Subtle Background Accents */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-12 left-1/4 w-72 h-72 bg-[#FFC928]/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-12 right-1/4 w-80 h-80 bg-[#123C78]/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FFC928]/20 border border-[#E0AD15]/40 text-[#071D43] text-xs font-extrabold uppercase tracking-wider mb-4 shadow-sm">
            <Trophy className="w-4 h-4 text-[#D71920]" />
            <span>Class 10 &bull; 2024–25 Batch Toppers</span>
          </div>

          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#071D43] tracking-tight leading-tight mb-4"
            style={{ fontFamily: "'Outfit', sans-serif" }}
          >
            Our Proud <span className="text-[#D71920]">Board Achievers</span>
          </h2>

          <p className="text-base sm:text-lg text-slate-600">
            Celebrating the hard work, conceptual clarity, and outstanding board examination
            results of our Class 10th (2024–25 Batch) students.
          </p>
        </div>

        {/* 3 Toppers Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch max-w-5xl mx-auto">
          {toppers.map((student) => (
            <div
              key={student.name}
              className={`group relative rounded-3xl bg-white overflow-hidden transition-all duration-300 hover:-translate-y-1.5 flex flex-col ${
                student.featured
                  ? "border-2 border-[#FFC928] shadow-xl hover:shadow-2xl ring-4 ring-[#FFC928]/15"
                  : "border border-slate-200 shadow-md hover:shadow-xl hover:border-[#123C78]/30"
              }`}
            >
              {/* Top Stage with Navy Backdrop */}
              <div className="relative pt-8 px-6 bg-gradient-to-b from-[#071D43] via-[#0E2F66] to-[#123C78] flex flex-col items-center justify-end overflow-hidden">
                {/* Decorative Radial Glow Behind Portrait */}
                <div className="absolute top-6 left-1/2 -translate-x-1/2 w-52 h-52 bg-[#FFC928]/20 rounded-full blur-2xl pointer-events-none"></div>

                {/* Batch Badge */}
                <div className="absolute top-3.5 left-3.5 right-3.5 flex items-center justify-between z-10">
                  <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-[10px] font-bold uppercase tracking-wider text-slate-100">
                    <Star className="w-3 h-3 text-[#FFC928] fill-[#FFC928]" />
                    2024–25 Batch
                  </span>
                  {student.featured && (
                    <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-[#FFC928] text-[#071D43] text-[10px] font-black uppercase tracking-wider shadow">
                      <Award className="w-3 h-3 text-[#D71920]" />
                      Star Performer
                    </span>
                  )}
                </div>

                {/* Transparent Cutout Portrait */}
                <div className="relative w-56 sm:w-60 h-56 sm:h-60 flex items-end justify-center mt-4">
                  <img
                    src={student.image}
                    alt={`${student.name} - Evolution Career Institute Class 10 Topper 2024-25`}
                    className="w-full h-full object-contain object-bottom drop-shadow-[0_8px_18px_rgba(0,0,0,0.45)] group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>
              </div>

              {/* Golden Divider Bar */}
              <div className="h-1.5 w-full bg-gradient-to-r from-[#FFC928] via-[#D71920] to-[#FFC928]"></div>

              {/* Student Name & Subject Scores */}
              <div className="p-6 flex-1 flex flex-col justify-between text-center bg-white">
                <div>
                  <span className="text-[11px] font-extrabold uppercase tracking-widest text-[#D71920] block mb-1">
                    Class 10th Board Topper
                  </span>
                  <h3
                    className="text-2xl font-black text-[#071D43] tracking-tight mb-5"
                    style={{ fontFamily: "'Outfit', sans-serif" }}
                  >
                    {student.name}
                  </h3>
                </div>

                {/* Subject Score Badges */}
                <div className="grid grid-cols-2 gap-3 pt-2">
                  {student.scores.map((score) => (
                    <div
                      key={score.subject}
                      className="p-3 rounded-2xl bg-slate-50 border border-slate-200/80 group-hover:border-[#FFC928]/60 group-hover:bg-amber-50/40 transition-colors"
                    >
                      <span className="block text-[11px] font-bold uppercase tracking-wider text-slate-500">
                        {score.subject}
                      </span>
                      <span
                        className="block text-2xl font-black text-[#071D43] mt-0.5 tabular-nums"
                        style={{ fontFamily: "'Outfit', sans-serif" }}
                      >
                        {score.percentage}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Motivation & Action Strip */}
        <div className="mt-12 text-center">
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 px-6 py-4 rounded-2xl bg-[#071D43] text-white shadow-lg border border-white/10">
            <div className="flex items-center gap-2.5 text-sm font-semibold">
              <Sparkles className="w-5 h-5 text-[#FFC928] flex-shrink-0" />
              <span>Want to see your name among our next batch toppers?</span>
            </div>
            <a
              href="#admissions"
              className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-xl bg-[#FFC928] hover:bg-[#FFD858] text-[#071D43] text-xs font-black uppercase tracking-wide transition-colors shadow"
            >
              <span>Join Class 9th–12th Batch</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
