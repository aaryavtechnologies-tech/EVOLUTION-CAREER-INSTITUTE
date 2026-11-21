"use client";

import React, { useState, useEffect } from "react";
import {
  Film,
  Maximize2,
  PlayCircle,
  Volume2,
  X,
  Sparkles,
  Building2,
} from "lucide-react";

interface CampusVideo {
  id: string;
  src: string;
  poster: string;
  title: string;
  description: string;
  tag: string;
  hasAudio?: boolean;
}

const CAMPUS_VIDEOS: CampusVideo[] = [
  {
    id: "vid-tour",
    src: "/media/videos/campus-tour-walkthrough.mp4",
    poster: "/media/campus/campus-tour-poster.jpg",
    title: "Sadar Cantt Campus Walkthrough & Director's Cabin",
    description:
      "Full walkthrough of our Sadar Cantt, Lucknow campus featuring Director Er. S. Shah's counseling office, student classrooms decorated for Independence Day, and academic infrastructure.",
    tag: "Campus Walkthrough",
    hasAudio: true,
  },
  {
    id: "vid-performance",
    src: "/media/videos/teachers-day-student-performance.mp4",
    poster: "/media/teachers-day/faculty-mentors-panel.jpeg",
    title: "Teacher's Day Celebration & Student Tribute",
    description:
      "A heartwarming classroom moment as a student performs a musical tribute in front of faculty mentors and classmates, cheered on with warm encouragement and applause.",
    tag: "Celebration",
  },
  {
    id: "vid-gathering",
    src: "/media/videos/teachers-day-classroom-gathering.mp4",
    poster: "/media/teachers-day/students-batch-group.jpeg",
    title: "Batch Gathering & Mentor Appreciation",
    description:
      "Full classroom view of Evolution Career Institute students in institute ID lanyards gathered with mentors under the Teacher's Day banner.",
    tag: "Student Community",
  },
];

export default function VideoShowcase() {
  const [activeVideoModal, setActiveVideoModal] = useState<CampusVideo | null>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setActiveVideoModal(null);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <section
      id="video-tour"
      className="py-16 sm:py-20 bg-gradient-to-b from-[#071D43]/5 via-white to-slate-50 relative overflow-hidden border-b border-slate-200/80"
    >
      {/* Background Decorative Blobs */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#FFC928]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-[#123C78]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3.5 mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#071D43]/5 border border-[#071D43]/15 text-[#071D43] text-xs sm:text-sm font-semibold tracking-wide uppercase">
            <Film className="w-4 h-4 text-[#123C78]" />
            <span>Video Highlights &amp; Campus Tour</span>
          </div>

          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#071D43] tracking-tight leading-tight"
            style={{ fontFamily: "'Outfit', sans-serif" }}
          >
            Experience Life at <span className="text-[#123C78]">Evolution</span>
          </h2>

          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Watch real classroom celebrations, mentorship moments, and our Sadar Cantt campus walkthrough with Director Er. S. Shah.
          </p>

          <div className="pt-1 flex items-center justify-center gap-2">
            <span className="inline-flex items-center gap-1.5 text-xs font-bold text-[#123C78] bg-white px-3.5 py-1.5 rounded-full border border-slate-200 shadow-xs">
              <PlayCircle className="w-4 h-4 text-[#D71920]" />
              {CAMPUS_VIDEOS.length} Campus Video Highlights
            </span>
          </div>
        </div>

        {/* Video Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {CAMPUS_VIDEOS.map((video) => (
            <div
              key={video.id}
              className="rounded-2xl bg-white border border-slate-200/90 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col group hover:-translate-y-1"
            >
              {/* Video Player Container */}
              <div className="relative aspect-video bg-[#04122C]">
                <video
                  controls
                  muted={!video.hasAudio}
                  playsInline
                  preload="metadata"
                  poster={video.poster}
                  className="w-full h-full object-contain"
                >
                  <source src={video.src} type="video/mp4" />
                  Your browser does not support video playback.
                </video>

                {/* Audio Badge for videos with sound */}
                {video.hasAudio && (
                  <span className="absolute top-3 left-3 inline-flex items-center gap-1 text-[10px] font-bold text-emerald-950 bg-emerald-400/95 backdrop-blur-sm px-2.5 py-1 rounded-full shadow-md pointer-events-none">
                    <Volume2 className="w-3.5 h-3.5 text-emerald-950" />
                    With Audio
                  </span>
                )}

                {/* Theater Full-Screen Trigger */}
                <button
                  type="button"
                  onClick={() => setActiveVideoModal(video)}
                  aria-label={`Expand ${video.title}`}
                  className="absolute top-3 right-3 p-1.5 rounded-lg bg-[#071D43]/85 hover:bg-[#071D43] text-white border border-white/20 backdrop-blur-sm transition-colors cursor-pointer"
                  title="Watch in theater view"
                >
                  <Maximize2 className="w-4 h-4 text-[#FFC928]" />
                </button>
              </div>

              {/* Video Info Content */}
              <div className="p-5 flex-1 flex flex-col justify-between space-y-3 bg-white">
                <div>
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <span className="inline-block text-[10.5px] font-extrabold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-amber-100 text-[#071D43]">
                      {video.tag}
                    </span>
                    {video.hasAudio && (
                      <span className="text-[11px] font-semibold text-emerald-700 flex items-center gap-1">
                        <Volume2 className="w-3 h-3" /> Audio Enabled
                      </span>
                    )}
                  </div>

                  <h3 className="text-base sm:text-lg font-bold text-[#071D43] group-hover:text-[#123C78] transition-colors leading-snug">
                    {video.title}
                  </h3>

                  <p className="text-xs text-slate-600 leading-relaxed mt-2">
                    {video.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-[11px] font-semibold text-slate-500 flex items-center gap-1">
                    <Building2 className="w-3.5 h-3.5 text-[#123C78]" />
                    Sadar Cantt Campus
                  </span>
                  <button
                    type="button"
                    onClick={() => setActiveVideoModal(video)}
                    className="text-xs font-bold text-[#123C78] hover:text-[#D71920] transition-colors inline-flex items-center gap-1 cursor-pointer"
                  >
                    <span>Full Screen</span>
                    <Maximize2 className="w-3 h-3" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Expanded Theater Modal */}
      {activeVideoModal && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={activeVideoModal.title}
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-3 sm:p-6"
          onClick={() => setActiveVideoModal(null)}
        >
          <div
            className="relative w-full max-w-4xl bg-[#071D43] rounded-2xl overflow-hidden shadow-2xl border border-white/20"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between px-4 sm:px-6 py-3.5 border-b border-white/10 text-white">
              <div className="flex items-center gap-2">
                <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded bg-[#FFC928] text-[#071D43]">
                  {activeVideoModal.tag}
                </span>
                <span className="font-bold text-sm sm:text-base truncate max-w-xs sm:max-w-md">
                  {activeVideoModal.title}
                </span>
              </div>
              <button
                type="button"
                onClick={() => setActiveVideoModal(null)}
                aria-label="Close video theater"
                className="p-1.5 rounded-lg text-slate-300 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Video Player */}
            <div className="bg-black flex items-center justify-center max-h-[75vh]">
              <video
                controls
                autoPlay
                muted={!activeVideoModal.hasAudio}
                playsInline
                poster={activeVideoModal.poster}
                className="w-full max-h-[72vh] object-contain"
              >
                <source src={activeVideoModal.src} type="video/mp4" />
              </video>
            </div>

            {/* Modal Footer Description */}
            <div className="px-4 sm:px-6 py-3.5 bg-[#04122C] text-slate-200 text-xs sm:text-sm">
              {activeVideoModal.description}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
