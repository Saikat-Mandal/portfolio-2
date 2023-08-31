import React from 'react'
import "./blogs.css"
import { useAnimate , motion, usePresence, delay } from "framer-motion"
import Blog from '../components/Blog'
import data from "../assets/blogData"
function Blogs() {
  return (
    <motion.div 
    animate={{y:[-200 , 0]}}
    transition={{duration:0.8}}
    className='blog-container'>
      <section className='main-content'>
        <p className='section-heading1'>My writing.</p>
        <div className="hr-div">
        <hr  className='hr'/>
        </div>
        <p className='section-para'>Here you'll find my writing on topics ranging from coding and the web industry,<br/> to artificial intelligence and machine learning . There's also content on cloud feed. If<br/> you'd like to chat about anything I've written, drop me a hi on Hire me.</p>
      </section>
      <div className="blogs-section">

        {
        data.map((b)=>{
          return <Blog 
          date={b.date}
          heading={b.heading}
          text={b.text}
           />
        })
        }
       

      </div>
    </motion.div>
  )
}

export default Blogs