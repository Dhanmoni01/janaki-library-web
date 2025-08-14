import React, { useEffect } from "react";

const FEES = [
  { title: "Per Day", desc: "Only @100₹" },
  { title: "Weekly", desc: "Only @600₹" },
  { title: "Fortnightly", desc: "Only @1000₹" },
  { title: "Monthly", desc: "Only @1750₹" },
  { title: "Quarterly", desc: "Only @5000₹" },
  { title: "Half Yearly", desc: "Only @9000₹" },
  { title: "Yearly", desc: "Only @17000₹" },
];

export default function PricingModal({ open, onClose, onBook }) {
  
  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e) => e.key === "Escape" && onClose?.();
    document.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      document.removeEventListener("keydown", onKey);
    };
  }, [open, onClose]);

  if (!open) return null;

  const card =
    "rounded-xl border border-[#e8e6e2] bg-white shadow-[0_1px_2px_rgba(0,0,0,0.04)] " +
    "hover:shadow-[0_6px_20px_rgba(0,0,0,0.08)] transition-shadow p-4";

  return (
    <div
      className="fixed inset-0 z-[100] bg-black/50 backdrop-blur-sm flex md:items-center md:justify-center items-end justify-center px-0 md:px-4"
      role="dialog"
      aria-modal="true"
      onClick={(e) => e.currentTarget === e.target && onClose?.()}
    >
      {/* Panel: bottom sheet on mobile, centered on md+ */}
      <div className="w-full md:w-[92vw] md:max-w-xl max-h-[85vh] overflow-y-auto bg-[#fffefc]
                      rounded-t-2xl md:rounded-2xl shadow-[0_8px_24px_rgba(0,0,0,0.18)]">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-[#f6f5f2]">
          <h2 className="text-xl font-bold text-[#333333]">Fee Structure</h2>
          <button
            onClick={onClose}
            className="p-2 rounded-lg border border-[#f6f5f2] hover:bg-[#fffcf8] transition"
            aria-label="Close"
          >
            ✕
          </button>
        </div>

        {/* Grid */}
        <div className="px-6 py-5 grid grid-cols-1 sm:grid-cols-2 gap-4">
          {FEES.map((f, i) => (
            <div key={i} className={card}>
              <div className="text-[#2f2f2f] font-semibold">{f.title}</div>
              <div className="mt-2 inline-flex items-center rounded-full border border-[#dde4e9] bg-[#f7fafc] px-2 py-1 text-[12px] text-[#2e4050]">
                {f.desc}
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="px-6 pb-6">
          <button
            onClick={() => {
              onClose?.();
              onBook?.();
              // Smooth-scroll fallback: briefly highlight the Fees section
              const el = document.getElementById("fees");
              if (el) {
                el.scrollIntoView({ behavior: "smooth", block: "start" });
                el.classList.add("ring-2","ring-[#48b3f6]","ring-offset-2");
                setTimeout(() => el.classList.remove("ring-2","ring-[#48b3f6]","ring-offset-2"), 1200);
              }
            }}
            className="w-full bg-[#48b3f6] text-white rounded-[20px] px-5 py-2.5 font-bold
                       transition-colors duration-200 hover:bg-[#8ad1f5] hover:text-[#333333] active:bg-[#769daf]"
          >
            Book Now
          </button>
        </div>
      </div>
    </div>
  );
}
