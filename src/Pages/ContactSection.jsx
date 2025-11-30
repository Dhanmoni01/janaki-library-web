import React from "react";
import {
  FiFacebook,
  FiInstagram,
  FiTwitter,   // X (Twitter) icon
  FiYoutube,
  FiLinkedin,
} from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa"; 
import { MdDialerSip } from "react-icons/md";



export default function ContactSection({ onOpenBookNow }) {
  const mapSrc = "https://www.google.com/maps?q=Janaki%20Library&output=embed";

  // NEW: centralize your social links (replace hrefs with real URLs)
  const socials = [
    { name: "Instagram", href: "https://www.instagram.com/janakilibrary/", icon: FiInstagram },
    { name: "Whatsapp",  href: "https://wa.me/918134810159",   icon: FaWhatsapp },
    { name: "Dialer", href: "tel:8134810159", icon: MdDialerSip },

  ];

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

            {/* NEW: Social icons row */}
            <nav aria-label="Social media" className="mt-6">
              <ul className="flex flex-wrap gap-3 justify-center md:justify-start">
                {socials.map(({ name, href, icon: IconCmp }) => (
                  <li key={name}>
                    <a
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${name} — opens in a new tab`}
                      title={name}
                      className="group inline-flex items-center justify-center
                                 w-11 h-11 rounded-full
                                 border border-[#e8e5de] bg-white/80 backdrop-blur-sm
                                 text-[#2e4050] shadow-sm
                                 hover:shadow-md hover:bg-white
                                 transition-all duration-200
                                 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#8ad1f5]"
                    >
                      <IconCmp className="w-5 h-5 transition-transform group-hover:scale-110" />
                      <span className="sr-only">{name}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </nav>

            <div className="mt-6 text-sm text-[#6f6f6f] space-y-2">
              <p className="text-[#2f2f2f]">
                Janaki Library<br />
                Bishnu Rabha Path, Zoo Rd,<br />
                Guwahati, Assam 781001,<br/>
                Contact- 81348 10159
              </p>
              <p>
                <a
                  href="https://maps.google.com/?q=Janaki%20Library"
                  target="_blank"
                  rel="noopener noreferrer"
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
            <div className="px-4 py-3 border-t border-[#f6f5f2] text-sm text-[#6f6f6f]">
              Use two fingers to move the map on mobile.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

