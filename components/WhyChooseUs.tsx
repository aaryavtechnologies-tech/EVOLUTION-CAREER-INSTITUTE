"use client";

import React from "react";
import {
  RotateCcw,
  Target,
  BarChart3,
  GraduationCap,
  TrendingUp,
  CheckCircle2,
  Sparkles,
} from "lucide-react";

export default function WhyChooseUs() {
  const features = [
    {
      number: "01",
      title: "Concept Revision",
      description: "Strengthen your fundamentals and understand important concepts.",
      details:
        "Systematic revision modules that reinforce basic to advanced theories, ensuring zero conceptual blind spots before examinations.",
      icon: RotateCcw,
      iconColor: "text-blue-600",
      bgColor: "bg-blue-50/70",
      accentBorder: "border-blue-200",
    },
    {
      number: "02",
      title: "Exam-Focused Preparation",
      description: "Prepare with an examination-oriented learning approach.",
      details:
        "Curriculum mapped precisely to the latest patterns of NEET, IIT-JEE, CUET, NDA, and Board exams with target-oriented problem sheets.",
      icon: Target,
      iconColor: "text-red-600",
      bgColor: "bg-red-50/70",
      accentBorder: "border-red-200",
    },
    {
      number: "03",
      title: "Regular Tests & Analysis",
      description: "Track preparation through regular assessments and performance analysis.",
      details:
        "Weekly unit assessments, monthly simulated tests, and actionable performance diagnostics to track speed, accuracy, and weak areas.",
      icon: BarChart3,
      iconColor: "text-emerald-600",
      bgColor: "bg-emerald-50/70",
      accentBorder: "border-emerald-200",
    },
    {
      number: "04",
      title: "Expert Faculty Guidance",
      description: "Learn with guidance from IIT-JEE qualified mentors.",
      details:
        "Direct classroom mentorship and individual academic strategy from teachers with premier engineering & competitive testing credentials.",
      icon: GraduationCap,
      iconColor: "text-amber-600",
      bgColor: "bg-amber-50/70",
      accentBorder: "border-amber-200",
    },
    {
      number: "05",
      title: "Score Improvement Strategy",
      description: "Focus on improving academic performance through structured preparation.",
      details:
        "Step-by-step methodology designed to boost problem-solving speed, eliminate recurring errors, and optimize test-day performance.",
      icon: TrendingUp,
      iconColor: "text-purple-600",
      bgColor: "bg-purple-50/70",
      accentBorder: "border-purple-200",
    },
  ];

  return (
    <section id="why-choose-us" className="py-20 lg:py-28 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-md bg-[#D71920]/10 text-[#D71920] text-xs font-bold uppercase tracking-wider mb-3">
            <span>Our Core Advantages</span>
          </div>
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#071D43] tracking-tight leading-tight mb-4"
            style={{ fontFamily: "'Outfit', sans-serif" }}
          >
            Why Join Evolution Career Institute?
          </h2>
          <p className="text-base sm:text-lg text-slate-600">
            A structured, concept-driven learning methodology designed to empower every student.
          </p>
        </div>

        {/* Feature Cards Grid (5 Cards: 3 on top row, 2 centered on bottom row) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {features.slice(0, 3).map((feat, index) => {
            const Icon = feat.icon;
            return (
              <div
                key={index}
                className={`group relative p-8 rounded-2xl bg-white border border-slate-200 hover:${feat.accentBorder} shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between hover:-translate-y-1`}
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div
                      className={`w-14 h-14 rounded-2xl ${feat.bgColor} flex items-center justify-center transition-transform group-hover:scale-110 duration-300`}
                    >
                      <Icon className={`w-7 h-7 ${feat.iconColor}`} />
                    </div>
                    <span className="text-3xl font-black text-slate-200 group-hover:text-[#FFC928] transition-colors">
                      {feat.number}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-[#071D43] mb-3 group-hover:text-[#123C78] transition-colors">
                    {feat.title}
                  </h3>

                  <p className="text-sm font-semibold text-slate-700 mb-3 leading-relaxed">
                    {feat.description}
                  </p>

                  <p className="text-xs text-slate-500 leading-normal">
                    {feat.details}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center gap-2 text-xs font-bold text-[#071D43]">
                  <CheckCircle2 className="w-4 h-4 text-[#FFC928]" />
                  <span>Structured Curriculum</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Row for the remaining 2 cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-4xl mx-auto mt-6 lg:mt-8">
          {features.slice(3, 5).map((feat, index) => {
            const Icon = feat.icon;
            return (
              <div
                key={index}
                className={`group relative p-8 rounded-2xl bg-white border border-slate-200 hover:${feat.accentBorder} shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between hover:-translate-y-1`}
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div
                      className={`w-14 h-14 rounded-2xl ${feat.bgColor} flex items-center justify-center transition-transform group-hover:scale-110 duration-300`}
                    >
                      <Icon className={`w-7 h-7 ${feat.iconColor}`} />
                    </div>
                    <span className="text-3xl font-black text-slate-200 group-hover:text-[#FFC928] transition-colors">
                      {feat.number}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-[#071D43] mb-3 group-hover:text-[#123C78] transition-colors">
                    {feat.title}
                  </h3>

                  <p className="text-sm font-semibold text-slate-700 mb-3 leading-relaxed">
                    {feat.description}
                  </p>

                  <p className="text-xs text-slate-500 leading-normal">
                    {feat.details}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center gap-2 text-xs font-bold text-[#071D43]">
                  <CheckCircle2 className="w-4 h-4 text-[#FFC928]" />
                  <span>Dedicated Mentorship</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Callout Strip */}
        <div className="mt-16 text-center">
          <div className="inline-flex flex-wrap items-center justify-center gap-4 py-3 px-6 rounded-full bg-[#071D43] text-white text-xs sm:text-sm font-medium shadow-md">
            <span className="flex items-center gap-2 text-[#FFC928] font-bold">
              <Sparkles className="w-4 h-4" />
              Classes 9th to 12th
            </span>
            <span className="text-slate-400 hidden sm:inline">&bull;</span>
            <span>Neelkanth Complex, Sadar Cantt, Lucknow</span>
            <span className="text-slate-400 hidden sm:inline">&bull;</span>
            <a
              href="#admissions"
              className="text-[#FFC928] hover:underline font-bold"
            >
              Book a Counselling Session &rarr;
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

