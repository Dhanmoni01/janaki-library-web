import React from "react";
import Navbar from "./Navbar";
import { motion, useReducedMotion } from "framer-motion";
import { FiWifi, FiCoffee, FiClipboard, FiShield } from "react-icons/fi";
import landing2 from "../assets/Photo-15-crop.jpg";

export default function Home({ onOpenBookNow, onOpenPrices }) {
  const reduce = useReducedMotion();

  // tiny entrance animation (left column)
  const container = {
    hidden: { opacity: 0, y: 12 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: reduce ? 0 : 0.6,
        ease: "easeOut",
        when: "beforeChildren",
        staggerChildren: reduce ? 0 : 0.08,
      },
    },
  };
  const item = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: reduce ? 0 : 0.5, ease: "easeOut" },
    },
  };

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* ===== Pastel multi-layer gradient canvas + drifting glows ===== */}
      <div aria-hidden="true" className="absolute inset-0 -z-20">
        {/* Layered gradients: light, calm palette */}
        <div
          className="absolute inset-0"
          style={{
            background: `
              radial-gradient(80rem 50rem at 85% -10%, rgba(72,179,246,.18), transparent 60%),
              radial-gradient(60rem 40rem at 10% 0%, rgba(253, 230, 216, .6), transparent 60%),
              radial-gradient(50rem 30rem at 95% 90%, rgba(186, 230, 253, .55), transparent 55%),
              conic-gradient(from 180deg at 50% 120%, rgba(255,255,255,.7), rgba(255,245,242,.9), rgba(255,255,255,.7)),
              linear-gradient(180deg, #fff5f2 0%, #fffefc 100%)
            `,
          }}
        />
        {/* two gentle, animated glow blobs (auto-disabled with reduced motion) */}
        <motion.div
          className="absolute left-[5%] top-[10%] w-[26rem] h-[26rem] rounded-full blur-3xl -z-10"
          style={{
            background:
              "radial-gradient(closest-side, rgba(255,245,235,.9), transparent)",
          }}
          animate={reduce ? {} : { y: [0, -16, 0], x: [0, 10, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute right-[2%] bottom-[10%] w-[22rem] h-[22rem] rounded-full blur-3xl -z-10"
          style={{
            background:
              "radial-gradient(closest-side, rgba(210,244,255,.8), transparent)",
          }}
          animate={reduce ? {} : { y: [0, 14, 0], x: [0, -8, 0] }}
          transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <Navbar onOpenBookNow={onOpenBookNow} />

      <main className="px-4 sm:px-6 lg:px-8 relative">
        <section className="max-w-7xl mx-auto py-10 md:py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center min-h-[70vh]">
            {/* ===== Left: copy with tiny entrance animation ===== */}
            <motion.div
              variants={container}
              initial={reduce ? false : "hidden"}
              animate="visible"
            >
              <motion.div
                variants={item}
                className="inline-flex items-center gap-2 rounded-full bg-white/70 px-3 py-1 ring-1 ring-black/5 backdrop-blur-sm"
              >
                <span className="h-2 w-2 rounded-full bg-emerald-500" />
                <span className="text-xs font-medium text-[#2e4050]">
                  Open 6am–10pm • Guwahati
                </span>
              </motion.div>

              <motion.div variants={item} className="mt-3 space-y-1">
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight text-[#333333]">
                  Quiet, <span className="text-[#48b3f6]">Focused</span>
                </h1>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight text-[#333333]">
                  Study Space
                </h2>
              </motion.div>

              <motion.p
                variants={item}
                className="mt-4 md:mt-6 text-base sm:text-lg text-[#555555] max-w-prose"
              >
                A distraction-free environment helps you stay focused, build
                discipline, and boost productivity.
              </motion.p>

              <motion.div
                variants={item}
                className="mt-6 flex flex-col sm:flex-row gap-3 sm:gap-4"
              >
                <button
                  onClick={onOpenBookNow}
                  className="bg-[#48b3f6] text-white rounded-[20px] px-5 py-3 font-bold
                             transition-colors duration-200 hover:bg-[#8ad1f5] hover:text-[#333333]
                             active:bg-[#769daf] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#8ad1f5]"
                >
                  Book Now
                </button>

                <button
                  onClick={onOpenPrices}
                  className="rounded-[20px] px-5 py-3 font-bold border border-[#a8c1d1] text-[#333333]
                             hover:bg-[#f0f6f8] transition-colors duration-200
                             focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#a8c1d1]"
                >
                  View Prices
                </button>
              </motion.div>

              {/* small trust strip (keeps consistency with your other components) */}
              <motion.ul
                variants={item}
                className="mt-5 flex flex-wrap gap-3 text-sm text-[#2e4050]"
              >
                <li className="inline-flex items-center gap-2 rounded-full bg-white/70 px-3 py-1 ring-1 ring-black/5">
                  <FiWifi className="h-4 w-4" />
                  <span>AC Wi-Fi</span>
                </li>
                <li className="inline-flex items-center gap-2 rounded-full bg-white/70 px-3 py-1 ring-1 ring-black/5">
                  <FiClipboard className="h-4 w-4" />
                  <span>Private cabins</span>
                </li>
                <li className="inline-flex items-center gap-2 rounded-full bg-white/70 px-3 py-1 ring-1 ring-black/5">
                  <FiCoffee className="h-4 w-4" />
                  <span>Cafeteria</span>
                </li>
                <li className="inline-flex items-center gap-2 rounded-full bg-white/70 px-3 py-1 ring-1 ring-black/5">
                  <FiShield className="h-4 w-4" />
                  <span>Quiet hours</span>
                </li>
              </motion.ul>
            </motion.div>

            {/* ===== Right: image card (unchanged composition, consistent sizing) ===== */}
            <motion.div
              initial={reduce ? {} : { opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: reduce ? 0 : 0.6, ease: "easeOut" }}
              className="w-full"
            >
              <div className="relative">
                <div className="relative w-full aspect-[5/4] sm:aspect-[4/3] md:aspect-[5/4]">
                  <img
                    src={landing2}
                    alt="Calm study hall with comfortable seating"
                    className="absolute inset-0 w-full h-full object-cover rounded-2xl shadow-[0_10px_30px_rgba(0,0,0,0.08)]"
                  />
                  <div
                    aria-hidden="true"
                    className="absolute inset-x-0 bottom-0 h-1/2 rounded-b-2xl bg-gradient-to-t from-black/55 via-black/25 to-transparent"
                  />
                </div>

                {/* small floating label */}
                <div className="absolute left-3 bottom-3 sm:left-4 sm:bottom-4">
                  <div className="rounded-xl bg-white/85 backdrop-blur-md ring-1 ring-black/5 px-3 py-2">
                    <p className="text-xs font-semibold text-[#2e4050]">
                      Today’s vibe: <span className="text-emerald-600">Quiet</span>
                    </p>
                    {/* <p className="text-[11px] text-[#6f6f6f]">Best hours: 2–6 PM</p> */}
                  </div>
                </div>

                {/* soft paper tile (brand-consistent) */}
                <span
                  aria-hidden="true"
                  className="hidden sm:block absolute -z-10 -top-4 -left-4 w-24 h-24 rounded-2xl bg-[#fffcf8]"
                />
              </div>
            </motion.div>
          </div>
        </section>
      </main>
    </div>
  );
}
