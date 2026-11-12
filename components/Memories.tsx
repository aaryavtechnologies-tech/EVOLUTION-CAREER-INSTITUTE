"use client";

import React, { useState, useEffect, useCallback } from "react";
import { Camera, Sparkles, X, ChevronLeft, ChevronRight, ZoomIn } from "lucide-react";

interface MemoryPhoto {
  id: number;
  src: string;
  title: string;
  caption: string;
  tag: string;
  gridClass: string;
  imgPosition?: string;
}

export default function Memories() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const photos: MemoryPhoto[] = [
    {
      id: 4,
      src: "/images/memories/memory-4.jpg",
      title: "Batch Celebration & Victory Moments",
      caption: "Students celebrating together with mentors at Evolution Career Institute.",
      tag: "Celebration",
      gridClass: "sm:col-span-2 lg:col-span-5 h-64 sm:h-72",
      imgPosition: "object-top",
    },
    {
      id: 1,
      src: "/images/memories/memory-1.jpg",
      title: "Classroom Achievers Felicitation",
      caption: "Early classroom batch honoured with garlands and appreciation certificates.",
      tag: "Memories",
      gridClass: "sm:col-span-1 lg:col-span-4 h-64 sm:h-72",
      imgPosition: "object-center",
    },
    {
      id: 5,
      src: "/images/memories/memory-5.jpg",
      title: "Mentorship & Senior Batch",
      caption: "Dedicated mentors and students in Evolution Career Institute uniform.",
      tag: "Mentorship",
      gridClass: "sm:col-span-1 lg:col-span-3 h-64 sm:h-72",
      imgPosition: "object-top",
    },
    {
      id: 8,
      src: "/images/memories/memory-8.jpg",
      title: "Topper Award Presentation",
      caption: "Honouring student achievement alongside parents and faculty.",
      tag: "Felicitation",
      gridClass: "sm:col-span-1 lg:col-span-3 lg:row-span-2 h-80 lg:h-[456px]",
      imgPosition: "object-top",
    },
    {
      id: 3,
      src: "/images/memories/memory-3.jpg",
      title: "Foundation Batch Classroom",
      caption: "Students and faculty together in our classic classroom sessions.",
      tag: "Classroom",
      gridClass: "sm:col-span-2 lg:col-span-6 h-64 lg:h-[220px]",
      imgPosition: "object-center",
    },
    {
      id: 6,
      src: "/images/memories/memory-6.jpg",
      title: "Festive & Result Celebrations",
      caption: "Sharing sweets and smiling moments after milestone achievements.",
      tag: "Celebration",
      gridClass: "sm:col-span-1 lg:col-span-3 lg:row-span-2 h-80 lg:h-[456px]",
      imgPosition: "object-top",
    },
    {
      id: 2,
      src: "/images/memories/memory-2.jpg",
      title: "Focused Study Sessions",
      caption: "Students deeply engaged in classroom practice and concept building.",
      tag: "Study Hour",
      gridClass: "sm:col-span-1 lg:col-span-3 h-64 lg:h-[220px]",
      imgPosition: "object-center",
    },
    {
      id: 7,
      src: "/images/memories/memory-7.jpg",
      title: "Candid Batch Moments",
      caption: "Memorable interactive gatherings with students at our Lucknow campus.",
      tag: "Campus Life",
      gridClass: "sm:col-span-1 lg:col-span-3 h-64 lg:h-[220px]",
      imgPosition: "object-top",
    },
  ];

  const handleClose = useCallback(() => {
    setSelectedIndex(null);
  }, []);

  const handlePrev = useCallback(() => {
    setSelectedIndex((prev) =>
      prev === null ? null : (prev - 1 + photos.length) % photos.length
    );
  }, [photos.length]);

  const handleNext = useCallback(() => {
    setSelectedIndex((prev) => (prev === null ? null : (prev + 1) % photos.length));
  }, [photos.length]);

  useEffect(() => {
    if (selectedIndex === null) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") handleClose();
      if (e.key === "ArrowLeft") handlePrev();
      if (e.key === "ArrowRight") handleNext();
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [selectedIndex, handleClose, handlePrev, handleNext]);

  const activePhoto = selectedIndex !== null ? photos[selectedIndex] : null;

  return (
    <section
      id="memories"
      className="py-20 lg:py-24 bg-[#F8FAFC] border-y border-slate-200/70 relative overflow-hidden"
    >
      {/* Subtle Warm Decorative Glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#FFC928]/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-[#123C78]/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#071D43] text-[#FFC928] text-xs font-extrabold uppercase tracking-wider mb-4 shadow-sm">
            <Camera className="w-4 h-4" />
            <span>Old Memories &bull; Campus Archive</span>
          </div>

          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#071D43] tracking-tight leading-tight mb-4"
            style={{ fontFamily: "'Outfit', sans-serif" }}
          >
            Cherished Moments &amp;{" "}
            <span className="text-[#D71920]">Batch Memories</span>
          </h2>

          <p className="text-base sm:text-lg text-slate-600">
            A glimpse into our classroom journeys, mentor-student bonding, and celebratory milestones
            over the years at Evolution Career Institute.
          </p>
        </div>

        {/* 12-Column Balanced Bento Photo Gallery */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-4">
          {photos.map((photo, index) => (
            <button
              key={photo.id}
              type="button"
              onClick={() => setSelectedIndex(index)}
              aria-label={`View photo: ${photo.title}`}
              className={`group relative rounded-2xl overflow-hidden bg-slate-900 border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 text-left focus:outline-none focus:ring-2 focus:ring-[#FFC928] cursor-pointer ${photo.gridClass}`}
            >
              <img
                src={photo.src}
                alt={photo.title}
                loading="lazy"
                className={`w-full h-full object-cover ${
                  photo.imgPosition || "object-center"
                } group-hover:scale-105 transition-transform duration-500`}
              />

              {/* Subtle Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#071D43]/90 via-[#071D43]/20 to-transparent opacity-75 group-hover:opacity-90 transition-opacity"></div>

              {/* Top Tag & Zoom Icon */}
              <div className="absolute top-3 left-3 right-3 flex items-center justify-between">
                <span className="px-2.5 py-0.5 rounded-full bg-white/15 backdrop-blur-md border border-white/25 text-[10px] font-bold uppercase tracking-wider text-white">
                  {photo.tag}
                </span>
                <span className="p-1.5 rounded-full bg-black/40 text-white opacity-0 group-hover:opacity-100 transition-opacity backdrop-blur-sm">
                  <ZoomIn className="w-3.5 h-3.5 text-[#FFC928]" />
                </span>
              </div>

              {/* Bottom Caption */}
              <div className="absolute bottom-3 left-3.5 right-3.5">
                <h3 className="text-sm sm:text-base font-bold text-white leading-snug">
                  {photo.title}
                </h3>
                <p className="text-[11px] text-slate-200 line-clamp-1 mt-0.5 opacity-90">
                  {photo.caption}
                </p>
              </div>
            </button>
          ))}
        </div>

        {/* Gentle Note */}
        <p className="text-center text-xs text-slate-500 mt-6 flex items-center justify-center gap-1.5">
          <Sparkles className="w-3.5 h-3.5 text-[#D71920]" />
          <span>Click any photograph to view full size</span>
        </p>
      </div>

      {/* Interactive Full-Resolution Lightbox Modal */}
      {activePhoto && selectedIndex !== null && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={activePhoto.title}
          onClick={handleClose}
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex items-center justify-center p-4 animate-in fade-in duration-200"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-5xl w-full flex flex-col items-center"
          >
            {/* Top Bar */}
            <div className="w-full flex items-center justify-between text-white mb-3 px-1">
              <span className="text-xs font-bold uppercase tracking-wider text-[#FFC928]">
                {activePhoto.tag} &bull; {selectedIndex + 1} / {photos.length}
              </span>
              <button
                type="button"
                onClick={handleClose}
                aria-label="Close photo preview"
                className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Image Display */}
            <div className="relative w-full flex items-center justify-center bg-black/40 rounded-2xl overflow-hidden border border-white/15">
              <button
                type="button"
                onClick={handlePrev}
                aria-label="Previous photo"
                className="absolute left-2 sm:left-4 z-10 p-2.5 rounded-full bg-black/60 hover:bg-[#FFC928] text-white hover:text-[#071D43] transition-colors cursor-pointer"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              <img
                src={activePhoto.src}
                alt={activePhoto.title}
                className="max-h-[75vh] w-auto object-contain mx-auto"
              />

              <button
                type="button"
                onClick={handleNext}
                aria-label="Next photo"
                className="absolute right-2 sm:right-4 z-10 p-2.5 rounded-full bg-black/60 hover:bg-[#FFC928] text-white hover:text-[#071D43] transition-colors cursor-pointer"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>

            {/* Caption */}
            <div className="mt-4 text-center max-w-2xl">
              <h4 className="text-lg font-bold text-white">{activePhoto.title}</h4>
              <p className="text-xs sm:text-sm text-slate-300 mt-1">{activePhoto.caption}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
