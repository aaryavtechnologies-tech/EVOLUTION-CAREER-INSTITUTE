"use client";

import React, { useState, useEffect } from "react";
import {
  Calendar,
  ClipboardCheck,
  BarChart3,
  CheckCircle2,
  ArrowRight,
  Phone,
  ZoomIn,
  X,
} from "lucide-react";

interface TestSeriesProps {
  onEnquireTestSeries?: () => void;
}

export default function TestSeries({ onEnquireTestSeries }: TestSeriesProps) {
  const [zoomed, setZoomed] = useState(false);

  useEffect(() => {
    if (!zoomed) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setZoomed(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [zoomed]);

  const handleRegister = () => {
    if (onEnquireTestSeries) {
      onEnquireTestSeries();
    }
    const element = document.getElementById("admissions");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const highlights = [
    {
      title: "Exam Pattern Oriented Tests",
      desc: "Chapterwise & full syllabus papers aligned with NCERT, Board & Competitive patterns.",
      icon: ClipboardCheck,
    },
    {
      title: "Detailed Analysis & Performance Report",
      desc: "Track speed, accuracy, and topic-wise strengths with regular evaluation & doubt sessions.",
      icon: BarChart3,
    },
  ];

  const plans = [
    { label: "NEET / JEE", fee: "₹2,000" },
    { label: "12th CBSE / 10th ICSE", fee: "₹2,000" },
    { label: "12th UP / 11th (CBSE, UP, ICSE)", fee: "₹1,500" },
    { label: "10th (CBSE & UP) / 9th CBSE", fee: "₹1,000" },
    { label: "9th UP", fee: "₹500" },
  ];

  return (
    <section
      id="test-series"
      className="py-20 lg:py-24 bg-white border-b border-slate-200/80 relative overflow-hidden"
    >
      {/* Subtle Background Accents */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 left-0 w-80 h-80 bg-[#FFC928]/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-0 w-96 h-96 bg-[#123C78]/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Column: Full Test Series 2.0 Flyer Photo */}
          <div className="lg:col-span-6">
            <button
              type="button"
              onClick={() => setZoomed(true)}
              aria-label="Enlarge Test Series 2.0 poster"
              className="group relative block max-w-md mx-auto rounded-3xl overflow-hidden shadow-2xl border-2 border-[#071D43]/15 bg-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#123C78] cursor-pointer"
            >
              <img
                src="/images/gallery/test-series-2.jpg"
                alt="Evolution Career Institute Test Series 2.0 starting from 20 November 2026 for NEET, JEE, Boards and Foundation"
                className="w-full h-auto block group-hover:scale-[1.01] transition-transform duration-500"
                loading="lazy"
              />
              <span className="absolute top-3.5 right-3.5 p-2 rounded-full bg-[#071D43]/80 text-[#FFC928] opacity-0 group-hover:opacity-100 transition-opacity shadow-md backdrop-blur-sm">
                <ZoomIn className="w-4 h-4" />
              </span>
            </button>
          </div>

          {/* Right Column: Details, Fee Summary & Registration CTA */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#D71920]/10 border border-[#D71920]/20 text-[#D71920] text-xs font-extrabold uppercase tracking-wider">
              <Calendar className="w-4 h-4" />
              <span>Starting From 20 November 2026</span>
            </div>

            <div>
              <h2
                className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#071D43] tracking-tight leading-tight"
                style={{ fontFamily: "'Outfit', sans-serif" }}
              >
                EVOLUTION{" "}
                <span className="text-[#D71920]">TEST SERIES 2.0</span>
              </h2>
              <p className="text-base sm:text-lg font-bold text-[#123C78] mt-2">
                Better Practice, Better Performance &bull; NEET | JEE | Boards | Foundation
              </p>
            </div>

            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              Build real exam temperament through NCERT-based questions, chapterwise and full
              syllabus tests, performance comparison, and dedicated doubt-clearing sessions led by
              expert faculty.
            </p>

            {/* Key Test Series Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {highlights.map((item) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.title}
                    className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80"
                  >
                    <div className="w-10 h-10 rounded-xl bg-[#071D43] text-[#FFC928] flex items-center justify-center mb-3">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="text-sm font-bold text-[#071D43] mb-1">{item.title}</h3>
                    <p className="text-xs text-slate-600 leading-relaxed">{item.desc}</p>
                  </div>
                );
              })}
            </div>

            {/* Fee Structure Summary */}
            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200">
              <p className="text-xs font-extrabold uppercase tracking-wider text-[#071D43] mb-3">
                Program Fee Overview (Classes 9th to 12th, NEET &amp; JEE)
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {plans.map((plan) => (
                  <div
                    key={plan.label}
                    className="flex items-center justify-between px-3.5 py-2 rounded-xl bg-white border border-slate-200/80 text-xs sm:text-sm"
                  >
                    <span className="font-semibold text-slate-700 flex items-center gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0" />
                      {plan.label}
                    </span>
                    <span className="font-black text-[#D71920] tabular-nums ml-2">
                      {plan.fee}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Actions */}
            <div className="flex flex-col sm:flex-row items-center gap-3 pt-2">
              <button
                type="button"
                onClick={handleRegister}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl font-black text-sm sm:text-base text-[#071D43] bg-gradient-to-r from-[#FFC928] via-[#FFD858] to-[#FFC928] hover:shadow-[0_6px_22px_rgba(255,201,40,0.5)] border border-[#E0AD15] transition-all hover:-translate-y-0.5 cursor-pointer"
              >
                <span>Join Test Series 2.0</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href="tel:6390247880"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-bold text-sm text-white bg-[#071D43] hover:bg-[#123C78] transition-colors"
              >
                <Phone className="w-4 h-4 text-[#FFC928]" />
                <span>Call 6390247880</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Full-View Lightbox Modal on Poster Click */}
      {zoomed && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Test Series 2.0 Poster Preview"
          onClick={() => setZoomed(false)}
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex items-center justify-center p-4"
        >
          <div onClick={(e) => e.stopPropagation()} className="relative max-w-2xl w-full">
            <button
              type="button"
              onClick={() => setZoomed(false)}
              aria-label="Close poster preview"
              className="absolute -top-12 right-0 p-2 rounded-full bg-white/15 hover:bg-white/25 text-white transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
            <img
              src="/images/gallery/test-series-2.jpg"
              alt="Evolution Career Institute Test Series 2.0 Full Poster"
              className="w-full max-h-[85vh] object-contain rounded-2xl mx-auto"
            />
          </div>
        </div>
      )}
    </section>
  );
}

