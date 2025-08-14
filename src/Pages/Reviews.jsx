import React from "react";
import { FiStar } from "react-icons/fi";

const Stars = ({ score = 5, size = "h-4 w-4" }) => (
  <div className="flex gap-1">
    {Array.from({ length: 5 }).map((_, i) => (
      <FiStar
        key={i}
        className={`${size} ${i < Math.round(score) ? "text-[#f5a623]" : "text-[#d9d9d9]"}`}
      />
    ))}
  </div>
);

// Simple initials avatar (keeps things lightweight)
const Avatar = ({ name = "" }) => {
  const initials = name
    .split(" ")
    .map((n) => n[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();
  return (
    <div className="h-9 w-9 rounded-full bg-[#e9eef2] text-[#2f2f2f] flex items-center justify-center text-sm font-semibold">
      {initials || "U"}
    </div>
  );
};

export default function Reviews() {
  // Overall rating summary
  const overall = { rating: 5.0, total: 151 };

  // Top review list (all 5★ as you shared)
  const reviews = [
    {
      name: "Rupam Dutta",
      meta: "4 reviews · a week ago · New",
      text:
        "I am preparing for railway and ssc exams but in my PG there is no environment for long hours study....so I join this library and now I really feel this is the best library.....here it is peaceful and quite along with good comfortable chairs. Owners are also very friendly and approachable.....so I really recommend this library, join here and enure your seat....",
      score: 5,
    },
    {
      name: "Anmol Upadhyaya",
      meta: "2 reviews · 1 photo · a week ago · New",
      text:
        "Excellent place to focus on studies. This place provides a peaceful environment with all basic amenities to focus on your studies.",
      score: 5,
    },
    {
      name: "ARUNJYOTI SARMAH",
      meta: "3 reviews · a week ago · New",
      text:
        "The environment is quiet, and the staff is helpful and polite. It is a great place to gain knowledge, do research, or simply enjoy a good book. Overall, the library is an essential and valuable space for students and book lovers alike.",
      score: 5,
    },
    {
      name: "Prabin Ghimire",
      meta: "1 review · a week ago · New",
      text:
        "Great facility provided by owner... Cosy atmosphere to study ... So far sooooo goooood... I myself change 3 library so far but this one outsmart the others.... GREAT FACILITY 👍",
      score: 5,
    },
    {
      name: "Ankita Sarmah",
      meta: "1 review · a week ago · New",
      text:
        "It's an amazing experience in the library. The environment is truly peaceful and helpful for studying. And it's spacious along with well maintained hygiene and clean atmosphere. A perfect space to boost up your preparation.",
      score: 5,
    },
  ];

  const card =
    "bg-white border border-[#f6f5f2] rounded-2xl shadow-[0_6px_18px_rgba(0,0,0,0.06)] p-5";

  return (
    <section id="reviews" className="bg-[#fffefc] py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading + overall rating */}
        <div className="text-center">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#333333]">Reviews</h2>

          <div className="mt-4 inline-flex items-center gap-3 px-4 py-2 rounded-full border border-[#eceae6] bg-white shadow-sm">
            <Stars score={overall.rating} />
            <span className="text-[#333333] font-semibold">{overall.rating.toFixed(1)}</span>
            <span className="text-[#6f6f6f] text-sm">({overall.total} reviews)</span>
          </div>

          {/* Optional: link to Google reviews page if you have it */}
          {/* <p className="mt-2 text-[12px] text-[#6f6f6f]">
            Powered by Google — <a href="https://maps.google.com/?q=Janaki%20Library" className="underline">See all reviews</a>
          </p> */}
        </div>

        {/* Top reviews grid */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          {reviews.map((r, i) => (
            <div key={i} className={card}>
              {/* Header row */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Avatar name={r.name} />
                  <div>
                    <p className="text-sm font-semibold text-[#333333]">{r.name}</p>
                    <p className="text-[12px] text-[#6f6f6f]">{r.meta}</p>
                  </div>
                </div>
                <span className="inline-flex items-center rounded-full border border-[#dde4e9] bg-[#f7fafc] px-2 py-1 text-[11px] text-[#2e4050]">
                  Top review
                </span>
              </div>

              {/* Stars + text */}
              <div className="mt-3">
                <Stars score={r.score} />
              </div>
              <p className="mt-3 text-[#333333] text-sm leading-relaxed">
                “{r.text}”
              </p>
            </div>
          ))}
        </div>

        {/* CTA row (optional): invite users to book after reading reviews */}
        <div className="mt-8 text-center">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-[20px] px-5 py-3 font-bold
                       border border-[#a8c1d1] text-[#333333] hover:bg-[#f0f6f8] transition-colors duration-200"
          >
            Read more & Contact us
            <span className="transition-transform group-hover:translate-x-0.5">›</span>
          </a>
        </div>
      </div>
    </section>
  );
}
