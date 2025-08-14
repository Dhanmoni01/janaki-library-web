import React from "react";
import { FiCheck } from "react-icons/fi"; 

export default function About() {
  
  const cardBase =
    "bg-white border border-[#f6f5f2] rounded-2xl shadow-[0_6px_18px_rgba(0,0,0,0.06)] " +
    "flex flex-col items-center justify-center text-center " +
    "min-w-[9.5rem] h-[9.5rem] sm:min-w-[10.5rem] sm:h-[10.5rem] p-4";

  return (
    <section className="bg-[#fffefc] py-12 md:py-16 scroll-mt-20" id="about">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          {/* Left: Heading + bullets */}
          <div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#333333]">
              About Us
            </h2>

            <ul className="mt-6 space-y-3">
              <li className="flex items-start gap-3">
                <span className="mt-0.5 inline-flex h-6 w-6 items-center justify-center rounded-full bg-[#e9f2f7] text-[#2c6a87]">
                  <FiCheck className="h-4 w-4" />
                </span>
                <p className="text-[#555555]">
                  Comfortable and serene study environment
                </p>
              </li>

              <li className="flex items-start gap-3">
                <span className="mt-0.5 inline-flex h-6 w-6 items-center justify-center rounded-full bg-[#e9f2f7] text-[#2c6a87]">
                  <FiCheck className="h-4 w-4" />
                </span>
                <p className="text-[#555555]">
                  Personalized services and professionals
                </p>
              </li>

              <li className="flex items-start gap-3">
                <span className="mt-0.5 inline-flex h-6 w-6 items-center justify-center rounded-full bg-[#e9f2f7] text-[#2c6a87]">
                  <FiCheck className="h-4 w-4" />
                </span>
                <p className="text-[#555555]">
                  Flexible booking options available
                </p>
              </li>
            </ul>
          </div>

          {/* Right: three pill cards (uniform size like other site components) */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 justify-items-center">
  <div className={`${cardBase} w-[9.5rem] h-[9.5rem] sm:w-[10.5rem] sm:h-[10.5rem]`}>
    <div className="text-[#333333] font-semibold">Comfortable</div>
    <div className="text-[#777777] text-sm mt-1">
      Assisted, silent, and focused.
    </div>
  </div>

  <div className={`${cardBase} w-[9.5rem] h-[9.5rem] sm:w-[10.5rem] sm:h-[10.5rem]`}>
    <div className="text-[#333333] font-semibold">Cabin</div>
    <div className="text-[#777777] text-sm mt-1">
      Private desk & chair.
    </div>
  </div>

  <div className={`${cardBase} w-[9.5rem] h-[9.5rem] sm:w-[10.5rem] sm:h-[10.5rem]`}>
    <div className="text-[#333333] font-semibold">AC Wi-Fi</div>
    <div className="text-[#777777] text-sm mt-1">
      Cool, quiet, always online.
    </div>
  </div>
</div>
        </div>
      </div>
    </section>
  );
}

