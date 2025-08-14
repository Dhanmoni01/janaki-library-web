
import React from "react";
import Marquee from "react-fast-marquee";
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

  // Product-like card (outline + subtle shadow). Mobile: center; Desktop: left-align.
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

        {/* Right -> Left marquee */}
        <div className="mt-6 relative">
          <Marquee
            direction="left"
            speed={35}
            pauseOnHover
            gradient
            gradientColor={[255, 254, 252]}   // #fffefc
            gradientWidth={50}
            className="py-2"
          >
            {serviceItems.concat(serviceItems).map((item, i) => (
              <div key={`svc-${i}`} className={cardBase} aria-label={item.title}>
                <div className="flex items-center gap-2 text-[#2f2f2f]">
                  <span className={iconWrap}>{item.icon}</span>
                  <div className="text-[15px] font-semibold">{item.title}</div>
                </div>
                <div className="text-[12px] text-[#6f6f6f]">{item.desc}</div>
              </div>
            ))}
          </Marquee>
        </div>

        {/* Fee Structure */}
        <section id="fees">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#333333] text-center mt-12">
          Fee Structure
        </h2>
        </section>

        {/* Left -> Right marquee */}
        <div className="mt-6 relative">
          <Marquee
            direction="right"
            speed={35}
            pauseOnHover
            gradient
            gradientColor={[255, 254, 252]}   // #fffefc
            gradientWidth={50}
            className="py-2"
          >
            {feeItems.concat(feeItems).map((item, i) => (
              <div key={`fee-${i}`} className={cardBase} aria-label={item.title}>
                <div className="flex items-center gap-2 text-[#2f2f2f]">
                  <span className={iconWrap}>{item.icon}</span>
                  <div className="text-[15px] font-semibold">{item.title}</div>
                </div>
                <span className="mt-2 inline-flex items-center rounded-full border border-[#dde4e9] bg-[#f7fafc] px-2 py-1 text-[12px] text-[#2e4050]">
                  {item.desc}
                </span>
              </div>
            ))}
          </Marquee>
        </div>

      </div>
    </section>
  );
}
