import React from 'react'
import './Shipping.css'
import fast from "../../assets/fast.jpeg";
import out from "../../assets/out.jpeg";
import eco from "../../assets/eco.jpeg";

const Shipping = () => {
  return (
    <div>
        <h2>
        Timely Parcel Shipping Services
        </h2>
    <div className='blog'>
        <div className="fast">
            <img src={eco} alt="fast-delivery" />
            <h3>Fast local deliveries</h3>
            <p>Ensure swift and secure delivery of packages within Madurai,reaching your destination in record time.</p>
            <button>More info</button>
        </div>
        <div className="out">
        <img src={out} alt="out-delivery" />
            <h3>Express Outstation services</h3>
            <p>Reliable express delivery services for your outstation packages,ensuring timely arrivals across Tamil Nadu.</p>
            <button>More info</button>
        </div>
        <div className="eco">
        <img src={fast} alt="eco-delivery" />
            <h3>Eco-friendly bicycle couriers</h3>
            <p>Sustainable delivery options using bicycles,offering quick service whole reducing carbon footprints.</p>
            <button>More info</button>
        </div>
    </div>
    </div>
  )
}

export default Shipping