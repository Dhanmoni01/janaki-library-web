import React, { useEffect, useRef, useState } from "react";
import {
  FiWind,
  FiWifi,
  FiCheckCircle,
  FiLock,
  FiDroplet,
  FiClock,
  FiCalendar,
  FiTrendingUp,
} from "react-icons/fi";

export default function ServicesAndFees() {
  const serviceItems = [
    { title: "Cool & Calm Ambience", desc: "Full AC comfort all day", icon: <FiWind /> },
    { title: "Superfast Wi-Fi", desc: "Stay connected,stay productive", icon: <FiWifi /> },
    { title: "Ergonomic Chairs", desc: "Study long hours without discomfort", icon: <FiCheckCircle /> },
    { title: "Personal Cabinets", desc: "Keep your books and notes safe with lockers", icon: <FiLock /> },
    { title: "RO Water", desc: "Stay refreshed, stay focused", icon: <FiDroplet /> },
  ];

  const feeItems = [
    { title: "Per Day", desc: "Only @100₹", icon: <FiClock /> },
    { title: "Weekly", desc: "Only @600₹", icon: <FiCalendar /> },
    { title: "Fortnightly", desc: "Only @1000₹", icon: <FiCalendar /> },
    { title: "Monthly", desc: "Only @1750₹", icon: <FiCalendar /> },
    { title: "Quarterly", desc: "Only @5000₹", icon: <FiCalendar /> },
    { title: "Half Yearly", desc: "Only @9000₹", icon: <FiCalendar /> },
    { title: "Yearly", desc: "Only @17000₹", icon: <FiTrendingUp /> },
  ];

  // Card styles (unchanged)
  const cardBase =
    "rounded-xl border border-[#e8e6e2] bg-white " +
    "shadow-[0_1px_2px_rgba(0,0,0,0.04)] md:hover:shadow-[0_6px_20px_rgba(0,0,0,0.08)] " +
    "transition-shadow min-w-[11rem] h-[11rem] mx-2 p-4 " +
    "flex flex-col items-center text-center sm:items-start sm:text-left justify-between";

  const iconWrap =
    "inline-flex h-9 w-9 items-center justify-center rounded-lg bg-[#f5f8fa] text-[#4b6f82]";

  return (
    <section className="bg-[#fffefc] py-12 md:py-16 overflow-hidden" id="services">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Our Services */}
        <h2 className="text-2xl sm:text-3xl font-extrabold text-[#333333] text-center">
          Our Services
        </h2>

        {/* Scrollable + auto-scrolling row (left direction) */}
        <div className="mt-6 relative">
          <ScrollableMarquee
            items={serviceItems}
            direction="left"
            speed={0.6}                 // px per frame (~36px/s @60fps). Lower = slower
            gradientColor="#fffefc"
            renderItem={(item, i) => (
              <div key={`svc-${i}`} className={cardBase} aria-label={item.title}>
                <div className="flex items-center gap-2 text-[#2f2f2f]">
                  <span className={iconWrap}>{item.icon}</span>
                  <div className="text-[15px] font-semibold">{item.title}</div>
                </div>
                <div className="text-[12px] text-[#6f6f6f]">{item.desc}</div>
              </div>
            )}
          />
        </div>

        {/* Fee Structure */}
        <section id="fees">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#333333] text-center mt-12">
            Fee Structure
          </h2>
        </section>

        {/* Scrollable + auto-scrolling row (right direction) */}
        <div className="mt-6 relative">
          <ScrollableMarquee
            items={feeItems}
            direction="right"
            speed={0.6}
            gradientColor="#fffefc"
            renderItem={(item, i) => (
              <div key={`fee-${i}`} className={cardBase} aria-label={item.title}>
                <div className="flex items-center gap-2 text-[#2f2f2f]">
                  <span className={iconWrap}>{item.icon}</span>
                  <div className="text-[15px] font-semibold">{item.title}</div>
                </div>
                <span className="mt-2 inline-flex items-center rounded-full border border-[#dde4e9] bg-[#f7fafc] px-2 py-1 text-[12px] text-[#2e4050]">
                  {item.desc}
                </span>
              </div>
            )}
          />
        </div>

      </div>
    </section>
  );
}

/* ===========================================
   ScrollableMarquee: native scroll + auto loop
   =========================================== */
function ScrollableMarquee({
  items,
  renderItem,
  direction = "left",   // "left" | "right"
  speed = 0.5,          // px per frame
  gradientColor = "#fffefc",
}) {
  const ref = useRef(null);
  const [paused, setPaused] = useState(false);
  const [dragging, setDragging] = useState(false);
  const startX = useRef(0);
  const startScroll = useRef(0);
  const raf = useRef(0);

  // Auto-scroll loop
  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const dir = direction === "left" ? 1 : -1;

    const tick = () => {
      if (!paused && !dragging) {
        el.scrollLeft += dir * speed;
        const max = el.scrollWidth - el.clientWidth;

        // loop seamlessly by resetting scrollLeft when reaching either end
        if (el.scrollLeft >= max - 1) el.scrollLeft = 0;
        if (el.scrollLeft <= 0) el.scrollLeft = max;
      }
      raf.current = requestAnimationFrame(tick);
    };

    raf.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf.current);
  }, [paused, dragging, direction, speed]);

  // Drag-to-scroll (desktop & touch)
  const onPointerDown = (e) => {
    const el = ref.current;
    if (!el) return;
    setDragging(true);
    setPaused(true);
    startX.current = e.clientX ?? e.touches?.[0]?.clientX ?? 0;
    startScroll.current = el.scrollLeft;
    el.setPointerCapture?.(e.pointerId);
  };

  const onPointerMove = (e) => {
    if (!dragging) return;
    const el = ref.current;
    const x = e.clientX ?? e.touches?.[0]?.clientX ?? 0;
    el.scrollLeft = startScroll.current + (startX.current - x);
  };

  const onPointerUp = (e) => {
    const el = ref.current;
    setDragging(false);
    setPaused(false);
    el?.releasePointerCapture?.(e.pointerId);
  };

  return (
    <div className="relative">
      {/* gradient fades (like Marquee's gradient) */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-0 top-0 h-full w-10 z-10"
        style={{
          background: `linear-gradient(to right, ${gradientColor}, rgba(255,255,255,0))`,
        }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-0 top-0 h-full w-10 z-10"
        style={{
          background: `linear-gradient(to left, ${gradientColor}, rgba(255,255,255,0))`,
        }}
      />

      {/* scrollable track */}
      <div
        ref={ref}
        className="relative overflow-x-auto overscroll-x-contain py-2"
        // Optional: hide scrollbars via global CSS .no-scrollbar
        // className="relative overflow-x-auto no-scrollbar py-2"
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={onPointerUp}
        onPointerCancel={onPointerUp}
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => !dragging && setPaused(false)}
        onTouchStart={() => setPaused(true)}
        onTouchEnd={() => setPaused(false)}
        role="region"
        aria-label="Marquee content"
      >
        {/* Duplicate content 3x so looping feels seamless */}
        <div className="flex items-stretch">
          {[...Array(3)].map((_, block) => (
            <div key={block} className="flex items-stretch">
              {items.map((it, i) => renderItem(it, `${block}-${i}`))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
