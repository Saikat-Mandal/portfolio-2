import React from 'react'
import "./navbar.css"
import {NavLink, useNavigate} from "react-router-dom"
import Button from './Button'
function Navbar() {
  const navigate = useNavigate()
  const navigateToBlogs = () =>{
    navigate("/blogs")
  }
  return (
    <div className='header'>
        <div className='logo'>logo here</div>

        <ul className='nav-right'>
          <NavLink to="/" className="li">HOME</NavLink>
          <NavLink to="/about" className="li">ABOUT</NavLink>
          <NavLink to="/experience" className="li">EXPERIENCE</NavLink>
          <Button onClick={navigateToBlogs} text="BLOGS"/>
        </ul>
    </div>
  )
}

export default Navbar