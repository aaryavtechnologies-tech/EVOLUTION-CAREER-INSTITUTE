"use client";

import React, { useState, useRef, useEffect } from "react";
import {
  Send,
  CheckCircle2,
  AlertCircle,
  Phone,
  MessageSquare,
  GraduationCap,
  Sparkles,
  User,
  ShieldCheck,
} from "lucide-react";

interface AdmissionEnquiryProps {
  initialCourse?: string;
  initialClass?: string;
  isOfferClaimed?: boolean;
}

export default function AdmissionEnquiry({
  initialCourse = "NEET",
  initialClass = "11th",
  isOfferClaimed = false,
}: AdmissionEnquiryProps) {
  const [formData, setFormData] = useState({
    studentName: "",
    parentName: "",
    mobileNumber: "",
    selectedClass: initialClass,
    selectedCourse: initialCourse,
    message: isOfferClaimed
      ? "Interested in claiming the 50% Diwali Special Early Bird Offer."
      : "",
  });

  const [touched, setTouched] = useState<{ [key: string]: boolean }>({});
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [submitted, setSubmitted] = useState(false);
  const [submissionId, setSubmissionId] = useState("");
  const [preferredPhone, setPreferredPhone] = useState("6390247880"); // 6390247880 or 7390092459

  const formRef = useRef<HTMLFormElement>(null);

  // Synchronize when initial props change from Course or Offer CTAs
  useEffect(() => {
    if (initialCourse) {
      setFormData((prev) => ({ ...prev, selectedCourse: initialCourse }));
    }
    if (initialClass) {
      setFormData((prev) => ({ ...prev, selectedClass: initialClass }));
    }
  }, [initialCourse, initialClass]);

  useEffect(() => {
    if (isOfferClaimed) {
      setFormData((prev) => ({
        ...prev,
        message:
          "Interested in claiming the 50% Diwali Special Early Bird Offer for " +
          prev.selectedCourse +
          ".",
      }));
    }
  }, [isOfferClaimed]);

  const validateField = (name: string, value: string) => {
    let error = "";
    if (name === "studentName") {
      if (!value.trim()) error = "Student full name is required.";
      else if (value.trim().length < 2) error = "Name must be at least 2 characters.";
    }
    if (name === "parentName") {
      if (!value.trim()) error = "Parent/Guardian name is required.";
      else if (value.trim().length < 2) error = "Name must be at least 2 characters.";
    }
    if (name === "mobileNumber") {
      const cleanNum = value.replace(/\D/g, "");
      if (!cleanNum) error = "Mobile number is required.";
      else if (cleanNum.length !== 10) error = "Please enter a valid 10-digit mobile number.";
    }
    return error;
  };

  const handleBlur = (field: string) => {
    setTouched((prev) => ({ ...prev, [field]: true }));
    const error = validateField(field, formData[field as keyof typeof formData]);
    setErrors((prev) => ({ ...prev, [field]: error }));
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    // Reset error on input once user starts editing
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const validateForm = () => {
    const newErrors: { [key: string]: string } = {};
    const fieldsToValidate = ["studentName", "parentName", "mobileNumber"];

    fieldsToValidate.forEach((field) => {
      const error = validateField(field, formData[field as keyof typeof formData]);
      if (error) newErrors[field] = error;
    });

    setErrors(newErrors);
    setTouched({
      studentName: true,
      parentName: true,
      mobileNumber: true,
      selectedClass: true,
      selectedCourse: true,
    });

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      // Focus the first invalid field (modern web guidance best practice)
      const firstInvalidField = ["studentName", "parentName", "mobileNumber"].find(
        (f) => errors[f] || !formData[f as keyof typeof formData].trim()
      );
      if (firstInvalidField) {
        const inputElem = document.getElementById(firstInvalidField);
        inputElem?.focus();
      }
      return;
    }

    // Generate unique confirmation ID
    const refCode = "ECI-" + Math.floor(100000 + Math.random() * 900000);
    setSubmissionId(refCode);
    setSubmitted(true);
  };

  const handleSendWhatsApp = () => {
    const text = `*New Admission Enquiry - Evolution Career Institute*%0A%0A*Student Name:* ${encodeURIComponent(
      formData.studentName || "Not provided"
    )}%0A*Parent/Guardian:* ${encodeURIComponent(
      formData.parentName || "Not provided"
    )}%0A*Mobile:* ${encodeURIComponent(
      formData.mobileNumber || "Not provided"
    )}%0A*Class:* ${encodeURIComponent(
      formData.selectedClass
    )}%0A*Course:* ${encodeURIComponent(
      formData.selectedCourse
    )}%0A*Note:* ${encodeURIComponent(
      formData.message || "Please provide syllabus & fee details."
    )}`;

    const whatsappUrl = `https://wa.me/91${preferredPhone}?text=${text}`;
    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
  };

  const handleReset = () => {
    setFormData({
      studentName: "",
      parentName: "",
      mobileNumber: "",
      selectedClass: "11th",
      selectedCourse: "NEET",
      message: "",
    });
    setTouched({});
    setErrors({});
    setSubmitted(false);
  };

  return (
    <section id="admissions" className="py-20 lg:py-28 bg-slate-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Context & Trust Points */}
          <div className="lg:col-span-5">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-md bg-[#071D43]/10 text-[#071D43] text-xs font-bold uppercase tracking-wider mb-4">
              <span>Admissions Open 2026-27</span>
            </div>

            <h2
              className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#071D43] tracking-tight leading-tight mb-6"
              style={{ fontFamily: "'Outfit', sans-serif" }}
            >
              Admissions Open – <br />
              <span className="text-[#D71920]">Secure Your Seat Today!</span>
            </h2>

            <p className="text-base sm:text-lg text-slate-600 leading-relaxed mb-8">
              Take the first step towards academic excellence. Contact our team for course details
              and admission assistance.
            </p>

            {/* Benefits List */}
            <div className="space-y-4 mb-8">
              {[
                {
                  title: "Direct Mentorship by IITians",
                  desc: "Qualified mentors guiding your preparation journey with proven study strategies.",
                },
                {
                  title: "Structured Curriculum & Tests",
                  desc: "Comprehensive modules, chapter notes, and regular evaluations with detailed reports.",
                },
                {
                  title: "Festive Early Bird Advantage",
                  desc: "Avail 50% Diwali discount and priority seating for upcoming batches.",
                },
                {
                  title: "Fast-Track Crash Course Available",
                  desc: "Intensive 2026 examination crash course starting 20th November 2026.",
                },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3 p-3.5 rounded-xl bg-white border border-slate-200/80 shadow-sm">
                  <div className="p-1.5 rounded-lg bg-[#FFC928]/30 text-[#071D43] flex-shrink-0 mt-0.5">
                    <CheckCircle2 className="w-4 h-4 text-[#071D43]" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-[#071D43]">{item.title}</h4>
                    <p className="text-xs text-slate-500 mt-0.5">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Quick Helpline Card */}
            <div className="p-5 rounded-2xl bg-[#071D43] text-white flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <p className="text-xs text-[#FFC928] font-bold uppercase tracking-wider">
                  Direct Admission Helpline
                </p>
                <div className="flex items-center gap-3 mt-1">
                  <a
                    href="tel:6390247880"
                    className="text-base sm:text-lg font-black text-white hover:text-[#FFC928] transition-colors"
                  >
                    6390247880
                  </a>
                  <span className="text-slate-400">/</span>
                  <a
                    href="tel:7390092459"
                    className="text-base sm:text-lg font-black text-white hover:text-[#FFC928] transition-colors"
                  >
                    7390092459
                  </a>
                </div>
              </div>
              <a
                href="tel:6390247880"
                className="w-full sm:w-auto px-4 py-2.5 rounded-xl bg-[#FFC928] text-[#071D43] text-xs font-extrabold text-center hover:bg-[#FFD858] transition-colors flex items-center justify-center gap-1.5"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>Call Now</span>
              </a>
            </div>
          </div>

          {/* Right Column: Admission Enquiry Form */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-3xl p-6 sm:p-10 shadow-xl border border-slate-200 relative overflow-hidden">
              {/* Form Card Accent Strip */}
              <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-[#FFC928] via-[#D71920] to-[#123C78]"></div>

              {submitted ? (
                /* Success State */
                <div className="py-8 text-center space-y-6 animate-in fade-in zoom-in-95 duration-300">
                  <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto shadow-inner">
                    <ShieldCheck className="w-10 h-10" />
                  </div>

                  <div>
                    <span className="inline-block px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 text-xs font-bold uppercase tracking-wider mb-2">
                      Enquiry Submitted Successfully
                    </span>
                    <h3 className="text-2xl sm:text-3xl font-black text-[#071D43]">
                      Thank You, {formData.studentName}!
                    </h3>
                    <p className="text-sm text-slate-600 max-w-md mx-auto mt-2">
                      Your admission enquiry for{" "}
                      <strong className="text-[#071D43]">
                        Class {formData.selectedClass} ({formData.selectedCourse})
                      </strong>{" "}
                      has been received. Reference ID:{" "}
                      <span className="font-mono font-bold text-[#D71920]">{submissionId}</span>.
                    </p>
                  </div>

                  <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 text-left max-w-md mx-auto text-xs space-y-1.5 text-slate-700">
                    <div className="flex justify-between">
                      <span className="text-slate-500">Student Name:</span>
                      <span className="font-semibold">{formData.studentName}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-500">Parent/Guardian:</span>
                      <span className="font-semibold">{formData.parentName}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-500">Mobile Number:</span>
                      <span className="font-semibold">{formData.mobileNumber}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-500">Selected Course:</span>
                      <span className="font-semibold">{formData.selectedCourse}</span>
                    </div>
                  </div>

                  {/* Immediate WhatsApp Connect Button */}
                  <div className="space-y-3 max-w-md mx-auto">
                    <button
                      type="button"
                      onClick={handleSendWhatsApp}
                      className="w-full py-3.5 px-6 rounded-xl font-bold text-white bg-[#25D366] hover:bg-[#20BD5A] transition-colors shadow-md flex items-center justify-center gap-2"
                    >
                      <MessageSquare className="w-5 h-5" />
                      <span>Connect with Counsellor on WhatsApp</span>
                    </button>

                    <button
                      type="button"
                      onClick={handleReset}
                      className="w-full py-2.5 px-4 rounded-xl text-xs font-semibold text-slate-600 hover:text-slate-900 transition-colors"
                    >
                      Submit Another Admission Enquiry
                    </button>
                  </div>
                </div>
              ) : (
                /* Active Form */
                <form
                  ref={formRef}
                  onSubmit={handleSubmit}
                  noValidate
                  className="space-y-5"
                >
                  <div className="border-b border-slate-100 pb-4 mb-2">
                    <h3 className="text-xl sm:text-2xl font-bold text-[#071D43]">
                      Admission Enquiry Form
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-500 mt-1">
                      Fill out your details below to receive program brochures, fee structure, and batch schedule.
                    </p>
                  </div>

                  {/* Student Name */}
                  <div>
                    <label
                      htmlFor="studentName"
                      className="block text-xs sm:text-sm font-bold text-slate-700 mb-1.5"
                    >
                      Student Name <span className="text-[#D71920]">*</span>
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        id="studentName"
                        name="studentName"
                        value={formData.studentName}
                        onChange={handleChange}
                        onBlur={() => handleBlur("studentName")}
                        placeholder="e.g. Aarav Sharma"
                        autoComplete="name"
                        enterKeyHint="next"
                        aria-invalid={touched.studentName && !!errors.studentName ? "true" : "false"}
                        aria-describedby={
                          touched.studentName && errors.studentName ? "studentName-error" : undefined
                        }
                        required
                        className={`w-full px-4 py-3 rounded-xl border text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 transition-all ${
                          touched.studentName && errors.studentName
                            ? "border-red-500 ring-red-200"
                            : "border-slate-300 focus:border-[#123C78] focus:ring-[#123C78]/20"
                        }`}
                      />
                    </div>
                    {touched.studentName && errors.studentName && (
                      <p
                        id="studentName-error"
                        className="mt-1 text-xs text-red-600 flex items-center gap-1"
                        role="alert"
                      >
                        <AlertCircle className="w-3.5 h-3.5 flex-shrink-0" />
                        <span>{errors.studentName}</span>
                      </p>
                    )}
                  </div>

                  {/* Parent / Guardian Name */}
                  <div>
                    <label
                      htmlFor="parentName"
                      className="block text-xs sm:text-sm font-bold text-slate-700 mb-1.5"
                    >
                      Parent / Guardian Name <span className="text-[#D71920]">*</span>
                    </label>
                    <input
                      type="text"
                      id="parentName"
                      name="parentName"
                      value={formData.parentName}
                      onChange={handleChange}
                      onBlur={() => handleBlur("parentName")}
                      placeholder="e.g. Rajesh Sharma"
                      autoComplete="name"
                      enterKeyHint="next"
                      aria-invalid={touched.parentName && !!errors.parentName ? "true" : "false"}
                      aria-describedby={
                        touched.parentName && errors.parentName ? "parentName-error" : undefined
                      }
                      required
                      className={`w-full px-4 py-3 rounded-xl border text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 transition-all ${
                        touched.parentName && errors.parentName
                          ? "border-red-500 ring-red-200"
                          : "border-slate-300 focus:border-[#123C78] focus:ring-[#123C78]/20"
                      }`}
                    />
                    {touched.parentName && errors.parentName && (
                      <p
                        id="parentName-error"
                        className="mt-1 text-xs text-red-600 flex items-center gap-1"
                        role="alert"
                      >
                        <AlertCircle className="w-3.5 h-3.5 flex-shrink-0" />
                        <span>{errors.parentName}</span>
                      </p>
                    )}
                  </div>

                  {/* Mobile Number & WhatsApp Selector */}
                  <div>
                    <label
                      htmlFor="mobileNumber"
                      className="block text-xs sm:text-sm font-bold text-slate-700 mb-1.5"
                    >
                      Mobile Number <span className="text-[#D71920]">*</span>
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400 text-sm font-semibold">
                        +91
                      </div>
                      <input
                        type="tel"
                        id="mobileNumber"
                        name="mobileNumber"
                        value={formData.mobileNumber}
                        onChange={handleChange}
                        onBlur={() => handleBlur("mobileNumber")}
                        placeholder="10-digit number (e.g. 9876543210)"
                        maxLength={10}
                        autoComplete="tel"
                        inputMode="numeric"
                        enterKeyHint="next"
                        aria-invalid={touched.mobileNumber && !!errors.mobileNumber ? "true" : "false"}
                        aria-describedby={
                          touched.mobileNumber && errors.mobileNumber ? "mobileNumber-error" : undefined
                        }
                        required
                        className={`w-full pl-12 pr-4 py-3 rounded-xl border text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 transition-all ${
                          touched.mobileNumber && errors.mobileNumber
                            ? "border-red-500 ring-red-200"
                            : "border-slate-300 focus:border-[#123C78] focus:ring-[#123C78]/20"
                        }`}
                      />
                    </div>
                    {touched.mobileNumber && errors.mobileNumber && (
                      <p
                        id="mobileNumber-error"
                        className="mt-1 text-xs text-red-600 flex items-center gap-1"
                        role="alert"
                      >
                        <AlertCircle className="w-3.5 h-3.5 flex-shrink-0" />
                        <span>{errors.mobileNumber}</span>
                      </p>
                    )}
                  </div>

                  {/* Class & Course Selection Row */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Class */}
                    <div>
                      <label
                        htmlFor="selectedClass"
                        className="block text-xs sm:text-sm font-bold text-slate-700 mb-1.5"
                      >
                        Select Class <span className="text-[#D71920]">*</span>
                      </label>
                      <select
                        id="selectedClass"
                        name="selectedClass"
                        value={formData.selectedClass}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-xl border border-slate-300 text-sm text-slate-800 bg-white focus:outline-none focus:border-[#123C78] focus:ring-2 focus:ring-[#123C78]/20 transition-all cursor-pointer"
                      >
                        <option value="9th">Class 9th</option>
                        <option value="10th">Class 10th</option>
                        <option value="11th">Class 11th</option>
                        <option value="12th">Class 12th</option>
                      </select>
                    </div>

                    {/* Course */}
                    <div>
                      <label
                        htmlFor="selectedCourse"
                        className="block text-xs sm:text-sm font-bold text-slate-700 mb-1.5"
                      >
                        Select Course <span className="text-[#D71920]">*</span>
                      </label>
                      <select
                        id="selectedCourse"
                        name="selectedCourse"
                        value={formData.selectedCourse}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-xl border border-slate-300 text-sm text-slate-800 bg-white focus:outline-none focus:border-[#123C78] focus:ring-2 focus:ring-[#123C78]/20 transition-all cursor-pointer"
                      >
                        <option value="NEET">NEET</option>
                        <option value="IIT-JEE">IIT-JEE</option>
                        <option value="CUET">CUET</option>
                        <option value="NDA">NDA</option>
                        <option value="Boards">School Board Examinations</option>
                        <option value="Sainik School">Sainik School</option>
                        <option value="RMS">RMS (Rashtriya Military School)</option>
                        <option value="RIMS">RIMS / RIMC</option>
                      </select>
                    </div>
                  </div>

                  {/* Message (Optional) */}
                  <div>
                    <label
                      htmlFor="message"
                      className="block text-xs sm:text-sm font-bold text-slate-700 mb-1.5"
                    >
                      Message / Special Queries (Optional)
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={3}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Ask about batch timings, crash course schedule, or festive discount..."
                      className="w-full px-4 py-3 rounded-xl border border-slate-300 text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:border-[#123C78] focus:ring-2 focus:ring-[#123C78]/20 transition-all resize-y min-h-[85px]"
                    ></textarea>
                  </div>

                  {/* Preferred Institute Contact Choice */}
                  <div className="pt-2">
                    <label className="block text-xs font-semibold text-slate-500 mb-1.5">
                      Select Institute Counsellor Number:
                    </label>
                    <div className="grid grid-cols-2 gap-3">
                      <button
                        type="button"
                        onClick={() => setPreferredPhone("6390247880")}
                        className={`py-2 px-3 rounded-lg text-xs font-bold border transition-all flex items-center justify-center gap-1.5 ${
                          preferredPhone === "6390247880"
                            ? "bg-[#071D43] text-white border-[#071D43]"
                            : "bg-slate-50 text-slate-600 border-slate-200 hover:bg-slate-100"
                        }`}
                      >
                        <Phone className="w-3 h-3 text-[#FFC928]" />
                        <span>6390247880</span>
                      </button>
                      <button
                        type="button"
                        onClick={() => setPreferredPhone("7390092459")}
                        className={`py-2 px-3 rounded-lg text-xs font-bold border transition-all flex items-center justify-center gap-1.5 ${
                          preferredPhone === "7390092459"
                            ? "bg-[#071D43] text-white border-[#071D43]"
                            : "bg-slate-50 text-slate-600 border-slate-200 hover:bg-slate-100"
                        }`}
                      >
                        <Phone className="w-3 h-3 text-[#FFC928]" />
                        <span>7390092459</span>
                      </button>
                    </div>
                  </div>

                  {/* Submission Action Buttons */}
                  <div className="pt-3 space-y-3">
                    <button
                      type="submit"
                      className="w-full py-4 px-6 rounded-xl font-black text-sm sm:text-base text-[#071D43] bg-gradient-to-r from-[#FFC928] via-[#FFD858] to-[#FFC928] hover:shadow-[0_6px_20px_rgba(255,201,40,0.5)] border border-[#E0AD15] transition-all hover:scale-[1.01] active:scale-[0.99] flex items-center justify-center gap-2 cursor-pointer"
                    >
                      <span>Submit Admission Enquiry</span>
                      <Send className="w-4 h-4 text-[#071D43]" />
                    </button>

                    <div className="relative flex items-center justify-center my-3">
                      <div className="border-t border-slate-200 w-full"></div>
                      <span className="bg-white px-3 text-[11px] uppercase tracking-wider text-slate-400 font-bold">
                        OR ENQUIRE INSTANTLY
                      </span>
                    </div>

                    <button
                      type="button"
                      onClick={handleSendWhatsApp}
                      className="w-full py-3.5 px-6 rounded-xl font-bold text-sm text-white bg-[#25D366] hover:bg-[#1EBE5D] transition-all flex items-center justify-center gap-2 shadow-sm cursor-pointer"
                    >
                      <MessageSquare className="w-4 h-4" />
                      <span>Chat on WhatsApp Directly (+91 {preferredPhone})</span>
                    </button>
                  </div>

                  <p className="text-[11px] text-center text-slate-400 pt-2">
                    🔒 Your information is confidential and used exclusively for academic counselling.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

