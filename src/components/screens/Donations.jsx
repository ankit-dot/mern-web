import React from 'react'
import "../styles/Donations.css"
import { Link } from 'react-router-dom'
function Donations() {
  return (
    <div className='mainContainer'>
        <h2>Donation Details</h2>
        <input
        type="text"
        placeholder="shopName"/>
        <input
        type="text"
        placeholder="item "/>
        <input
        type="integer"
        placeholder="price"/>
        <button
         >
          <Link to="/items">Submit</Link>
        </button>
    </div>
  )
}

export default Donations
