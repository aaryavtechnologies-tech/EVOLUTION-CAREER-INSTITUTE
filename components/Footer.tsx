import React from "react";
import Logo from "./Logo";
import { Phone, MapPin, Sparkles, ArrowRight, ShieldCheck, Heart } from "lucide-react";

export default function Footer() {
  const quickLinks = [
    { name: "Home", href: "#home" },
    { name: "About Us", href: "#about" },
    { name: "Courses", href: "#courses" },
    { name: "Why Choose Us", href: "#why-choose-us" },
    { name: "Campus Life & Gallery", href: "#campus-life" },
    { name: "Crash Course 2026", href: "#crash-course" },
    { name: "Diwali Special Offer", href: "#special-offer" },
    { name: "Admissions", href: "#admissions" },
    { name: "Contact", href: "#contact" },
  ];

  const coursesList = [
    "NEET Coaching",
    "IIT-JEE Preparation",
    "CUET Entrance",
    "NDA Coaching",
    "Class 9th & 10th Foundation",
    "Class 11th & 12th Boards",
    "Sainik School Batches",
    "RMS & RIMS Special",
  ];

  return (
    <footer className="bg-[#04122C] text-slate-300 relative border-t-2 border-[#FFC928]/30 pt-16 pb-8 overflow-hidden">
      {/* Decorative Glow */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#123C78]/30 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-white/10">
          {/* Col 1: Institute Brand & Tagline */}
          <div className="lg:col-span-5 space-y-4">
            <Logo variant="light" size="lg" />

            <p className="text-sm text-slate-400 max-w-md leading-relaxed mt-4">
              Evolution Career Institute is committed to providing structured academic guidance and
              concept-driven preparation for NEET, IIT-JEE, CUET, NDA, Sainik School, and Board
              Examinations.
            </p>

            <div className="inline-flex items-center gap-2 p-2.5 rounded-xl bg-white/5 border border-white/10 text-xs text-slate-300">
              <ShieldCheck className="w-4 h-4 text-[#FFC928]" />
              <span>An Initiative of IIT JEE Qualified Mentors</span>
            </div>

            <div className="pt-2">
              <span className="inline-block text-xs font-semibold uppercase tracking-wider text-[#FFC928]">
                Target Classes: Class 9th to Class 12th
              </span>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="lg:col-span-2">
            <h4 className="text-sm font-extrabold uppercase tracking-widest text-[#FFC928] mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2.5 text-sm">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="hover:text-[#FFC928] hover:translate-x-1 inline-block transition-all text-slate-300"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Programs */}
          <div className="lg:col-span-2">
            <h4 className="text-sm font-extrabold uppercase tracking-widest text-[#FFC928] mb-4">
              Academic Courses
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-slate-400">
              {coursesList.map((course, idx) => (
                <li key={idx} className="flex items-center gap-1.5">
                  <span className="w-1 h-1 rounded-full bg-[#D71920]"></span>
                  <span>{course}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Contact Information */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-sm font-extrabold uppercase tracking-widest text-[#FFC928] mb-4">
              Contact Us
            </h4>

            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#FFC928] flex-shrink-0 mt-1" />
                <span className="text-xs sm:text-sm text-slate-300">
                  Neelkanth Complex, Near Sainik Bhojnalaya, Sadar Cantt, Lucknow.
                </span>
              </div>

              <div className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-[#FFC928] flex-shrink-0 mt-1" />
                <div className="space-y-1">
                  <a
                    href="tel:6390247880"
                    className="block text-sm font-bold text-white hover:text-[#FFC928] transition-colors"
                  >
                    +91 6390247880
                  </a>
                  <a
                    href="tel:7390092459"
                    className="block text-sm font-bold text-white hover:text-[#FFC928] transition-colors"
                  >
                    +91 7390092459
                  </a>
                </div>
              </div>
            </div>

            <div className="pt-2">
              <a
                href="#admissions"
                className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl font-bold text-xs text-[#071D43] bg-[#FFC928] hover:bg-[#FFD858] transition-colors shadow-sm"
              >
                <span>Enquire For Admission</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Credits & Copyright */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>© 2026 Evolution Career Institute. All Rights Reserved.</p>

          {/* MANDATORY EXACT DEVELOPMENT CREDIT */}
          <div className="text-slate-400 text-xs tracking-wide">
            Designed & Developed by{" "}
            <a
              href="https://aaryavtech.online/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#FFC928] hover:text-white font-semibold transition-colors underline underline-offset-4 decoration-[#FFC928]/40 hover:decoration-white"
            >
              Aaryav Tech
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

