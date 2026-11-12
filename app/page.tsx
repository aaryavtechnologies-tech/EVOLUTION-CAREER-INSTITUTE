"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Courses from "@/components/Courses";
import Toppers from "@/components/Toppers";
import Memories from "@/components/Memories";
import WhyChooseUs from "@/components/WhyChooseUs";
import CrashCourse from "@/components/CrashCourse";
import DiwaliOffer from "@/components/DiwaliOffer";
import AdmissionEnquiry from "@/components/AdmissionEnquiry";
import Reviews from "@/components/Reviews";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import FloatingContact from "@/components/FloatingContact";

export default function Home() {
  const [selectedCourse, setSelectedCourse] = useState("NEET");
  const [selectedClass, setSelectedClass] = useState("11th");
  const [isOfferClaimed, setIsOfferClaimed] = useState(false);

  const handleSelectCourse = (courseName: string, className: string) => {
    setSelectedCourse(courseName);
    setSelectedClass(className);
    setIsOfferClaimed(false);
  };

  const handleClaimDiwaliOffer = () => {
    setIsOfferClaimed(true);
  };

  const handleEnquireCrashCourse = () => {
    setSelectedCourse("Boards");
    setSelectedClass("12th");
    setIsOfferClaimed(false);
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-800 antialiased selection:bg-[#FFC928] selection:text-[#071D43]">
      {/* SECTION 1: Sticky Navigation Bar */}
      <Navbar />

      <main className="flex-1">
        {/* SECTION 2: Hero Section */}
        <Hero />

        {/* SECTION 3: About the Institute */}
        <About />

        {/* SECTION 4: Our Courses & Programs */}
        <Courses onSelectCourse={handleSelectCourse} />

        {/* Class 10th (2024-25 Batch) Toppers Showcase */}
        <Toppers />

        {/* Old Memories & Campus Moments */}
        <Memories />

        {/* SECTION 5: Why Choose Us? */}
        <WhyChooseUs />

        {/* SECTION 6: Crash Course Promotion */}
        <CrashCourse onEnquireCrashCourse={handleEnquireCrashCourse} />

        {/* SECTION 7: Diwali Special Offer */}
        <DiwaliOffer onClaimOffer={handleClaimDiwaliOffer} />

        {/* SECTION 8: Admission Enquiry */}
        <AdmissionEnquiry
          initialCourse={selectedCourse}
          initialClass={selectedClass}
          isOfferClaimed={isOfferClaimed}
        />

        {/* Student & Parent Reviews Section */}
        <Reviews />

        {/* SECTION 9: Contact Us */}
        <Contact />
      </main>

      {/* SECTION 10: Footer with Mandatory Aaryav Tech Credit */}
      <Footer />

      {/* Floating Call & WhatsApp Buttons */}
      <FloatingContact />
    </div>
  );
}

