import React from "react";
import Navbar from "./Navbar";
import landing from "../assets/Landing.jpg";

export default function Home({ onOpenBookNow, onOpenPrices }) {
  return (
    <div className="bg-[#fff5f2] min-h-screen">
      <Navbar onOpenBookNow={onOpenBookNow} />

      <main className="px-4 sm:px-6 lg:px-8">
        <section className="max-w-7xl mx-auto py-10 md:py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center min-h-[70vh]">
            <div>
              <div className="space-y-2">
                <p className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight text-[#333333]">
                  Quiet, Focused
                </p>
                <p className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight text-[#333333]">
                  Study Space
                </p>
              </div>

              <p className="mt-4 md:mt-6 text-base sm:text-lg text-[#555555] max-w-prose">
                A distraction-free environment helps you stay focused, build discipline, and boost productivity.
              </p>

              <div className="mt-6 flex flex-col sm:flex-row gap-3 sm:gap-4">
                <button
                  onClick={onOpenBookNow}
                  className="bg-[#48b3f6] text-white rounded-[20px] px-5 py-3 font-bold
                             transition-colors duration-200
                             hover:bg-[#8ad1f5] hover:text-[#333333]
                             active:bg-[#769daf]
                             focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#8ad1f5]"
                >
                  Book Now
                </button>

                {/* <button
                  className="rounded-[20px] px-5 py-3 font-bold
                             border border-[#a8c1d1] text-[#333333]
                             hover:bg-[#f0f6f8] transition-colors duration-200
                             focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#a8c1d1]"
                >
                  View Fees
                </button> */}

                <button
    onClick={onOpenPrices}
    className="rounded-[20px] px-5 py-3 font-bold border border-[#a8c1d1] text-[#333333]
               hover:bg-[#f0f6f8] transition-colors duration-200
               focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#a8c1d1]"
  >
    View Prices
  </button>
              </div>
            </div>

            <div className="w-full">
              <div className="relative">
                <img
                  src={landing}
                  alt="Calm study hall"
                  className="w-full h-auto rounded-2xl shadow-[0_10px_30px_rgba(0,0,0,0.08)] object-cover"
                />
                <span
                  aria-hidden="true"
                  className="hidden sm:block absolute -z-10 -top-4 -left-4 w-24 h-24 rounded-2xl bg-[#fffcf8]"
                />
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

