"use client";

import React from "react";
import { Users, Lightbulb, Award, HeartHandshake, CheckCircle2, BookOpen } from "lucide-react";

export default function About() {
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
          {/* Left Column: Educational Photo & Badges */}
          <div className="lg:col-span-5 relative order-2 lg:order-1">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Decorative Background Accent */}
              <div className="absolute -top-4 -left-4 w-full h-full rounded-2xl bg-[#071D43]/5 border-2 border-[#123C78]/10 -z-10"></div>
              
              <div className="rounded-2xl overflow-hidden shadow-xl border border-slate-200 bg-slate-100">
                <img
                  src="https://images.unsplash.com/photo-1577896851231-70ef18881754?q=80&w=900&auto=format&fit=crop"
                  alt="Evolution Career Institute classroom learning and mentorship"
                  className="w-full h-[440px] object-cover hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </div>

              {/* Mentorship Badge */}
              <div className="absolute -bottom-6 -right-4 sm:-right-6 bg-[#071D43] text-white p-5 rounded-2xl shadow-xl border border-[#FFC928]/30 max-w-xs">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-[#FFC928] text-[#071D43] font-bold">
                    <BookOpen className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-[#FFC928] uppercase tracking-wider">
                      Academic Heritage
                    </p>
                    <p className="text-sm font-bold text-white mt-0.5">
                      An Initiative of IIT JEE Qualified Mentors
                    </p>
                  </div>
                </div>
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
    </section>
  );
}
