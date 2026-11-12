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
    sm: "w-10 h-10",
    md: "w-12 h-12",
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
      {/* Official Institute Circular Emblem */}
      <div
        className={`relative flex-shrink-0 rounded-full overflow-hidden ${sizeClasses[size]} ${
          isLight ? "bg-white p-0.5 ring-2 ring-[#FFC928]/60 shadow-lg" : "drop-shadow-sm"
        }`}
      >
        <img
          src="/images/logo.png"
          alt="Evolution Career Institute Logo"
          className="w-full h-full object-contain rounded-full"
        />
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
