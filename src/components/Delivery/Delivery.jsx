import React from 'react'
import './Delivery.css'
import same from "../../assets/same.jpeg";
import express from "../../assets/express.jpeg";
import scheduled from "../../assets/scheduled.jpeg";
import secure from "../../assets/secure.jpeg";

const Delivery = () => {
  return (
    <div className='delivery-sec'>
        <h2>Fast & Secure Deliveries Every Day  </h2>
      <div className="options">
        <img src={same} alt="same day" />
        <p>Same day delivery service</p>
      </div>
      <div className="options">
        <img src={express} alt="express" />
        <p>Express courier solutions</p>
      </div>
      <div className="options">
        <img src={scheduled} alt="same day" />
        <p>Scheduled delivery options</p>
      </div>
      <div className="options">
        <img src={secure} alt="same day" />
        <p>Secure package handling</p>
      </div>
    </div>
  )
}

export default Delivery