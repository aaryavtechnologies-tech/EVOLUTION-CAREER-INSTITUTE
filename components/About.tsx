"use client";

import React, { useState, useEffect } from "react";
import {
  Users,
  Lightbulb,
  Award,
  HeartHandshake,
  CheckCircle2,
  BookOpen,
  Maximize2,
  X,
} from "lucide-react";

export default function About() {
  const [showAwardModal, setShowAwardModal] = useState(false);

  useEffect(() => {
    if (!showAwardModal) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setShowAwardModal(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [showAwardModal]);
  const highlights = [
    {
      title: "Student-Focused Learning",
      description: "Individual attention to identify every student's learning pace and conceptual strengths.",
      icon: Users,
      bgColor: "bg-blue-50",
      borderColor: "border-blue-100",
      iconColor: "text-[#123C78]",
    },
    {
      title: "Concept-Based Education",
      description: "Focus on in-depth understanding of core principles rather than superficial rote memorization.",
      icon: Lightbulb,
      bgColor: "bg-amber-50",
      borderColor: "border-amber-100",
      iconColor: "text-[#E0AD15]",
    },
    {
      title: "Experienced Faculty Guidance",
      description: "Learn with strategic mentorship from educators with IIT-JEE qualification backgrounds.",
      icon: Award,
      bgColor: "bg-red-50",
      borderColor: "border-red-100",
      iconColor: "text-[#D71920]",
    },
    {
      title: "Consistent Academic Support",
      description: "Regular evaluations, continuous doubt solving, and structured practice throughout the term.",
      icon: HeartHandshake,
      bgColor: "bg-emerald-50",
      borderColor: "border-emerald-100",
      iconColor: "text-emerald-600",
    },
  ];

  return (
    <section id="about" className="py-20 lg:py-28 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Institute Certification & Study Desk Photo */}
          <div className="lg:col-span-5 relative order-2 lg:order-1">
            <div className="relative mx-auto max-w-[340px]">
              {/* Decorative Background Accent */}
              <div className="absolute -top-3 -left-3 w-full h-full rounded-2xl bg-[#071D43]/5 border-2 border-[#123C78]/10 -z-10"></div>

              <div className="rounded-2xl overflow-hidden shadow-xl border border-slate-200 bg-slate-100">
                <img
                  src="/images/gallery/certificate-lab.jpg"
                  alt="Evolution Career Institute academic mentor certification and science study resources"
                  className="w-full h-auto block object-cover hover:scale-[1.02] transition-transform duration-500"
                  loading="lazy"
                />
              </div>

              {/* Mentorship Info Strip Below Image */}
              <div className="mt-4 bg-[#071D43] text-white p-4 rounded-2xl shadow-lg border border-[#FFC928]/30">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-[#FFC928] text-[#071D43] font-bold flex-shrink-0">
                    <BookOpen className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-[11px] font-bold text-[#FFC928] uppercase tracking-wider">
                      Academic Heritage
                    </p>
                    <p className="text-xs sm:text-sm font-bold text-white mt-0.5">
                      An Initiative of IIT JEE Qualified Mentors
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Faculty Award Spotlight */}
            <div className="mt-6 lg:mt-12 p-4 rounded-2xl bg-gradient-to-br from-amber-50 via-white to-red-50/40 border border-amber-200/80 shadow-sm flex items-center gap-4">
              <button
                type="button"
                onClick={() => setShowAwardModal(true)}
                aria-label="View EduCart Teacher Impact Award Certificate"
                className="relative w-20 h-28 flex-shrink-0 rounded-xl overflow-hidden border-2 border-[#FFC928] shadow-md group cursor-pointer bg-[#580B15]"
              >
                <img
                  src="/media/awards/sharib-shah-teacher-impact-award.jpeg"
                  alt="EduCart Teacher Impact Award 2026-2027 awarded to Sharib Shah"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                  loading="lazy"
                />
                <span className="absolute inset-0 bg-black/25 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <Maximize2 className="w-4 h-4 text-white" />
                </span>
              </button>

              <div className="min-w-0 flex-1">
                <span className="inline-flex items-center gap-1 text-[10px] font-extrabold uppercase tracking-wider text-[#D71920] bg-red-100/80 px-2 py-0.5 rounded-full mb-1">
                  <Award className="w-3 h-3" />
                  EduCart Honor 2026–2027
                </span>
                <h3 className="text-sm sm:text-base font-black text-[#071D43] leading-snug">
                  Teacher Impact Award — Sharib Shah
                </h3>
                <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                  Honored by a panel of independent board experts for lasting impact on students&apos; lives (Award ID: PBX23-4).
                </p>
                <button
                  type="button"
                  onClick={() => setShowAwardModal(true)}
                  className="mt-2 inline-flex items-center gap-1 text-xs font-bold text-[#123C78] hover:text-[#D71920] transition-colors cursor-pointer"
                >
                  <Maximize2 className="w-3.5 h-3.5" />
                  <span>View Award Certificate</span>
                </button>
              </div>
            </div>
          </div>

          {/* Right Column: Content & Highlights */}
          <div className="lg:col-span-7 order-1 lg:order-2">
            {/* Section Tag */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#123C78]/10 text-[#123C78] text-xs font-bold uppercase tracking-wider mb-4">
              <span>About The Institute</span>
            </div>

            <h2
              className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#071D43] tracking-tight leading-tight mb-6"
              style={{ fontFamily: "'Outfit', sans-serif" }}
            >
              Shaping Futures Through{" "}
              <span className="text-[#D71920]">Quality Education</span>
            </h2>

            <div className="space-y-4 text-slate-600 text-base sm:text-lg leading-relaxed mb-8">
              <p>
                <strong className="text-[#071D43] font-semibold">
                  Evolution Career Institute
                </strong>{" "}
                is committed to providing quality academic guidance and structured preparation for
                students aiming to excel in school examinations and competitive entrance
                examinations.
              </p>
              <p>
                With guidance from{" "}
                <span className="text-[#123C78] font-semibold">
                  IIT-JEE qualified mentors
                </span>
                , our focus is on building strong fundamentals, improving problem-solving abilities,
                and developing confidence in every student.
              </p>
            </div>

            {/* 4 Highlight Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {highlights.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div
                    key={idx}
                    className={`p-4 rounded-xl border ${item.borderColor} ${item.bgColor} hover:shadow-md transition-all duration-300 flex flex-col justify-between`}
                  >
                    <div className="flex items-center gap-3 mb-2">
                      <div className="p-2 rounded-lg bg-white shadow-sm flex-shrink-0">
                        <Icon className={`w-5 h-5 ${item.iconColor}`} />
                      </div>
                      <h3 className="font-bold text-[#071D43] text-sm sm:text-base leading-snug">
                        {item.title}
                      </h3>
                    </div>
                    <p className="text-xs sm:text-sm text-slate-600 leading-normal pl-1">
                      {item.description}
                    </p>
                  </div>
                );
              })}
            </div>

            {/* Address callout */}
            <div className="mt-8 pt-6 border-t border-slate-100 flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-2 text-sm text-slate-600">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0" />
                <span>Classes 9th to 12th &bull; Sadar Cantt, Lucknow</span>
              </div>
              <a
                href="#courses"
                className="text-sm font-bold text-[#123C78] hover:text-[#D71920] transition-colors inline-flex items-center gap-1.5"
              >
                <span>View All Courses &rarr;</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Award Certificate Modal */}
      {showAwardModal && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="EduCart Teacher Impact Award Certificate"
          onClick={() => setShowAwardModal(false)}
          className="fixed inset-0 z-50 bg-slate-950/90 backdrop-blur-sm flex items-center justify-center p-4"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-lg w-full bg-[#071D43] rounded-2xl border border-[#FFC928]/40 shadow-2xl overflow-hidden"
          >
            <div className="flex items-center justify-between px-5 py-3 border-b border-white/10 text-white">
              <div className="flex items-center gap-2">
                <Award className="w-4 h-4 text-[#FFC928]" />
                <span className="text-sm font-bold">
                  EduCart Teacher Impact Award 2026–2027
                </span>
              </div>
              <button
                type="button"
                onClick={() => setShowAwardModal(false)}
                aria-label="Close certificate preview"
                className="p-1.5 rounded-lg text-slate-300 hover:text-white hover:bg-white/10"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="p-4 bg-black/40 flex justify-center">
              <img
                src="/media/awards/sharib-shah-teacher-impact-award.jpeg"
                alt="EduCart Teacher Impact Award 2026-2027 awarded to Sharib Shah"
                className="max-h-[75vh] w-auto object-contain rounded-lg"
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

