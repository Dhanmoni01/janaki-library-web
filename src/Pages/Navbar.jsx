import React, { useEffect, useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";
import logo from "../assets/JanakiLogo.png";
import Logo from "../components/Logo.jsx";
import LogoStack from "../components/LogoStack.jsx";
import LogoBookmark from "../components/LogoBookmark.jsx";

export default function Navbar({ onOpenBookNow }) {
  const [open, setOpen] = useState(false);

  // Fixed header height (h-20 = 80px). Keep in sync with className below.
  const NAV_HEIGHT = 80;
  const offsetVal = -NAV_HEIGHT; // so sections aren't hidden under the header

  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = prev; };
  }, [open]);

  const navItem =
    "text-[#333333] font-bold px-4 py-2 rounded-[10px] transition-colors duration-200 hover:bg-[#fffcf8] hover:text-[#333333] cursor-pointer";
  const navItemActive =
    "bg-[#fffcf8] text-[#333333]";

  const handleBookNow = () => {
    setOpen(false);
    Promise.resolve().then(() => onOpenBookNow && onOpenBookNow());
  };

  const navLinks = [
    { label: "About Us", to: "about" },
    { label: "Services", to: "services" },
    { label: "Fee Structure", to: "fees" },
    { label: "Gallery", to: "gallery" },
    { label: "Reviews", to: "reviews" },
    // If you want Contact in the menu later: { label: "Contact", to: "contact" },
  ];

  return (
    <header className="w-full bg-[#fffefc] shadow-md h-20 sticky top-0 z-40">
      <div className="px-4 flex items-center h-full w-full">
        {/* Mobile hamburger (left) */}
        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen(true)}
          className="md:hidden inline-flex items-center justify-center p-3 rounded-lg
                     border border-[#f6f5f2] hover:bg-[#fffcf8] transition-colors"
        >
          <FiMenu className="w-6 h-6 text-[#333333]" />
        </button>

        {/* Logo (click = scroll to top) */}
        <button
          onClick={() => scroll.scrollToTop({ duration: 500, smooth: true })}
          className="ml-auto md:ml-0"
          aria-label="Go to top"
        >
          {/* <img
            src={logo}
            alt="Janaki Library"
            className="w-12 h-12 md:w-16 md:h-16 object-contain"
          /> */}
          <LogoBookmark/>
        </button>

        {/* Spacer pushes nav right on desktop */}
        <div className="hidden md:block flex-1" />

        {/* Desktop menu + CTA */}
        <div className="hidden md:flex items-center gap-8">
          <ul className="flex gap-8">
            {navLinks.map(({ label, to }) => (
              <li key={to}>
                <ScrollLink
                  to={to}
                  spy={true}
                  smooth={true}
                  duration={500}
                  offset={offsetVal}
                  activeClass={navItemActive}
                  className={navItem}
                >
                  {label}
                </ScrollLink>
              </li>
            ))}
          </ul>
          <button
            onClick={handleBookNow}
            className="bg-[#48b3f6] text-white rounded-[20px] px-4 py-2 font-bold
                       transition-colors duration-200
                       hover:bg-[#8ad1f5] hover:text-[#333333]
                       active:bg-[#769daf]
                       disabled:bg-[#d1dce1] disabled:text-white disabled:cursor-not-allowed disabled:opacity-70"
          >
            Book a seat
          </button>
        </div>
      </div>

      {/* MOBILE DRAWER */}
      <div
        className={`fixed inset-0 z-50 md:hidden ${open ? "pointer-events-auto" : "pointer-events-none"}`}
        aria-hidden={!open}
      >
        {/* Backdrop */}
        <div
          className={`absolute inset-0 bg-black/40 transition-opacity duration-300 ${open ? "opacity-100" : "opacity-0"}`}
          onClick={() => setOpen(false)}
        />
        {/* Panel */}
        <aside
          className={`absolute inset-y-0 left-0 w-full bg-[#fffefc] transition-transform duration-300 ease-out
                      ${open ? "translate-x-0" : "-translate-x-full"}`}
          role="dialog" aria-modal="true"
        >
          {/* Panel header */}
          <div className="flex items-center justify-between p-4 border-b border-[#f6f5f2]">
            {/* <img src={logo} alt="Janaki Library" className="w-12 h-12 object-contain" /> */}
            <LogoBookmark/>
            <button
              type="button"
              aria-label="Close menu"
              onClick={() => setOpen(false)}
              className="p-3 rounded-lg border border-[#f6f5f2] hover:bg-[#fffcf8] transition-colors"
            >
              <FiX className="w-6 h-6 text-[#333333]" />
            </button>
          </div>

          {/* Links */}
          <div className="p-4">
            <ul className="flex flex-col divide-y divide-[#f6f5f2]">
              {navLinks.map(({ label, to }) => (
                <li key={`m-${to}`} className="py-2">
                  <ScrollLink
                    to={to}
                    spy={true}
                    smooth={true}
                    duration={500}
                    offset={offsetVal}
                    onClick={() => setOpen(false)}
                    className={navItem}
                    activeClass={navItemActive}
                  >
                    {label}
                  </ScrollLink>
                </li>
              ))}
            </ul>

            <div className="pt-4">
              <button
                onClick={handleBookNow}
                className="w-full bg-[#48b3f6] text-white rounded-[20px] px-4 py-2 font-bold
                           transition-colors duration-200
                           hover:bg-[#8ad1f5] hover:text-[#333333]
                           active:bg-[#769daf]
                           disabled:bg-[#d1dce1] disabled:text-white disabled:cursor-not-allowed disabled:opacity-70"
              >
                Book a seat
              </button>
            </div>
          </div>
        </aside>
      </div>
    </header>
  );
}


