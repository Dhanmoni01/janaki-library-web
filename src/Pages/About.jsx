import React from "react";
import img1 from "../assets/Photo-24.jpeg";
import img2 from "../assets/Photo-2.jpg";
import img3 from "../assets/Photo-3.jpg";

export default function About() {
  const sections = [
    {
      text: `At Janaki Library, we understand the struggles students face—long hours, distractions, and the pressure to succeed. After personally experiencing different libraries, we worked to address almost all those problems and created a space built only for students.`,
      img: img1,
      alt: "Quiet, comfortable study desks with focused lighting",
    },
    {
      text: `This is not just another library in Guwahati—it’s a focused study hub with the right environment, resources, and discipline to make learning effective.`,
      img: img2,
      alt: "Private cabin with desk and chair for distraction-free study",
    },
    {
      text: `Here, you’re never alone. You’ll find a community of like-minded learners who make the journey of study easier, lighter, and more motivating.`,
      img: img3,
      alt: "Students studying quietly in a shared space",
    },
  ];

  return (
    <section id="about" className="bg-[#fffefc] py-12 md:py-16 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-[#1f2937]">About Us</h2>

        <div className="mt-8 md:mt-10 space-y-10 md:space-y-16">
          {sections.map((s, idx) => (
            <AboutRow
              key={idx}
              text={s.text}
              img={s.img}
              alt={s.alt}
              // Alternates sides from md+; remove `md:` prefix to alternate even on mobile
              reverse={idx % 2 === 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function AboutRow({ text, img, alt, reverse = false }) {
  return (
    <div
      className={`flex flex-col gap-6 md:gap-12 ${
        reverse ? "md:flex-row-reverse" : "md:flex-row"
      } md:items-center`}  // ⬅️ center children vertically on laptop/desktop
    >
      {/* Text block */}
      <div className="w-full md:w-1/2 md:self-center">  {/* ⬅️ ensure this child centers */}
        <div className="bg-white/80 backdrop-blur-sm border border-[#f6f5f2] rounded-2xl shadow-[0_6px_18px_rgba(0,0,0,0.06)] p-5 sm:p-6 max-w-[48ch]">
          {/*            ↑ keep a nice readable line-length on wide screens */}
          <p className="text-[#2f2f2f] leading-relaxed">{text}</p>
        </div>
      </div>

      {/* Image block */}
      <div className="w-full md:w-1/2">
        <figure className="relative rounded-2xl overflow-hidden ring-1 ring-black/5 shadow-[0_10px_24px_rgba(0,0,0,0.12)]">
          <div className="relative w-full aspect-[4/3] sm:aspect-[5/4]">
            <img
              src={img}
              alt={alt}
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div
              aria-hidden="true"
              className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/35 via-black/10 to-transparent"
            />
          </div>
          <span
            aria-hidden="true"
            className="hidden sm:block absolute -z-10 -top-4 -left-4 w-24 h-24 rounded-2xl bg-[#fffcf8]"
          />
        </figure>
      </div>
    </div>
  );
}
