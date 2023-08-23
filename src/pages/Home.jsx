import React from 'react'
import Navbar from '../components/Navbar'
import "./home.css"
import image from "../assets/profile.jpg"
function Home() {
  return (
    <>
    <Navbar/>
        <div className="home-main">
            <div className="container">
            <div className="left-container">
                <h1 className='left-heading'>Hi,<br/> I am Saikat</h1>
                <p className='left-para'>I'm an independent creative developer from<br/> Pune, Maharashtra.</p>
              
           </div>
            <div className="right-container">
                <img className='img' src={image} alt="profile" />
            </div>
            </div>
        </div>
    </>
  )
}

export default Home