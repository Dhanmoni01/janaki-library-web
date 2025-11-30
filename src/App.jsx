// import React from 'react';
// import './App.css';
// import Navbar from './Pages/Navbar';
// import Home from './Pages/Home';
// import { useState } from 'react';
// import BookNowModal from './components/BookNowModel';
// import About from './Pages/About';
// import ServicesAndFees from './Pages/ServicesAndFees';
// import PhotoGallery from './Pages/PhotoGallery';
// import Reviews from './Pages/Reviews';
// import ContactSection from './Pages/ContactSection';
// import PricingModal from './Pages/PricingModal';

// function App() {
//   // const [openBooking, setOpenBooking] = useState(false);
//   const [openBooking, setOpenBooking] = useState(false);
//   const [openPrices, setOpenPrices] = useState(false);
//   const openModal = () => setOpenBooking(true);
//   const closeModal = () => setOpenBooking(false);

//    const openPrice = () => setOpenPrices(true);
//   const closePrice = () => setOpenPrices(false);
  
//   return (
//     <>
//       <Home onOpenBookNow={() => setOpenBooking(true)} onOpenPrices={openPrice} />
//       <BookNowModal open={openBooking} onClose={closeModal} />
//       <About/>
//       <ServicesAndFees/>
//       <PhotoGallery/>
//       <Reviews/>
//       <ContactSection onOpenBookNow={openModal}/>

//       <PricingModal open={openPrices} onClose={closePrice} onBook={openModal}/>
  
//     </>
//   )
// }

// export default App


// import React, { useState } from 'react';
// import './App.css';
// import Navbar from './Pages/Navbar';
// import Home from './Pages/Home';
// import BookNowModal from './components/BookNowModel'; // make sure the file name matches
// import About from './Pages/About';
// import ServicesAndFees from './Pages/ServicesAndFees';
// import PhotoGallery from './Pages/PhotoGallery';
// import Reviews from './Pages/Reviews';
// import ContactSection from './Pages/ContactSection';
// import PricingModal from './Pages/PricingModal';

// function App() {
//   const [openBooking, setOpenBooking] = useState(false);
//   const [openPrices, setOpenPrices]   = useState(false);
//   const [selectedPlan, setSelectedPlan] = useState("");

//   // open the booking modal (optionally with a plan name)
//   const openBookNow = (planName = "") => {
//     setSelectedPlan(planName || "");
//     setOpenBooking(true);
//   };
//   const closeBookNow  = () => setOpenBooking(false);

//   const openPrice  = () => setOpenPrices(true);
//   const closePrice = () => setOpenPrices(false);

//   return (
//     <>
//       {/* If Navbar also has a CTA, pass openBookNow down similarly */}
//       <Home onOpenBookNow={() => openBookNow()} onOpenPrices={openPrice} />

//       {/* The same form modal, now with the selected plan injected */}
//       <BookNowModal open={openBooking} onClose={closeBookNow} initialPlan={selectedPlan} />

//       <About />

//       {/* NEW: give ServicesAndFees a way to open the form with a plan */}
//       <ServicesAndFees onOpenBookNow={openBookNow} />

//       <PhotoGallery />
//       <Reviews />

//       {/* Contact button can open the same form */}
//       <ContactSection onOpenBookNow={() => openBookNow()} />

//       {/* If your PricingModal has a “Book” CTA, pass the handler.
//           If PricingModal can pass a plan name, call onBook('Monthly') etc. */}
//       <PricingModal open={openPrices} onClose={closePrice} onBook={openBookNow} />
//     </>
//   );
// }

// export default App;




// App.jsx
import React, { useState } from 'react';
import './App.css';
import Navbar from './Pages/Navbar';
import Home from './Pages/Home';
import BookNowModal from './components/BookNowModel'; // make sure the file name matches
import About from './Pages/About';
import ServicesAndFees from './Pages/ServicesAndFees';
import PhotoGallery from './Pages/PhotoGallery';
import Reviews from './Pages/Reviews';
import ContactSection from './Pages/ContactSection';
import PricingModal from './Pages/PricingModal';
function App() {
  const [openBooking, setOpenBooking]   = useState(false);
  const [openPrices, setOpenPrices]     = useState(false);
  const [selectedPlan, setSelectedPlan] = useState("");
  const [modalKey, setModalKey]         = useState(0); // NEW

  const openBookNow = (planName = "") => {
    setSelectedPlan(planName || "");
    setOpenBooking(true);
    setModalKey(k => k + 1);            // ensure a fresh mount even if already open
  };

  const closeBookNow = () => {
    setOpenBooking(false);
    setSelectedPlan("");                // clear previous plan
    setModalKey(k => k + 1);            // NEW: force remount on next open (state wiped)
  };

  const openPrice  = () => setOpenPrices(true);
  const closePrice = () => setOpenPrices(false);

  return (
    <>
      <Home onOpenBookNow={() => openBookNow()} onOpenPrices={openPrice} />

      {/* IMPORTANT: use a key so the component remounts cleanly */}
      <BookNowModal
        key={modalKey}
        open={openBooking}
        onClose={closeBookNow}
        initialPlan={selectedPlan}
      />

      <About />
      <ServicesAndFees onOpenBookNow={openBookNow} />
      <PhotoGallery />
      <Reviews />
      <ContactSection onOpenBookNow={() => openBookNow()} />
      <PricingModal open={openPrices} onClose={closePrice} onBook={openBookNow} />
    </>
  );
}
export default App;

