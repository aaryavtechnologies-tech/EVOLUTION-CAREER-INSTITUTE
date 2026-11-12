import React from "react";

interface LogoProps {
  variant?: "dark" | "light";
  showTagline?: boolean;
  className?: string;
  size?: "sm" | "md" | "lg";
}

export default function Logo({
  variant = "dark",
  showTagline = true,
  className = "",
  size = "md",
}: LogoProps) {
  const isLight = variant === "light";

  const sizeClasses = {
    sm: "w-9 h-9",
    md: "w-11 h-11 md:w-12 md:h-12",
    lg: "w-14 h-14 md:w-16 md:h-16",
  };

  const titleClasses = {
    sm: "text-lg font-black tracking-tight",
    md: "text-xl md:text-2xl font-black tracking-tight",
    lg: "text-2xl md:text-3xl font-black tracking-tight",
  };

  const subtitleClasses = {
    sm: "text-[9px] tracking-widest",
    md: "text-[10px] md:text-[11px] tracking-wider",
    lg: "text-xs tracking-wider",
  };

  return (
    <div className={`flex items-center gap-3 select-none ${className}`}>
      {/* Academic Shield Emblem */}
      <div className={`relative flex-shrink-0 ${sizeClasses[size]}`}>
        <svg
          viewBox="0 0 100 100"
          className="w-full h-full drop-shadow-md"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Outer Shield with gradient border */}
          <defs>
            <linearGradient id="shieldGrad" x1="0" y1="0" x2="100" y2="100" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#FFC928" />
              <stop offset="50%" stopColor="#D71920" />
              <stop offset="100%" stopColor="#123C78" />
            </linearGradient>
            <linearGradient id="shieldBg" x1="50" y1="0" x2="50" y2="100" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#0B234F" />
              <stop offset="100%" stopColor="#071D43" />
            </linearGradient>
            <linearGradient id="goldGrad" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#FFE066" />
              <stop offset="100%" stopColor="#FFC928" />
            </linearGradient>
            <linearGradient id="torchFlame" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#FFEA79" />
              <stop offset="40%" stopColor="#FF9900" />
              <stop offset="100%" stopColor="#D71920" />
            </linearGradient>
          </defs>

          {/* Shield Outline */}
          <path
            d="M50 4 L88 18 C88 56 68 84 50 96 C32 84 12 56 12 18 Z"
            fill="url(#shieldBg)"
            stroke="url(#shieldGrad)"
            strokeWidth="3.5"
            strokeLinejoin="round"
          />

          {/* Inner Accent Ring */}
          <path
            d="M50 10 L82 22 C82 54 64 78 50 88 C36 78 18 54 18 22 Z"
            fill="none"
            stroke="#FFC928"
            strokeOpacity="0.25"
            strokeWidth="1.5"
          />

          {/* Upward Chevron Arrows (Evolution) */}
          <path
            d="M32 68 L50 54 L68 68"
            stroke="url(#goldGrad)"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M36 58 L50 46 L64 58"
            stroke="#FFFFFF"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeOpacity="0.9"
          />

          {/* Academic Torch / Flame */}
          <path
            d="M50 20 C46 27 43 32 46 38 C48 42 52 42 54 38 C57 32 54 27 50 20 Z"
            fill="url(#torchFlame)"
          />

          {/* Central Star of Excellence */}
          <polygon
            points="50,30 52,34 56,35 53,38 54,42 50,40 46,42 47,38 44,35 48,34"
            fill="#FFFFFF"
          />

          {/* Graduation Cap Lines */}
          <path
            d="M35 32 L50 26 L65 32 L50 38 Z"
            fill="#FFC928"
            fillOpacity="0.85"
          />
        </svg>
      </div>

      {/* Typography */}
      <div className="flex flex-col leading-none whitespace-nowrap">
        <div className="flex items-center gap-1.5">
          <span
            className={`${titleClasses[size]} uppercase tracking-wider ${
              isLight ? "text-white" : "text-[#071D43]"
            }`}
            style={{ fontFamily: "'Outfit', sans-serif" }}
          >
            Evolution
          </span>
          <span className="text-[#D71920] font-black text-xl md:text-2xl leading-none">.</span>
        </div>
        <span
          className={`font-bold uppercase tracking-widest ${
            isLight ? "text-[#FFC928]" : "text-[#123C78]"
          } text-[10px] md:text-xs mt-0.5`}
          style={{ letterSpacing: "0.22em" }}
        >
          Career Institute
        </span>
        {showTagline && (
          <span
            className={`font-semibold ${subtitleClasses[size]} mt-1 flex items-center gap-1 ${
              isLight ? "text-slate-300" : "text-slate-500"
            }`}
          >
            <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#D71920] flex-shrink-0"></span>
            IIT JEE Qualified Mentors
          </span>
        )}
      </div>
    </div>
  );
}

