import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useState } from 'react';
import * as FaIcons from 'react-icons/fa';
import Home from './Pages/Home';
import AppointmentBooking from './Pages/AppointmentBooking';
import Legal from './Pages/Legal';
import NotFound from './Pages/NotFound';

function App() {

  const [showUp, setShowUp] = useState(false);
  const checkScrollY = () => {
    if (window.scrollY > 300) {
      setShowUp(true);
    } else {
      setShowUp(false);
    }
  };
  window.addEventListener('scroll', checkScrollY);
  const handleScroll = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
  const showScrollBtn = () => {
    if (showUp) {
      return (
        <div className="scroll" onClick={handleScroll}>
          <FaIcons.FaAngleUp />
        </div>
      );
    }
  };

  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/appointment' element={<AppointmentBooking />} />
          <Route path='/legal' element={<Legal />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
        {showScrollBtn()}
      </Router>
    </>
  );
}

export default App;