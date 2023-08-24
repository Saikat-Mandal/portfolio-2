import React from 'react'
import "./navbar.css"
function Navbar() {
  return (
    <div className='header'>
        <div className='logo'>logo here</div>

        <ul className='nav-right'>
          <li>HOME</li>
          <li>EXPERIENCE</li>
          <li>BLOGS</li>
        </ul>
    </div>
  )
}

export default Navbar