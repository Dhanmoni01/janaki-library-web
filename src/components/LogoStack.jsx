// components/LogoStack.jsx
import React from "react";

export default function LogoStack({ withText = true }) {
  return (
    <div className="flex items-center gap-3">
      {/* Icon */}
      <svg
        width="38"
        height="38"
        viewBox="0 0 64 64"
        aria-labelledby="title2"
        role="img"
        className="shrink-0"
      >
        <title id="title2">Janaki Library logo</title>
        {/* Books (rounded rectangles) */}
        <rect x="10" y="14" rx="6" ry="6" width="44" height="10" fill="#48b3f6" />
        <rect x="10" y="27" rx="6" ry="6" width="44" height="10" fill="#8ad1f5" />
        <rect x="10" y="40" rx="6" ry="6" width="44" height="10" fill="#a8c1d1" />
        {/* Spark (idea) */}
        <circle cx="49" cy="11" r="3" fill="#2c6a87" />
      </svg>

      {/* Wordmark */}
      {withText && (
        <div className="leading-none">
          <span className="block text-xl font-extrabold tracking-tight text-[#333333]">
            Janaki<span className="text-[#2c6a87]">Library</span>
          </span>
          <span className="block text-[11px] tracking-[0.14em] uppercase text-[#7b8b95]">
            Quiet • Focused • Wi-Fi
          </span>
        </div>
      )}
    </div>
  );
}
