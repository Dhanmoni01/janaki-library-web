// import React, { useEffect, useState } from "react";

// const NAME_REGEX = /^[A-Za-z][A-Za-z\s.'-]{1,49}$/;
// const PHONE_REGEX = /^[6-9]\d{9}$/;
// const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

// export default function BookNowModal({ open, onClose }) {
//   const [form, setForm] = useState({ name: "", phone: "", email: "", message: "" });
//   const [errors, setErrors] = useState({});
//   const [touched, setTouched] = useState({});          
//   const [loading, setLoading] = useState(false);
//   const [sent, setSent] = useState(false);

//   useEffect(() => {
//     if (!open) return;
//     const prev = document.body.style.overflow;
//     document.body.style.overflow = "hidden";
//     return () => { document.body.style.overflow = prev; };
//   }, [open]);

//   const validateField = (name, value = form) => {
//     switch (name) {
//       case "name":
//         return NAME_REGEX.test(value) ? "" : "Please enter a valid full name.";
//       case "phone":
//         return PHONE_REGEX.test(value) ? "" : "Enter a valid 10-digit phone (starts with 6–9).";
//       case "email":
//         return EMAIL_REGEX.test(value) ? "" : "Enter a valid email address.";
//       case "message":
//         return value && value.trim().length >= 5 ? "" : "Message should be at least 5 characters.";
//       default:
//         return "";
//     }
//   };

//   const validateAll = (data = form) => {
//     return {
//       name: validateField("name", data.name, data),
//       phone: validateField("phone", data.phone, data),
//       email: validateField("email", data.email, data),
//       message: validateField("message", data.message, data),
//     };
//   };

//   const onChange = (e) => {
//     const { name, value } = e.target;
//     setForm((prev) => {
//       const next = { ...prev, [name]: value };
//       if (touched[name]) {
//         setErrors((prevErr) => ({ ...prevErr, [name]: validateField(name, value, next) }));
//       }
//       return next;
//     });
//   };

//   const onBlur = (e) => {
//     const { name } = e.target;
//     setTouched((prev) => ({ ...prev, [name]: true }));
//     setErrors((prev) => ({ ...prev, [name]: validateField(name, form[name]) }));
//   };

//   const onSubmit = async (e) => {
//     e.preventDefault();
//     // validate all on submit
//     const all = validateAll();
//     setErrors(all);
//     setTouched({ name: true, phone: true, email: true, message: true });
//     if (Object.values(all).some((v) => v)) return;

//     try {
//       setLoading(true);
//     //   const accessKey = import.meta.env.VITE_WEB3FORMS_KEY;
//       const accessKey = "3f9397fc-7a28-4968-8319-e6440f8981b3";
//       if (!accessKey) {
//         alert("Missing VITE_WEB3FORMS_KEY in .env");
//         setLoading(false);
//         return;
//       }

//       const payload = {
//         access_key: accessKey,
//         subject: "New Booking Inquiry - Janaki Library",
//         from_name: form.name,
//         reply_to: form.email,
//         message:
// `Name: ${form.name}
// Phone: ${form.phone}
// Email: ${form.email}

// Message:
// ${form.message}`,
//       };


//       const res = await fetch("https://api.web3forms.com/submit", {
//         method: "POST",
//         headers: { "Content-Type": "application/json", Accept: "application/json" },
//         body: JSON.stringify(payload),
//       });
//       const data = await res.json();

//       if (data.success) {
//         setSent(true);
//         setForm({ name: "", phone: "", email: "", message: "" });
//         setTouched({});
//         setErrors({});
//       } else {
//         alert("Failed to send. Please try again later.");
//       }
//     } catch (err) {
//       console.error(err);
//       alert("Network error. Please try again.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   if (!open) return null;

//   return (
//     <div
//       className="fixed inset-0 z-[100] bg-black/50 backdrop-blur-sm flex items-center justify-center px-4"
//       role="dialog"
//       aria-modal="true"
//     >
//       <div className="w-[92vw] max-w-md max-h-[85vh] overflow-y-auto bg-[#fffefc] rounded-2xl shadow-[0_8px_24px_rgba(0,0,0,0.18)]">
//         <div className="flex items-center justify-between px-6 py-4 border-b border-[#f6f5f2]">
//           <h2 className="text-xl font-bold text-[#333333]">Book Now</h2>
//           <button
//             onClick={onClose}
//             className="p-2 rounded-lg border border-[#f6f5f2] hover:bg-[#fffcf8] transition"
//             aria-label="Close"
//           >
//             <span className="block w-4 h-4 text-[#333333]">✕</span>
//           </button>
//         </div>

//         <form onSubmit={onSubmit} className="px-6 py-5 space-y-4">
//           {sent && (
//             <div className="p-3 rounded-lg bg-green-50 text-green-700 text-sm">
//               Thanks! Your booking request was sent. We’ll contact you shortly.
//             </div>
//           )}
//           <div>
//             <label htmlFor="name" className="sr-only">Name</label>
//             <input
//               id="name"
//               name="name"
//               value={form.name}
//               onChange={onChange}
//               onBlur={onBlur}
//               placeholder="Your full name"
//               className={`w-full rounded-lg border ${errors.name ? "border-red-400" : "border-gray-300"} 
//                           bg-white text-[14px] p-2.5 outline-none focus:border-[#043CAA] transition`}
//             />
//             {touched.name && errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
//           </div>


//           <div>
//             <label htmlFor="phone" className="sr-only">Phone</label>
//             <input
//               id="phone"
//               name="phone"
//               value={form.phone}
//               onChange={onChange}
//               onBlur={onBlur}
//               placeholder="10-digit phone"
//               inputMode="numeric"
//               className={`w-full rounded-lg border ${errors.phone ? "border-red-400" : "border-gray-300"} 
//                           bg-white text-[14px] p-2.5 outline-none focus:border-[#043CAA] transition`}
//             />
//             {touched.phone && errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
//           </div>

//           {/* Email */}
//           <div>
//             <label htmlFor="email" className="sr-only">Email</label>
//             <input
//               id="email"
//               name="email"
//               value={form.email}
//               onChange={onChange}
//               onBlur={onBlur}
//               placeholder="Your email"
//               className={`w-full rounded-lg border ${errors.email ? "border-red-400" : "border-gray-300"} 
//                           bg-white text-[14px] p-2.5 outline-none focus:border-[#043CAA] transition`}
//             />
//             {touched.email && errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
//           </div>

//           {/* Message */}
//           <div>
//             <label htmlFor="message" className="sr-only">Message</label>
//             <textarea
//               id="message"
//               name="message"
//               value={form.message}
//               onChange={onChange}
//               onBlur={onBlur}
//               rows="4"
//               placeholder="Your message"
//               className={`w-full rounded-lg border ${errors.message ? "border-red-400" : "border-gray-300"} 
//                           bg-white text-[14px] p-2.5 outline-none focus:border-[#043CAA] transition`}
//             />
//             {touched.message && errors.message && <p className="text-red-500 text-xs mt-1">{errors.message}</p>}
//           </div>

//           {/* Actions */}
//           <div className="pt-2 flex items-center gap-3">
//             <button
//               type="submit"
//               disabled={loading}
//               className="
//                 bg-[#48b3f6] text-white rounded-[20px] px-5 py-2.5 font-bold
//                 transition-colors duration-200
//                 hover:bg-[#8ad1f5] hover:text-[#333333]
//                 active:bg-[#769daf]
//                 disabled:opacity-70 disabled:cursor-not-allowed
//               "
//             >
//               {loading ? "Sending..." : "Book"}
//             </button>

//             <button
//               type="button"
//               onClick={onClose}
//               className="px-4 py-2 rounded-[20px] border border-[#a8c1d1] text-[#333333] hover:bg-[#f0f6f8] transition"
//             >
//               Cancel
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// }


import React, { useEffect, useRef, useState } from "react";

const NAME_REGEX = /^[A-Za-z][A-Za-z\s.'-]{1,49}$/;
const PHONE_REGEX = /^[6-9]\d{9}$/;
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

export default function BookNowModal({ open, onClose, initialPlan = "" }) {
  const [form, setForm] = useState({ name: "", phone: "", email: "", message: "" });
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);

  const dialogRef = useRef(null);
  const nameRef = useRef(null);

  const normalizePlanHeader = (currentMessage, plan) => {
    // remove an existing leading "Plan: ..." line and its following blank line if present
    const withoutOld = currentMessage.replace(/^Plan:\s.*\n?\n?/i, "");
    if (!plan) return withoutOld.trim();
    return `Plan: ${plan}\n\n${withoutOld}`.trim();
  };

  // Lock page scroll while open
  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = prev; };
  }, [open]); // locking body scroll is a common modal pattern. :contentReference[oaicite:1]{index=1}

  // Prefill message with selected plan and focus first input
  // useEffect(() => {
  //   if (!open) return;
  //   setSent(false);
  //   // Prefill only if empty (or you can always prefix)
  //   setForm(prev => {
  //     const planLine = initialPlan ? `Plan: ${initialPlan}\n\n` : "";
  //     const alreadyHasPlan = prev.message.startsWith(`Plan: ${initialPlan}`);
  //     return alreadyHasPlan || !initialPlan
  //       ? prev
  //       : { ...prev, message: `${planLine}${prev.message}` };
  //   });
  //   // focus first field
  //   nameRef.current?.focus();
  // }, [open, initialPlan]);


  useEffect(() => {
    if (!open) return;
    setSent(false);
    setErrors({});
    setTouched({});
    setLoading(false);
    setForm(prev => ({
      ...prev,
      message: normalizePlanHeader(prev.message || "", initialPlan)
    }));
    nameRef.current?.focus();
  }, [open, initialPlan]); // re-run on plan change too


  // Trap focus & Escape to close (simple version)
  useEffect(() => {
    if (!open || !dialogRef.current) return;

    const el = dialogRef.current;
    const selector = [
      "a[href]", "button", "textarea", "input", "select",
      '[tabindex]:not([tabindex="-1"])'
    ].join(",");
    const getFocusable = () => Array.from(el.querySelectorAll(selector)).filter(n => !n.disabled);

    const handleKey = (e) => {
      if (e.key === "Escape") { onClose(); } // Escape key handling per MDN. :contentReference[oaicite:2]{index=2}
      if (e.key !== "Tab") return;
      const f = getFocusable();
      const first = f[0], last = f[f.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault(); last?.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault(); first?.focus();
      }
    };

    el.addEventListener("keydown", handleKey);
    return () => el.removeEventListener("keydown", handleKey);
  }, [open, onClose]);

  const validateField = (name, value = form) => {
    switch (name) {
      case "name":    return NAME_REGEX.test(value) ? "" : "Please enter a valid full name.";
      case "phone":   return PHONE_REGEX.test(value) ? "" : "Enter a valid 10-digit phone (starts with 6–9).";
      case "email":   return EMAIL_REGEX.test(value) ? "" : "Enter a valid email address.";
      case "message": return value && value.trim().length >= 5 ? "" : "Message should be at least 5 characters.";
      default: return "";
    }
  };
  const validateAll = (data = form) => ({
    name: validateField("name", data.name, data),
    phone: validateField("phone", data.phone, data),
    email: validateField("email", data.email, data),
    message: validateField("message", data.message, data),
  });

  const onChange = (e) => {
    const { name, value } = e.target;
    setForm(prev => {
      const next = { ...prev, [name]: value };
      if (touched[name]) setErrors(prevErr => ({ ...prevErr, [name]: validateField(name, value, next) }));
      return next;
    });
  };
  const onBlur = (e) => {
    const { name } = e.target;
    setTouched(prev => ({ ...prev, [name]: true }));
    setErrors(prev => ({ ...prev, [name]: validateField(name, form[name]) }));
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    const all = validateAll();
    setErrors(all);
    setTouched({ name: true, phone: true, email: true, message: true });
    if (Object.values(all).some(Boolean)) return;

    try {
      setLoading(true);
      const accessKey = "3f9397fc-7a28-4968-8319-e6440f8981b3";
      if (!accessKey) {
        alert("Missing VITE_WEB3FORMS_KEY in .env");
        setLoading(false);
        return;
      }
      const payload = {
        access_key: accessKey,
        subject: "New Booking Inquiry - Janaki Library",
        from_name: form.name,
        reply_to: form.email,
        // Include plan in the submitted message
        message:
`Plan: ${initialPlan || "N/A"}

Name: ${form.name}
Phone: ${form.phone}
Email: ${form.email}

Message:
${form.message}`,
      };
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(payload),
      });
      const data = await res.json();
      if (data.success) {
        setSent(true);
        setForm({ name: "", phone: "", email: "", message: "" });
        setTouched({}); setErrors({});
      } else {
        alert("Failed to send. Please try again later.");
      }
    } catch (err) {
      console.error(err);
      alert("Network error. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  if (!open) return null;

  return (
   <div
      className="fixed inset-0 z-[100] bg-black/50 backdrop-blur-sm flex items-center justify-center px-4"
      role="dialog" aria-modal="true" aria-labelledby="booknow-title"
      onMouseDown={(e) => { if (e.target === e.currentTarget) onClose(); }}
      ref={dialogRef}
    >
      <div className="w-[92vw] max-w-md max-h-[85vh] overflow-y-auto bg-[#fffefc] rounded-2xl shadow-[0_8px_24px_rgba(0,0,0,0.18)]">
        <div className="flex items-center justify-between px-6 py-4 border-b border-[#f6f5f2]">
          <h2 id="booknow-title" className="text-xl font-bold text-[#333333]">Book Now</h2>
          {initialPlan && (
            <span className="ml-2 inline-flex items-center rounded-full bg-[#48b3f6] text-white text-xs font-semibold px-2 py-1">
              {initialPlan}
            </span>
          )}
          <button onClick={onClose} className="ml-auto p-2 rounded-lg border border-[#f6f5f2] hover:bg-[#fffcf8] transition" aria-label="Close" type="button">
            <span className="block w-4 h-4 text-[#333333]">✕</span>
          </button>
        </div>

        <form onSubmit={onSubmit} className="px-6 py-5 space-y-4">
          {sent && (
            <div className="p-3 rounded-lg bg-green-50 text-green-700 text-sm">
              Thanks! Your booking request was sent. We’ll contact you shortly.
            </div>
          )}

          <div>
            <label htmlFor="name" className="sr-only">Name</label>
            <input
              ref={nameRef}
              id="name"
              name="name"
              value={form.name}
              onChange={onChange}
              onBlur={onBlur}
              placeholder="Your full name"
              className={`w-full rounded-lg border ${errors.name ? "border-red-400" : "border-gray-300"} bg-white text-[14px] p-2.5 outline-none focus:border-[#043CAA] transition`}
            />
            {touched.name && errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
          </div>

          <div>
            <label htmlFor="phone" className="sr-only">Phone</label>
            <input
              id="phone"
              name="phone"
              value={form.phone}
              onChange={onChange}
              onBlur={onBlur}
              placeholder="10-digit phone"
              inputMode="numeric"
              className={`w-full rounded-lg border ${errors.phone ? "border-red-400" : "border-gray-300"} bg-white text-[14px] p-2.5 outline-none focus:border-[#043CAA] transition`}
            />
            {touched.phone && errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
          </div>

          <div>
            <label htmlFor="email" className="sr-only">Email</label>
            <input
              id="email"
              name="email"
              value={form.email}
              onChange={onChange}
              onBlur={onBlur}
              placeholder="Your email"
              className={`w-full rounded-lg border ${errors.email ? "border-red-400" : "border-gray-300"} bg-white text-[14px] p-2.5 outline-none focus:border-[#043CAA] transition`}
            />
            {touched.email && errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
          </div>

          <div>
            <label htmlFor="message" className="sr-only">Message</label>
            <textarea
              id="message"
              name="message"
              value={form.message}
              onChange={onChange}
              onBlur={onBlur}
              rows="4"
              placeholder="Your message"
              className={`w-full rounded-lg border ${errors.message ? "border-red-400" : "border-gray-300"} bg-white text-[14px] p-2.5 outline-none focus:border-[#043CAA] transition`}
            />
            {touched.message && errors.message && <p className="text-red-500 text-xs mt-1">{errors.message}</p>}
          </div>

          <div className="pt-2 flex items-center gap-3">
            <button
              type="submit"
              disabled={loading}
              className="bg-[#48b3f6] text-white rounded-[20px] px-5 py-2.5 font-bold transition-colors duration-200 hover:bg-[#8ad1f5] hover:text-[#333333] active:bg-[#769daf] disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {loading ? "Sending..." : "Book"}
            </button>
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 rounded-[20px] border border-[#a8c1d1] text-[#333333] hover:bg-[#f0f6f8] transition"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
