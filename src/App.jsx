import React from 'react';
import './App.css';
import Navbar from './Pages/Navbar';
import Home from './Pages/Home';
import { useState } from 'react';
import BookNowModal from './components/BookNowModel';
import About from './Pages/About';
import ServicesAndFees from './Pages/ServicesAndFees';
import PhotoGallery from './Pages/PhotoGallery';
import Reviews from './Pages/Reviews';
import ContactSection from './Pages/ContactSection';
import PricingModal from './Pages/PricingModal';

function App() {
  // const [openBooking, setOpenBooking] = useState(false);
  const [openBooking, setOpenBooking] = useState(false);
  const [openPrices, setOpenPrices] = useState(false);
  const openModal = () => setOpenBooking(true);
  const closeModal = () => setOpenBooking(false);

   const openPrice = () => setOpenPrices(true);
  const closePrice = () => setOpenPrices(false);
  
  return (
    <>
      <Home onOpenBookNow={() => setOpenBooking(true)} onOpenPrices={openPrice} />
      <BookNowModal open={openBooking} onClose={closeModal} />
      <About/>
      <ServicesAndFees/>
      <PhotoGallery/>
      <Reviews/>
      <ContactSection onOpenBookNow={openModal}/>

      <PricingModal open={openPrices} onClose={closePrice} onBook={openModal}/>
  
    </>
  )
}

export default App
