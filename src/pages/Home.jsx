import React from 'react'
import Navbar from '../components/Navbar'
import "./home.css"
import image from "../assets/profile.jpg"
function Home() {
  return (
    <div className='home-parent'>
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

        <section className='second-section'>
          <p className='section-heading'>Let's work together.</p>
          <div className='hr-div'>
          <hr />
          </div>

          <p className='left-para'>From interaction design to scaleable design systems, single-page apps to<br/> something more experimental with WebGL. I help awesome people to build<br/> ambitious yet accessible web projects - the wilder, the better.</p>
         
        </section>
    </div>
  )
}

export default Home




