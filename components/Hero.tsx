"use client";

import React, { useState } from "react";
import {
  GraduationCap,
  Award,
  BookOpen,
  Calendar,
  Sparkles,
  ArrowRight,
  TrendingUp,
  FileCheck2,
  Film,
  Camera,
  Volume2,
  Play,
  CheckCircle2,
} from "lucide-react";

interface HeroVideo {
  id: string;
  title: string;
  badge: string;
  src: string;
  poster: string;
  hasAudio: boolean;
  description: string;
}

const HERO_VIDEOS: HeroVideo[] = [
  {
    id: "tour",
    title: "Campus Walkthrough Tour",
    badge: "With Audio",
    src: "/media/videos/campus-tour-walkthrough.mp4",
    poster: "/media/campus/campus-tour-poster.jpg",
    hasAudio: true,
    description: "Director Er. S. Shah cabin, counseling area & Sadar Cantt classrooms",
  },
  {
    id: "celebration",
    title: "Teacher's Day Tribute",
    badge: "Celebration",
    src: "/media/videos/teachers-day-student-performance.mp4",
    poster: "/media/teachers-day/faculty-mentors-panel.jpeg",
    hasAudio: false,
    description: "Heartwarming student musical performance for faculty mentors",
  },
  {
    id: "gathering",
    title: "Classroom Batch Gathering",
    badge: "Classroom",
    src: "/media/videos/teachers-day-classroom-gathering.mp4",
    poster: "/media/teachers-day/students-batch-group.jpeg",
    hasAudio: false,
    description: "Students in institute lanyards celebrating milestones together",
  },
];

export default function Hero() {
  const [activeMedia, setActiveMedia] = useState<"video" | "photo">("video");
  const [activeVideoIdx, setActiveVideoIdx] = useState<number>(0);

  const currentVideo = HERO_VIDEOS[activeVideoIdx];

  const badges = [
    { text: "Classes 1st to 12th", icon: GraduationCap, color: "text-[#FFC928]" },
    { text: "Expert Faculty Guidance", icon: Award, color: "text-[#FFC928]" },
    { text: "Regular Tests & Analysis", icon: FileCheck2, color: "text-[#FFC928]" },
    { text: "Exam-Focused Preparation", icon: TrendingUp, color: "text-[#FFC928]" },
  ];

  return (
    <section
      id="home"
      className="relative overflow-hidden bg-gradient-to-br from-[#071D43] via-[#0B2555] to-[#123C78] text-white pt-10 pb-16 lg:pt-14 lg:pb-24"
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
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          {/* Left Column: Headline, Description & CTAs */}
          <div className="lg:col-span-7 flex flex-col items-start text-left z-10">
            {/* Super Tagline Pill */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 mb-5 shadow-sm">
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
              className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.1] mb-5 text-white"
              style={{ fontFamily: "'Outfit', sans-serif" }}
            >
              Your Success Story <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFC928] via-[#FFE27D] to-[#FFC928]">
                Starts Here.
              </span>
            </h1>

            {/* Supporting Description */}
            <p className="text-base sm:text-lg text-slate-200 leading-relaxed max-w-2xl mb-7 font-normal">
              Build strong concepts, prepare with expert guidance, and achieve your academic goals
              with structured preparation for{" "}
              <strong className="text-white font-semibold">
                NEET, IIT-JEE, CUET, NDA, and Board Examinations
              </strong>
              .
            </p>

            {/* Badges Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-2 gap-2.5 sm:gap-3 w-full max-w-xl mb-7">
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
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 w-full sm:w-auto">
              <a
                href="#courses"
                className="inline-flex items-center justify-center gap-2 px-6 sm:px-7 py-3 sm:py-3.5 rounded-xl font-bold text-sm sm:text-base text-white bg-gradient-to-r from-[#123C78] to-[#1E4D94] hover:from-[#1E4D94] hover:to-[#255DB5] border border-white/30 shadow-lg hover:shadow-xl transition-all hover:-translate-y-0.5 active:translate-y-0"
              >
                <span>Explore Our Programs</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#admissions"
                className="inline-flex items-center justify-center gap-2 px-6 sm:px-7 py-3 sm:py-3.5 rounded-xl font-extrabold text-sm sm:text-base text-[#071D43] bg-gradient-to-r from-[#FFC928] via-[#FFD650] to-[#FFC928] hover:shadow-[0_8px_25px_rgba(255,201,40,0.5)] border border-[#E0AD15] transition-all hover:-translate-y-0.5 active:translate-y-0"
              >
                <span>Enquire for Admission</span>
                <Sparkles className="w-4 h-4 text-[#D71920]" />
              </a>
            </div>

            {/* Quick Notice Badge */}
            <div className="mt-6 flex items-center gap-3 text-xs text-slate-300">
              <span className="inline-flex items-center px-2 py-0.5 rounded bg-[#D71920] text-white font-bold text-[10px] uppercase">
                New
              </span>
              <span>
                Crash Course 2026 begins <strong>20th November 2026</strong> &bull; Limited Batch
                Size
              </span>
            </div>
          </div>

          {/* Right Column: Hero Video Showcase & Media Spotlight (Directly Embedded in Hero) */}
          <div className="lg:col-span-5 relative mt-4 lg:mt-0">
            {/* Outer Glow Ring */}
            <div className="absolute -inset-3 bg-gradient-to-tr from-[#FFC928]/30 via-[#D71920]/20 to-[#123C78]/40 rounded-3xl blur-xl opacity-75"></div>

            {/* Media Container Box */}
            <div className="relative rounded-2xl overflow-hidden border-2 border-white/20 shadow-2xl bg-[#071D43] flex flex-col">
              {/* Media Switcher Header Bar */}
              <div className="px-4 py-2.5 bg-slate-900/90 border-b border-white/10 flex items-center justify-between gap-2 z-10">
                <div className="flex items-center gap-1.5 p-1 rounded-xl bg-white/10">
                  <button
                    onClick={() => setActiveMedia("video")}
                    className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                      activeMedia === "video"
                        ? "bg-[#FFC928] text-[#071D43] shadow-md"
                        : "text-slate-300 hover:text-white"
                    }`}
                  >
                    <Film className="w-3.5 h-3.5" />
                    <span>Campus Video</span>
                  </button>
                  <button
                    onClick={() => setActiveMedia("photo")}
                    className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                      activeMedia === "photo"
                        ? "bg-[#FFC928] text-[#071D43] shadow-md"
                        : "text-slate-300 hover:text-white"
                    }`}
                  >
                    <Camera className="w-3.5 h-3.5" />
                    <span>Classroom Photo</span>
                  </button>
                </div>

                {activeMedia === "video" && currentVideo.hasAudio && (
                  <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-emerald-500/20 border border-emerald-400/40 text-[11px] font-bold text-emerald-300">
                    <Volume2 className="w-3 h-3 text-emerald-400" />
                    <span>Audio On</span>
                  </span>
                )}
              </div>

              {/* Main Media Screen */}
              <div className="relative w-full h-[380px] sm:h-[430px] bg-slate-950 flex items-center justify-center overflow-hidden">
                {activeMedia === "video" ? (
                  <div className="relative w-full h-full flex items-center justify-center bg-black">
                    <video
                      key={currentVideo.src}
                      src={currentVideo.src}
                      poster={currentVideo.poster}
                      controls
                      playsInline
                      preload="metadata"
                      className="w-full h-full object-contain"
                    >
                      Your browser does not support HTML5 video.
                    </video>

                    {/* Subtle Overlay Badge when video is not playing */}
                    <div className="absolute top-3 left-3 pointer-events-none">
                      <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-[#071D43]/90 text-white border border-white/20 text-[11px] font-bold shadow-md backdrop-blur-md">
                        <span className="w-2 h-2 rounded-full bg-[#FFC928] animate-pulse"></span>
                        {currentVideo.title}
                      </span>
                    </div>
                  </div>
                ) : (
                  <div className="relative w-full h-full">
                    <img
                      src="/media/teachers-day/students-batch-group.jpeg"
                      alt="Evolution Career Institute students attending class in Sadar Cantt, Lucknow"
                      className="w-full h-full object-cover object-center"
                      loading="eager"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#071D43] via-transparent to-transparent opacity-80" />
                    <div className="absolute bottom-4 left-4 right-4 p-3.5 rounded-xl bg-white/10 backdrop-blur-md border border-white/20">
                      <p className="text-xs uppercase tracking-wider text-[#FFC928] font-bold">
                        Targeting Academic Excellence
                      </p>
                      <p className="text-sm font-bold text-white mt-0.5">
                        NEET &bull; IIT-JEE &bull; CUET &bull; NDA
                      </p>
                    </div>
                  </div>
                )}
              </div>

              {/* Video Switcher Playlist Bar (Shown when Video is Active) */}
              {activeMedia === "video" && (
                <div className="p-3 bg-slate-900/95 border-t border-white/10 space-y-2">
                  <div className="flex items-center justify-between text-[11px] text-slate-400">
                    <span className="font-semibold uppercase tracking-wider text-slate-300">
                      Select Video:
                    </span>
                    <span className="text-[#FFC928] font-medium">{currentVideo.description}</span>
                  </div>

                  <div className="grid grid-cols-3 gap-2">
                    {HERO_VIDEOS.map((vid, idx) => {
                      const isCurrent = activeVideoIdx === idx;
                      return (
                        <button
                          key={vid.id}
                          onClick={() => setActiveVideoIdx(idx)}
                          className={`p-2 rounded-xl border text-left transition-all cursor-pointer flex flex-col gap-1 ${
                            isCurrent
                              ? "bg-[#FFC928]/20 border-[#FFC928] text-white shadow-sm ring-1 ring-[#FFC928]/40"
                              : "bg-white/5 border-white/10 text-slate-300 hover:bg-white/10 hover:text-white"
                          }`}
                        >
                          <div className="flex items-center justify-between">
                            <span
                              className={`text-[9.5px] font-bold uppercase tracking-wider px-1.5 py-0.5 rounded ${
                                isCurrent
                                  ? "bg-[#FFC928] text-[#071D43]"
                                  : "bg-white/10 text-slate-300"
                              }`}
                            >
                              {vid.badge}
                            </span>
                            {isCurrent && <CheckCircle2 className="w-3 h-3 text-[#FFC928]" />}
                          </div>
                          <span className="text-[11px] font-semibold line-clamp-1 leading-tight">
                            {vid.title}
                          </span>
                        </button>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>

            {/* Floating Highlight Card 1 - Top Left */}
            <div className="absolute -top-4 -left-3 sm:-left-5 bg-white text-[#071D43] p-3 rounded-xl shadow-2xl border border-slate-100 flex items-center gap-2.5 animate-float max-w-[200px] z-20">
              <div className="p-1.5 rounded-lg bg-[#FFC928]/20 text-[#071D43] flex-shrink-0">
                <GraduationCap className="w-4 h-4 text-[#071D43]" />
              </div>
              <div>
                <p className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">
                  Mentorship
                </p>
                <p className="text-xs font-extrabold text-[#071D43]">IIT JEE Qualified</p>
              </div>
            </div>

            {/* Floating Highlight Card 2 - Bottom Right */}
            <div className="absolute -bottom-4 -right-2 sm:-right-4 bg-white text-[#071D43] p-3 rounded-xl shadow-2xl border border-slate-100 flex items-center gap-2.5 max-w-[210px] z-20">
              <div className="p-1.5 rounded-lg bg-[#D71920]/15 text-[#D71920] flex-shrink-0">
                <Calendar className="w-4 h-4 text-[#D71920]" />
              </div>
              <div>
                <p className="text-[10px] font-bold text-[#D71920] uppercase tracking-wider">
                  Crash Course 2026
                </p>
                <p className="text-xs font-extrabold text-[#071D43]">Starts 20th Nov</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
