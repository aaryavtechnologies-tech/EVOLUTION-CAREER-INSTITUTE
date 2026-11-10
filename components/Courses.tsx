"use client";

import React from "react";
import { BookOpen, Target, Shield, ArrowRight, CheckCircle2, Sparkles } from "lucide-react";

interface CoursesProps {
  onSelectCourse?: (courseName: string, className: string) => void;
}

export default function Courses({ onSelectCourse }: CoursesProps) {
  const programs = [
    {
      id: "prog-1",
      badge: "Foundation Program",
      badgeColor: "bg-blue-100 text-[#123C78]",
      title: "Class 9th & 10th",
      subtitle: "Board Foundation",
      description:
        "Build strong academic fundamentals with structured learning and concept revision.",
      curriculum: [
        "Strengthening core Mathematics & Science concepts",
        "Structured concept revision & doubt clearance",
        "School syllabus and board examination alignment",
        "Developing analytical & logical thinking early",
      ],
      examBadges: ["CBSE / ICSE / State Board", "Foundation Olympiads"],
      icon: BookOpen,
      iconBg: "bg-blue-600",
      accentBorder: "hover:border-[#123C78]",
      cardGradient: "from-blue-50/50 via-white to-white",
      defaultClass: "9th",
      defaultCourse: "Boards",
      image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=80&w=800&auto=format&fit=crop",
    },
    {
      id: "prog-2",
      badge: "Target Competitive",
      badgeColor: "bg-amber-100 text-amber-900",
      featured: true,
      title: "Class 11th & 12th",
      subtitle: "NEET | IIT-JEE | CUET",
      description:
        "Focused academic preparation for board examinations and competitive entrance examinations.",
      curriculum: [
        "In-depth concept mastery for Physics, Chemistry & Biology/Maths",
        "IIT-JEE & NEET patterned practice questions",
        "CUET entrance syllabus & test simulation",
        "Regular test series & comprehensive performance analysis",
      ],
      examBadges: ["NEET", "IIT-JEE", "CUET", "Board Examinations"],
      icon: Target,
      iconBg: "bg-[#D71920]",
      accentBorder: "border-[#FFC928] ring-2 ring-[#FFC928]/30",
      cardGradient: "from-amber-50/50 via-white to-white",
      defaultClass: "11th",
      defaultCourse: "IIT-JEE",
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=800&auto=format&fit=crop",
    },
    {
      id: "prog-3",
      badge: "Specialized Defence Entry",
      badgeColor: "bg-emerald-100 text-emerald-900",
      title: "Special Defence School Batches",
      subtitle: "SAINIK SCHOOL | RMS | RIMS",
      description:
        "Dedicated preparation batches for students targeting admission to prestigious defence-oriented schools.",
      curriculum: [
        "Complete coverage of Sainik School AISSEE syllabus",
        "Rashtriya Military Schools (RMS) specific curriculum",
        "Rashtriya Indian Military College (RIMC/RIMS) preparation",
        "Mathematics, Intelligence, General Knowledge & English",
      ],
      examBadges: ["Sainik School", "RMS", "RIMS", "NDA Prep"],
      icon: Shield,
      iconBg: "bg-emerald-700",
      accentBorder: "hover:border-emerald-600",
      cardGradient: "from-emerald-50/50 via-white to-white",
      defaultClass: "9th",
      defaultCourse: "Sainik School",
      image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=800&auto=format&fit=crop",
    },
  ];

  const handleExplore = (courseName: string, className: string) => {
    if (onSelectCourse) {
      onSelectCourse(courseName, className);
    }
    const element = document.getElementById("admissions");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="courses" className="py-20 lg:py-28 bg-slate-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-md bg-[#071D43]/10 text-[#071D43] text-xs font-bold uppercase tracking-wider mb-3">
            <span>Academic Excellence</span>
          </div>
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#071D43] tracking-tight leading-tight mb-4"
            style={{ fontFamily: "'Outfit', sans-serif" }}
          >
            Explore Our Academic Programs
          </h2>
          <p className="text-base sm:text-lg text-slate-600">
            The right guidance for every stage of your academic journey.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {programs.map((prog) => {
            const Icon = prog.icon;
            return (
              <div
                key={prog.id}
                className={`relative rounded-2xl bg-gradient-to-b ${prog.cardGradient} border border-slate-200 ${prog.accentBorder} shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col overflow-hidden group`}
              >
                {/* Featured Badge if applicable */}
                {prog.featured && (
                  <div className="absolute top-0 right-0 bg-[#FFC928] text-[#071D43] text-[11px] font-black px-4 py-1 rounded-bl-xl uppercase tracking-wider shadow-sm z-10 flex items-center gap-1">
                    <Sparkles className="w-3.5 h-3.5 text-[#D71920]" />
                    Most Popular
                  </div>
                )}

                {/* Card Thumbnail Image */}
                <div className="relative h-48 w-full overflow-hidden bg-slate-200">
                  <img
                    src={prog.image}
                    alt={prog.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 via-slate-900/20 to-transparent"></div>
                  
                  <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between">
                    <span
                      className={`inline-block text-[11px] font-bold px-2.5 py-0.5 rounded-full ${prog.badgeColor} backdrop-blur-md shadow-sm`}
                    >
                      {prog.badge}
                    </span>
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    {/* Program Subtitle/Badges */}
                    <div className="text-xs font-bold text-[#D71920] uppercase tracking-wider mb-1">
                      {prog.subtitle}
                    </div>

                    {/* Program Main Title */}
                    <h3 className="text-2xl font-black text-[#071D43] mb-3 tracking-tight">
                      {prog.title}
                    </h3>

                    {/* Short Description */}
                    <p className="text-sm text-slate-600 leading-relaxed mb-5">
                      {prog.description}
                    </p>

                    {/* Key Highlights list */}
                    <div className="space-y-2 mb-6 border-t border-slate-100 pt-4">
                      {prog.curriculum.map((item, idx) => (
                        <div key={idx} className="flex items-start gap-2 text-xs text-slate-700">
                          <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>

                    {/* Examination Tags */}
                    <div className="flex flex-wrap gap-1.5 mb-6">
                      {prog.examBadges.map((badge, idx) => (
                        <span
                          key={idx}
                          className="text-[11px] font-semibold px-2 py-0.5 rounded bg-slate-100 text-slate-700 border border-slate-200"
                        >
                          {badge}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Explore Button */}
                  <div className="pt-2">
                    <button
                      type="button"
                      onClick={() => handleExplore(prog.defaultCourse, prog.defaultClass)}
                      className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl font-bold text-sm text-[#071D43] bg-white hover:bg-[#FFC928] border-2 border-slate-200 hover:border-[#E0AD15] shadow-sm hover:shadow transition-all group-hover:border-[#071D43]/20"
                    >
                      <span>Explore Program</span>
                      <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Banner */}
        <div className="mt-12 bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-[#071D43] text-[#FFC928] flex items-center justify-center flex-shrink-0 font-bold">
              <Sparkles className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-base sm:text-lg font-bold text-[#071D43]">
                Need guidance choosing the right course for your goals?
              </h4>
              <p className="text-xs sm:text-sm text-slate-500">
                Talk to our academic counsellors today for personalized batch details and syllabus roadmaps.
              </p>
            </div>
          </div>
          <div className="flex items-center gap-3 w-full md:w-auto">
            <a
              href="tel:6390247880"
              className="w-full md:w-auto text-center px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold bg-[#071D43] text-white hover:bg-[#123C78] transition-colors"
            >
              Call 6390247880
            </a>
            <a
              href="#admissions"
              className="w-full md:w-auto text-center px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold bg-[#FFC928] text-[#071D43] hover:bg-[#FFD858] transition-colors"
            >
              Enquire Online
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
