"use client";

import React, { useState, useEffect, useRef } from "react";
import {
  Star,
  MessageSquarePlus,
  CheckCircle2,
  AlertCircle,
  Send,
  Trash2,
  UserCheck,
  Quote,
} from "lucide-react";

type ReviewerRole = "Student" | "Parent" | "Alumni";

export interface ReviewItem {
  id: string;
  name: string;
  role: ReviewerRole;
  course: string;
  rating: number;
  comment: string;
  date: string;
  isUserSubmitted?: boolean;
}

const STORAGE_KEY = "eci_website_reviews_v1";

const DEFAULT_REVIEWS: ReviewItem[] = [
  {
    id: "starter-1",
    name: "Ananya Verma",
    role: "Student",
    course: "Class 11th–12th Boards",
    rating: 5,
    comment:
      "Teachers explain Physics and Chemistry from the very basics before moving to exam-level numericals. Regular doubt sessions at the Sadar Cantt campus really boosted my confidence.",
    date: "Recent Review",
  },
  {
    id: "starter-2",
    name: "Rajesh Tiwari",
    role: "Parent",
    course: "Class 9th–10th Foundation",
    rating: 5,
    comment:
      "Small batch size and personal attention from IIT-JEE qualified mentors make a real difference. We get regular updates on test performance and attendance.",
    date: "Recent Review",
  },
  {
    id: "starter-3",
    name: "Aman Mishra",
    role: "Student",
    course: "IIT-JEE Preparation",
    rating: 5,
    comment:
      "Concept clarity is the strongest part of Evolution Career Institute. Weekly tests and detailed paper analysis help spot mistakes early.",
    date: "Recent Review",
  },
];

const COURSE_OPTIONS = [
  "Class 9th–10th Foundation",
  "Class 11th–12th Boards",
  "NEET Coaching",
  "IIT-JEE Preparation",
  "CUET / NDA / Sainik School",
  "Crash Course 2026",
];

const ROLE_OPTIONS: ReviewerRole[] = ["Student", "Parent", "Alumni"];

const RATING_LABELS: { [key: number]: string } = {
  1: "Needs Improvement",
  2: "Fair",
  3: "Good",
  4: "Very Good",
  5: "Excellent",
};

export default function Reviews() {
  const [reviews, setReviews] = useState<ReviewItem[]>(DEFAULT_REVIEWS);
  const [roleFilter, setRoleFilter] = useState<"All" | ReviewerRole>("All");

  // Form states
  const [name, setName] = useState("");
  const [role, setRole] = useState<ReviewerRole>("Student");
  const [course, setCourse] = useState(COURSE_OPTIONS[0]);
  const [rating, setRating] = useState<number>(5);
  const [hoverRating, setHoverRating] = useState<number>(0);
  const [comment, setComment] = useState("");

  // Post-interaction validation states
  const [edited, setEdited] = useState<{ name?: boolean; comment?: boolean }>({});
  const [blurred, setBlurred] = useState<{ name?: boolean; comment?: boolean }>({});
  const [submitAttempted, setSubmitAttempted] = useState(false);
  const [submittedReview, setSubmittedReview] = useState<ReviewItem | null>(null);
  const [liveStatus, setLiveStatus] = useState("");

  const nameInputRef = useRef<HTMLInputElement>(null);
  const commentInputRef = useRef<HTMLTextAreaElement>(null);

  // Hydrate visitor-submitted reviews from localStorage
  useEffect(() => {
    try {
      const saved = window.localStorage.getItem(STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved) as ReviewItem[];
        if (Array.isArray(parsed) && parsed.length > 0) {
          setReviews([...parsed, ...DEFAULT_REVIEWS]);
        }
      }
    } catch {
      // Ignore storage read errors in restricted browsing modes
    }
  }, []);

  const persistUserReviews = (allReviews: ReviewItem[]) => {
    try {
      const userOnly = allReviews.filter((r) => r.isUserSubmitted);
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(userOnly));
    } catch {
      // Ignore storage quota errors
    }
  };

  const getNameError = (val: string) => {
    const trimmed = val.trim();
    if (!trimmed) return "Please enter your full name.";
    if (trimmed.length < 2) return "Name must be at least 2 characters.";
    return "";
  };

  const getCommentError = (val: string) => {
    const trimmed = val.trim();
    if (!trimmed) return "Please write a few words about your experience.";
    if (trimmed.length < 10) return "Review must be at least 10 characters long.";
    return "";
  };

  const nameErrorMsg = getNameError(name);
  const commentErrorMsg = getCommentError(comment);

  const showNameError = Boolean(
    nameErrorMsg && (submitAttempted || (edited.name && blurred.name))
  );
  const showCommentError = Boolean(
    commentErrorMsg && (submitAttempted || (edited.comment && blurred.comment))
  );

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitAttempted(true);

    if (nameErrorMsg) {
      nameInputRef.current?.focus();
      setLiveStatus(`Form error: ${nameErrorMsg}`);
      return;
    }

    if (commentErrorMsg) {
      commentInputRef.current?.focus();
      setLiveStatus(`Form error: ${commentErrorMsg}`);
      return;
    }

    const formattedDate = new Intl.DateTimeFormat("en-IN", {
      day: "numeric",
      month: "short",
      year: "numeric",
    }).format(new Date());

    const newReview: ReviewItem = {
      id: `user-${Date.now()}`,
      name: name.trim(),
      role,
      course,
      rating,
      comment: comment.trim(),
      date: formattedDate,
      isUserSubmitted: true,
    };

    const updated = [newReview, ...reviews];
    setReviews(updated);
    persistUserReviews(updated);
    setSubmittedReview(newReview);
    setLiveStatus("Thank you! Your review has been added to the page.");

    // Reset form fields cleanly
    setName("");
    setRole("Student");
    setCourse(COURSE_OPTIONS[0]);
    setRating(5);
    setComment("");
    setEdited({});
    setBlurred({});
    setSubmitAttempted(false);
  };

  const handleDeleteUserReview = (id: string) => {
    const updated = reviews.filter((r) => r.id !== id);
    setReviews(updated);
    persistUserReviews(updated);
    if (submittedReview?.id === id) {
      setSubmittedReview(null);
    }
    setLiveStatus("Your review was removed.");
  };

  const handleSendWhatsAppReview = (review: ReviewItem) => {
    const stars = "★".repeat(review.rating) + "☆".repeat(5 - review.rating);
    const text = `*New Website Review – Evolution Career Institute*%0A*Name:* ${encodeURIComponent(
      review.name
    )}%0A*Role:* ${encodeURIComponent(review.role)}%0A*Course:* ${encodeURIComponent(
      review.course
    )}%0A*Rating:* ${encodeURIComponent(`${stars} (${review.rating}/5)`)}%0A*Review:* ${encodeURIComponent(
      review.comment
    )}`;
    window.open(`https://wa.me/916390247880?text=${text}`, "_blank", "noopener,noreferrer");
  };

  const averageRating =
    reviews.length > 0
      ? (reviews.reduce((sum, item) => sum + item.rating, 0) / reviews.length).toFixed(1)
      : "5.0";

  const filteredReviews =
    roleFilter === "All" ? reviews : reviews.filter((r) => r.role === roleFilter);

  const displayedStars = hoverRating || rating;

  return (
    <section
      id="reviews"
      className="py-20 lg:py-24 bg-white border-t border-slate-200/70 relative overflow-hidden"
    >
      {/* Subtle Background Accents */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-12 right-0 w-80 h-80 bg-[#FFC928]/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-12 left-0 w-80 h-80 bg-[#123C78]/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header + Overall Rating Summary */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-md bg-[#123C78]/10 text-[#123C78] text-xs font-bold uppercase tracking-wider mb-3">
              <MessageSquarePlus className="w-3.5 h-3.5 text-[#D71920]" />
              <span>Student &amp; Parent Reviews</span>
            </div>

            <h2
              className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#071D43] tracking-tight leading-tight mb-3"
              style={{ fontFamily: "'Outfit', sans-serif" }}
            >
              Voices of Our{" "}
              <span className="text-[#D71920]">Students &amp; Parents</span>
            </h2>

            <p className="text-base sm:text-lg text-slate-600">
              Read genuine learning experiences or share your own review after exploring our
              courses and campus.
            </p>
          </div>

          {/* Live Rating Summary Card */}
          <div className="inline-flex items-center gap-4 px-5 py-4 rounded-2xl bg-[#071D43] text-white shadow-lg border border-[#FFC928]/30 self-start lg:self-auto">
            <div className="text-center pr-4 border-r border-white/15">
              <span
                className="block text-3xl sm:text-4xl font-black text-[#FFC928] tabular-nums leading-none"
                style={{ fontFamily: "'Outfit', sans-serif" }}
              >
                {averageRating}
              </span>
              <span className="text-[11px] text-slate-300 font-semibold">out of 5.0</span>
            </div>
            <div>
              <div className="flex items-center gap-1 mb-1" aria-label={`Average rating ${averageRating} out of 5`}>
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star
                    key={star}
                    className={`w-4 h-4 ${
                      star <= Math.round(Number(averageRating))
                        ? "text-[#FFC928] fill-[#FFC928]"
                        : "text-slate-500"
                    }`}
                  />
                ))}
              </div>
              <p className="text-xs font-bold text-slate-200">
                Based on {reviews.length} {reviews.length === 1 ? "Review" : "Reviews"}
              </p>
            </div>
          </div>
        </div>

        {/* Main 12-Column Grid: Form on Left, Live Reviews Feed on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          {/* Left Column: Write a Review Form */}
          <div className="lg:col-span-5">
            <div className="bg-slate-50 rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#FFC928] via-[#D71920] to-[#123C78]"></div>

              <h3
                id="review-form-heading"
                className="text-xl sm:text-2xl font-black text-[#071D43] mb-1.5"
                style={{ fontFamily: "'Outfit', sans-serif" }}
              >
                Write a Review
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 mb-6">
                Visited our institute or website? Rate your experience below.
              </p>

              {/* Polite Status Live Region */}
              <div role="status" aria-live="polite" className="sr-only">
                {liveStatus}
              </div>

              {submittedReview && (
                <div className="mb-6 p-4 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-900">
                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                    <div className="text-xs sm:text-sm">
                      <p className="font-bold">Thank you, {submittedReview.name}!</p>
                      <p className="text-emerald-800 mt-0.5">
                        Your review is now displayed alongside our reviews list. You can also
                        forward it to our team on WhatsApp to feature it permanently.
                      </p>
                      <button
                        type="button"
                        onClick={() => handleSendWhatsAppReview(submittedReview)}
                        className="mt-2.5 inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-[#25D366] hover:bg-[#1ebe5d] text-white text-xs font-bold shadow-sm transition-colors cursor-pointer"
                      >
                        <Send className="w-3.5 h-3.5" />
                        <span>Share Review on WhatsApp</span>
                      </button>
                    </div>
                  </div>
                </div>
              )}

              <form
                noValidate
                onSubmit={handleSubmit}
                aria-labelledby="review-form-heading"
                className="space-y-5"
              >
                {/* 1-5 Star Rating Radio Group */}
                <fieldset>
                  <legend className="block text-xs sm:text-sm font-bold text-slate-700 mb-2">
                    Your Rating <span className="text-[#D71920]" aria-hidden="true">*</span>
                  </legend>
                  <div
                    className="inline-flex items-center gap-1.5 bg-white px-3.5 py-2.5 rounded-xl border border-slate-200 shadow-xs"
                    onMouseLeave={() => setHoverRating(0)}
                  >
                    {[1, 2, 3, 4, 5].map((starValue) => {
                      const active = starValue <= displayedStars;
                      return (
                        <label
                          key={starValue}
                          htmlFor={`review-star-${starValue}`}
                          onMouseEnter={() => setHoverRating(starValue)}
                          className="relative cursor-pointer p-1 rounded-md focus-within:ring-2 focus-within:ring-[#123C78]"
                        >
                          <input
                            id={`review-star-${starValue}`}
                            type="radio"
                            name="rating"
                            value={starValue}
                            checked={rating === starValue}
                            onChange={() => setRating(starValue)}
                            aria-label={`${starValue} ${starValue === 1 ? "Star" : "Stars"} - ${RATING_LABELS[starValue]}`}
                            className="sr-only"
                          />
                          <Star
                            className={`w-6 h-6 transition-transform duration-150 ${
                              active
                                ? "text-[#FFC928] fill-[#FFC928] scale-105"
                                : "text-slate-300"
                            }`}
                          />
                        </label>
                      );
                    })}
                    <span className="ml-2 text-xs font-bold text-[#071D43]">
                      {RATING_LABELS[displayedStars]}
                    </span>
                  </div>
                </fieldset>

                {/* Role Selection Radio Group */}
                <fieldset>
                  <legend className="block text-xs sm:text-sm font-bold text-slate-700 mb-2">
                    I am a <span className="text-[#D71920]" aria-hidden="true">*</span>
                  </legend>
                  <div className="grid grid-cols-3 gap-2.5">
                    {ROLE_OPTIONS.map((option) => {
                      const checked = role === option;
                      return (
                        <label
                          key={option}
                          htmlFor={`review-role-${option}`}
                          className={`flex items-center justify-center gap-2 min-h-[44px] px-3 py-2 rounded-xl border text-xs sm:text-sm font-bold cursor-pointer transition-all focus-within:ring-2 focus-within:ring-[#123C78] ${
                            checked
                              ? "bg-[#071D43] text-white border-[#071D43] shadow-sm"
                              : "bg-white text-slate-700 border-slate-300 hover:border-[#123C78]"
                          }`}
                        >
                          <input
                            id={`review-role-${option}`}
                            type="radio"
                            name="role"
                            value={option}
                            checked={checked}
                            onChange={() => setRole(option)}
                            className="sr-only"
                          />
                          <span>{option}</span>
                        </label>
                      );
                    })}
                  </div>
                </fieldset>

                {/* Full Name */}
                <div>
                  <label
                    htmlFor="review-name"
                    className="block text-xs sm:text-sm font-bold text-slate-700 mb-1"
                  >
                    Your Name <span className="text-[#D71920]" aria-hidden="true">*</span>
                  </label>
                  <input
                    ref={nameInputRef}
                    id="review-name"
                    name="reviewerName"
                    type="text"
                    required
                    minLength={2}
                    maxLength={80}
                    autoComplete="name"
                    enterKeyHint="next"
                    value={name}
                    onChange={(e) => {
                      setName(e.target.value);
                      setEdited((prev) => ({ ...prev, name: true }));
                    }}
                    onBlur={() => setBlurred((prev) => ({ ...prev, name: true }))}
                    placeholder="e.g. Priya Singh"
                    aria-invalid={showNameError ? "true" : "false"}
                    aria-describedby={showNameError ? "review-name-error" : undefined}
                    className={`w-full px-4 py-3 min-h-[48px] rounded-xl border bg-white text-base sm:text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 transition-all ${
                      showNameError
                        ? "border-red-500 ring-red-200 bg-red-50/40"
                        : "border-slate-300 focus:border-[#123C78] focus:ring-[#123C78]/20"
                    }`}
                  />
                  {showNameError && (
                    <p
                      id="review-name-error"
                      className="mt-1.5 text-xs text-red-600 flex items-center gap-1 font-medium"
                    >
                      <AlertCircle className="w-3.5 h-3.5 flex-shrink-0" aria-hidden="true" />
                      <span>Error: {nameErrorMsg}</span>
                    </p>
                  )}
                </div>

                {/* Course / Program Select */}
                <div>
                  <label
                    htmlFor="review-course"
                    className="block text-xs sm:text-sm font-bold text-slate-700 mb-1"
                  >
                    Batch / Program
                  </label>
                  <select
                    id="review-course"
                    name="course"
                    value={course}
                    onChange={(e) => setCourse(e.target.value)}
                    className="w-full px-4 py-3 min-h-[48px] rounded-xl border border-slate-300 bg-white text-base sm:text-sm text-slate-800 font-medium focus:outline-none focus:border-[#123C78] focus:ring-2 focus:ring-[#123C78]/20"
                  >
                    {COURSE_OPTIONS.map((item) => (
                      <option key={item} value={item}>
                        {item}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Review Textarea */}
                <div>
                  <label
                    htmlFor="review-comment"
                    className="block text-xs sm:text-sm font-bold text-slate-700 mb-1"
                  >
                    Your Review <span className="text-[#D71920]" aria-hidden="true">*</span>
                  </label>
                  <span id="review-comment-hint" className="block text-[11px] text-slate-500 mb-1.5">
                    Minimum 10 characters &mdash; share thoughts on teaching, batches, or campus.
                  </span>
                  <textarea
                    ref={commentInputRef}
                    id="review-comment"
                    name="comment"
                    required
                    minLength={10}
                    maxLength={500}
                    rows={3}
                    enterKeyHint="done"
                    value={comment}
                    onChange={(e) => {
                      setComment(e.target.value);
                      setEdited((prev) => ({ ...prev, comment: true }));
                    }}
                    onBlur={() => setBlurred((prev) => ({ ...prev, comment: true }))}
                    placeholder="Write your experience with Evolution Career Institute..."
                    aria-invalid={showCommentError ? "true" : "false"}
                    aria-describedby={
                      showCommentError
                        ? "review-comment-hint review-comment-error"
                        : "review-comment-hint"
                    }
                    className={`w-full px-4 py-3 rounded-xl border bg-white text-base sm:text-sm text-slate-800 placeholder-slate-400 resize-y focus:outline-none focus:ring-2 transition-all ${
                      showCommentError
                        ? "border-red-500 ring-red-200 bg-red-50/40"
                        : "border-slate-300 focus:border-[#123C78] focus:ring-[#123C78]/20"
                    }`}
                  />
                  {showCommentError && (
                    <p
                      id="review-comment-error"
                      className="mt-1.5 text-xs text-red-600 flex items-center gap-1 font-medium"
                    >
                      <AlertCircle className="w-3.5 h-3.5 flex-shrink-0" aria-hidden="true" />
                      <span>Error: {commentErrorMsg}</span>
                    </p>
                  )}
                </div>

                <button
                  type="submit"
                  className="w-full min-h-[48px] inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl font-extrabold text-sm sm:text-base text-[#071D43] bg-gradient-to-r from-[#FFC928] via-[#FFD858] to-[#FFC928] hover:shadow-[0_6px_20px_rgba(255,201,40,0.45)] border border-[#E0AD15] transition-all cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#071D43]"
                >
                  <MessageSquarePlus className="w-4 h-4" />
                  <span>Post Review</span>
                </button>
              </form>
            </div>
          </div>

          {/* Right Column: Filter & Displayed Reviews */}
          <div className="lg:col-span-7 space-y-6">
            {/* Role Filter Bar */}
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div
                role="group"
                aria-label="Filter reviews by role"
                className="flex flex-wrap items-center gap-2"
              >
                {(["All", "Student", "Parent", "Alumni"] as const).map((tab) => {
                  const isActive = roleFilter === tab;
                  return (
                    <button
                      key={tab}
                      type="button"
                      onClick={() => setRoleFilter(tab)}
                      aria-pressed={isActive}
                      className={`px-4 py-2 rounded-full text-xs font-bold transition-all cursor-pointer ${
                        isActive
                          ? "bg-[#071D43] text-[#FFC928] shadow-sm"
                          : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                      }`}
                    >
                      {tab === "All" ? `All Reviews (${reviews.length})` : tab}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Reviews List */}
            {filteredReviews.length === 0 ? (
              <div className="p-8 rounded-2xl bg-slate-50 border border-slate-200 text-center text-sm text-slate-600">
                No {roleFilter.toLowerCase()} reviews yet &mdash; be the first to write one!
              </div>
            ) : (
              <div className="grid grid-cols-1 gap-4">
                {filteredReviews.map((review) => (
                  <article
                    key={review.id}
                    className={`p-6 rounded-2xl border transition-all ${
                      review.isUserSubmitted
                        ? "bg-amber-50/40 border-[#FFC928]/60 shadow-sm"
                        : "bg-white border-slate-200 shadow-xs hover:shadow-md"
                    }`}
                  >
                    <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-[#071D43] text-[#FFC928] font-black text-sm flex items-center justify-center flex-shrink-0">
                          {review.name.charAt(0).toUpperCase()}
                        </div>
                        <div>
                          <div className="flex items-center gap-2 flex-wrap">
                            <h4 className="font-bold text-[#071D43] text-sm sm:text-base">
                              {review.name}
                            </h4>
                            <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-[#123C78]/10 text-[#123C78] text-[10px] font-bold uppercase tracking-wider">
                              <UserCheck className="w-3 h-3" />
                              {review.role}
                            </span>
                            {review.isUserSubmitted && (
                              <span className="px-2 py-0.5 rounded-full bg-[#FFC928]/30 text-[#071D43] text-[10px] font-extrabold uppercase tracking-wider">
                                Your Review
                              </span>
                            )}
                          </div>
                          <p className="text-xs text-slate-500 mt-0.5">
                            {review.course} &bull; {review.date}
                          </p>
                        </div>
                      </div>

                      <div className="flex items-center gap-2">
                        <div
                          className="flex items-center gap-0.5"
                          aria-label={`Rated ${review.rating} out of 5 stars`}
                        >
                          {[1, 2, 3, 4, 5].map((s) => (
                            <Star
                              key={s}
                              className={`w-4 h-4 ${
                                s <= review.rating
                                  ? "text-[#FFC928] fill-[#FFC928]"
                                  : "text-slate-300"
                              }`}
                            />
                          ))}
                        </div>
                        {review.isUserSubmitted && (
                          <button
                            type="button"
                            onClick={() => handleDeleteUserReview(review.id)}
                            aria-label={`Remove review by ${review.name}`}
                            title="Remove your review"
                            className="p-1.5 rounded-lg text-slate-400 hover:text-red-600 hover:bg-red-50 transition-colors cursor-pointer"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        )}
                      </div>
                    </div>

                    <div className="relative pl-6">
                      <Quote
                        className="w-4 h-4 text-[#FFC928] absolute left-0 top-0.5"
                        aria-hidden="true"
                      />
                      <p className="text-sm text-slate-700 leading-relaxed">{review.comment}</p>
                    </div>
                  </article>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

