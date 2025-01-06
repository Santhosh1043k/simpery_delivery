import React, { useState } from 'react'
import './Navbar.css'
import logo from "../../assets/Simpery.png";
import track from "../../assets/track.png";
import order from "../../assets/order.png";

const Navbar = () => {

    const [menu,setMenu] = useState("Login");

  return (
    <div className='navbar'>
      <img src={logo} alt="Logo" className='logo' />
      <ul className="navbar-menu">
        <li onClick={()=>setMenu("Home")} className={menu==="Home"?"active":""}>Home</li>
        <li onClick={()=>setMenu("Track")} className={menu==="Track"?"active":""}>Track</li>
        <li onClick={()=>setMenu("Services")} className={menu==="Services"?"active":""}>Services</li>
        <li onClick={()=>setMenu("Pricing")} className={menu==="Pricing"?"active":""}>Pricing</li>

      </ul>
      <div className="navbar-right">
        <img src={track} alt="track-icon" className='track-icon' />
        <div className="search-icon">
          <img src={order} alt="Order-icon" className='order-icon' />
          <div className="dot"></div>
          <button>Sign in</button>
        </div>
      </div>
    </div>
  )
}

export default Navbar