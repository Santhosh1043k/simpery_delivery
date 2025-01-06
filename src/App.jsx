import React from 'react'
import Navbar from './components/Navbar/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home/home'
import Track from './pages/Track/Track'
import Delivery from './components/Delivery/Delivery'
import Shipping from './components/Shipping/Shipping'
import Footer from './components/Footer/Footer'

const App = () => {
  return (
    <div className='app'>
      <Navbar />
      <Routes>
        < Route path='/' element={<Home/>} />
        < Route path='/track' element={<Track/>} />
      </Routes>
      <Delivery />
      <Shipping />
      
      <Footer />
    </div>
  )
}

export default App