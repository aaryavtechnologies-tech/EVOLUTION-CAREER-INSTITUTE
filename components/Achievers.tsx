"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  Trophy,
  Award,
  Sparkles,
  Star,
  GraduationCap,
  ShieldCheck,
  ArrowRight,
  Medal,
  CheckCircle2,
  FileText,
  Eye,
  Maximize2,
  X,
} from "lucide-react";

interface SubjectScore {
  subject: string;
  score: string;
}

interface Achiever {
  id: string;
  name: string;
  batch: "12th" | "10th" | "sainik";
  batchLabel: string;
  image: string;
  scores: SubjectScore[];
  featured?: boolean;
  highlightText?: string;
}

export default function Achievers() {
  const [activeFilter, setActiveFilter] = useState<"all" | "12th" | "10th">("all");
  const [showPosterModal, setShowPosterModal] = useState(false);

  // Class 12th Batch (2025–26)
  const class12thAchievers: Achiever[] = [
    {
      id: "nandini-12",
      name: "Nandini",
      batch: "12th",
      batchLabel: "Class 12th Batch (2025–26)",
      image: "/images/achievers/nandini.jpg",
      scores: [
        { subject: "English", score: "88%" },
        { subject: "Chemistry", score: "82%" },
      ],
      featured: true,
      highlightText: "Consistent Performer",
    },
    {
      id: "ayan-12",
      name: "Ayan Qureshi",
      batch: "12th",
      batchLabel: "Class 12th Batch (2025–26)",
      image: "/images/achievers/ayan-qureshi.jpg",
      scores: [{ subject: "Biology", score: "82%" }],
      featured: true,
      highlightText: "Science Achiever",
    },
    {
      id: "saqib-12",
      name: "Saqib Qureshi",
      batch: "12th",
      batchLabel: "Class 12th Batch (2025–26)",
      image: "/images/achievers/saqib-qureshi.jpg",
      scores: [
        { subject: "Chemistry", score: "80%" },
        { subject: "English", score: "77%" },
      ],
      highlightText: "Dedicated Student",
    },
  ];

  // Class 10th Batch Achievers
  const class10thAchievers: Achiever[] = [
    {
      id: "mahi-10",
      name: "Mahi Singh",
      batch: "10th",
      batchLabel: "Class 10th Batch",
      image: "/images/achievers/mahi-singh.jpg",
      scores: [
        { subject: "Maths", score: "97%" },
        { subject: "Science", score: "96%" },
      ],
      featured: true,
      highlightText: "Maths 97% • Science 96%",
    },
    {
      id: "safiya-10",
      name: "Safiya Qureshi",
      batch: "10th",
      batchLabel: "Class 10th Batch",
      image: "/images/achievers/safiya-qureshi.jpg",
      scores: [
        { subject: "Science", score: "91%" },
        { subject: "Maths", score: "88%" },
      ],
      featured: true,
      highlightText: "Science 91% Topper",
    },
    {
      id: "tuba-10",
      name: "Tuba Mariyam",
      batch: "10th",
      batchLabel: "Class 10th Batch",
      image: "/images/achievers/tuba-mariyam.jpg",
      scores: [
        { subject: "Science", score: "93%" },
        { subject: "English", score: "87%" },
      ],
      featured: true,
      highlightText: "Science 93% Topper",
    },
    {
      id: "altamas-10",
      name: "Mohd. Altamas",
      batch: "10th",
      batchLabel: "Class 10th Batch (2025–26)",
      image: "/images/achievers/mohd-altamas.jpg",
      scores: [
        { subject: "Science", score: "91%" },
        { subject: "English", score: "82%" },
      ],
      featured: true,
      highlightText: "Science 91% Topper",
    },
    {
      id: "aryan-10",
      name: "Aryan Mishra",
      batch: "10th",
      batchLabel: "Sainik School Special Batch (2026)",
      image: "/images/achievers/aryan-mishra.jpg",
      scores: [
        { subject: "Sainik School", score: "Selected" },
        { subject: "Batch", score: "2026" },
      ],
      featured: true,
      highlightText: "Selected in Sainik School",
    },
    {
      id: "naved-10",
      name: "Mohd. Naved",
      batch: "10th",
      batchLabel: "Class 10th Batch (2025–26)",
      image: "/images/achievers/mohd-naved.jpg",
      scores: [{ subject: "English", score: "87%" }],
      highlightText: "English Achiever",
    },
    {
      id: "veer-10",
      name: "Veer Singh",
      batch: "10th",
      batchLabel: "Class 10th Batch (2025–26)",
      image: "/images/achievers/veer-singh.jpg",
      scores: [
        { subject: "Science", score: "86%" },
        { subject: "SST", score: "81%" },
      ],
      highlightText: "Dual Subject Distinction",
    },
    {
      id: "onik-10",
      name: "Onik",
      batch: "10th",
      batchLabel: "Class 10th Batch (2025–26)",
      image: "/images/achievers/onik.jpg",
      scores: [
        { subject: "SST", score: "82%" },
        { subject: "Science", score: "80%" },
      ],
      highlightText: "Distinction Holder",
    },
    {
      id: "sakshi-10",
      name: "Sakshi Maurya",
      batch: "10th",
      batchLabel: "Class 10th Batch (2025–26)",
      image: "/images/achievers/sakshi-maurya.jpg",
      scores: [{ subject: "English", score: "80%" }],
      highlightText: "Language Achiever",
    },
    {
      id: "arkan-10",
      name: "Mohd. Arkan",
      batch: "10th",
      batchLabel: "Class 10th Batch (2025–26)",
      image: "/images/achievers/mohd-arkan.jpg",
      scores: [
        { subject: "SST", score: "89%" },
        { subject: "English", score: "83%" },
      ],
      highlightText: "SST 89% Star",
    },
    {
      id: "ankita-10",
      name: "Ankita Pandey",
      batch: "10th",
      batchLabel: "Class 10th Batch (2025–26)",
      image: "/images/achievers/ankita-pandey.jpg",
      scores: [{ subject: "Overall Aggregate", score: "80%" }],
      highlightText: "Consistent Top Scorer",
    },
  ];

  const allAchievers: Achiever[] = [
    ...class12thAchievers,
    ...class10thAchievers,
  ];

  const displayedAchievers =
    activeFilter === "all"
      ? allAchievers
      : activeFilter === "12th"
      ? class12thAchievers
      : class10thAchievers;

  return (
    <section
      id="toppers"
      className="py-20 lg:py-28 bg-gradient-to-b from-slate-900 via-[#071D43] to-slate-900 text-white relative overflow-hidden"
    >
      {/* Background Ambience */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,201,40,0.08),transparent_50%)] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_80%,rgba(59,130,246,0.1),transparent_50%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FFC928]/15 border border-[#FFC928]/40 text-[#FFC928] text-xs sm:text-sm font-semibold tracking-wide uppercase shadow-sm">
            <Trophy className="w-4 h-4 text-[#FFC928]" />
            <span>Our Hall of Fame • Result Showcase</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
            Meet Our <span className="text-[#FFC928]">Top Achievers</span>
          </h2>

          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            Congratulations to the shining stars of Evolution Career Institute! From Class 12th &amp; 10th
            Board Examinations to Prestigious Sainik School selections, our students make us proud every year.
          </p>

          {/* Quick Actions & Official Flyer Trigger */}
          <div className="pt-2 flex flex-wrap items-center justify-center gap-3">
            <button
              onClick={() => setShowPosterModal(true)}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white/10 hover:bg-white/15 border border-white/20 text-xs sm:text-sm font-medium text-white transition-all hover:scale-105 active:scale-95 cursor-pointer"
            >
              <Eye className="w-4 h-4 text-[#FFC928]" />
              <span>View Official Results Flyer</span>
            </button>
            <a
              href="#admissions"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#FFC928] hover:bg-[#e5b31f] text-[#071D43] text-xs sm:text-sm font-bold transition-all shadow-md hover:shadow-lg hover:scale-105 active:scale-95"
            >
              <Sparkles className="w-4 h-4" />
              <span>Join Next Batch</span>
            </a>
          </div>
        </div>

        {/* Filter Navigation Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-12">
          {[
            { key: "all", label: `All Achievers (${allAchievers.length})`, icon: Trophy },
            { key: "12th", label: `Class 12th (${class12thAchievers.length})`, icon: GraduationCap },
            { key: "10th", label: `Class 10th & Sainik (${class10thAchievers.length})`, icon: Award },
          ].map((tab) => {
            const Icon = tab.icon;
            const isActive = activeFilter === tab.key;
            return (
              <button
                key={tab.key}
                onClick={() => setActiveFilter(tab.key as any)}
                className={`inline-flex items-center gap-2 px-4 py-2 sm:py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                  isActive
                    ? "bg-[#FFC928] text-[#071D43] shadow-lg shadow-[#FFC928]/25 scale-105"
                    : "bg-white/5 text-slate-300 hover:bg-white/10 hover:text-white border border-white/10"
                }`}
              >
                <Icon className={`w-4 h-4 ${isActive ? "text-[#071D43]" : "text-[#FFC928]"}`} />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* Achievers Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {displayedAchievers.map((student) => {
              const is12th = student.batch === "12th";
              return (
                <div
                  key={student.id}
                  className={`group bg-slate-800/80 hover:bg-slate-800 rounded-2xl border transition-all duration-300 flex flex-col overflow-hidden shadow-lg hover:shadow-2xl hover:-translate-y-1.5 ${
                    student.featured
                      ? "border-[#FFC928]/60 ring-1 ring-[#FFC928]/30"
                      : "border-white/10 hover:border-white/20"
                  }`}
                >
                  {/* Photo Container */}
                  <div className="relative w-full aspect-[4/4.6] bg-slate-900 overflow-hidden">
                    <Image
                      src={student.image}
                      alt={`${student.name} - ${student.batchLabel}`}
                      fill
                      className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    />

                    {/* Batch Badge Overlay */}
                    <div className="absolute top-3 left-3">
                      <span
                        className={`inline-block px-2.5 py-1 rounded-md text-[11px] font-bold uppercase tracking-wider shadow-md backdrop-blur-md ${
                          is12th
                            ? "bg-blue-600/90 text-white border border-blue-400/40"
                            : student.batch === "sainik"
                            ? "bg-red-600/90 text-white border border-red-400/40"
                            : "bg-emerald-600/90 text-white border border-emerald-400/40"
                        }`}
                      >
                        {student.batchLabel
                          .replace(" Batch (2025–26)", "")
                          .replace(" Batch", "")
                          .replace(" Special Batch (2026)", "")}
                      </span>
                    </div>

                    {/* Highlight Badge */}
                    {student.highlightText && (
                      <div className="absolute top-3 right-3">
                        <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-[#FFC928] text-[#071D43] text-[10px] font-extrabold uppercase tracking-wide shadow-md">
                          <Star className="w-2.5 h-2.5 fill-current" />
                          {student.highlightText}
                        </span>
                      </div>
                    )}

                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-80" />
                  </div>

                  {/* Details Card */}
                  <div className="p-5 flex-1 flex flex-col justify-between space-y-4 bg-slate-800/90">
                    <div>
                      <div className="flex items-center justify-between gap-2">
                        <h4 className="text-lg font-bold text-white group-hover:text-[#FFC928] transition-colors">
                          {student.name}
                        </h4>
                        <CheckCircle2 className="w-4 h-4 text-[#FFC928] flex-shrink-0" />
                      </div>
                      <p className="text-xs text-slate-400 mt-0.5">
                        {student.batchLabel}
                      </p>
                    </div>

                    {/* Scores Section */}
                    <div className="space-y-2 pt-2 border-t border-white/10">
                      <div className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider">
                        Subject Scores
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {student.scores.map((sc, idx) => (
                          <div
                            key={idx}
                            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-xs font-semibold text-white shadow-sm"
                          >
                            <span className="text-slate-300 font-normal">{sc.subject}:</span>
                            <span className="text-[#FFC928] font-bold">{sc.score}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
        </div>

        {/* Bottom Banner & Guarantee */}
        <div className="mt-16 bg-white/5 border border-white/10 rounded-2xl p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          <div className="space-y-1">
            <h4 className="text-xl font-bold text-white flex items-center justify-center md:justify-start gap-2">
              <Trophy className="w-5 h-5 text-[#FFC928]" />
              <span>Dedicated To Nurturing Future Toppers</span>
            </h4>
            <p className="text-sm text-slate-300 max-w-2xl">
              At Evolution Career Institute, every student receives individualized attention, concept-clearing doubt sessions, and rigorous test series under IIT-JEE mentors.
            </p>
          </div>

          <div className="flex items-center gap-3 flex-shrink-0">
            <button
              onClick={() => setShowPosterModal(true)}
              className="px-4 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-semibold text-xs sm:text-sm border border-white/20 transition-all cursor-pointer"
            >
              View Official Poster
            </button>
            <a
              href="#admissions"
              className="px-5 py-2.5 rounded-xl bg-[#FFC928] hover:bg-[#e5b31f] text-[#071D43] font-bold text-xs sm:text-sm shadow-md hover:scale-105 active:scale-95 transition-all"
            >
              Enquire For Admission
            </a>
          </div>
        </div>
      </div>

      {/* Official Poster Lightbox Modal */}
      {showPosterModal && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 animate-in fade-in duration-200"
          onClick={() => setShowPosterModal(false)}
        >
          <div
            className="relative max-w-4xl max-h-[90vh] bg-slate-900 rounded-2xl overflow-hidden border border-white/20 shadow-2xl flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between px-6 py-4 bg-slate-800/90 border-b border-white/10">
              <div className="flex items-center gap-2">
                <Trophy className="w-5 h-5 text-[#FFC928]" />
                <h3 className="text-sm sm:text-base font-bold text-white">
                  Evolution Career Institute — Official Achievements &amp; Prospectus Flyer
                </h3>
              </div>
              <button
                onClick={() => setShowPosterModal(false)}
                className="p-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-slate-300 hover:text-white transition-colors cursor-pointer"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Image */}
            <div className="relative w-full max-h-[75vh] overflow-y-auto p-4 flex justify-center bg-black/40">
              <img
                src="/images/gallery/evolution-flyer-combined.jpg"
                alt="Evolution Career Institute Official Results & Prospectus Banner"
                className="max-h-[72vh] w-auto object-contain rounded-lg shadow-lg border border-white/10"
              />
            </div>

            {/* Modal Footer */}
            <div className="px-6 py-3 bg-slate-800/90 border-t border-white/10 flex items-center justify-between text-xs text-slate-300">
              <span>Class 12th &amp; 10th (2025–26) Board Achievers • Sainik School Batch</span>
              <a
                href="#admissions"
                onClick={() => setShowPosterModal(false)}
                className="font-bold text-[#FFC928] hover:underline"
              >
                Apply Now &rarr;
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
