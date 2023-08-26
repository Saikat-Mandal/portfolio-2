import React from 'react'
import "./navbar.css"
function Navbar() {
  return (
    <div className='header'>
        <div className='logo'>logo here</div>

        <ul className='nav-right'>
          <li>HOME</li>
          <li>EXPERIENCE</li>
          <div className='d'>
          <li className='blog'>BLOGS</li>
          </div>
        </ul>
    </div>
  )
}

export default Navbar