// components/LogoBookmark.jsx
import React from "react";

export default function LogoBookmark({ withText = true }) {
  return (
    <div className="flex items-center gap-3">
      {/* Icon */}
      <svg
        width="36"
        height="36"
        viewBox="0 0 64 64"
        aria-labelledby="title"
        role="img"
        className="shrink-0"
      >
        <title id="title">Janaki Library logo</title>
        <defs>
          <linearGradient id="JLgrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#48b3f6" />
            <stop offset="100%" stopColor="#a8c1d1" />
          </linearGradient>
        </defs>

        {/* Bookmark shape */}
        <path
          d="M18 8h28a4 4 0 0 1 4 4v40l-18-8-18 8V12a4 4 0 0 1 4-4Z"
          fill="url(#JLgrad)"
        />
        {/* Stylized “J” cutout */}
        <path
          d="M40 16h-8v20c0 3.866-3.134 7-7 7-2.21 0-4-1.79-4-4h-4c0 4.418 3.582 8 8 8 6.627 0 12-5.373 12-12V16Z"
          fill="#fffefc"
        />
      </svg>

      {/* Wordmark */}
      {withText && (
        <div className="leading-none">
          <span className="block text-xl font-extrabold tracking-tight text-[#2c6a87]">
            Janaki<span className="text-[#333333]">Library</span>
          </span>
          <span className="block text-[11px] tracking-[0.14em] uppercase text-[#7b8b95]">
            Study Hall
          </span>
        </div>
      )}
    </div>
  );
}
