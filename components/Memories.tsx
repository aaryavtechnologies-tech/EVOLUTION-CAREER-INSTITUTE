"use client";

import React, { useState, useEffect, useCallback, useRef } from "react";
import { Camera, Sparkles, X, ChevronLeft, ChevronRight, ZoomIn, Pause, Play } from "lucide-react";

interface MemoryPhoto {
  id: number;
  src: string;
  title: string;
  caption: string;
  tag: string;
  imgPosition?: string;
}

export default function Memories() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [activeSlide, setActiveSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [autoPlayEnabled, setAutoPlayEnabled] = useState(true);
  const [statusMessage, setStatusMessage] = useState("");

  const trackRef = useRef<HTMLDivElement>(null);
  const slideRefs = useRef<(HTMLDivElement | null)[]>([]);
  const pendingTargetRef = useRef<number | null>(null);
  const activeSlideRef = useRef(0);
  const lastSettledRef = useRef(0);
  const rafRef = useRef<number | null>(null);
  const settleTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const photos: MemoryPhoto[] = [
    {
      id: 4,
      src: "/images/memories/memory-4.jpg",
      title: "Batch Celebration & Victory Moments",
      caption: "Students celebrating together with mentors at Evolution Career Institute.",
      tag: "Celebration",
      imgPosition: "object-top",
    },
    {
      id: 1,
      src: "/images/memories/memory-1.jpg",
      title: "Classroom Achievers Felicitation",
      caption: "Early classroom batch honoured with garlands and appreciation certificates.",
      tag: "Memories",
      imgPosition: "object-center",
    },
    {
      id: 5,
      src: "/images/memories/memory-5.jpg",
      title: "Mentorship & Senior Batch",
      caption: "Dedicated mentors and students in Evolution Career Institute uniform.",
      tag: "Mentorship",
      imgPosition: "object-top",
    },
    {
      id: 8,
      src: "/images/memories/memory-8.jpg",
      title: "Topper Award Presentation",
      caption: "Honouring student achievement alongside parents and faculty.",
      tag: "Felicitation",
      imgPosition: "object-top",
    },
    {
      id: 3,
      src: "/images/memories/memory-3.jpg",
      title: "Foundation Batch Classroom",
      caption: "Students and faculty together in our classic classroom sessions.",
      tag: "Classroom",
      imgPosition: "object-center",
    },
    {
      id: 6,
      src: "/images/memories/memory-6.jpg",
      title: "Festive & Result Celebrations",
      caption: "Sharing sweets and smiling moments after milestone achievements.",
      tag: "Celebration",
      imgPosition: "object-top",
    },
    {
      id: 2,
      src: "/images/memories/memory-2.jpg",
      title: "Focused Study Sessions",
      caption: "Students deeply engaged in classroom practice and concept building.",
      tag: "Study Hour",
      imgPosition: "object-center",
    },
    {
      id: 7,
      src: "/images/memories/memory-7.jpg",
      title: "Candid Batch Moments",
      caption: "Memorable interactive gatherings with students at our Lucknow campus.",
      tag: "Campus Life",
      imgPosition: "object-top",
    },
  ];

  const getNearestSlideIndex = useCallback(() => {
    const track = trackRef.current;
    if (!track) return 0;

    const trackRect = track.getBoundingClientRect();
    const trackCenter = trackRect.left + trackRect.width / 2;
    let nearestIdx = 0;
    let minDistance = Number.POSITIVE_INFINITY;

    slideRefs.current.forEach((slide, idx) => {
      if (!slide) return;
      const rect = slide.getBoundingClientRect();
      const slideCenter = rect.left + rect.width / 2;
      const dist = Math.abs(slideCenter - trackCenter);
      if (dist < minDistance) {
        minDistance = dist;
        nearestIdx = idx;
      }
    });

    return nearestIdx;
  }, []);

  const scrollToSlide = useCallback(
    (targetIdx: number) => {
      const track = trackRef.current;
      const slide = slideRefs.current[targetIdx];
      if (!track || !slide) return;

      const trackRect = track.getBoundingClientRect();
      const slideRect = slide.getBoundingClientRect();
      const trackCenter = trackRect.left + trackRect.width / 2;
      const slideCenter = slideRect.left + slideRect.width / 2;
      const delta = slideCenter - trackCenter;

      pendingTargetRef.current = targetIdx;
      if (activeSlideRef.current !== targetIdx) {
        activeSlideRef.current = targetIdx;
        setActiveSlide(targetIdx);
      }

      const prefersReducedMotion =
        typeof window !== "undefined" &&
        window.matchMedia("(prefers-reduced-motion: reduce)").matches;

      track.scrollBy({
        left: delta,
        behavior: prefersReducedMotion ? "auto" : "smooth",
      });

      // Ensure pending target clears even if smooth scroll finishes without scrollend on edges
      if (settleTimeoutRef.current) clearTimeout(settleTimeoutRef.current);
      settleTimeoutRef.current = setTimeout(() => {
        pendingTargetRef.current = null;
      }, 650);
    },
    []
  );

  const handleSlidePrev = useCallback(() => {
    const base = pendingTargetRef.current ?? getNearestSlideIndex();
    const prevIdx = (base - 1 + photos.length) % photos.length;
    scrollToSlide(prevIdx);
  }, [getNearestSlideIndex, photos.length, scrollToSlide]);

  const handleSlideNext = useCallback(() => {
    const base = pendingTargetRef.current ?? getNearestSlideIndex();
    const nextIdx = (base + 1) % photos.length;
    scrollToSlide(nextIdx);
  }, [getNearestSlideIndex, photos.length, scrollToSlide]);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const handleSettled = () => {
      const settled = getNearestSlideIndex();
      pendingTargetRef.current = null;
      if (activeSlideRef.current !== settled) {
        activeSlideRef.current = settled;
        setActiveSlide(settled);
      }
      if (settled !== lastSettledRef.current) {
        lastSettledRef.current = settled;
        setStatusMessage(`Slide ${settled + 1} of ${photos.length}`);
      }
    };

    const supportsScrollEnd = "onscrollend" in window;

    const onScroll = () => {
      if (pendingTargetRef.current === null) {
        if (rafRef.current === null) {
          rafRef.current = requestAnimationFrame(() => {
            rafRef.current = null;
            if (pendingTargetRef.current !== null) return;
            const nearest = getNearestSlideIndex();
            if (activeSlideRef.current !== nearest) {
              activeSlideRef.current = nearest;
              setActiveSlide(nearest);
            }
          });
        }
      }

      if (!supportsScrollEnd) {
        if (settleTimeoutRef.current) clearTimeout(settleTimeoutRef.current);
        settleTimeoutRef.current = setTimeout(handleSettled, 160);
      }
    };

    track.addEventListener("scroll", onScroll, { passive: true });
    if (supportsScrollEnd) {
      track.addEventListener("scrollend", handleSettled, { passive: true });
    }

    return () => {
      track.removeEventListener("scroll", onScroll);
      if (supportsScrollEnd) {
        track.removeEventListener("scrollend", handleSettled);
      }
      if (rafRef.current !== null) cancelAnimationFrame(rafRef.current);
      if (settleTimeoutRef.current) clearTimeout(settleTimeoutRef.current);
    };
  }, [getNearestSlideIndex, photos.length]);

  useEffect(() => {
    if (!autoPlayEnabled || isPaused || selectedIndex !== null) return;
    if (
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      return;
    }

    const interval = setInterval(() => {
      if (document.visibilityState === "visible") {
        const base = pendingTargetRef.current ?? getNearestSlideIndex();
        scrollToSlide((base + 1) % photos.length);
      }
    }, 3500);

    return () => clearInterval(interval);
  }, [autoPlayEnabled, isPaused, selectedIndex, getNearestSlideIndex, scrollToSlide, photos.length]);

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

        {/* Horizontal Scroll-Snap Sliding Photo Carousel */}
        <div
          role="region"
          aria-roledescription="carousel"
          aria-label="Campus memories photo slider"
          className="relative"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onFocusCapture={() => setIsPaused(true)}
          onBlurCapture={(e) => {
            if (!e.currentTarget.contains(e.relatedTarget as Node | null)) {
              setIsPaused(false);
            }
          }}
        >
          {/* Previous / Next Controls placed before track in DOM order */}
          <div className="pointer-events-none absolute inset-y-0 left-0 right-0 z-10 flex items-center justify-between px-1 sm:px-3">
            <button
              type="button"
              onClick={handleSlidePrev}
              aria-label="Previous slide"
              style={{ touchAction: "manipulation" }}
              className="pointer-events-auto w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-[#071D43]/85 hover:bg-[#FFC928] text-white hover:text-[#071D43] border border-white/25 shadow-lg backdrop-blur-md flex items-center justify-center transition-all focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#FFC928] cursor-pointer"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              type="button"
              onClick={handleSlideNext}
              aria-label="Next slide"
              style={{ touchAction: "manipulation" }}
              className="pointer-events-auto w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-[#071D43]/85 hover:bg-[#FFC928] text-white hover:text-[#071D43] border border-white/25 shadow-lg backdrop-blur-md flex items-center justify-center transition-all focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#FFC928] cursor-pointer"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

          {/* Scrollable Track */}
          <div
            ref={trackRef}
            tabIndex={0}
            role="group"
            aria-label="Memory slides"
            onTouchStart={() => setIsPaused(true)}
            onTouchEnd={() => setIsPaused(false)}
            className="memories-carousel-track gap-4 sm:gap-5 px-2 sm:px-4 py-2 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#123C78] rounded-2xl"
          >
            {photos.map((photo, index) => (
              <div
                key={photo.id}
                ref={(el) => {
                  slideRefs.current[index] = el;
                }}
                role="group"
                aria-roledescription="slide"
                aria-label={`${index + 1} of ${photos.length}`}
                data-marker-name={`Go to slide ${index + 1}: ${photo.title}`}
                className="memories-carousel-slide flex-none w-[84%] sm:w-[48%] lg:w-[32.2%]"
              >
                <button
                  type="button"
                  onClick={() => setSelectedIndex(index)}
                  aria-label={`View photo: ${photo.title}`}
                  className={`group relative w-full h-72 sm:h-80 rounded-2xl overflow-hidden bg-slate-900 border shadow-md hover:shadow-xl transition-all duration-300 text-left focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#FFC928] cursor-pointer ${
                    activeSlide === index
                      ? "border-[#FFC928] ring-2 ring-[#FFC928]/40"
                      : "border-slate-200"
                  }`}
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
              </div>
            ))}
          </div>

          {/* Screen-reader polite live status */}
          <p className="sr-only" role="status" aria-live="polite">
            {statusMessage}
          </p>

          {/* Bottom Controls: Slide Marker Dots + Auto-slide Play/Pause */}
          <div className="mt-6 flex flex-wrap items-center justify-center gap-4">
            <nav aria-label="Choose a slide" className="flex items-center gap-2">
              {photos.map((photo, index) => {
                const isActive = activeSlide === index;
                return (
                  <button
                    key={photo.id}
                    type="button"
                    onClick={() => scrollToSlide(index)}
                    aria-label={`Go to slide ${index + 1}: ${photo.title}`}
                    aria-current={isActive ? "true" : undefined}
                    style={{ touchAction: "manipulation" }}
                    className={`h-2.5 rounded-full transition-all duration-300 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#123C78] ${
                      isActive
                        ? "w-8 bg-[#D71920] shadow-sm"
                        : "w-2.5 bg-slate-300 hover:bg-[#123C78]/60"
                    }`}
                  />
                );
              })}
            </nav>

            <button
              type="button"
              onClick={() => setAutoPlayEnabled((prev) => !prev)}
              aria-label={autoPlayEnabled ? "Pause auto-sliding" : "Resume auto-sliding"}
              className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-slate-200 hover:border-[#123C78] text-[11px] font-bold text-[#071D43] shadow-sm transition-colors cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#123C78]"
            >
              {autoPlayEnabled ? (
                <>
                  <Pause className="w-3 h-3 text-[#D71920]" />
                  <span>Auto Slide On</span>
                </>
              ) : (
                <>
                  <Play className="w-3 h-3 text-emerald-600" />
                  <span>Paused</span>
                </>
              )}
            </button>
          </div>
        </div>

        {/* Gentle Note */}
        <p className="text-center text-xs text-slate-500 mt-4 flex items-center justify-center gap-1.5">
          <Sparkles className="w-3.5 h-3.5 text-[#D71920]" />
          <span>Swipe, use arrows, or click any photograph to view full size</span>
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

