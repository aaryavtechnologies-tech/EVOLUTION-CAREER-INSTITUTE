"use client";

import React, { useState, useEffect, useMemo } from "react";
import {
  ShieldCheck,
  Lock,
  Unlock,
  X,
  Search,
  Download,
  Phone,
  MessageSquare,
  Trash2,
  Filter,
  CheckCircle2,
  Clock,
  UserCheck,
  AlertCircle,
  Copy,
  Check,
  ExternalLink,
  Settings,
  RefreshCw,
} from "lucide-react";
import {
  getEnquiries,
  updateEnquiryStatus,
  deleteEnquiry,
  exportEnquiriesToCSV,
  EnquiryRecord,
} from "@/lib/db";

interface AdminDashboardProps {
  isOpen: boolean;
  onClose: () => void;
}

const DEFAULT_PIN = "2026";

export default function AdminDashboard({ isOpen, onClose }: AdminDashboardProps) {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [pinInput, setPinInput] = useState<string>("");
  const [pinError, setPinError] = useState<string>("");
  const [enquiries, setEnquiries] = useState<EnquiryRecord[]>([]);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [filterStatus, setFilterStatus] = useState<string>("all");
  const [filterCourse, setFilterCourse] = useState<string>("all");
  const [copiedRef, setCopiedRef] = useState<string | null>(null);
  const [showWebhookModal, setShowWebhookModal] = useState<boolean>(false);
  const [webhookUrl, setWebhookUrl] = useState<string>("");
  const [webhookSaved, setWebhookSaved] = useState<boolean>(false);

  // Check existing session on mount
  useEffect(() => {
    if (typeof window !== "undefined") {
      const savedAuth = sessionStorage.getItem("eci_admin_auth");
      if (savedAuth === "true") {
        setIsAuthenticated(true);
      }
      const savedWebhook = localStorage.getItem("eci_webhook_url") || "";
      setWebhookUrl(savedWebhook);
    }
  }, []);

  // Load and subscribe to real-time enquiry updates
  const reloadData = () => {
    setEnquiries(getEnquiries());
  };

  useEffect(() => {
    if (!isOpen) return;

    reloadData();

    const handleNewEnquiry = () => reloadData();
    const handleUpdatedEnquiry = () => reloadData();

    window.addEventListener("eci_enquiry_added", handleNewEnquiry);
    window.addEventListener("eci_enquiries_updated", handleUpdatedEnquiry);

    return () => {
      window.removeEventListener("eci_enquiry_added", handleNewEnquiry);
      window.removeEventListener("eci_enquiries_updated", handleUpdatedEnquiry);
    };
  }, [isOpen]);

  const handlePinSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (pinInput.trim() === DEFAULT_PIN) {
      setIsAuthenticated(true);
      sessionStorage.setItem("eci_admin_auth", "true");
      setPinError("");
      reloadData();
    } else {
      setPinError("Invalid Admin PIN. Please try again.");
    }
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    sessionStorage.removeItem("eci_admin_auth");
    setPinInput("");
  };

  const handleStatusChange = (id: string, newStatus: EnquiryRecord["status"]) => {
    updateEnquiryStatus(id, newStatus);
    reloadData();
  };

  const handleDelete = (id: string, name: string) => {
    if (confirm(`Are you sure you want to delete enquiry record for "${name}"?`)) {
      deleteEnquiry(id);
      reloadData();
    }
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedRef(text);
    setTimeout(() => setCopiedRef(null), 2000);
  };

  const handleSaveWebhook = (e: React.FormEvent) => {
    e.preventDefault();
    if (typeof window !== "undefined") {
      localStorage.setItem("eci_webhook_url", webhookUrl.trim());
      setWebhookSaved(true);
      setTimeout(() => setWebhookSaved(false), 2500);
    }
  };

  // Filtered list
  const filteredList = useMemo(() => {
    return enquiries.filter((item) => {
      // Search
      const matchesSearch =
        searchQuery === "" ||
        item.studentName.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.parentName.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.mobileNumber.includes(searchQuery) ||
        item.refCode.toLowerCase().includes(searchQuery.toLowerCase());

      // Status
      const matchesStatus =
        filterStatus === "all" || item.status === filterStatus;

      // Course
      const matchesCourse =
        filterCourse === "all" ||
        item.selectedCourse.toLowerCase() === filterCourse.toLowerCase();

      return matchesSearch && matchesStatus && matchesCourse;
    });
  }, [enquiries, searchQuery, filterStatus, filterCourse]);

  // Summary counts
  const totalCount = enquiries.length;
  const newCount = enquiries.filter((e) => e.status === "new").length;
  const contactedCount = enquiries.filter((e) => e.status === "contacted").length;
  const enrolledCount = enquiries.filter((e) => e.status === "enrolled").length;

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/80 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 animate-in fade-in duration-200">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-5xl border border-slate-200 overflow-hidden flex flex-col max-h-[92vh]">
        {/* Top Header */}
        <div className="bg-[#071D43] text-white px-5 py-4 flex items-center justify-between border-b border-white/10">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#FFC928]/15 border border-[#FFC928]/30 flex items-center justify-center text-[#FFC928]">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="font-extrabold text-base sm:text-lg text-white">
                  Admission Enquiries Database
                </h3>
                <span className="bg-[#FFC928] text-[#071D43] text-[10px] font-black uppercase px-2 py-0.5 rounded-full">
                  Admin Portal
                </span>
              </div>
              <p className="text-xs text-slate-300">
                Evolution Career Institute, Lucknow • Secure Leads Manager
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            {isAuthenticated && (
              <button
                type="button"
                onClick={handleLogout}
                className="text-xs text-slate-300 hover:text-white px-3 py-1.5 rounded-lg border border-white/15 hover:bg-white/10 transition-colors"
                title="Lock Portal"
              >
                Lock Portal
              </button>
            )}
            <button
              type="button"
              onClick={onClose}
              className="p-1.5 rounded-lg text-slate-300 hover:text-white hover:bg-white/10 transition-colors"
              aria-label="Close"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Content Body */}
        {!isAuthenticated ? (
          /* PIN Authentication Screen */
          <div className="p-8 sm:p-12 flex flex-col items-center justify-center text-center max-w-md mx-auto my-auto">
            <div className="w-16 h-16 rounded-2xl bg-amber-50 text-[#071D43] border border-amber-200 flex items-center justify-center mb-4 shadow-inner">
              <Lock className="w-8 h-8 text-[#071D43]" />
            </div>

            <h4 className="text-xl font-bold text-[#071D43] mb-1">
              Admin Authentication Required
            </h4>
            <p className="text-xs sm:text-sm text-slate-500 mb-6">
              Enter the Institute Security PIN to view, call, and manage student admission leads.
            </p>

            <form onSubmit={handlePinSubmit} className="w-full space-y-4">
              <div>
                <input
                  type="password"
                  maxLength={6}
                  value={pinInput}
                  onChange={(e) => {
                    setPinInput(e.target.value);
                    if (pinError) setPinError("");
                  }}
                  placeholder="Enter Security PIN (e.g. 2026)"
                  autoFocus
                  className="w-full text-center tracking-[0.4em] font-mono text-xl py-3 px-4 rounded-xl border border-slate-300 focus:border-[#123C78] focus:ring-2 focus:ring-[#123C78]/20 outline-none transition-all"
                />
                {pinError && (
                  <p className="text-xs text-red-600 mt-2 flex items-center justify-center gap-1">
                    <AlertCircle className="w-3.5 h-3.5" />
                    <span>{pinError}</span>
                  </p>
                )}
              </div>

              <button
                type="submit"
                className="w-full py-3 px-4 rounded-xl font-bold text-sm text-[#071D43] bg-[#FFC928] hover:bg-[#FFD858] transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer"
              >
                <Unlock className="w-4 h-4" />
                <span>Unlock Enquiries Database</span>
              </button>

              <p className="text-[11px] text-slate-400">
                Default Institute PIN: <strong className="text-slate-600">2026</strong>
              </p>
            </form>
          </div>
        ) : (
          /* Authenticated Dashboard View */
          <div className="flex-1 flex flex-col min-h-0 overflow-hidden bg-slate-50">
            {/* Summary Metrics Bar */}
            <div className="bg-white border-b border-slate-200 px-5 py-3 grid grid-cols-2 sm:grid-cols-4 gap-3 flex-shrink-0">
              <div className="p-3 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-between">
                <div>
                  <span className="text-[11px] uppercase tracking-wider font-bold text-slate-400">
                    Total Leads
                  </span>
                  <p className="text-2xl font-black text-[#071D43]">{totalCount}</p>
                </div>
                <div className="w-9 h-9 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center">
                  <UserCheck className="w-5 h-5" />
                </div>
              </div>

              <div className="p-3 rounded-xl bg-amber-50/60 border border-amber-100 flex items-center justify-between">
                <div>
                  <span className="text-[11px] uppercase tracking-wider font-bold text-amber-700">
                    New Leads
                  </span>
                  <p className="text-2xl font-black text-amber-900">{newCount}</p>
                </div>
                <div className="w-9 h-9 rounded-lg bg-amber-100 text-amber-700 flex items-center justify-center">
                  <Clock className="w-5 h-5" />
                </div>
              </div>

              <div className="p-3 rounded-xl bg-blue-50/60 border border-blue-100 flex items-center justify-between">
                <div>
                  <span className="text-[11px] uppercase tracking-wider font-bold text-blue-700">
                    Contacted
                  </span>
                  <p className="text-2xl font-black text-blue-900">{contactedCount}</p>
                </div>
                <div className="w-9 h-9 rounded-lg bg-blue-100 text-blue-700 flex items-center justify-center">
                  <Phone className="w-5 h-5" />
                </div>
              </div>

              <div className="p-3 rounded-xl bg-emerald-50/60 border border-emerald-100 flex items-center justify-between">
                <div>
                  <span className="text-[11px] uppercase tracking-wider font-bold text-emerald-700">
                    Enrolled
                  </span>
                  <p className="text-2xl font-black text-emerald-900">{enrolledCount}</p>
                </div>
                <div className="w-9 h-9 rounded-lg bg-emerald-100 text-emerald-700 flex items-center justify-center">
                  <CheckCircle2 className="w-5 h-5" />
                </div>
              </div>
            </div>

            {/* Action Toolbar */}
            <div className="p-4 bg-white border-b border-slate-200 flex flex-wrap items-center justify-between gap-3 flex-shrink-0">
              <div className="flex flex-wrap items-center gap-2 flex-1 min-w-[260px]">
                {/* Search */}
                <div className="relative flex-1 min-w-[180px] max-w-xs">
                  <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search name, phone, ref ID..."
                    className="w-full pl-9 pr-3 py-2 text-xs rounded-lg border border-slate-300 focus:outline-none focus:border-[#123C78] focus:ring-1 focus:ring-[#123C78]"
                  />
                </div>

                {/* Status Filter */}
                <select
                  value={filterStatus}
                  onChange={(e) => setFilterStatus(e.target.value)}
                  className="py-2 px-3 text-xs rounded-lg border border-slate-300 bg-white text-slate-700 font-medium focus:outline-none focus:border-[#123C78]"
                >
                  <option value="all">All Statuses</option>
                  <option value="new">New</option>
                  <option value="contacted">Contacted</option>
                  <option value="enrolled">Enrolled</option>
                  <option value="closed">Closed</option>
                </select>

                {/* Course Filter */}
                <select
                  value={filterCourse}
                  onChange={(e) => setFilterCourse(e.target.value)}
                  className="py-2 px-3 text-xs rounded-lg border border-slate-300 bg-white text-slate-700 font-medium focus:outline-none focus:border-[#123C78]"
                >
                  <option value="all">All Courses</option>
                  <option value="NEET">NEET</option>
                  <option value="IIT-JEE">IIT-JEE</option>
                  <option value="CUET">CUET</option>
                  <option value="NDA">NDA</option>
                  <option value="Boards">Boards</option>
                  <option value="Foundation">Foundation</option>
                  <option value="Sainik School">Sainik School</option>
                </select>
              </div>

              {/* Export & Sync Buttons */}
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={exportEnquiriesToCSV}
                  className="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg text-xs font-bold text-[#071D43] bg-[#FFC928] hover:bg-[#FFD858] transition-colors shadow-sm cursor-pointer"
                  title="Download all leads as an Excel-compatible CSV file"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Export Excel / CSV</span>
                </button>

                <button
                  type="button"
                  onClick={() => setShowWebhookModal(true)}
                  className="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg text-xs font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 transition-colors border border-slate-200"
                  title="Cloud Sync / Google Sheets Webhook"
                >
                  <Settings className="w-3.5 h-3.5 text-slate-500" />
                  <span className="hidden sm:inline">Google Sheets Sync</span>
                </button>

                <button
                  type="button"
                  onClick={reloadData}
                  className="p-2 rounded-lg text-slate-600 hover:bg-slate-100 transition-colors"
                  title="Refresh leads"
                >
                  <RefreshCw className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Leads Table & Cards Container */}
            <div className="flex-1 overflow-y-auto p-4">
              {filteredList.length === 0 ? (
                <div className="bg-white rounded-xl border border-slate-200 p-12 text-center">
                  <div className="w-12 h-12 rounded-full bg-slate-100 text-slate-400 mx-auto flex items-center justify-center mb-3">
                    <Search className="w-6 h-6" />
                  </div>
                  <h5 className="font-bold text-slate-700 text-sm">No enquiries found</h5>
                  <p className="text-xs text-slate-400 mt-1 max-w-sm mx-auto">
                    {searchQuery || filterStatus !== "all" || filterCourse !== "all"
                      ? "Try adjusting your search query or filters."
                      : "New admission form submissions will appear here automatically in real time."}
                  </p>
                </div>
              ) : (
                <div className="space-y-3">
                  {filteredList.map((item) => {
                    const cleanMobile = item.mobileNumber.replace(/\D/g, "");
                    const dateFormatted = new Date(item.createdAt).toLocaleString("en-IN", {
                      day: "2-digit",
                      month: "short",
                      year: "numeric",
                      hour: "2-digit",
                      minute: "2-digit",
                      hour12: true,
                    });

                    const whatsappGreeting = encodeURIComponent(
                      `Hello ${item.studentName}, thank you for your enquiry at Evolution Career Institute, Lucknow (Ref: ${item.refCode}). We received your details for Class ${item.selectedClass} (${item.selectedCourse}). When is a convenient time to discuss syllabus & admission details?`
                    );

                    return (
                      <div
                        key={item.id}
                        className="bg-white rounded-xl border border-slate-200 p-4 hover:shadow-md transition-shadow"
                      >
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-100 pb-3">
                          {/* Student & Parent Info */}
                          <div className="flex items-start gap-3">
                            <div className="w-10 h-10 rounded-full bg-[#071D43] text-white flex items-center justify-center font-bold text-sm flex-shrink-0">
                              {item.studentName.slice(0, 1).toUpperCase()}
                            </div>
                            <div>
                              <div className="flex items-center gap-2 flex-wrap">
                                <h4 className="font-bold text-slate-900 text-sm sm:text-base">
                                  {item.studentName}
                                </h4>
                                <span className="text-[11px] font-mono font-semibold px-2 py-0.5 rounded bg-slate-100 text-slate-600 border border-slate-200 flex items-center gap-1">
                                  <span>{item.refCode}</span>
                                  <button
                                    type="button"
                                    onClick={() => copyToClipboard(item.refCode)}
                                    className="hover:text-black"
                                    title="Copy Reference ID"
                                  >
                                    {copiedRef === item.refCode ? (
                                      <Check className="w-3 h-3 text-emerald-600" />
                                    ) : (
                                      <Copy className="w-3 h-3" />
                                    )}
                                  </button>
                                </span>
                              </div>
                              <p className="text-xs text-slate-500 mt-0.5">
                                Parent/Guardian:{" "}
                                <strong className="text-slate-700">{item.parentName}</strong>
                              </p>
                            </div>
                          </div>

                          {/* Quick Actions (Call & WhatsApp) */}
                          <div className="flex items-center gap-2 flex-shrink-0">
                            <a
                              href={`tel:+91${cleanMobile}`}
                              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold text-white bg-[#071D43] hover:bg-[#123C78] transition-colors shadow-sm"
                              title={`Direct Call: ${cleanMobile}`}
                            >
                              <Phone className="w-3.5 h-3.5 text-[#FFC928]" />
                              <span>Call {cleanMobile}</span>
                            </a>

                            <a
                              href={`https://wa.me/91${cleanMobile}?text=${whatsappGreeting}`}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold text-white bg-[#25D366] hover:bg-[#1EBE5D] transition-colors shadow-sm"
                              title="Chat on WhatsApp"
                            >
                              <MessageSquare className="w-3.5 h-3.5" />
                              <span>WhatsApp</span>
                            </a>
                          </div>
                        </div>

                        {/* Details Grid */}
                        <div className="pt-3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2 text-xs text-slate-600">
                          <div>
                            <span className="text-slate-400 block text-[10px] uppercase font-bold">
                              Course & Class
                            </span>
                            <span className="font-semibold text-slate-800">
                              {item.selectedCourse} • Class {item.selectedClass}
                            </span>
                          </div>

                          <div>
                            <span className="text-slate-400 block text-[10px] uppercase font-bold">
                              Received At
                            </span>
                            <span className="text-slate-700">{dateFormatted}</span>
                          </div>

                          <div>
                            <span className="text-slate-400 block text-[10px] uppercase font-bold">
                              Lead Status
                            </span>
                            <select
                              value={item.status}
                              onChange={(e) =>
                                handleStatusChange(
                                  item.id,
                                  e.target.value as EnquiryRecord["status"]
                                )
                              }
                              className={`mt-0.5 text-xs font-bold px-2.5 py-1 rounded-md border outline-none cursor-pointer ${
                                item.status === "new"
                                  ? "bg-amber-50 text-amber-800 border-amber-300"
                                  : item.status === "contacted"
                                  ? "bg-blue-50 text-blue-800 border-blue-300"
                                  : item.status === "enrolled"
                                  ? "bg-emerald-50 text-emerald-800 border-emerald-300"
                                  : "bg-slate-100 text-slate-700 border-slate-300"
                              }`}
                            >
                              <option value="new">● New Lead</option>
                              <option value="contacted">● Contacted</option>
                              <option value="enrolled">● Enrolled / Admitted</option>
                              <option value="closed">● Closed</option>
                            </select>
                          </div>

                          <div className="flex items-end justify-between sm:justify-end gap-2">
                            <button
                              type="button"
                              onClick={() => handleDelete(item.id, item.studentName)}
                              className="text-slate-400 hover:text-red-600 p-1 rounded hover:bg-red-50 transition-colors"
                              title="Delete Record"
                            >
                              <Trash2 className="w-4 h-4" />
                            </button>
                          </div>
                        </div>

                        {item.message && (
                          <div className="mt-2 pt-2 border-t border-slate-100 text-xs text-slate-600 bg-slate-50 p-2 rounded-lg">
                            <span className="font-semibold text-slate-700">Student Note: </span>
                            <span>{item.message}</span>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              )}
            </div>

            {/* Bottom Status bar */}
            <div className="bg-white border-t border-slate-200 px-5 py-2.5 text-xs text-slate-500 flex items-center justify-between flex-shrink-0">
              <span>Showing {filteredList.length} of {totalCount} total enquiries</span>
              <span className="text-[11px] text-slate-400">
                🔒 Data stored locally on this machine with instant CSV/Excel export
              </span>
            </div>
          </div>
        )}

        {/* Cloud / Google Sheets Webhook Modal */}
        {showWebhookModal && (
          <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
            <div className="bg-white rounded-2xl max-w-lg w-full p-6 shadow-2xl border border-slate-200">
              <div className="flex items-center justify-between pb-3 border-b border-slate-200 mb-4">
                <div className="flex items-center gap-2">
                  <Settings className="w-5 h-5 text-[#071D43]" />
                  <h4 className="font-bold text-[#071D43] text-base">
                    Google Sheets / Webhook Cloud Sync
                  </h4>
                </div>
                <button
                  type="button"
                  onClick={() => setShowWebhookModal(false)}
                  className="p-1 rounded text-slate-400 hover:text-slate-700"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <p className="text-xs text-slate-600 leading-relaxed mb-4">
                Whenever a student fills the Admission Enquiry form, the data is automatically saved
                in this database. You can optionally paste a <strong>Google Apps Script Webhook URL</strong> or <strong>Make/Zapier Webhook</strong> below to also receive leads directly in your Google Sheet in real time.
              </p>

              <form onSubmit={handleSaveWebhook} className="space-y-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Webhook URL (Google Sheets / Apps Script)
                  </label>
                  <input
                    type="url"
                    value={webhookUrl}
                    onChange={(e) => setWebhookUrl(e.target.value)}
                    placeholder="https://script.google.com/macros/s/.../exec"
                    className="w-full text-xs px-3 py-2.5 rounded-lg border border-slate-300 focus:outline-none focus:border-[#123C78]"
                  />
                  <p className="text-[11px] text-slate-400 mt-1">
                    Leave blank to store leads exclusively inside the browser and export via Excel/CSV.
                  </p>
                </div>

                {webhookSaved && (
                  <div className="p-2.5 rounded-lg bg-emerald-50 text-emerald-800 text-xs font-semibold flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                    <span>Webhook settings saved successfully!</span>
                  </div>
                )}

                <div className="flex items-center justify-end gap-2 pt-2">
                  <button
                    type="button"
                    onClick={() => setShowWebhookModal(false)}
                    className="px-4 py-2 text-xs font-semibold text-slate-600 hover:bg-slate-100 rounded-lg"
                  >
                    Close
                  </button>
                  <button
                    type="submit"
                    className="px-4 py-2 text-xs font-bold text-[#071D43] bg-[#FFC928] hover:bg-[#FFD858] rounded-lg shadow-sm"
                  >
                    Save Webhook
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
