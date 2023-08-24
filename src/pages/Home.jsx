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
                <p className='left-heading'>Hi,<br/> I am <strong>Saikat</strong></p>
                <p className='left-para'>I'm an <strong>independent creative developer</strong> from<br/> Pune, Maharashtra.</p>
              
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