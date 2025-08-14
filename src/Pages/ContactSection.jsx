import React from "react";

export default function ContactSection({ onOpenBookNow }) {
  //  Replace this with your real Google Maps embed URL once you have it.
  // Quick way: open Google Maps → search your library → Share → Embed a map → Copy HTML → grab the src value.
  const mapSrc =
    "https://www.google.com/maps?q=Janaki%20Library&output=embed"; // placeholder

  return (
    <section id="contact" className="bg-[#fffefc] py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <h2 className="text-2xl sm:text-3xl font-extrabold text-[#333333] text-center">
          Contact Us
        </h2>

        {/* 2-column layout: left = contact/CTA, right = map */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-stretch">
          {/* Left: Contact content */}
          <div className="text-center md:text-left">
            <p className="text-[#555555]">
              Have questions or want to reserve a seat? Send us a message—we’ll get back quickly.
            </p>

            <div className="mt-6 flex justify-center md:justify-start">
              <button
                onClick={onOpenBookNow}
                className="bg-[#48b3f6] text-white rounded-[20px] px-6 py-3 font-bold
                           transition-colors duration-200
                           hover:bg-[#8ad1f5] hover:text-[#333333]
                           active:bg-[#769daf]
                           focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#8ad1f5]"
              >
                Open Contact Form
              </button>
            </div>

            <div className="mt-6 text-sm text-[#6f6f6f] space-y-2">
              {/* <p>
                Email: <span className="text-[#2f2f2f]"></span>
              </p> */}
              {/* Optional phone */}
              {/* <p>Phone: <span className="text-[#2f2f2f]">+91-XXXXXXXXXX</span></p> */}
              <p className="text-[#2f2f2f]">
                Janaki Library<br />
                Bishnu Rabha Path, Zoo Rd,<br />
                Guwahati, Assam 781001
              </p>
              {/* View on Google Maps link */}
              <p>
                <a
                  href="https://maps.google.com/?q=Janaki%20Library"
                  target="_blank"
                  rel="noreferrer"
                  className="underline text-[#2e4050]"
                >
                  View on Google Maps
                </a>
              </p>
            </div>
          </div>

          {/* Right: Map card */}
          <div className="bg-white border border-[#f6f5f2] rounded-2xl shadow-[0_6px_18px_rgba(0,0,0,0.06)] overflow-hidden">
            <div className="aspect-[16/10] w-full">
              <iframe
                title="Janaki Library Location"
                src={mapSrc}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full"
              />
            </div>
            {/* Optional map footer */}
            <div className="px-4 py-3 border-t border-[#f6f5f2] text-sm text-[#6f6f6f]">
              Use two fingers to move the map on mobile.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

