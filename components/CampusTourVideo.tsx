"use client";

import React, { useState, useRef } from "react";
import {
  Play,
  Pause,
  Volume2,
  VolumeX,
  Maximize2,
  X,
  MapPin,
  Sparkles,
  Phone,
  CheckCircle2,
  Building2,
  GraduationCap,
  Award,
  ShieldCheck,
  Calendar,
} from "lucide-react";

export default function CampusTourVideo() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const modalVideoRef = useRef<HTMLVideoElement>(null);

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      videoRef.current.muted = isMuted;
      videoRef.current
        .play()
        .then(() => setIsPlaying(true))
        .catch(() => {
          // If browser requires muted for autoplay
          if (videoRef.current) {
            videoRef.current.muted = true;
            setIsMuted(true);
            videoRef.current.play();
            setIsPlaying(true);
          }
        });
    }
  };

  const toggleMute = () => {
    if (!videoRef.current) return;
    const nextMuted = !isMuted;
    videoRef.current.muted = nextMuted;
    setIsMuted(nextMuted);
  };

  const handleOpenModal = () => {
    if (videoRef.current && isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    }
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    if (modalVideoRef.current) {
      modalVideoRef.current.pause();
    }
    setIsModalOpen(false);
  };

  const tourFeatures = [
    {
      icon: GraduationCap,
      title: "Director's Academic Cabin",
      description:
        "One-on-one student counseling and performance tracking with Er. S. Shah (B.Tech, IET Lucknow).",
      color: "text-blue-600 bg-blue-50 border-blue-200",
    },
    {
      icon: Building2,
      title: "Fully Air-Conditioned Classrooms",
      description:
        "Ergonomic seating, modern whiteboards, and distraction-free acoustics designed for focused preparation.",
      color: "text-amber-600 bg-amber-50 border-amber-200",
    },
    {
      icon: Award,
      title: "Wall of Academic Honors",
      description:
        "Showcasing EduCart Teacher Impact Award, national achievements, and student top ranker felicitations.",
      color: "text-emerald-600 bg-emerald-50 border-emerald-200",
    },
    {
      icon: Calendar,
      title: "Vibrant Campus Celebrations",
      description:
        "Classrooms decorated for Independence Day and Teacher's Day, fostering patriotic values and camaraderie.",
      color: "text-purple-600 bg-purple-50 border-purple-200",
    },
  ];

  return (
    <section
      id="campus-tour"
      className="py-20 lg:py-28 bg-[#04122C] text-white relative overflow-hidden"
    >
      {/* Decorative Glow Backgrounds */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#123C78]/40 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-[#FFC928]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/15 text-[#FFC928] text-xs sm:text-sm font-bold tracking-wide uppercase shadow-sm">
            <Volume2 className="w-4 h-4 text-[#FFC928]" />
            <span>Virtual Campus Walkthrough • With Original Audio</span>
          </div>

          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight"
            style={{ fontFamily: "'Outfit', sans-serif" }}
          >
            Step Inside Our <span className="text-[#FFC928]">Sadar Cantt Campus</span>
          </h2>

          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            Take a real walkthrough inside Evolution Career Institute, Lucknow. Watch the Director's
            counseling cabin, academic honors, and classroom celebrations with live festive sound.
          </p>
        </div>

        {/* Main 2-Column Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column: Dedicated Video Player Card */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="w-full max-w-md sm:max-w-lg bg-slate-900/90 rounded-3xl p-3 sm:p-4 border border-white/15 shadow-2xl relative group">
              {/* Outer Decorative Ring */}
              <div className="relative rounded-2xl overflow-hidden bg-black aspect-[9/16] max-h-[620px] mx-auto shadow-inner border border-white/10 flex items-center justify-center">
                <video
                  ref={videoRef}
                  playsInline
                  preload="metadata"
                  poster="/media/campus/campus-tour-poster.jpg"
                  onPlay={() => setIsPlaying(true)}
                  onPause={() => setIsPlaying(false)}
                  onEnded={() => setIsPlaying(false)}
                  className="w-full h-full object-cover"
                >
                  <source src="/media/videos/campus-tour-walkthrough.mp4" type="video/mp4" />
                  Your browser does not support video playback.
                </video>

                {/* Top Overlay Badges */}
                <div className="absolute top-3 inset-x-3 flex items-center justify-between gap-2 z-10 pointer-events-none">
                  <span className="inline-flex items-center gap-1.5 text-[11px] font-extrabold uppercase tracking-wider text-[#071D43] bg-gradient-to-r from-[#FFC928] to-[#FFD858] px-3 py-1 rounded-full shadow-lg">
                    <Volume2 className="w-3.5 h-3.5 text-[#071D43]" />
                    Original Audio
                  </span>

                  <span className="inline-flex items-center gap-1 text-[10px] font-semibold text-slate-200 bg-[#071D43]/80 backdrop-blur-md px-2.5 py-1 rounded-full border border-white/10">
                    <MapPin className="w-3 h-3 text-[#FFC928]" />
                    Sadar Cantt
                  </span>
                </div>

                {/* Center Big Play Button (Visible when paused) */}
                {!isPlaying && (
                  <button
                    type="button"
                    onClick={togglePlay}
                    aria-label="Play Campus Tour Video with Audio"
                    className="absolute inset-0 m-auto w-18 h-18 sm:w-20 sm:h-20 rounded-full bg-[#FFC928] text-[#071D43] flex items-center justify-center shadow-2xl hover:scale-110 active:scale-95 transition-all duration-300 z-20 cursor-pointer group-hover:ring-8 group-hover:ring-[#FFC928]/30"
                  >
                    <Play className="w-8 h-8 sm:w-9 sm:h-9 fill-current ml-1" />
                  </button>
                )}

                {/* Bottom Control Bar */}
                <div className="absolute bottom-0 inset-x-0 p-4 bg-gradient-to-t from-black via-black/70 to-transparent flex items-center justify-between gap-3 z-20">
                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      onClick={togglePlay}
                      className="p-2 rounded-xl bg-white/15 hover:bg-white/25 text-white transition-colors"
                      title={isPlaying ? "Pause" : "Play"}
                    >
                      {isPlaying ? (
                        <Pause className="w-4 h-4 fill-current" />
                      ) : (
                        <Play className="w-4 h-4 fill-current ml-0.5" />
                      )}
                    </button>

                    <button
                      type="button"
                      onClick={toggleMute}
                      className="p-2 rounded-xl bg-white/15 hover:bg-white/25 text-white transition-colors"
                      title={isMuted ? "Unmute Sound" : "Mute Sound"}
                    >
                      {isMuted ? (
                        <VolumeX className="w-4 h-4 text-red-400" />
                      ) : (
                        <Volume2 className="w-4 h-4 text-[#FFC928]" />
                      )}
                    </button>
                  </div>

                  <button
                    type="button"
                    onClick={handleOpenModal}
                    className="p-2 rounded-xl bg-white/15 hover:bg-white/25 text-white transition-colors inline-flex items-center gap-1.5 text-xs font-semibold"
                    title="Open Fullscreen Theater View"
                  >
                    <Maximize2 className="w-4 h-4 text-[#FFC928]" />
                    <span className="hidden sm:inline">Theater View</span>
                  </button>
                </div>
              </div>

              {/* Card Footer Caption */}
              <div className="pt-3 px-1 flex items-center justify-between text-xs text-slate-400">
                <span className="flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-emerald-400" />
                  Verified Institute Campus
                </span>
                <span className="text-[#FFC928] font-bold">27s Tour</span>
              </div>
            </div>
          </div>

          {/* Right Column: Rich Content & Campus Highlights */}
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-2">
              <span className="text-xs font-extrabold text-[#FFC928] tracking-widest uppercase">
                Direct Insight • Real Infrastructure
              </span>
              <h3
                className="text-2xl sm:text-3xl lg:text-4xl font-black text-white"
                style={{ fontFamily: "'Outfit', sans-serif" }}
              >
                Where Dedication Meets Academic Excellence
              </h3>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                Evolution Career Institute is purposefully designed to give NEET, IIT-JEE, and Board
                aspirants a serious, structured, and focused space to thrive. Here is what you experience
                during your visit:
              </p>
            </div>

            {/* Feature Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              {tourFeatures.map((feat, idx) => {
                const Icon = feat.icon;
                return (
                  <div
                    key={idx}
                    className="p-4 rounded-2xl bg-white/5 border border-white/10 hover:border-white/20 transition-all duration-300 hover:-translate-y-0.5 space-y-2"
                  >
                    <div className="flex items-center gap-2.5">
                      <div className={`p-2 rounded-xl border ${feat.color}`}>
                        <Icon className="w-4 h-4" />
                      </div>
                      <h4 className="text-sm font-bold text-white">{feat.title}</h4>
                    </div>
                    <p className="text-xs text-slate-300 leading-relaxed pl-1">
                      {feat.description}
                    </p>
                  </div>
                );
              })}
            </div>

            {/* Address Badge with Quick Info */}
            <div className="p-4 rounded-2xl bg-gradient-to-r from-blue-900/30 via-slate-800/40 to-blue-900/30 border border-blue-400/20 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#FFC928] flex-shrink-0 mt-0.5" />
                <div className="text-xs">
                  <div className="font-bold text-white text-sm">
                    Neelkanth Complex, Sadar Cantt
                  </div>
                  <div className="text-slate-400 mt-0.5">
                    Near Sainik Bhojnalaya, Sadar Cantt, Lucknow, UP
                  </div>
                </div>
              </div>

              <div className="flex-shrink-0 flex items-center gap-2 text-xs font-semibold text-emerald-400 bg-emerald-950/40 px-3 py-1.5 rounded-lg border border-emerald-500/20">
                <CheckCircle2 className="w-4 h-4" />
                <span>Open for Visits Daily</span>
              </div>
            </div>

            {/* Call To Actions */}
            <div className="pt-2 flex flex-wrap items-center gap-3">
              <a
                href="#admissions"
                className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-[#FFC928] to-[#FFD858] hover:from-[#e5b31f] hover:to-[#FFC928] text-[#071D43] font-black text-sm shadow-lg shadow-[#FFC928]/20 hover:scale-105 active:scale-95 transition-all inline-flex items-center gap-2"
              >
                <Sparkles className="w-4 h-4" />
                <span>Schedule In-Person Campus Visit</span>
              </a>

              <a
                href="tel:6390247880"
                className="px-5 py-3.5 rounded-xl bg-white/10 hover:bg-white/15 border border-white/20 text-white font-bold text-sm hover:scale-105 active:scale-95 transition-all inline-flex items-center gap-2"
              >
                <Phone className="w-4 h-4 text-[#FFC928]" />
                <span>Call: 6390247880</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Expanded Theater View Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md">
          <div className="relative w-full max-w-4xl bg-slate-900 rounded-3xl overflow-hidden border border-white/20 shadow-2xl flex flex-col">
            {/* Modal Header */}
            <div className="flex items-center justify-between px-6 py-4 bg-[#071D43] border-b border-white/10">
              <div className="flex items-center gap-2.5">
                <Volume2 className="w-5 h-5 text-[#FFC928]" />
                <h3 className="font-bold text-white text-base">
                  Sadar Cantt Campus Walkthrough (With Audio)
                </h3>
              </div>
              <button
                type="button"
                onClick={handleCloseModal}
                className="p-1.5 rounded-lg text-slate-300 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
                aria-label="Close theater view"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Video Player in Theater Modal */}
            <div className="bg-black flex items-center justify-center max-h-[75vh]">
              <video
                ref={modalVideoRef}
                controls
                autoPlay
                playsInline
                poster="/media/campus/campus-tour-poster.jpg"
                className="w-full max-h-[72vh] object-contain"
              >
                <source src="/media/videos/campus-tour-walkthrough.mp4" type="video/mp4" />
              </video>
            </div>

            {/* Modal Footer Description */}
            <div className="px-6 py-3.5 bg-[#04122C] text-slate-300 text-xs sm:text-sm flex items-center justify-between">
              <span>Director Er. S. Shah's Cabin &amp; Classroom Celebrations</span>
              <a
                href="#admissions"
                onClick={handleCloseModal}
                className="text-[#FFC928] hover:underline font-bold"
              >
                Book Campus Visit &rarr;
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
