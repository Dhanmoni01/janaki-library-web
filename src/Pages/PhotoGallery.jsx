import React, { useState } from "react";
import Lightbox from "yet-another-react-lightbox";

// --- Import ALL your images here (showing 6 for brevity; add the rest) ---
import img1 from "../assets/Photo-1.jpg";
import img2 from "../assets/Photo-2.jpg";
import img3 from "../assets/Photo-3.jpg";
import img4 from "../assets/Photo-4.jpg";
import img5 from "../assets/Photo-5.jpg";
import img6 from "../assets/Photo-6.jpg";
import img7 from "../assets/Photo-7.jpg";
import img8 from "../assets/Photo-8.jpg";
import img9 from "../assets/Photo-9.jpg";
import img10 from "../assets/Photo-10.jpg";
import img11 from "../assets/Photo-11.jpg";
import img12 from "../assets/Photo-12.jpg";
import img13 from "../assets/Photo-13.jpg";
import img14 from "../assets/Photo-14.jpg";
import img15 from "../assets/Photo-15.jpg";
import img16 from "../assets/Photo-16.jpg";
import img17 from "../assets/Photo-17.jpg";
import img18 from "../assets/Photo-18.jpg";
import img19 from "../assets/Photo-19.jpg";
import img20 from "../assets/Photo-20.jpg";
import img21 from "../assets/Photo-21.jpg";
import img22 from "../assets/Photo-22.jpg";

export default function PhotoGallery() {
  const images = [
    img1, img2, img3, img4, img5, img6,
    img7, img8,img9, img10, img11, img12,
    img13, img14, img15, img16, img17, img18,
    img19, img20, img21, img22
  ];

  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);

  const card =
    "bg-white border border-[#f6f5f2] rounded-2xl shadow-[0_6px_18px_rgba(0,0,0,0.06)] overflow-hidden";

  const firstSix = images.slice(0, 6);
  const remaining = images.length - 6; 

  const openAt = (i) => {
    setIndex(i);
    setOpen(true);
  };

  return (
    <section id="gallery" className="bg-[#fffefc] py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-[#333333] text-center">
          Photo Gallery
        </h2>

        {/* Grid: first 6 tiles; the 6th is a "more" tile if there are extra images */}
        <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {/* First 5 plain tiles (or fewer if images < 6) */}
          {firstSix.slice(0, Math.min(5, firstSix.length)).map((src, i) => (
            <button
              key={`plain-${i}`}
              onClick={() => openAt(i)}
              className={`${card} group focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#a8c1d1]`}
            >
              <img
                src={src}
                alt={`Gallery ${i + 1}`}
                className="aspect-[4/3] w-full object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                loading="lazy"
              />
            </button>
          ))}

          {/* 6th tile: blur overlay with "+N more" if there are remaining images; 
              otherwise render the normal 6th tile */}
          {firstSix[5] && (
            remaining > 0 ? (
              <button
                key="more-tile"
                onClick={() => openAt(5)} 
                className={`${card} relative group focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#a8c1d1]`}
                aria-label={`View ${remaining} more photos`}
              >
                <img
                  src={firstSix[5]}
                  alt="More photos"
                  className="aspect-[4/3] w-full object-cover filter blur-[2px] brightness-75 scale-100"
                  loading="lazy"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="inline-flex items-center rounded-full bg-white/90 border border-[#eceae6] px-3 py-1.5 text-sm font-semibold text-[#2f2f2f] shadow-sm">
                    +{remaining} more
                  </span>
                </div>
              </button>
            ) : (
              <button
                key="sixth-plain"
                onClick={() => openAt(5)}
                className={`${card} group focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#a8c1d1]`}
              >
                <img
                  src={firstSix[5]}
                  alt="Gallery 6"
                  className="aspect-[4/3] w-full object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                  loading="lazy"
                />
              </button>
            )
          )}
        </div>

        {/* Lightbox with ALL images */}
        {open && (
          <Lightbox
            open={open}
            close={() => setOpen(false)}
            index={index}
            slides={images.map((src) => ({ src }))}
          />
        )}
      </div>
    </section>
  );
}
