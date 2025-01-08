import React, { useState } from 'react'
import './Navbar.css'
import logo from "../../assets/Simpery.png";
import track from "../../assets/track.png";
import order from "../../assets/order.png";
import { Link } from 'react-router-dom';

const Navbar = ({setShowLogin}) => {

    const [menu,setMenu] = useState("Login");

  return (
    <div className='navbar'>
      <Link to='/'><img src={logo} alt="Logo" className='logo' /> </Link>
      <ul className="navbar-menu">
        <Link to='/'> <li onClick={()=>setMenu("Home")} className={menu==="Home"?"active":""}>Home</li> </Link>
        <Link to='/track'><li onClick={()=>setMenu("Track")} className={menu==="Track"?"active":""}>Track</li> </Link>
        <li onClick={()=>setMenu("Services")} className={menu==="Services"?"active":""}>Services</li>
        <li onClick={()=>setMenu("Pricing")} className={menu==="Pricing"?"active":""}>Pricing</li>

      </ul>
      <div className="navbar-right">
        <img src={track} alt="track-icon" className='track-icon' />
        <div className="search-icon">
        <Link to='/track'><img src={order} alt="Order-icon" className='order-icon' /> </Link>
          <div className="dot"></div>
          <button onClick={()=>setShowLogin(true)}>Sign in</button>
        </div>
      </div>
    </div>
  )
}

export default Navbar