import React from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home/Home';
import Track from './pages/Track/Track';
import Delivery from './components/Delivery/Delivery';
import Shipping from './components/Shipping/Shipping';
import Footer from './components/Footer/Footer';

const App = () => {
  const location = useLocation();

  return (
    <div className='app'>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/track' element={<Track />} />
      </Routes>
      {location.pathname !== '/track' && (
        <>
          <Delivery />
          <Shipping />
          <Footer />
        </>
      )}
    </div>
  );
};

export default App;
