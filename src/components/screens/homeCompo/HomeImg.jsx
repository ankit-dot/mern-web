import React from 'react'
import "../../styles/Home.css"
import {Link} from "react-router-dom";

function HomeImg() {
  return (
    
      <div className="imgContainer">
        
        <div className="qoute"><h3>"Reduce food waste, one plate at a time."</h3></div>
        <div className="rem"> You Are?</div>
        <div className="buttons" >
          <div className='button1 button'><Link to="/items">Donor</Link></div>
          
          <div className='button1 button'><Link to="/items">NGO</Link></div>
        </div>
          
          </div>
         
    
     
  )
}

export default HomeImg
