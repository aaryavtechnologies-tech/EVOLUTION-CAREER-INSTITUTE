"use client";

import React, { useState, useEffect, useCallback } from "react";
import {
  Camera,
  Film,
  Award,
  Users,
  Flag,
  Building2,
  X,
  ChevronLeft,
  ChevronRight,
  Maximize2,
  PlayCircle,
  Megaphone,
} from "lucide-react";

type MediaCategory = "all" | "teachers-day" | "independence-day" | "campus" | "awards";

interface GalleryPhoto {
  id: string;
  src: string;
  title: string;
  caption: string;
  category: Exclude<MediaCategory, "all">;
  categoryLabel: string;
  fit?: "cover" | "contain";
}

interface CampusVideo {
  id: string;
  src: string;
  poster: string;
  title: string;
  description: string;
  tag: string;
}

const CAMPUS_VIDEOS: CampusVideo[] = [
  {
    id: "vid-1",
    src: "/media/videos/teachers-day-student-performance.mp4",
    poster: "/media/teachers-day/faculty-mentors-panel.jpeg",
    title: "Teacher's Day Celebration & Student Tribute",
    description:
      "A heartwarming classroom moment as a student performs a musical tribute in front of faculty mentors and classmates, cheered on with warm encouragement and applause.",
    tag: "Teacher's Day",
  },
  {
    id: "vid-2",
    src: "/media/videos/teachers-day-classroom-gathering.mp4",
    poster: "/media/teachers-day/students-batch-group.jpeg",
    title: "Batch Gathering & Mentor Appreciation",
    description:
      "Full classroom view of Evolution Career Institute students in institute ID lanyards gathered with mentors under the Teacher's Day banner.",
    tag: "Student Community",
  },
  {
    id: "vid-3",
    src: "/media/videos/campus-classroom-tour.mp4",
    poster: "/media/campus/classroom-whiteboard-view.jpeg",
    title: "Sadar Cantt Classroom & Independence Day Tour",
    description:
      "Walkthrough of our Sadar Cantt, Lucknow classrooms decorated in tricolor flags and balloons ahead of Independence Day celebrations.",
    tag: "Campus Tour",
  },
];

const GALLERY_PHOTOS: GalleryPhoto[] = [
  {
    id: "photo-award-1",
    src: "/media/awards/sharib-shah-teacher-impact-award.jpeg",
    title: "EduCart Teacher Impact Award 2026–2027",
    caption:
      "Awarded to Sharib Shah by a panel of independent board experts (Award ID: PBX23-4) for lasting impact on students' lives.",
    category: "awards",
    categoryLabel: "Awards & Recognition",
    fit: "contain",
  },
  {
    id: "photo-poster-1",
    src: "/media/posters/crash-course-2026.jpeg",
    title: "Crash Course 2026 Official Batch Poster",
    caption:
      "Crash Course 2026 starting from 20th November for Class 10th (₹10,000), Class 12th (₹12,000), IIT-JEE (₹20,000), and NEET (₹20,000).",
    category: "awards",
    categoryLabel: "Official Announcement",
    fit: "contain",
  },
  {
    id: "photo-td-1",
    src: "/media/teachers-day/students-batch-group.jpeg",
    title: "Evolution Career Institute Student Batch",
    caption:
      "Students in Evolution Career Institute lanyards seated together inside our Sadar Cantt classroom during Teacher's Day celebrations.",
    category: "teachers-day",
    categoryLabel: "Teacher's Day",
    fit: "cover",
  },
  {
    id: "photo-td-2",
    src: "/media/teachers-day/faculty-teachers-day-board.jpeg",
    title: "Faculty Mentors Beside Student Wishes Board",
    caption:
      "Our core teaching team seated in front of heartfelt Teacher's Day messages and hand-drawn artwork created by students on the classroom whiteboard.",
    category: "teachers-day",
    categoryLabel: "Teacher's Day",
    fit: "cover",
  },
  {
    id: "photo-td-3",
    src: "/media/teachers-day/faculty-mentors-panel.jpeg",
    title: "Mentor Panel & Celebration Stage",
    caption:
      "Faculty members gathered under the festive blue-and-white Teacher's Day balloon backdrop with student appreciation hampers.",
    category: "teachers-day",
    categoryLabel: "Teacher's Day",
    fit: "cover",
  },
  {
    id: "photo-td-4",
    src: "/media/teachers-day/teachers-day-team-group.jpeg",
    title: "Faculty & Senior Mentors Group Portrait",
    caption:
      "Educators and mentors sharing smiles together during the institute's Teacher's Day celebration.",
    category: "teachers-day",
    categoryLabel: "Teacher's Day",
    fit: "cover",
  },
  {
    id: "photo-td-5",
    src: "/media/teachers-day/teachers-day-gift-presentation-1.jpeg",
    title: "Teacher's Day Gift & Cake Celebration",
    caption:
      "Presenting commemorative Teacher's Day gift hampers alongside the celebration cake at the institute.",
    category: "teachers-day",
    categoryLabel: "Teacher's Day",
    fit: "cover",
  },
  {
    id: "photo-td-6",
    src: "/media/teachers-day/teachers-day-gift-presentation-2.jpeg",
    title: "Honoring Educators With Gratitude",
    caption:
      "Mentors receiving custom Evolution Career Institute Teacher's Day mementos from students and guests.",
    category: "teachers-day",
    categoryLabel: "Teacher's Day",
    fit: "cover",
  },
  {
    id: "photo-id-1",
    src: "/media/independence-day/independence-day-students-front.jpeg",
    title: "Independence Day Celebration With Mentors",
    caption:
      "Students and faculty posing proudly in front of the tricolor Ashoka Chakra backdrop in the decorated classroom.",
    category: "independence-day",
    categoryLabel: "Independence Day",
    fit: "cover",
  },
  {
    id: "photo-id-2",
    src: "/media/independence-day/independence-day-students-hall.jpeg",
    title: "Full Classroom Independence Day Gathering",
    caption:
      "Students seated across the hall surrounded by tricolor balloons, flags, and Evolution motivational posters.",
    category: "independence-day",
    categoryLabel: "Independence Day",
    fit: "cover",
  },
  {
    id: "photo-id-3",
    src: "/media/independence-day/independence-day-students-smiles.jpeg",
    title: "Cheerful Moments on Independence Day",
    caption:
      "Smiling students celebrating together in our Sadar Cantt campus adorned in saffron, white, and green.",
    category: "independence-day",
    categoryLabel: "Independence Day",
    fit: "cover",
  },
  {
    id: "photo-id-4",
    src: "/media/independence-day/independence-day-batch-gathering.jpeg",
    title: "Patriotic Spirit Across All Batches",
    caption:
      "Students gathered attentively during the Independence Day programme led by Evolution Career Institute faculty.",
    category: "independence-day",
    categoryLabel: "Independence Day",
    fit: "cover",
  },
  {
    id: "photo-campus-1",
    src: "/media/campus/classroom-tricolor-front.jpeg",
    title: "Air-Conditioned Classroom & Faculty Desk",
    caption:
      "Clean, partitioned, air-conditioned classroom hall at Neelkanth Complex, Sadar Cantt, Lucknow prepared for Independence Day.",
    category: "campus",
    categoryLabel: "Classrooms & Campus",
    fit: "cover",
  },
  {
    id: "photo-campus-2",
    src: "/media/campus/classroom-whiteboard-view.jpeg",
    title: "Classroom Whiteboard & Seating Area",
    caption:
      "Well-lit study hall featuring wide whiteboards, comfortable seating benches, and safety equipment.",
    category: "campus",
    categoryLabel: "Classrooms & Campus",
    fit: "cover",
  },
];

export default function CampusLife() {
  const [activeCategory, setActiveCategory] = useState<MediaCategory>("all");
  const [lightboxPhotoIndex, setLightboxPhotoIndex] = useState<number | null>(null);
  const [activeVideoModal, setActiveVideoModal] = useState<CampusVideo | null>(null);

  const filteredPhotos =
    activeCategory === "all"
      ? GALLERY_PHOTOS
      : GALLERY_PHOTOS.filter((photo) => photo.category === activeCategory);

  const categories: {
    id: MediaCategory;
    label: string;
    count: number;
    icon: React.ComponentType<{ className?: string }>;
  }[] = [
    { id: "all", label: "All Media", count: GALLERY_PHOTOS.length, icon: Camera },
    {
      id: "teachers-day",
      label: "Teacher's Day",
      count: GALLERY_PHOTOS.filter((p) => p.category === "teachers-day").length,
      icon: Users,
    },
    {
      id: "independence-day",
      label: "Independence Day",
      count: GALLERY_PHOTOS.filter((p) => p.category === "independence-day").length,
      icon: Flag,
    },
    {
      id: "campus",
      label: "Classrooms & Campus",
      count: GALLERY_PHOTOS.filter((p) => p.category === "campus").length,
      icon: Building2,
    },
    {
      id: "awards",
      label: "Awards & Posters",
      count: GALLERY_PHOTOS.filter((p) => p.category === "awards").length,
      icon: Award,
    },
  ];

  const handleNextPhoto = useCallback(() => {
    if (lightboxPhotoIndex === null) return;
    setLightboxPhotoIndex((prev) =>
      prev === null ? null : (prev + 1) % filteredPhotos.length
    );
  }, [lightboxPhotoIndex, filteredPhotos.length]);

  const handlePrevPhoto = useCallback(() => {
    if (lightboxPhotoIndex === null) return;
    setLightboxPhotoIndex((prev) =>
      prev === null ? null : (prev - 1 + filteredPhotos.length) % filteredPhotos.length
    );
  }, [lightboxPhotoIndex, filteredPhotos.length]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setLightboxPhotoIndex(null);
        setActiveVideoModal(null);
      }
      if (lightboxPhotoIndex !== null) {
        if (e.key === "ArrowRight") handleNextPhoto();
        if (e.key === "ArrowLeft") handlePrevPhoto();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [lightboxPhotoIndex, handleNextPhoto, handlePrevPhoto]);

  const activePhoto =
    lightboxPhotoIndex !== null ? filteredPhotos[lightboxPhotoIndex] : null;

  return (
    <section id="campus-life" className="py-20 lg:py-28 bg-slate-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-md bg-[#071D43]/10 text-[#071D43] text-xs font-bold uppercase tracking-wider mb-3">
            <Camera className="w-3.5 h-3.5 text-[#D71920]" />
            <span>Life at Evolution</span>
          </div>
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#071D43] tracking-tight leading-tight mb-4"
            style={{ fontFamily: "'Outfit', sans-serif" }}
          >
            Campus Culture, Celebrations &amp;{" "}
            <span className="text-[#D71920]">Recognitions</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-600">
            Glimpses from our classrooms in Sadar Cantt, Lucknow—celebrating mentorship,
            student milestones, national occasions, and academic honours.
          </p>
        </div>

        {/* Video Showcase */}
        <div className="mb-16">
          <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
            <div className="flex items-center gap-2.5">
              <div className="p-2 rounded-xl bg-[#071D43] text-[#FFC928]">
                <Film className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-xl sm:text-2xl font-black text-[#071D43]">
                  Video Highlights &amp; Classroom Tour
                </h3>
                <p className="text-xs sm:text-sm text-slate-500">
                  Watch real classroom celebrations and campus walkthroughs
                </p>
              </div>
            </div>
            <span className="inline-flex items-center gap-1.5 text-xs font-bold text-[#123C78] bg-white px-3 py-1.5 rounded-full border border-slate-200 shadow-sm">
              <PlayCircle className="w-4 h-4 text-[#D71920]" />
              {CAMPUS_VIDEOS.length} Campus Videos
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {CAMPUS_VIDEOS.map((video) => (
              <div
                key={video.id}
                className="rounded-2xl bg-white border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col"
              >
                <div className="relative aspect-video bg-[#04122C]">
                  <video
                    controls
                    playsInline
                    preload="metadata"
                    poster={video.poster}
                    className="w-full h-full object-contain"
                  >
                    <source src={video.src} type="video/mp4" />
                    Your browser does not support video playback.
                  </video>
                  <button
                    type="button"
                    onClick={() => setActiveVideoModal(video)}
                    aria-label={`Expand ${video.title}`}
                    className="absolute top-3 right-3 p-1.5 rounded-lg bg-[#071D43]/80 hover:bg-[#071D43] text-white border border-white/20 backdrop-blur-sm transition-colors"
                    title="Watch in theater view"
                  >
                    <Maximize2 className="w-4 h-4 text-[#FFC928]" />
                  </button>
                </div>

                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div>
                    <span className="inline-block text-[10px] font-extrabold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-amber-100 text-[#071D43] mb-2">
                      {video.tag}
                    </span>
                    <h4 className="text-base font-bold text-[#071D43] mb-1.5">
                      {video.title}
                    </h4>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      {video.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Photo, Awards & Announcements Gallery */}
        <div>
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 mb-8">
            <div className="flex items-center gap-2.5">
              <div className="p-2 rounded-xl bg-[#D71920] text-white">
                <Megaphone className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-xl sm:text-2xl font-black text-[#071D43]">
                  Photo Gallery, Awards &amp; Posters
                </h3>
                <p className="text-xs sm:text-sm text-slate-500">
                  Click any photo or certificate to inspect in full screen
                </p>
              </div>
            </div>

            {/* Category Filter Pills */}
            <div className="flex flex-wrap gap-2">
              {categories.map((cat) => {
                const Icon = cat.icon;
                const isActive = activeCategory === cat.id;
                return (
                  <button
                    key={cat.id}
                    type="button"
                    onClick={() => {
                      setActiveCategory(cat.id);
                      setLightboxPhotoIndex(null);
                    }}
                    className={`inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                      isActive
                        ? "bg-[#071D43] text-[#FFC928] shadow-md border border-[#071D43]"
                        : "bg-white text-slate-700 hover:text-[#071D43] border border-slate-200 hover:border-[#123C78]/40"
                    }`}
                  >
                    <Icon className="w-3.5 h-3.5" />
                    <span>{cat.label}</span>
                    <span
                      className={`px-1.5 py-0.2 rounded-full text-[10px] ${
                        isActive
                          ? "bg-[#FFC928]/20 text-[#FFC928]"
                          : "bg-slate-100 text-slate-500"
                      }`}
                    >
                      {cat.count}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Photo Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredPhotos.map((photo, idx) => (
              <button
                key={photo.id}
                type="button"
                onClick={() => setLightboxPhotoIndex(idx)}
                className="group text-left rounded-2xl bg-white border border-slate-200 hover:border-[#FFC928] shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col cursor-pointer"
              >
                <div
                  className={`relative h-64 w-full overflow-hidden ${
                    photo.fit === "contain" ? "bg-[#071D43]/5 p-2" : "bg-slate-200"
                  }`}
                >
                  <img
                    src={photo.src}
                    alt={photo.title}
                    loading="lazy"
                    className={`w-full h-full transition-transform duration-500 group-hover:scale-105 ${
                      photo.fit === "contain"
                        ? "object-contain rounded-lg"
                        : "object-cover object-top"
                    }`}
                  />
                  <div className="absolute top-3 left-3">
                    <span className="inline-block text-[10px] font-extrabold uppercase tracking-wider px-2.5 py-1 rounded-full bg-[#071D43]/85 text-[#FFC928] backdrop-blur-sm shadow">
                      {photo.categoryLabel}
                    </span>
                  </div>
                  <div className="absolute bottom-3 right-3 p-2 rounded-lg bg-white/90 text-[#071D43] opacity-0 group-hover:opacity-100 transition-opacity shadow-md">
                    <Maximize2 className="w-4 h-4" />
                  </div>
                </div>

                <div className="p-4 flex-1 flex flex-col justify-between">
                  <div>
                    <h4 className="text-sm sm:text-base font-bold text-[#071D43] group-hover:text-[#123C78] transition-colors mb-1">
                      {photo.title}
                    </h4>
                    <p className="text-xs text-slate-600 leading-relaxed line-clamp-2">
                      {photo.caption}
                    </p>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Photo Lightbox Modal */}
      {activePhoto && lightboxPhotoIndex !== null && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={activePhoto.title}
          onClick={() => setLightboxPhotoIndex(null)}
          className="fixed inset-0 z-50 bg-slate-950/90 backdrop-blur-sm flex items-center justify-center p-4"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-5xl w-full bg-[#071D43] rounded-2xl border border-white/20 shadow-2xl overflow-hidden"
          >
            {/* Top Bar */}
            <div className="flex items-center justify-between px-4 sm:px-6 py-3 border-b border-white/10 text-white">
              <div className="flex items-center gap-2.5 min-w-0">
                <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-[#FFC928] text-[#071D43] flex-shrink-0">
                  {activePhoto.categoryLabel}
                </span>
                <h4 className="text-sm sm:text-base font-bold truncate">
                  {activePhoto.title}
                </h4>
              </div>
              <button
                type="button"
                onClick={() => setLightboxPhotoIndex(null)}
                aria-label="Close photo preview"
                className="p-1.5 rounded-lg text-slate-300 hover:text-white hover:bg-white/10 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Image Container */}
            <div className="relative bg-black/50 flex items-center justify-center h-[60vh] sm:h-[70vh] p-2 sm:p-4">
              <img
                src={activePhoto.src}
                alt={activePhoto.title}
                className="max-h-full max-w-full object-contain rounded-lg"
              />

              {filteredPhotos.length > 1 && (
                <>
                  <button
                    type="button"
                    onClick={handlePrevPhoto}
                    aria-label="Previous photo"
                    className="absolute left-3 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-[#071D43]/85 hover:bg-[#FFC928] text-white hover:text-[#071D43] border border-white/20 transition-colors shadow-lg"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <button
                    type="button"
                    onClick={handleNextPhoto}
                    aria-label="Next photo"
                    className="absolute right-3 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-[#071D43]/85 hover:bg-[#FFC928] text-white hover:text-[#071D43] border border-white/20 transition-colors shadow-lg"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </>
              )}
            </div>

            {/* Caption Bar */}
            <div className="px-4 sm:px-6 py-3.5 bg-[#04122C] text-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs sm:text-sm">
              <p>{activePhoto.caption}</p>
              <span className="text-xs font-mono text-[#FFC928] flex-shrink-0">
                {lightboxPhotoIndex + 1} / {filteredPhotos.length}
              </span>
            </div>
          </div>
        </div>
      )}

      {/* Video Theater Modal */}
      {activeVideoModal && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={activeVideoModal.title}
          onClick={() => setActiveVideoModal(null)}
          className="fixed inset-0 z-50 bg-slate-950/90 backdrop-blur-sm flex items-center justify-center p-4"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-4xl w-full bg-[#071D43] rounded-2xl border border-white/20 shadow-2xl overflow-hidden"
          >
            <div className="flex items-center justify-between px-4 sm:px-6 py-3 border-b border-white/10 text-white">
              <div className="flex items-center gap-2.5 min-w-0">
                <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-[#FFC928] text-[#071D43] flex-shrink-0">
                  {activeVideoModal.tag}
                </span>
                <h4 className="text-sm sm:text-base font-bold truncate">
                  {activeVideoModal.title}
                </h4>
              </div>
              <button
                type="button"
                onClick={() => setActiveVideoModal(null)}
                aria-label="Close video theater"
                className="p-1.5 rounded-lg text-slate-300 hover:text-white hover:bg-white/10 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="bg-black flex items-center justify-center max-h-[75vh]">
              <video
                controls
                autoPlay
                playsInline
                poster={activeVideoModal.poster}
                className="w-full max-h-[72vh] object-contain"
              >
                <source src={activeVideoModal.src} type="video/mp4" />
              </video>
            </div>

            <div className="px-4 sm:px-6 py-3.5 bg-[#04122C] text-slate-200 text-xs sm:text-sm">
              {activeVideoModal.description}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

