"use client";

import React, { useState, useEffect } from "react";
import {
  FileText,
  Award,
  Sparkles,
  CheckCircle2,
  Phone,
  ArrowRight,
  ZoomIn,
  X,
  ChevronLeft,
  ChevronRight,
  GraduationCap,
  ShieldCheck,
  Percent,
} from "lucide-react";

export default function Prospectus() {
  const [activeTab, setActiveTab] = useState<"prospectus" | "achievements">("prospectus");
  const [modalImage, setModalImage] = useState<string | null>(null);

  const flyerItems = [
    {
      id: "prospectus",
      title: "Admission Prospectus",
      subtitle: "Courses, Sainik School Batch & Early Bird Benefits",
      src: "/images/gallery/prospectus-admissions.jpg",
      alt: "Evolution Career Institute official admission prospectus flyer for NEET, JEE, CUET, NDA, Boards, and Sainik School",
      tag: "Admissions Open",
    },
    {
      id: "achievements",
      title: "Our Achievements & Toppers",
      subtitle: "Class 12th & 10th Board Achievers Hall of Fame",
      src: "/images/gallery/achievements-toppers.jpg",
      alt: "Evolution Career Institute achievements list featuring Class 10th and 12th batch toppers and subject scores",
      tag: "Hall of Fame",
    },
  ];

  useEffect(() => {
    if (!modalImage) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setModalImage(null);
      if (e.key === "ArrowLeft") {
        setModalImage((prev) =>
          prev === flyerItems[0].src ? flyerItems[1].src : flyerItems[0].src
        );
      }
      if (e.key === "ArrowRight") {
        setModalImage((prev) =>
          prev === flyerItems[0].src ? flyerItems[1].src : flyerItems[0].src
        );
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [modalImage, flyerItems]);

  const learningBenefits = [
    "Fully A.C. Campus at Sadar Cantt, Lucknow",
    "Free Demo Classes for all new students",
    "Specialised & Experienced Faculty from IIT-JEE background",
    "Individual Interaction and personalized doubt sessions",
    "Class 1st to 12th — All Subjects & All Boards (CBSE, ICSE, UP)",
    "Dedicated Special Batch for Sainik School, RMS & RIMS",
  ];

  const topperHighlights = [
    {
      batch: "Class 12th (2025–26)",
      students: [
        { name: "Mahi Singh", score: "Chem 90% • Eng 86%" },
        { name: "Safiya Qureshi", score: "Bio 92% • Chem 82%" },
        { name: "Tuba Mariyam", score: "Bio 82% • Eng 88%" },
        { name: "Nandini", score: "Eng 88% • Chem 82%" },
        { name: "Ayan Qureshi", score: "Biology 82%" },
        { name: "Saqib Qureshi", score: "Chem 80% • Eng 77%" },
      ],
    },
    {
      batch: "Class 10th (2025–26)",
      students: [
        { name: "Mohd. Altamas", score: "Science 91% • Eng 82%" },
        { name: "Mohd. Naved", score: "English 87%" },
        { name: "Veer Singh", score: "Science 86% • SST 81%" },
        { name: "Onik", score: "Science 80% • SST 82%" },
        { name: "Sakshi Maurya", score: "English 80%" },
        { name: "Mohd. Arkan", score: "English 83% • SST 89%" },
        { name: "Ankita Pandey", score: "Overall 80%" },
      ],
    },
    {
      batch: "Class 10th (2024)",
      students: [
        { name: "Mahi Singh", score: "Maths 97% • Science 96%" },
        { name: "Safiya Qureshi", score: "Science 91% • Maths 88%" },
        { name: "Tuba Mariyam", score: "Science 93% • English 87%" },
      ],
    },
  ];

  return (
    <section
      id="prospectus"
      className="py-20 lg:py-24 bg-gradient-to-b from-amber-50/40 via-white to-slate-50 border-t border-slate-200/80 relative overflow-hidden"
    >
      {/* Subtle Background Glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-[#FFC928]/15 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 left-0 w-80 h-80 bg-[#123C78]/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#071D43] text-[#FFC928] text-xs font-extrabold uppercase tracking-wider mb-4 shadow-sm">
            <FileText className="w-4 h-4 text-[#FFC928]" />
            <span>Official Institute Pamphlet &bull; Hall of Fame</span>
          </div>

          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#071D43] tracking-tight leading-tight mb-4"
            style={{ fontFamily: "'Outfit', sans-serif" }}
          >
            Institute Prospectus &amp;{" "}
            <span className="text-[#D71920]">Board Achievements</span>
          </h2>

          <p className="text-base sm:text-lg text-slate-600">
            &ldquo;अब सफलता दूर नहीं&rdquo; &mdash; Explore our official admission flyer, learning
            benefits, Sainik School selections, and full student achievement roll.
          </p>
        </div>

        {/* Tab Toggle Navigation */}
        <div className="flex justify-center mb-10">
          <div
            role="tablist"
            aria-label="Prospectus view options"
            className="inline-flex p-1.5 rounded-2xl bg-slate-100 border border-slate-200 shadow-inner"
          >
            <button
              type="button"
              role="tab"
              id="tab-prospectus"
              aria-selected={activeTab === "prospectus"}
              aria-controls="panel-prospectus"
              onClick={() => setActiveTab("prospectus")}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-black transition-all cursor-pointer ${
                activeTab === "prospectus"
                  ? "bg-[#071D43] text-white shadow-md"
                  : "text-slate-600 hover:text-[#071D43]"
              }`}
            >
              <FileText className="w-4 h-4 text-[#FFC928]" />
              <span>Admission Prospectus</span>
            </button>

            <button
              type="button"
              role="tab"
              id="tab-achievements"
              aria-selected={activeTab === "achievements"}
              aria-controls="panel-achievements"
              onClick={() => setActiveTab("achievements")}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-black transition-all cursor-pointer ${
                activeTab === "achievements"
                  ? "bg-[#071D43] text-white shadow-md"
                  : "text-slate-600 hover:text-[#071D43]"
              }`}
            >
              <Award className="w-4 h-4 text-[#FFC928]" />
              <span>Our Achievements</span>
            </button>
          </div>
        </div>

        {/* Content Panels */}
        {activeTab === "prospectus" ? (
          <div
            id="panel-prospectus"
            role="tabpanel"
            aria-labelledby="tab-prospectus"
            className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center"
          >
            {/* Left: Interactive Flyer Image */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative group max-w-sm w-full">
                <div className="absolute -inset-2 bg-gradient-to-tr from-[#FFC928]/40 via-[#D71920]/20 to-[#123C78]/30 rounded-3xl blur-lg opacity-70 group-hover:opacity-100 transition-opacity"></div>
                <button
                  type="button"
                  onClick={() => setModalImage(flyerItems[0].src)}
                  aria-label="Click to enlarge Admission Prospectus pamphlet"
                  className="relative w-full rounded-2xl overflow-hidden shadow-2xl border-2 border-[#FFC928]/80 bg-white cursor-pointer block focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#071D43]"
                >
                  <img
                    src={flyerItems[0].src}
                    alt={flyerItems[0].alt}
                    className="w-full h-auto object-contain group-hover:scale-[1.02] transition-transform duration-300"
                    loading="lazy"
                  />
                  <div className="absolute bottom-3 right-3 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-[#071D43]/90 text-[#FFC928] text-xs font-bold shadow-lg border border-white/20 backdrop-blur-sm">
                    <ZoomIn className="w-3.5 h-3.5" />
                    <span>Click to Zoom</span>
                  </div>
                </button>
              </div>
            </div>

            {/* Right: Key Highlights Extracted from the Flyer */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#D71920]/10 text-[#D71920] text-xs font-black uppercase tracking-wider">
                <Percent className="w-4 h-4 text-[#D71920]" />
                <span>40% Discount On Early Bird Registrations</span>
              </div>

              <h3
                className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#071D43] leading-tight"
                style={{ fontFamily: "'Outfit', sans-serif" }}
              >
                Comprehensive Academic Coaching for{" "}
                <span className="text-[#D71920]">Class 1st to 12th</span>
              </h3>

              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                Learn with structured guidance from IIT-JEE qualified mentors. Whether targeting
                top percentiles in NEET / IIT-JEE, high scores in Board Exams, or admission in
                Sainik School, our curriculum delivers proven conceptual clarity.
              </p>

              {/* Learning Benefits Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                {learningBenefits.map((benefit, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-2.5 p-3 rounded-xl bg-white border border-slate-200/90 shadow-2xs"
                  >
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm font-semibold text-slate-700">
                      {benefit}
                    </span>
                  </div>
                ))}
              </div>

              {/* Special Sainik School Selection Callout */}
              <div className="p-4 sm:p-5 rounded-2xl bg-[#071D43] text-white flex flex-col sm:flex-row items-center justify-between gap-4 border border-[#FFC928]/40 shadow-md">
                <div className="flex items-center gap-3.5">
                  <div className="w-11 h-11 rounded-xl bg-[#FFC928] text-[#071D43] flex items-center justify-center flex-shrink-0 font-black">
                    <ShieldCheck className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-[11px] font-black uppercase tracking-wider text-[#FFC928] block">
                      Proven Selection Milestone
                    </span>
                    <p className="text-sm sm:text-base font-bold text-white">
                      Aryan Mishra &bull; Selected in Sainik School (2026 Batch)
                    </p>
                    <p className="text-xs text-slate-300">
                      Special dedicated batches for Sainik School, RMS &amp; RIMS.
                    </p>
                  </div>
                </div>
                <a
                  href="#admissions"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 px-4 py-2 rounded-xl bg-[#FFC928] text-[#071D43] text-xs font-black uppercase tracking-wide hover:bg-[#FFD858] transition-colors flex-shrink-0"
                >
                  <span>Enquire Batch</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <a
                  href="#admissions"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-black text-sm text-[#071D43] bg-gradient-to-r from-[#FFC928] via-[#FFD858] to-[#FFC928] hover:shadow-lg border border-[#E0AD15] transition-all hover:scale-105"
                >
                  <span>Claim Early Bird Benefit</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
                <a
                  href="tel:6390247880"
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-xl font-bold text-sm text-[#071D43] bg-white hover:bg-slate-50 border border-slate-300 transition-colors"
                >
                  <Phone className="w-4 h-4 text-[#D71920]" />
                  <span>Call 6390247880</span>
                </a>
              </div>
            </div>
          </div>
        ) : (
          <div
            id="panel-achievements"
            role="tabpanel"
            aria-labelledby="tab-achievements"
            className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center"
          >
            {/* Left: Interactive Achievements Flyer Image */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative group max-w-sm w-full">
                <div className="absolute -inset-2 bg-gradient-to-tr from-[#FFC928]/40 via-[#D71920]/20 to-[#123C78]/30 rounded-3xl blur-lg opacity-70 group-hover:opacity-100 transition-opacity"></div>
                <button
                  type="button"
                  onClick={() => setModalImage(flyerItems[1].src)}
                  aria-label="Click to enlarge Achievements flyer"
                  className="relative w-full rounded-2xl overflow-hidden shadow-2xl border-2 border-[#FFC928]/80 bg-white cursor-pointer block focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#071D43]"
                >
                  <img
                    src={flyerItems[1].src}
                    alt={flyerItems[1].alt}
                    className="w-full h-auto object-contain group-hover:scale-[1.02] transition-transform duration-300"
                    loading="lazy"
                  />
                  <div className="absolute bottom-3 right-3 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-[#071D43]/90 text-[#FFC928] text-xs font-bold shadow-lg border border-white/20 backdrop-blur-sm">
                    <ZoomIn className="w-3.5 h-3.5" />
                    <span>Click to Zoom</span>
                  </div>
                </button>
              </div>
            </div>

            {/* Right: Hall of Fame Breakdown */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#123C78]/10 text-[#123C78] text-xs font-black uppercase tracking-wider">
                <GraduationCap className="w-4 h-4 text-[#D71920]" />
                <span>Our Achievements Roll of Honour</span>
              </div>

              <h3
                className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#071D43] leading-tight"
                style={{ fontFamily: "'Outfit', sans-serif" }}
              >
                Celebrating Our Proud <span className="text-[#D71920]">Board &amp; Batch Achievers</span>
              </h3>

              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                Consistent conceptual rigor and regular testing have empowered students across
                Class 10th and 12th batches to secure stellar marks in Science, Chemistry, Maths,
                Biology, and English.
              </p>

              {/* Student Batches Cards */}
              <div className="space-y-4">
                {topperHighlights.map((section, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-2xl bg-white border border-slate-200/90 shadow-2xs"
                  >
                    <div className="flex items-center justify-between mb-2.5 pb-2 border-b border-slate-100">
                      <span className="text-xs font-extrabold text-[#D71920] uppercase tracking-wider">
                        {section.batch}
                      </span>
                      <span className="text-[11px] font-bold text-slate-500">
                        {section.students.length} Featured Achievers
                      </span>
                    </div>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                      {section.students.map((student, sIdx) => (
                        <div
                          key={sIdx}
                          className="p-2 rounded-xl bg-slate-50 border border-slate-200/70"
                        >
                          <p className="text-xs font-bold text-[#071D43] truncate">
                            {student.name}
                          </p>
                          <p className="text-[11px] font-extrabold text-[#123C78] mt-0.5">
                            {student.score}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <a
                  href="#admissions"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-black text-sm text-[#071D43] bg-gradient-to-r from-[#FFC928] via-[#FFD858] to-[#FFC928] hover:shadow-lg border border-[#E0AD15] transition-all hover:scale-105"
                >
                  <span>Enquire For Upcoming Batch</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
                <button
                  type="button"
                  onClick={() => setModalImage(flyerItems[1].src)}
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-xl font-bold text-sm text-[#071D43] bg-white hover:bg-slate-50 border border-slate-300 transition-colors cursor-pointer"
                >
                  <ZoomIn className="w-4 h-4 text-[#123C78]" />
                  <span>View Full Achievements Flyer</span>
                </button>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Lightbox Modal for High-Resolution View */}
      {modalImage && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Prospectus and Achievements Flyer Full View"
          onClick={() => setModalImage(null)}
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex items-center justify-center p-3 sm:p-6 animate-in fade-in duration-200"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-2xl w-full flex flex-col items-center"
          >
            {/* Top Toolbar */}
            <div className="w-full flex items-center justify-between text-white mb-2 px-2">
              <span className="text-xs sm:text-sm font-bold text-[#FFC928] uppercase tracking-wider">
                {modalImage === flyerItems[0].src
                  ? "Side 1: Admission Prospectus"
                  : "Side 2: Achievements Hall of Fame"}
              </span>
              <button
                type="button"
                onClick={() => setModalImage(null)}
                aria-label="Close image preview"
                className="p-1.5 rounded-full bg-white/20 hover:bg-white/30 text-white transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Flyer Image with Nav Buttons */}
            <div className="relative w-full flex items-center justify-center bg-black/50 rounded-2xl overflow-hidden border border-white/20">
              <button
                type="button"
                onClick={() =>
                  setModalImage((prev) =>
                    prev === flyerItems[0].src ? flyerItems[1].src : flyerItems[0].src
                  )
                }
                aria-label="Toggle to other side of flyer"
                className="absolute left-2 z-10 p-2 rounded-full bg-black/60 hover:bg-[#FFC928] text-white hover:text-[#071D43] transition-colors cursor-pointer"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              <img
                src={modalImage}
                alt="Evolution Career Institute Official Flyer Full View"
                className="max-h-[85vh] w-auto object-contain mx-auto"
              />

              <button
                type="button"
                onClick={() =>
                  setModalImage((prev) =>
                    prev === flyerItems[0].src ? flyerItems[1].src : flyerItems[0].src
                  )
                }
                aria-label="Toggle to other side of flyer"
                className="absolute right-2 z-10 p-2 rounded-full bg-black/60 hover:bg-[#FFC928] text-white hover:text-[#071D43] transition-colors cursor-pointer"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>

            {/* Bottom Caption / Quick Switcher */}
            <div className="mt-3 flex items-center justify-center gap-3 text-xs text-white">
              <button
                type="button"
                onClick={() => setModalImage(flyerItems[0].src)}
                className={`px-3 py-1 rounded-lg font-bold transition-colors cursor-pointer ${
                  modalImage === flyerItems[0].src
                    ? "bg-[#FFC928] text-[#071D43]"
                    : "bg-white/10 text-slate-300 hover:text-white"
                }`}
              >
                Prospectus (Side 1)
              </button>
              <button
                type="button"
                onClick={() => setModalImage(flyerItems[1].src)}
                className={`px-3 py-1 rounded-lg font-bold transition-colors cursor-pointer ${
                  modalImage === flyerItems[1].src
                    ? "bg-[#FFC928] text-[#071D43]"
                    : "bg-white/10 text-slate-300 hover:text-white"
                }`}
              >
                Achievements (Side 2)
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
