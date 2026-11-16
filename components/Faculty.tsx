"use client";

import React, { useState } from "react";
import {
  GraduationCap,
  Award,
  BookOpen,
  CheckCircle2,
  Sparkles,
  ShieldCheck,
  Atom,
  FlaskConical,
  Calculator,
  Dna,
  Microscope,
  Clock,
  ArrowRight,
  UserCheck,
  Landmark,
} from "lucide-react";

interface Teacher {
  id: string;
  name: string;
  role: string;
  subjects: string[];
  department: "physics" | "chemistry" | "mathematics" | "biology" | "science" | "commerce";
  qualification?: string;
  experience?: string;
  highlight: string;
  keySpecialties: string[];
  accentColor: {
    bg: string;
    border: string;
    badge: string;
    badgeText: string;
    iconBg: string;
    iconColor: string;
  };
}

export default function Faculty() {
  const [activeTab, setActiveTab] = useState<string>("all");

  const teachers: Teacher[] = [
    {
      id: "s-shah-physics",
      name: "Er. S. Shah",
      role: "Physics Expert & Senior Faculty",
      subjects: ["Physics"],
      department: "physics",
      qualification: "B.Tech (IET Lucknow)",
      experience: "8+ Years Experience",
      highlight: "IIT-JEE & NEET Physics Specialist",
      keySpecialties: [
        "Conceptual Mechanics & Electrodynamics",
        "Short-cut Numerical Problem Solving",
        "IIT-JEE Advanced & NEET Exam Strategy",
      ],
      accentColor: {
        bg: "bg-blue-50/80",
        border: "border-blue-200",
        badge: "bg-blue-600",
        badgeText: "text-white",
        iconBg: "bg-blue-100",
        iconColor: "text-blue-700",
      },
    },
    {
      id: "s-shah-chemistry",
      name: "Er. S. Shah",
      role: "Chemistry Faculty",
      subjects: ["Chemistry"],
      department: "chemistry",
      qualification: "B.Tech (IET Lucknow)",
      experience: "8+ Years Experience",
      highlight: "Organic & Physical Chemistry Expert",
      keySpecialties: [
        "Reaction Mechanisms & Named Reactions",
        "Physical Chemistry Numerical Formulas",
        "Board & Competitive Exam Focus",
      ],
      accentColor: {
        bg: "bg-amber-50/80",
        border: "border-amber-200",
        badge: "bg-amber-600",
        badgeText: "text-white",
        iconBg: "bg-amber-100",
        iconColor: "text-amber-800",
      },
    },
    {
      id: "waris-khan",
      name: "Er. Waris Khan",
      role: "Mathematics Faculty",
      subjects: ["Mathematics"],
      department: "mathematics",
      experience: "10+ Years Experience",
      highlight: "Senior Mathematics Mentor",
      keySpecialties: [
        "Calculus, Coordinate Geometry & Algebra",
        "Speed Math & Step-by-Step Scoring Techniques",
        "10+ Years of Proven Board & JEE Results",
      ],
      accentColor: {
        bg: "bg-indigo-50/80",
        border: "border-indigo-200",
        badge: "bg-indigo-600",
        badgeText: "text-white",
        iconBg: "bg-indigo-100",
        iconColor: "text-indigo-700",
      },
    },
    {
      id: "rm-tiwari",
      name: "Mr. R.M. Tiwari",
      role: "Mathematics Faculty",
      subjects: ["Mathematics"],
      department: "mathematics",
      highlight: "Foundation & Boards Mathematics",
      keySpecialties: [
        "Fundamental Concept Building",
        "Class 9th to 12th Board Syllabus Mastery",
        "Doubt Solving & Practice Rigor",
      ],
      accentColor: {
        bg: "bg-violet-50/80",
        border: "border-violet-200",
        badge: "bg-violet-600",
        badgeText: "text-white",
        iconBg: "bg-violet-100",
        iconColor: "text-violet-700",
      },
    },
    {
      id: "abdul-khair",
      name: "Abdul Khair",
      role: "Biology Faculty (NEET Expert)",
      subjects: ["Biology", "Zoology", "Botany"],
      department: "biology",
      highlight: "NEET Medical Entrance Specialist",
      keySpecialties: [
        "Complete NCERT Line-by-Line Decoded",
        "Human Physiology & Genetics Mastery",
        "NEET Diagram-Based & Assertion-Reason MCQs",
      ],
      accentColor: {
        bg: "bg-emerald-50/80",
        border: "border-emerald-200",
        badge: "bg-emerald-600",
        badgeText: "text-white",
        iconBg: "bg-emerald-100",
        iconColor: "text-emerald-700",
      },
    },
    {
      id: "md-farukh",
      name: "Md. Farukh",
      role: "Biology Faculty (NEET Mentor)",
      subjects: ["Biology", "Life Sciences"],
      department: "biology",
      highlight: "NEET Medical Mentorship",
      keySpecialties: [
        "Concept Clarity & Memory Retention Mnemonics",
        "Regular NEET Test Analysis & Doubt Sessions",
        "Medical Exam Mindset & Strategy Guidance",
      ],
      accentColor: {
        bg: "bg-teal-50/80",
        border: "border-teal-200",
        badge: "bg-teal-600",
        badgeText: "text-white",
        iconBg: "bg-teal-100",
        iconColor: "text-teal-700",
      },
    },
    {
      id: "ritika-thapa",
      name: "Ritika Thapa",
      role: "Science Faculty",
      subjects: ["Science", "Physics & Chemistry Foundation"],
      department: "science",
      experience: "5+ Years Experience",
      highlight: "Foundation & Junior Science Specialist",
      keySpecialties: [
        "Interactive Science Teaching & Demonstrations",
        "Foundation for Class 9th, 10th & Junior Boards",
        "Sainik School & RMS Science Curriculum",
      ],
      accentColor: {
        bg: "bg-rose-50/80",
        border: "border-rose-200",
        badge: "bg-rose-600",
        badgeText: "text-white",
        iconBg: "bg-rose-100",
        iconColor: "text-rose-700",
      },
    },
    {
      id: "narayan-sharma",
      name: "Mr. Narayan Sharma",
      role: "Commerce Faculty",
      subjects: ["Commerce", "Accountancy", "Economics"],
      department: "commerce",
      qualification: "CA Intermediate Qualified",
      highlight: "Accountancy & Commerce Expert",
      keySpecialties: [
        "Financial Accounting & Double Entry Concepts",
        "Class 11th & 12th Commerce Board Preparation",
        "Professional Foundation for CA, CS & CUET",
      ],
      accentColor: {
        bg: "bg-purple-50/80",
        border: "border-purple-200",
        badge: "bg-purple-600",
        badgeText: "text-white",
        iconBg: "bg-purple-100",
        iconColor: "text-purple-700",
      },
    },
  ];

  const filteredTeachers =
    activeTab === "all"
      ? teachers
      : teachers.filter((t) => t.department === activeTab);

  return (
    <section
      id="faculty"
      className="py-20 lg:py-28 bg-gradient-to-b from-slate-50 via-white to-slate-50 relative overflow-hidden"
    >
      {/* Background Decorative Blobs */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#FFC928]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#123C78]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#071D43]/5 border border-[#071D43]/15 text-[#071D43] text-xs sm:text-sm font-semibold tracking-wide uppercase">
            <GraduationCap className="w-4 h-4 text-[#123C78]" />
            <span>Expert Faculty Team • IIT-JEE Mentors</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#071D43] tracking-tight">
            Learn From <span className="text-[#123C78]">Experienced Faculty</span>
          </h2>

          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Our esteemed faculty members bring decades of combined teaching experience, engineering pedigree
            from premier institutes like IET Lucknow, and specialized mastery in NEET, IIT-JEE, and Board curricula.
          </p>
        </div>

        {/* Department Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-12">
          {[
            { key: "all", label: "All Faculty Members", icon: UserCheck },
            { key: "physics", label: "Physics", icon: Atom },
            { key: "chemistry", label: "Chemistry", icon: FlaskConical },
            { key: "mathematics", label: "Mathematics", icon: Calculator },
            { key: "biology", label: "Biology (NEET)", icon: Dna },
            { key: "commerce", label: "Commerce", icon: Landmark },
            { key: "science", label: "Science Foundation", icon: Microscope },
          ].map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.key;
            return (
              <button
                key={tab.key}
                onClick={() => setActiveTab(tab.key)}
                className={`inline-flex items-center gap-2 px-4 py-2 sm:py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                  isActive
                    ? "bg-[#071D43] text-white shadow-md shadow-[#071D43]/20 scale-105"
                    : "bg-white text-slate-600 hover:text-[#071D43] hover:bg-slate-100 border border-slate-200"
                }`}
              >
                <Icon className={`w-4 h-4 ${isActive ? "text-[#FFC928]" : "text-slate-500"}`} />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* Faculty Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredTeachers.map((teacher) => {
            const { bg, border, badge, badgeText, iconBg, iconColor } = teacher.accentColor;

            return (
              <div
                key={teacher.id}
                className={`group rounded-2xl border ${border} ${bg} p-6 sm:p-7 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between relative overflow-hidden`}
              >
                {/* Decorative Top Accent Bar */}
                <div className={`absolute top-0 left-0 right-0 h-1.5 ${badge}`} />

                <div className="space-y-4">
                  {/* Card Header: Avatar Initial & Badge */}
                  <div className="flex items-start justify-between gap-3">
                    <div
                      className={`w-14 h-14 rounded-2xl ${iconBg} ${iconColor} flex items-center justify-center font-black text-xl shadow-inner border border-white/60 flex-shrink-0 group-hover:scale-105 transition-transform`}
                    >
                      {teacher.name.replace("Er. ", "").replace("Mr. ", "").charAt(0)}
                    </div>

                    <div className="flex flex-col items-end gap-1.5">
                      <span
                        className={`inline-block px-2.5 py-0.5 rounded-full text-[11px] font-bold uppercase tracking-wider ${badge} ${badgeText} shadow-xs`}
                      >
                        {teacher.department.toUpperCase()}
                      </span>
                      {teacher.experience && (
                        <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-slate-600 bg-white/80 px-2 py-0.5 rounded-md border border-slate-200">
                          <Clock className="w-3 h-3 text-[#123C78]" />
                          {teacher.experience}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Teacher Name & Title */}
                  <div>
                    <div className="flex items-center gap-1.5">
                      <h3 className="text-xl font-bold text-[#071D43] group-hover:text-[#123C78] transition-colors">
                        {teacher.name}
                      </h3>
                      <ShieldCheck className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                    </div>

                    <p className="text-sm font-semibold text-[#123C78] mt-0.5">
                      {teacher.role}
                    </p>

                    {teacher.qualification && (
                      <div className="inline-flex items-center gap-1.5 mt-2 px-2.5 py-1 rounded-lg bg-white/90 border border-slate-200 text-xs font-semibold text-slate-700">
                        <GraduationCap className="w-3.5 h-3.5 text-[#E0AD15]" />
                        <span>{teacher.qualification}</span>
                      </div>
                    )}
                  </div>

                  {/* Key Highlights / Specialties */}
                  <div className="space-y-2 pt-2 border-t border-slate-200/80">
                    <div className="text-[11px] font-bold uppercase tracking-wider text-slate-500">
                      Teaching Highlights
                    </div>
                    <ul className="space-y-1.5">
                      {teacher.keySpecialties.map((spec, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-xs text-slate-700 leading-snug">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                          <span>{spec}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Card Footer: Book Demo CTA */}
                <div className="pt-5 mt-4 border-t border-slate-200/60 flex items-center justify-between">
                  <span className="text-[11px] font-medium text-slate-500">
                    {teacher.highlight}
                  </span>
                  <a
                    href="#admissions"
                    className="inline-flex items-center gap-1 text-xs font-bold text-[#123C78] hover:text-[#071D43] group-hover:translate-x-0.5 transition-all"
                  >
                    <span>Free Demo</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Mentorship Banner */}
        <div className="mt-14 bg-gradient-to-r from-[#071D43] via-[#123C78] to-[#071D43] text-white rounded-3xl p-6 sm:p-8 shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center md:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-[#FFC928] text-xs font-bold uppercase">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Free Demo Lectures Available</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-black text-white">
              Experience Our Faculty's Teaching Methodology First-Hand
            </h3>
            <p className="text-sm text-slate-300 max-w-2xl">
              Attend complimentary demo sessions with Er. S. Shah, Er. Waris Khan, Abdul Khair, and our expert team before enrolling in any regular batch.
            </p>
          </div>

          <div className="flex-shrink-0 flex items-center gap-3">
            <a
              href="#admissions"
              className="px-6 py-3 rounded-xl bg-[#FFC928] hover:bg-[#e5b31f] text-[#071D43] font-bold text-sm shadow-md hover:scale-105 active:scale-95 transition-all inline-flex items-center gap-2"
            >
              <span>Book Free Demo Class</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
