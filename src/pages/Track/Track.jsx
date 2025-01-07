import React from 'react'
import './Track.css'
import box from "../../assets/box.png";
import truck from "../../assets/truck.png";
const Track = () => {
  return (
    <div className="traking">
      <div className="truck">
          <img src={truck} alt="truck" className="car" />
        </div>
    <div className='track'>
        

      <div className="track-id">
        <div className="track-orderid">
          <h2>
            Track your <img src={box} alt="order-box" /><span>rder</span>
          </h2> 
          </div>
          <div className="input">
          <input
          type='number'
          value='number'
          className="form-control"
          placeholder='Type your order Id'
          />
          <button >Track</button>
          </div>
          
        {/* <div className="truck">
          <img src={truck} alt="truck" className="car" />
        </div> */}
        
        
      </div>

    </div>
    </div>
    
  )
}

export default Track