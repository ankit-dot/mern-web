import React from 'react'
import '../App.css'
import {Link} from 'react-router-dom'
import "./styles/navbar.css";
function Navbar() {
  return (
      <div className='navContainer'>
         
              <div className="MainNav" >
                  <Link to="/" className="brand-logo left">Logo</Link>
                  <ul id="nav-mobile" className="right">
                      <li><Link to="/signin">Signin</Link></li>
                      <li><Link to="/signup">Signup</Link></li>
                      
                  </ul>
              </div>
          
      </div>
  )
}

export default Navbar
