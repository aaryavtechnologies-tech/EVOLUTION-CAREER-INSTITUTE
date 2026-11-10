"use client";

import React, { useState, useEffect } from "react";
import Logo from "./Logo";
import { Phone, MapPin, Sparkles, Menu, X, ArrowRight } from "lucide-react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About Us", href: "#about" },
    { name: "Courses", href: "#courses" },
    { name: "Why Choose Us", href: "#why-choose-us" },
    { name: "Crash Course", href: "#crash-course" },
    {
      name: "Special Offer",
      href: "#special-offer",
      badge: "50% OFF",
    },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <>
      {/* Top Notification / Quick Contact Bar */}
      <div className="bg-[#071D43] text-white text-xs py-2 px-4 border-b border-white/10 hidden md:block">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5 text-slate-300">
              <MapPin className="w-3.5 h-3.5 text-[#FFC928]" />
              Neelkanth Complex, Sadar Cantt, Lucknow
            </span>
            <div className="flex items-center gap-4">
              <a
                href="tel:6390247880"
                className="flex items-center gap-1.5 text-slate-200 hover:text-[#FFC928] transition-colors font-medium"
              >
                <Phone className="w-3.5 h-3.5 text-[#FFC928]" />
                +91 6390247880
              </a>
              <span className="text-white/30">|</span>
              <a
                href="tel:7390092459"
                className="flex items-center gap-1.5 text-slate-200 hover:text-[#FFC928] transition-colors font-medium"
              >
                <Phone className="w-3.5 h-3.5 text-[#FFC928]" />
                +91 7390092459
              </a>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <span className="inline-flex items-center gap-1.5 bg-[#D71920]/90 text-white font-semibold text-[11px] px-2.5 py-0.5 rounded-full uppercase tracking-wider animate-pulse">
              <Sparkles className="w-3 h-3 text-[#FFC928]" />
              Diwali Offer: 50% Off Limited Seats
            </span>
            <a
              href="#admissions"
              className="text-[#FFC928] hover:text-white transition-colors font-semibold text-[11px] underline underline-offset-2"
            >
              Apply Online &rarr;
            </a>
          </div>
        </div>
      </div>

      {/* Main Sticky Navbar */}
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-white/95 backdrop-blur-md shadow-lg py-3 border-b border-slate-200"
            : "bg-white py-4 shadow-sm"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <a href="#home" className="flex items-center group">
              <Logo variant="dark" size="md" />
            </a>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="relative px-3 py-2 text-sm font-semibold text-[#071D43] hover:text-[#D71920] rounded-md transition-colors flex items-center gap-1.5"
                >
                  {link.name}
                  {link.badge && (
                    <span className="bg-[#D71920] text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full uppercase tracking-tight shadow-sm animate-bounce">
                      {link.badge}
                    </span>
                  )}
                </a>
              ))}
            </nav>

            {/* CTA Button */}
            <div className="hidden sm:flex items-center gap-3">
              <a
                href="#admissions"
                className="relative inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg font-bold text-sm text-[#071D43] bg-gradient-to-r from-[#FFC928] via-[#FFD858] to-[#FFC928] shadow-[0_4px_14px_rgba(255,201,40,0.45)] hover:shadow-[0_6px_20px_rgba(255,201,40,0.6)] hover:scale-[1.02] active:scale-[0.98] transition-all border border-[#E0AD15]"
              >
                <span>Admissions Open – Enquire Now</span>
                <ArrowRight className="w-4 h-4 text-[#071D43]" />
              </a>
            </div>

            {/* Mobile Hamburger Toggle */}
            <div className="flex lg:hidden items-center gap-2">
              <a
                href="#admissions"
                className="sm:hidden px-3 py-1.5 rounded-md text-xs font-bold text-[#071D43] bg-[#FFC928] border border-[#E0AD15]"
              >
                Enquire
              </a>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-expanded={mobileMenuOpen}
                aria-label="Toggle navigation menu"
                className="p-2 rounded-lg text-[#071D43] hover:bg-slate-100 transition-colors focus:outline-none focus:ring-2 focus:ring-[#071D43]"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-b border-slate-200 px-4 pt-3 pb-6 shadow-xl animate-in slide-in-from-top-2 duration-200">
            <div className="flex flex-col space-y-2">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-between px-3 py-2.5 rounded-lg text-base font-semibold text-[#071D43] hover:bg-slate-50 hover:text-[#D71920] transition-colors"
                >
                  <span>{link.name}</span>
                  {link.badge ? (
                    <span className="bg-[#D71920] text-white text-xs font-bold px-2 py-0.5 rounded-full">
                      {link.badge}
                    </span>
                  ) : (
                    <ArrowRight className="w-4 h-4 text-slate-400" />
                  )}
                </a>
              ))}

              <div className="pt-4 border-t border-slate-100 space-y-3">
                <a
                  href="#admissions"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full flex items-center justify-center gap-2 px-5 py-3 rounded-lg font-bold text-center text-[#071D43] bg-gradient-to-r from-[#FFC928] to-[#FFD858] shadow-md border border-[#E0AD15]"
                >
                  <span>Admissions Open – Enquire Now</span>
                  <ArrowRight className="w-4 h-4" />
                </a>

                {/* Direct Calling buttons for mobile */}
                <div className="grid grid-cols-2 gap-2 pt-2">
                  <a
                    href="tel:6390247880"
                    className="flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-lg bg-[#071D43] text-white text-xs font-semibold"
                  >
                    <Phone className="w-3.5 h-3.5 text-[#FFC928]" />
                    6390247880
                  </a>
                  <a
                    href="tel:7390092459"
                    className="flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-lg bg-[#123C78] text-white text-xs font-semibold"
                  >
                    <Phone className="w-3.5 h-3.5 text-[#FFC928]" />
                    7390092459
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
}

