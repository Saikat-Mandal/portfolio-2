import React from 'react'
import "./navbar.css"
function Navbar() {
  return (
    <div className='header'>
        <div className='logo'>logo here</div>

        <ul className='nav-right'>
          <li>Home</li>
          <li>Experience</li>
          <li>Services</li>
        </ul>
    </div>
  )
}

export default Navbar