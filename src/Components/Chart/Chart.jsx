import React from 'react'
import { VscBellDot } from "react-icons/vsc";
import './Chart.css'
import { CiSearch } from "react-icons/ci";

export default function Chart() {
  return (
    <div>
         <div className='mainchart'>
            
      <div className="Chart">
      
        <div className="text">
          <h2>DASHBOARD</h2>
        </div>
      
        <div className="searchbox">
          <input type="text" placeholder='Search'  /><CiSearch  className='searchicon'/>
        </div>
      
      <div className="icon">
        <VscBellDot className='noyifyicon'/>
      </div>
      
      <div className="texts">
        <h3>Chika Dorathy </h3>
        <p>Administative</p>
      </div>
      
      <div className="picture">
      
      </div>
      
      </div>
      
          </div>
    </div>
  )
}


