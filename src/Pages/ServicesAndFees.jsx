// import React, { useEffect, useRef, useState } from "react";
// import {
//   FiWind,
//   FiWifi,
//   FiCheckCircle,
//   FiLock,
//   FiDroplet,
//   FiClock,
//   FiCalendar,
//   FiTrendingUp,
// } from "react-icons/fi";

// export default function ServicesAndFees() {
//   const serviceItems = [
//     { title: "Cool & Calm Ambience", desc: "Full AC comfort all day", icon: <FiWind /> },
//     { title: "Superfast Wi-Fi", desc: "Stay connected,stay productive", icon: <FiWifi /> },
//     { title: "Ergonomic Chairs", desc: "Study long hours without discomfort", icon: <FiCheckCircle /> },
//     { title: "Personal Cabinets", desc: "Keep your books and notes safe with lockers", icon: <FiLock /> },
//     { title: "RO Water", desc: "Stay refreshed, stay focused", icon: <FiDroplet /> },
//   ];

//   const feeItems = [
//     { title: "Per Day", desc: "Only @100₹", icon: <FiClock /> },
//     { title: "Weekly", desc: "Only @600₹", icon: <FiCalendar /> },
//     { title: "Fortnightly", desc: "Only @1000₹", icon: <FiCalendar /> },
//     { title: "Monthly", desc: "Only @1750₹", icon: <FiCalendar /> },
//     { title: "Quarterly", desc: "Only @5000₹", icon: <FiCalendar /> },
//     { title: "Half Yearly", desc: "Only @9000₹", icon: <FiCalendar /> },
//     { title: "Yearly", desc: "Only @17000₹", icon: <FiTrendingUp /> },
//   ];

//   // Card styles (unchanged)
//   const cardBase =
//     "rounded-xl border border-[#e8e6e2] bg-white " +
//     "shadow-[0_1px_2px_rgba(0,0,0,0.04)] md:hover:shadow-[0_6px_20px_rgba(0,0,0,0.08)] " +
//     "transition-shadow min-w-[11rem] h-[11rem] mx-2 p-4 " +
//     "flex flex-col items-center text-center sm:items-start sm:text-left justify-between";

//   const iconWrap =
//     "inline-flex h-9 w-9 items-center justify-center rounded-lg bg-[#f5f8fa] text-[#4b6f82]";

//   return (
//     <section className="bg-[#fffefc] py-12 md:py-16 overflow-hidden" id="services">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

//         {/* Our Services */}
//         <h2 className="text-2xl sm:text-3xl font-extrabold text-[#333333] text-center">
//           Our Services
//         </h2>

//         {/* Scrollable + auto-scrolling row (left direction) */}
//         <div className="mt-6 relative">
//           <ScrollableMarquee
//             items={serviceItems}
//             direction="left"
//             speed={0.6}                 // px per frame (~36px/s @60fps). Lower = slower
//             gradientColor="#fffefc"
//             renderItem={(item, i) => (
//               <div key={`svc-${i}`} className={cardBase} aria-label={item.title}>
//                 <div className="flex items-center gap-2 text-[#2f2f2f]">
//                   <span className={iconWrap}>{item.icon}</span>
//                   <div className="text-[15px] font-semibold">{item.title}</div>
//                 </div>
//                 <div className="text-[12px] text-[#6f6f6f]">{item.desc}</div>
//               </div>
//             )}
//           />
//         </div>

//         {/* Fee Structure */}
//         <section id="fees">
//           <h2 className="text-2xl sm:text-3xl font-extrabold text-[#333333] text-center mt-12">
//             Fee Structure
//           </h2>
//         </section>

//         {/* Scrollable + auto-scrolling row (right direction) */}
//         <div className="mt-6 relative">
//           <ScrollableMarquee
//             items={feeItems}
//             direction="right"
//             speed={0.6}
//             gradientColor="#fffefc"
//             renderItem={(item, i) => (
//               <div key={`fee-${i}`} className={cardBase} aria-label={item.title}>
//                 <div className="flex items-center gap-2 text-[#2f2f2f]">
//                   <span className={iconWrap}>{item.icon}</span>
//                   <div className="text-[15px] font-semibold">{item.title}</div>
//                 </div>
//                 <span className="mt-2 inline-flex items-center rounded-full border border-[#dde4e9] bg-[#f7fafc] px-2 py-1 text-[12px] text-[#2e4050]">
//                   {item.desc}
//                 </span>
//               </div>
//             )}
//           />
//         </div>

//       </div>
//     </section>
//   );
// }

// /* ===========================================
//    ScrollableMarquee: native scroll + auto loop
//    =========================================== */
// function ScrollableMarquee({
//   items,
//   renderItem,
//   direction = "left",   // "left" | "right"
//   speed = 0.5,          // px per frame
//   gradientColor = "#fffefc",
// }) {
//   const ref = useRef(null);
//   const [paused, setPaused] = useState(false);
//   const [dragging, setDragging] = useState(false);
//   const startX = useRef(0);
//   const startScroll = useRef(0);
//   const raf = useRef(0);

//   // Auto-scroll loop
//   useEffect(() => {
//     const el = ref.current;
//     if (!el) return;

//     const dir = direction === "left" ? 1 : -1;

//     const tick = () => {
//       if (!paused && !dragging) {
//         el.scrollLeft += dir * speed;
//         const max = el.scrollWidth - el.clientWidth;

//         // loop seamlessly by resetting scrollLeft when reaching either end
//         if (el.scrollLeft >= max - 1) el.scrollLeft = 0;
//         if (el.scrollLeft <= 0) el.scrollLeft = max;
//       }
//       raf.current = requestAnimationFrame(tick);
//     };

//     raf.current = requestAnimationFrame(tick);
//     return () => cancelAnimationFrame(raf.current);
//   }, [paused, dragging, direction, speed]);

//   // Drag-to-scroll (desktop & touch)
//   const onPointerDown = (e) => {
//     const el = ref.current;
//     if (!el) return;
//     setDragging(true);
//     setPaused(true);
//     startX.current = e.clientX ?? e.touches?.[0]?.clientX ?? 0;
//     startScroll.current = el.scrollLeft;
//     el.setPointerCapture?.(e.pointerId);
//   };

//   const onPointerMove = (e) => {
//     if (!dragging) return;
//     const el = ref.current;
//     const x = e.clientX ?? e.touches?.[0]?.clientX ?? 0;
//     el.scrollLeft = startScroll.current + (startX.current - x);
//   };

//   const onPointerUp = (e) => {
//     const el = ref.current;
//     setDragging(false);
//     setPaused(false);
//     el?.releasePointerCapture?.(e.pointerId);
//   };

//   return (
//     <div className="relative">
//       {/* gradient fades (like Marquee's gradient) */}
//       <div
//         aria-hidden="true"
//         className="pointer-events-none absolute left-0 top-0 h-full w-10 z-10"
//         style={{
//           background: `linear-gradient(to right, ${gradientColor}, rgba(255,255,255,0))`,
//         }}
//       />
//       <div
//         aria-hidden="true"
//         className="pointer-events-none absolute right-0 top-0 h-full w-10 z-10"
//         style={{
//           background: `linear-gradient(to left, ${gradientColor}, rgba(255,255,255,0))`,
//         }}
//       />

//       {/* scrollable track */}
//       <div
//         ref={ref}
//         className="relative overflow-x-auto overscroll-x-contain py-2"
//         // Optional: hide scrollbars via global CSS .no-scrollbar
//         // className="relative overflow-x-auto no-scrollbar py-2"
//         onPointerDown={onPointerDown}
//         onPointerMove={onPointerMove}
//         onPointerUp={onPointerUp}
//         onPointerCancel={onPointerUp}
//         onMouseEnter={() => setPaused(true)}
//         onMouseLeave={() => !dragging && setPaused(false)}
//         onTouchStart={() => setPaused(true)}
//         onTouchEnd={() => setPaused(false)}
//         role="region"
//         aria-label="Marquee content"
//       >
//         {/* Duplicate content 3x so looping feels seamless */}
//         <div className="flex items-stretch">
//           {[...Array(3)].map((_, block) => (
//             <div key={block} className="flex items-stretch">
//               {items.map((it, i) => renderItem(it, `${block}-${i}`))}
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }




// import React, { useEffect, useRef, useState } from "react";
// import {
//   FiWind, FiWifi, FiCheckCircle, FiLock, FiDroplet,
//   FiClock, FiCalendar, FiTrendingUp, FiCheck
// } from "react-icons/fi";

// /* ============================
//    Services + Pricing (modern)
//    ============================ */
// export default function ServicesAndFees({ onOpenBookNow }) {
//   const serviceItems = [
//     { title: "Cool & Calm Ambience", desc: "Full AC comfort all day", icon: <FiWind /> },
//     { title: "Superfast Wi-Fi", desc: "Stay connected,stay productive", icon: <FiWifi /> },
//     { title: "Ergonomic Chairs", desc: "Study long hours without discomfort", icon: <FiCheckCircle /> },
//     { title: "Personal Cabinets", desc: "Keep your books and notes safe with lockers", icon: <FiLock /> },
//     { title: "RO Water", desc: "Stay refreshed, stay focused", icon: <FiDroplet /> },
//   ];

//   // Card styles for marquee (unchanged)
//   const cardBase =
//     "rounded-xl border border-[#e8e6e2] bg-white " +
//     "shadow-[0_1px_2px_rgba(0,0,0,0.04)] md:hover:shadow-[0_6px_20px_rgba(0,0,0,0.08)] " +
//     "transition-shadow min-w-[11rem] h-[11rem] mx-2 p-4 " +
//     "flex flex-col items-center text-center sm:items-start sm:text-left justify-between";
//   const iconWrap =
//     "inline-flex h-9 w-9 items-center justify-center rounded-lg bg-[#f5f8fa] text-[#4b6f82]";

//   return (
//     <section className="bg-[#fffefc] py-12 md:py-16 overflow-hidden" id="services">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

//         {/* Our Services */}
//         <h2 className="text-2xl sm:text-3xl font-extrabold text-[#333333] text-center">
//           Our Services
//         </h2>

//         <div className="mt-6 relative">
//           <ScrollableMarquee
//             items={serviceItems}
//             direction="left"
//             speed={0.6}
//             gradientColor="#fffefc"
//             renderItem={(item, i) => (
//               <div key={`svc-${i}`} className={cardBase} aria-label={item.title}>
//                 <div className="flex items-center gap-2 text-[#2f2f2f]">
//                   <span className={iconWrap}>{item.icon}</span>
//                   <div className="text-[15px] font-semibold">{item.title}</div>
//                 </div>
//                 <div className="text-[12px] text-[#6f6f6f]">{item.desc}</div>
//               </div>
//             )}
//           />
//         </div>

//         {/* Modern Pricing Grid */}
//         <section id="fees" className="mt-12">
//           <h2 className="text-2xl sm:text-3xl font-extrabold text-[#333333] text-center">
//             Fee Structure
//           </h2>
//           <p className="text-center text-sm text-[#6f6f6f] mt-2">
//             Simple, transparent pricing. Choose a plan and start studying.
//           </p>

//           {/* <PricingPlans onSelect={(plan) => {
//             if (typeof onOpenBookNow === "function") onOpenBookNow(plan);
//             else window.location.hash = "#contact";
//           }}/> */}
//           <PricingPlans onSelect={(planName) => onOpenBookNow?.(planName)} />
//         </section>
//       </div>
//     </section>
//   );
// }

// /* ============================
//    PricingPlans (subscription-style)
//    ============================ */
// function PricingPlans({ onSelect }) {
//   const plans = [
//     {
//       name: "Per Day",
//       price: 100,
//       period: "day",
//       approx: "—",
//       icon: <FiClock />,
//       badge: null,
//       features: ["AC Wi-Fi", "Quiet hours", "Cafeteria access"],
//     },
//     {
//       name: "Weekly",
//       price: 600,
//       period: "week",
//       approx: "≈ ₹86/day",
//       icon: <FiCalendar />,
//       badge: null,
//       features: ["AC Wi-Fi", "Quiet hours", "Locker access"],
//     },
//     {
//       name: "Fortnightly",
//       price: 1000,
//       period: "15 days",
//       approx: "≈ ₹67/day",
//       icon: <FiCalendar />,
//       badge: null,
//       features: ["AC Wi-Fi", "Quiet hours", "Locker access"],
//     },
//     {
//       name: "Monthly",
//       price: 1750,
//       period: "month",
//       approx: "≈ ₹58/day",
//       icon: <FiCalendar />,
//       badge: "Most Popular",
//       highlight: true,
//       features: ["AC Wi-Fi", "Quiet hours", "Locker access", "Priority seats"],
//     },
//     {
//       name: "Quarterly",
//       price: 5000,
//       period: "3 months",
//       approx: "≈ ₹56/day",
//       icon: <FiCalendar />,
//       badge: null,
//       features: ["AC Wi-Fi", "Quiet hours", "Locker access", "Priority seats"],
//     },
//     {
//       name: "Half Yearly",
//       price: 9000,
//       period: "6 months",
//       approx: "≈ ₹50/day",
//       icon: <FiCalendar />,
//       badge: null,
//       features: ["AC Wi-Fi", "Quiet hours", "Locker access", "Priority seats"],
//     },
//     {
//       name: "Yearly",
//       price: 17000,
//       period: "year",
//       approx: "≈ ₹47/day",
//       icon: <FiTrendingUp />,
//       badge: "Best Value",
//       features: ["AC Wi-Fi", "Quiet hours", "Locker access", "Priority seats"],
//     },
//   ];

//   return (
//     <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
//       {plans.map((p) => (
//         <PriceCard key={p.name} {...p} onSelect={() => onSelect?.(p.name)} />
//       ))}
//     </div>
//   );
// }

// function PriceCard({
//   name, price, period, approx, icon, badge, highlight = false, features, onSelect
// }) {
//   return (
//     <article
//       className={[
//         "relative rounded-2xl border bg-white",
//         highlight ? "border-[#bfe6ff] shadow-[0_12px_30px_rgba(72,179,246,0.25)]" : "border-[#ece9e4] shadow-[0_6px_20px_rgba(0,0,0,0.06)]",
//         "flex flex-col"
//       ].join(" ")}
//       aria-labelledby={`${name}-title`}
//     >
//       {/* Top ribbon/badge */}
//       {badge && (
//         <div className="absolute -top-3 left-1/2 -translate-x-1/2">
//           <span className="inline-flex items-center rounded-full bg-[#48b3f6] text-white text-xs font-semibold px-3 py-1 shadow-sm">
//             {badge}
//           </span>
//         </div>
//       )}

//       {/* Header */}
//       <div className={`p-5 sm:p-6 border-b ${highlight ? "border-[#e3f4ff]" : "border-[#f2efe9]"}`}>
//         <div className="flex items-center gap-2">
//           <span className={`grid h-9 w-9 place-items-center rounded-xl ${highlight ? "bg-[#e8f6ff] text-[#2b6ea3]" : "bg-[#f5f8fa] text-[#4b6f82]"}`}>
//             {icon}
//           </span>
//           <h3 id={`${name}-title`} className="text-[#2f2f2f] font-semibold">
//             {name}
//           </h3>
//         </div>

//         <div className="mt-4 flex items-baseline gap-1">
//           <span className="text-3xl font-extrabold text-[#1f2937]">
//             ₹{price}
//           </span>
//           <span className="text-sm text-[#6f6f6f]">/ {period}</span>
//         </div>
//         {approx && <p className="mt-1 text-xs text-[#7a7a7a]">{approx}</p>}
//       </div>

//       {/* Features */}
//       <ul className="p-5 sm:p-6 space-y-2 text-sm text-[#2e4050] flex-1">
//         {features?.map((f) => (
//           <li key={f} className="flex items-start gap-2">
//             <span className={`inline-flex h-5 w-5 items-center justify-center rounded-full ${highlight ? "bg-[#e8f6ff] text-[#2b6ea3]" : "bg-[#eef3f6] text-[#4b6f82]"}`}>
//               <FiCheck className="h-3.5 w-3.5" />
//             </span>
//             <span className="leading-tight">{f}</span>
//           </li>
//         ))}
//       </ul>

//       {/* CTA */}
//       <div className="p-5 sm:p-6 border-t border-[#f2efe9]">
//         <button
//           onClick={onSelect}
//           className={[
//             "w-full rounded-[14px] px-4 py-2.5 font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2",
//             highlight
//               ? "bg-[#48b3f6] text-white hover:bg-[#8ad1f5] hover:text-[#333333] focus:ring-[#8ad1f5]"
//               : "border border-[#a8c1d1] text-[#333333] hover:bg-[#f0f6f8] focus:ring-[#a8c1d1]"
//           ].join(" ")}
//           aria-label={`Choose ${name} plan for ₹${price} per ${period}`}
//         >
//           Choose {name}
//         </button>
//       </div>
//     </article>
//   );
// }

// /* ===========================================
//    ScrollableMarquee (unchanged from your version)
//    =========================================== */
// function ScrollableMarquee({ items, renderItem, direction = "left", speed = 0.5, gradientColor = "#fffefc" }) {
//   const ref = useRef(null);
//   const [paused, setPaused] = useState(false);
//   const [dragging, setDragging] = useState(false);
//   const startX = useRef(0);
//   const startScroll = useRef(0);
//   const raf = useRef(0);

//   useEffect(() => {
//     const el = ref.current;
//     if (!el) return;
//     const dir = direction === "left" ? 1 : -1;
//     const tick = () => {
//       if (!paused && !dragging) {
//         el.scrollLeft += dir * speed;
//         const max = el.scrollWidth - el.clientWidth;
//         if (el.scrollLeft >= max - 1) el.scrollLeft = 0;
//         if (el.scrollLeft <= 0) el.scrollLeft = max;
//       }
//       raf.current = requestAnimationFrame(tick);
//     };
//     raf.current = requestAnimationFrame(tick);
//     return () => cancelAnimationFrame(raf.current);
//   }, [paused, dragging, direction, speed]);

//   const onPointerDown = (e) => {
//     const el = ref.current; if (!el) return;
//     setDragging(true); setPaused(true);
//     startX.current = e.clientX ?? e.touches?.[0]?.clientX ?? 0;
//     startScroll.current = el.scrollLeft;
//     el.setPointerCapture?.(e.pointerId);
//   };
//   const onPointerMove = (e) => {
//     if (!dragging) return;
//     const el = ref.current;
//     const x = e.clientX ?? e.touches?.[0]?.clientX ?? 0;
//     el.scrollLeft = startScroll.current + (startX.current - x);
//   };
//   const onPointerUp = (e) => {
//     const el = ref.current;
//     setDragging(false); setPaused(false);
//     el?.releasePointerCapture?.(e.pointerId);
//   };

//   return (
//     <div className="relative">
//       <div aria-hidden className="pointer-events-none absolute left-0 top-0 h-full w-10 z-10"
//            style={{ background: `linear-gradient(to right, ${gradientColor}, rgba(255,255,255,0))` }} />
//       <div aria-hidden className="pointer-events-none absolute right-0 top-0 h-full w-10 z-10"
//            style={{ background: `linear-gradient(to left, ${gradientColor}, rgba(255,255,255,0))` }} />
//       <div
//         ref={ref}
//         className="relative overflow-x-auto overscroll-x-contain py-2"
//         onPointerDown={onPointerDown} onPointerMove={onPointerMove}
//         onPointerUp={onPointerUp} onPointerCancel={onPointerUp}
//         onMouseEnter={() => setPaused(true)} onMouseLeave={() => !dragging && setPaused(false)}
//         onTouchStart={() => setPaused(true)} onTouchEnd={() => setPaused(false)}
//         role="region" aria-label="Marquee content"
//       >
//         <div className="flex items-stretch">
//           {[...Array(3)].map((_, block) => (
//             <div key={block} className="flex items-stretch">
//               {items.map((it, i) => renderItem(it, `${block}-${i}`))}
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }



// import React from "react";
// import { motion, useReducedMotion } from "framer-motion";
// import {
//   FiWind, FiWifi, FiCheckCircle, FiLock, FiDroplet,
//   FiClock, FiCalendar, FiTrendingUp, FiCheck
// } from "react-icons/fi";

// /* ============================
//    Services + Pricing (modern)
//    ============================ */
// export default function ServicesAndFees({ onOpenBookNow }) {
//   return (
//     <section className="bg-[#fffefc] py-12 md:py-16" id="services">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

//         {/* Our Services */}
//         <h2 className="text-2xl sm:text-3xl font-extrabold text-[#333333] text-center">
//           Our Services
//         </h2>

//         <ServicesGrid
//           items={[
//             { title: "Cool & Calm Ambience", desc: "Full AC comfort all day", icon: FiWind },
//             { title: "Superfast Wi-Fi",      desc: "Stay connected, stay productive", icon: FiWifi },
//             { title: "Ergonomic Chairs",     desc: "Study long hours without discomfort", icon: FiCheckCircle },
//             { title: "Personal Cabinets",    desc: "Keep your books & notes secure", icon: FiLock },
//             { title: "RO Water",             desc: "Stay refreshed, stay focused", icon: FiDroplet },
//           ]}
//         />

//         {/* Fee Structure */}
//         <section id="fees" className="mt-12">
//           <h2 className="text-2xl sm:text-3xl font-extrabold text-[#333333] text-center">
//             Fee Structure
//           </h2>
//           <p className="text-center text-sm text-[#6f6f6f] mt-2">
//             Simple, transparent pricing. Choose a plan and start studying.
//           </p>

//           <PricingPlans
//             onSelect={(planName) => onOpenBookNow?.(planName)}
//           />
//         </section>
//       </div>
//     </section>
//   );
// }

// /* ============================
//    SERVICES (cohesive with pricing cards)
//    ============================ */
// function ServicesGrid({ items }) {
//   const container = {
//     hidden: {},
//     visible: { transition: { staggerChildren: 0.08 } },
//   };

//   return (
//     <motion.div
//       variants={container}
//       initial="hidden"
//       whileInView="visible"
//       viewport={{ amount: 0.2, once: true }}
//       className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
//     >
//       {items.map((it) => (
//         <ServiceCard key={it.title} {...it} />
//       ))}
//     </motion.div>
//   );
// }

// function ServiceCard({ title, desc, icon: Icon }) {
//   const reduce = useReducedMotion();

//   const cardVariants = {
//     hidden: { opacity: 0, y: reduce ? 0 : 14, scale: 1 },
//     visible: {
//       opacity: 1,
//       y: 0,
//       scale: 1,
//       transition: { type: "spring", stiffness: 380, damping: 30 },
//     },
//   };

//   return (
//     <motion.article
//       variants={cardVariants}
//       whileHover={
//         reduce
//           ? {}
//           : { y: -6, rotateX: 2, rotateY: -2, boxShadow: "0 12px 30px rgba(72,179,246,0.18)" }
//       }
//       whileTap={{ scale: 0.98 }}
//       transition={{ type: "spring", stiffness: 500, damping: 35 }}
//       style={{ transformPerspective: 900, willChange: "transform, box-shadow, opacity" }}
//       className={[
//         "relative rounded-2xl border bg-white",
//         "border-[#ece9e4] shadow-[0_6px_20px_rgba(0,0,0,0.06)]",
//         "focus-within:shadow-[0_12px_30px_rgba(72,179,246,0.25)] focus-within:border-[#bfe6ff]",
//         "p-5 sm:p-6",
//       ].join(" ")}
//     >
//       <div className="flex items-center gap-3">
//         <span
//           className="grid h-10 w-10 place-items-center rounded-xl bg-[#f5f8fa] text-[#2b6ea3]"
//           aria-hidden="true"
//         >
//           <Icon className="h-5 w-5" />
//         </span>
//         <h3 className="text-[#2f2f2f] font-semibold">{title}</h3>
//       </div>

//       <p className="mt-3 text-sm leading-relaxed text-[#2e4050]">{desc}</p>

//       <div className="mt-4 border-t border-[#f2efe9]" />

//       <ul className="mt-3 space-y-2 text-sm text-[#2e4050]">
//         <li className="flex items-start gap-2">
//           <span
//             className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-[#eef3f6] text-[#4b6f82]"
//             aria-hidden="true"
//           >
//             <svg width="14" height="14" viewBox="0 0 24 24" fill="none" className="opacity-90">
//               <path d="M20 6L9 17l-5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
//             </svg>
//           </span>
//           Comfortable seating & quiet zone
//         </li>
//         <li className="flex items-start gap-2">
//           <span
//             className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-[#eef3f6] text-[#4b6f82]"
//             aria-hidden="true"
//           >
//             <svg width="14" height="14" viewBox="0 0 24 24" fill="none" className="opacity-90">
//               <path d="M20 6L9 17l-5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
//             </svg>
//           </span>
//           Clean facilities & RO water
//         </li>
//       </ul>
//     </motion.article>
//   );
// }

// /* ============================
//    PRICING (subscription-style)
//    ============================ */
// function PricingPlans({ onSelect }) {
//   const plans = [
//     {
//       name: "Per Day",
//       price: 100,
//       period: "day",
//       approx: "—",
//       icon: <FiClock />,
//       badge: null,
//       features: ["AC Wi-Fi", "Quiet hours", "Cafeteria access"],
//     },
//     {
//       name: "Weekly",
//       price: 600,
//       period: "week",
//       approx: "≈ ₹86/day",
//       icon: <FiCalendar />,
//       badge: null,
//       features: ["AC Wi-Fi", "Quiet hours", "Locker access"],
//     },
//     {
//       name: "Fortnightly",
//       price: 1000,
//       period: "15 days",
//       approx: "≈ ₹67/day",
//       icon: <FiCalendar />,
//       badge: null,
//       features: ["AC Wi-Fi", "Quiet hours", "Locker access"],
//     },
//     {
//       name: "Monthly",
//       price: 1750,
//       period: "month",
//       approx: "≈ ₹58/day",
//       icon: <FiCalendar />,
//       badge: "Most Popular",
//       highlight: true,
//       features: ["AC Wi-Fi", "Quiet hours", "Locker access", "Priority seats"],
//     },
//     {
//       name: "Quarterly",
//       price: 5000,
//       period: "3 months",
//       approx: "≈ ₹56/day",
//       icon: <FiCalendar />,
//       badge: null,
//       features: ["AC Wi-Fi", "Quiet hours", "Locker access", "Priority seats"],
//     },
//     {
//       name: "Half Yearly",
//       price: 9000,
//       period: "6 months",
//       approx: "≈ ₹50/day",
//       icon: <FiCalendar />,
//       badge: null,
//       features: ["AC Wi-Fi", "Quiet hours", "Locker access", "Priority seats"],
//     },
//     {
//       name: "Yearly",
//       price: 17000,
//       period: "year",
//       approx: "≈ ₹47/day",
//       icon: <FiTrendingUp />,
//       badge: "Best Value",
//       features: ["AC Wi-Fi", "Quiet hours", "Locker access", "Priority seats"],
//     },
//   ];

//   return (
//     <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
//       {plans.map((p) => (
//         <PriceCard key={p.name} {...p} onSelect={() => onSelect?.(p.name)} />
//       ))}
//     </div>
//   );
// }

// function PriceCard({
//   name, price, period, approx, icon, badge, highlight = false, features, onSelect
// }) {
//   return (
//     <article
//       className={[
//         "relative rounded-2xl border bg-white",
//         highlight
//           ? "border-[#bfe6ff] shadow-[0_12px_30px_rgba(72,179,246,0.25)]"
//           : "border-[#ece9e4] shadow-[0_6px_20px_rgba(0,0,0,0.06)]",
//         "flex flex-col",
//       ].join(" ")}
//       aria-labelledby={`${name}-title`}
//     >
//       {/* Badge */}
//       {badge && (
//         <div className="absolute -top-3 left-1/2 -translate-x-1/2">
//           <span className="inline-flex items-center rounded-full bg-[#48b3f6] text-white text-xs font-semibold px-3 py-1 shadow-sm">
//             {badge}
//           </span>
//         </div>
//       )}

//       {/* Header */}
//       <div className={`p-5 sm:p-6 border-b ${highlight ? "border-[#e3f4ff]" : "border-[#f2efe9]"}`}>
//         <div className="flex items-center gap-2">
//           <span
//             className={`grid h-9 w-9 place-items-center rounded-xl ${
//               highlight ? "bg-[#e8f6ff] text-[#2b6ea3]" : "bg-[#f5f8fa] text-[#4b6f82]"
//             }`}
//             aria-hidden="true"
//           >
//             {icon}
//           </span>
//           <h3 id={`${name}-title`} className="text-[#2f2f2f] font-semibold">
//             {name}
//           </h3>
//         </div>

//         <div className="mt-4 flex items-baseline gap-1">
//           <span className="text-3xl font-extrabold text-[#1f2937]">₹{price}</span>
//           <span className="text-sm text-[#6f6f6f]">/ {period}</span>
//         </div>
//         {approx && <p className="mt-1 text-xs text-[#7a7a7a]">{approx}</p>}
//       </div>

//       {/* Features */}
//       <ul className="p-5 sm:p-6 space-y-2 text-sm text-[#2e4050] flex-1">
//         {features?.map((f) => (
//           <li key={f} className="flex items-start gap-2">
//             <span
//               className={`inline-flex h-5 w-5 items-center justify-center rounded-full ${
//                 highlight ? "bg-[#e8f6ff] text-[#2b6ea3]" : "bg-[#eef3f6] text-[#4b6f82]"
//               }`}
//               aria-hidden="true"
//             >
//               <FiCheck className="h-3.5 w-3.5" />
//             </span>
//             <span className="leading-tight">{f}</span>
//           </li>
//         ))}
//       </ul>

//       {/* CTA */}
//       <div className="p-5 sm:p-6 border-t border-[#f2efe9]">
//         <button
//           onClick={onSelect}
//           className={[
//             "w-full rounded-[14px] px-4 py-2.5 font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2",
//             highlight
//               ? "bg-[#48b3f6] text-white hover:bg-[#8ad1f5] hover:text-[#333333] focus:ring-[#8ad1f5]"
//               : "border border-[#a8c1d1] text-[#333333] hover:bg-[#f0f6f8] focus:ring-[#a8c1d1]",
//           ].join(" ")}
//           aria-label={`Choose ${name} plan for ₹${price} per ${period}`}
//         >
//           Choose {name}
//         </button>
//       </div>
//     </article>
//   );
// }





import React, { useEffect, useRef, useState } from "react";
import {
  FiWind, FiWifi, FiCheckCircle, FiLock, FiDroplet,
  FiClock, FiCalendar, FiTrendingUp, FiCheck
} from "react-icons/fi";

/* ============================
   Services + Pricing (with marquee)
   ============================ */
export default function ServicesAndFees({ onOpenBookNow }) {
  // Marquee cards — cohesive visual with pricing cards
  const cardBase =
    "rounded-2xl border bg-white " +
    "border-[#ece9e4] shadow-[0_6px_20px_rgba(0,0,0,0.06)] " +
    "transition-all min-w-[13rem] h-[12rem] mx-2 p-5 sm:p-6 " +
    "flex flex-col items-center text-center sm:items-start sm:text-left justify-between " +
    "hover:shadow-[0_12px_30px_rgba(72,179,246,0.18)] hover:border-[#bfe6ff]";

  const iconWrap =
    "inline-flex h-10 w-10 items-center justify-center rounded-xl " +
    "bg-[#f5f8fa] text-[#2b6ea3]";

  const serviceItems = [
    { title: "Cool & Calm Ambience", desc: "Full AC comfort all day", icon: <FiWind aria-hidden="true" /> },
    { title: "Superfast Wi-Fi", desc: "Stay connected, stay productive", icon: <FiWifi aria-hidden="true" /> },
    { title: "Ergonomic Chairs", desc: "Study long hours without discomfort", icon: <FiCheckCircle aria-hidden="true" /> },
    { title: "Personal Cabinets", desc: "Keep your books & notes secure", icon: <FiLock aria-hidden="true" /> },
    { title: "RO Water", desc: "Stay refreshed, stay focused", icon: <FiDroplet aria-hidden="true" /> },
  ];

  return (
    <section className="bg-[#fffefc] py-12 md:py-16" id="services">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Our Services (MARQUEE) */}
        <h2 className="text-2xl sm:text-3xl font-extrabold text-[#333333] text-center">
          Our Services
        </h2>

        <div className="mt-6 relative">
          <ScrollableMarquee
            items={serviceItems}
            direction="left"
            speed={0.6}                 // px per frame (~36px/s @60fps)
            gradientColor="#fffefc"
            renderItem={(item, i) => (
              <div key={`svc-${i}`} className={cardBase} aria-label={item.title}>
                <div className="flex items-center gap-3 text-[#2f2f2f]">
                  <span className={iconWrap}>{item.icon}</span>
                  <div className="text-[15px] font-semibold">{item.title}</div>
                </div>
                <div className="text-[13px] text-[#2e4050]">{item.desc}</div>

                {/* small “included” row like pricing features */}
                <div className="w-full pt-3 mt-auto border-t border-[#f2efe9]">
                  <div className="mt-2 flex items-center gap-2 text-[12px] text-[#2e4050]">
                    <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-[#eef3f6] text-[#4b6f82]" aria-hidden="true">
                      <FiCheck className="h-3.5 w-3.5" />
                    </span>
                    Always-on staff support
                  </div>
                </div>
              </div>
            )}
          />
        </div>

        {/* Fee Structure (PRICING GRID) */}
        <section id="fees" className="mt-12">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#333333] text-center">
            Fee Structure
          </h2>
          <p className="text-center text-sm text-[#6f6f6f] mt-2">
            Simple, transparent pricing. Choose a plan and start studying.
          </p>

          <PricingPlans onSelect={(planName) => onOpenBookNow?.(planName)} />
        </section>
      </div>
    </section>
  );
}

/* ============================
   PRICING (subscription-style)
   ============================ */
function PricingPlans({ onSelect }) {
  const plans = [
    {
      name: "Per Day",
      price: 100,
      period: "day",
      approx: "—",
      icon: <FiClock aria-hidden="true" />,
      badge: null,
      features: ["AC Wi-Fi", "Quiet hours", "Cafeteria access"],
    },
    {
      name: "Weekly",
      price: 600,
      period: "week",
      approx: "≈ ₹86/day",
      icon: <FiCalendar aria-hidden="true" />,
      badge: null,
      features: ["AC Wi-Fi", "Quiet hours", "Locker access"],
    },
    {
      name: "Fortnightly",
      price: 1000,
      period: "15 days",
      approx: "≈ ₹67/day",
      icon: <FiCalendar aria-hidden="true" />,
      badge: null,
      features: ["AC Wi-Fi", "Quiet hours", "Locker access"],
    },
    {
      name: "Monthly",
      price: 1750,
      period: "month",
      approx: "≈ ₹58/day",
      icon: <FiCalendar aria-hidden="true" />,
      badge: "Most Popular",
      highlight: true,
      features: ["AC Wi-Fi", "Quiet hours", "Locker access", "Priority seats"],
    },
    {
      name: "Quarterly",
      price: 5000,
      period: "3 months",
      approx: "≈ ₹56/day",
      icon: <FiCalendar aria-hidden="true" />,
      badge: null,
      features: ["AC Wi-Fi", "Quiet hours", "Locker access", "Priority seats"],
    },
    {
      name: "Half Yearly",
      price: 9000,
      period: "6 months",
      approx: "≈ ₹50/day",
      icon: <FiCalendar aria-hidden="true" />,
      badge: null,
      features: ["AC Wi-Fi", "Quiet hours", "Locker access", "Priority seats"],
    },
    {
      name: "Yearly",
      price: 17000,
      period: "year",
      approx: "≈ ₹47/day",
      icon: <FiTrendingUp aria-hidden="true" />,
      badge: "Best Value",
      features: ["AC Wi-Fi", "Quiet hours", "Locker access", "Priority seats"],
    },
  ];

  return (
    <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
      {plans.map((p) => (
        <PriceCard key={p.name} {...p} onSelect={() => onSelect?.(p.name)} />
      ))}
    </div>
  );
}

function PriceCard({
  name, price, period, approx, icon, badge, highlight = false, features, onSelect
}) {
  return (
    <article
      className={[
        "relative rounded-2xl border bg-white",
        highlight
          ? "border-[#bfe6ff] shadow-[0_12px_30px_rgba(72,179,246,0.25)]"
          : "border-[#ece9e4] shadow-[0_6px_20px_rgba(0,0,0,0.06)]",
        "flex flex-col",
      ].join(" ")}
      aria-labelledby={`${name}-title`}
    >
      {/* Badge */}
      {badge && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2">
          <span className="inline-flex items-center rounded-full bg-[#48b3f6] text-white text-xs font-semibold px-3 py-1 shadow-sm">
            {badge}
          </span>
        </div>
      )}

      {/* Header */}
      <div className={`p-5 sm:p-6 border-b ${highlight ? "border-[#e3f4ff]" : "border-[#f2efe9]"}`}>
        <div className="flex items-center gap-2">
          <span
            className={`grid h-9 w-9 place-items-center rounded-xl ${
              highlight ? "bg-[#e8f6ff] text-[#2b6ea3]" : "bg-[#f5f8fa] text-[#4b6f82]"
            }`}
            aria-hidden="true"
          >
            {icon}
          </span>
          <h3 id={`${name}-title`} className="text-[#2f2f2f] font-semibold">
            {name}
          </h3>
        </div>

        <div className="mt-4 flex items-baseline gap-1">
          <span className="text-3xl font-extrabold text-[#1f2937]">₹{price}</span>
          <span className="text-sm text-[#6f6f6f]">/ {period}</span>
        </div>
        {approx && <p className="mt-1 text-xs text-[#7a7a7a]">{approx}</p>}
      </div>

      {/* Features */}
      <ul className="p-5 sm:p-6 space-y-2 text-sm text-[#2e4050] flex-1">
        {features?.map((f) => (
          <li key={f} className="flex items-start gap-2">
            <span
              className={`inline-flex h-5 w-5 items-center justify-center rounded-full ${
                highlight ? "bg-[#e8f6ff] text-[#2b6ea3]" : "bg-[#eef3f6] text-[#4b6f82]"
              }`}
              aria-hidden="true"
            >
              <FiCheck className="h-3.5 w-3.5" />
            </span>
            <span className="leading-tight">{f}</span>
          </li>
        ))}
      </ul>

      {/* CTA */}
      <div className="p-5 sm:p-6 border-t border-[#f2efe9]">
        <button
          onClick={onSelect}
          className={[
            "w-full rounded-[14px] px-4 py-2.5 font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2",
            highlight
              ? "bg-[#48b3f6] text-white hover:bg-[#8ad1f5] hover:text-[#333333] focus:ring-[#8ad1f5]"
              : "border border-[#a8c1d1] text-[#333333] hover:bg-[#f0f6f8] focus:ring-[#a8c1d1]",
          ].join(" ")}
          aria-label={`Choose ${name} plan for ₹${price} per ${period}`}
        >
          Choose {name}
        </button>
      </div>
    </article>
  );
}

/* ===========================================
   ScrollableMarquee: native scroll + auto loop
   - Drag with pointer (mouse/touch/pen)
   - Auto-scroll using requestAnimationFrame
   - Seamless looping by tripling content
   =========================================== */
function ScrollableMarquee({
  items,
  renderItem,
  direction = "left",    // "left" | "right"
  speed = 0.5,           // px per frame
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

  // Drag-to-scroll (pointer events)
  const onPointerDown = (e) => {
    const el = ref.current;
    if (!el) return;
    setDragging(true);
    setPaused(true);
    startX.current = e.clientX ?? 0;
    startScroll.current = el.scrollLeft;
    el.setPointerCapture?.(e.pointerId); // capture subsequent pointer events
  };
  const onPointerMove = (e) => {
    if (!dragging) return;
    const el = ref.current;
    el.scrollLeft = startScroll.current + (startX.current - (e.clientX ?? 0));
  };
  const onPointerUp = (e) => {
    const el = ref.current;
    setDragging(false);
    setPaused(false);
    el?.releasePointerCapture?.(e.pointerId);
  };

  return (
    <div className="relative">
      {/* Soft edge fades */}
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

      {/* Scrollable track */}
      <div
        ref={ref}
        className="relative overflow-x-auto overscroll-x-contain py-2"
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
