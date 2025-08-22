// Logo.js
import React from "react";

export default function Logo() {
  return (
    <div className="flex items-center gap-2">
      {/* Book Icon */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-8 h-8 text-[#2c6a87]"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path d="M4 19.5A2.5 2.5 0 016.5 17H20v2H6.5a.5.5 0 000 1H20v2H6.5A2.5 2.5 0 014 19.5v-15A2.5 2.5 0 016.5 2H20v2H6.5a.5.5 0 000 1H20v2H6.5A2.5 2.5 0 014 5.5v14z" />
      </svg>

      {/* Text */}
      <span className="text-xl font-bold text-[#2c6a87]">
        Janaki-Library
      </span>
    </div>
  );
}
