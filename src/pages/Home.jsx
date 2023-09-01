import React  from 'react'
import "./home.css"
import { motion} from "framer-motion"
import image from "../assets/profile.jpg"
import Button from '../components/Button'
function Home() {
  // const [isPresent , safeToRemove] = usePresence()
  // const [scope , animate] = useAnimate()

  // useEffect(()=>{
  //   if(isPresent){
  //   const enterAnimation =async ()=>{
  //       await animate(scope.current , {y:[ -100 ,100]} , {duration: 0.8} )
  //     }
  //     enterAnimation()
  //   }
  //   else{
  //     const exitAnimation =async ()=>{
  //       await animate(scope.current , {opacity:[1,0]} , {duration: 0.5} ,{delay :0.2})
  //       safeToRemove()
  //     }
  //     exitAnimation()
  //   }
  // })


  return (
    <motion.div
    animate={{y:[-200 , 0]}}
    transition={{duration:0.8}}
    className='home-parent'>
 
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


      {/* second section  */}
        <section className='second-section'>
          <p className='section-heading2'>Let's work together.</p>
          <div className='hr-div'>
          <hr />
          </div>

          <p className='left-para'>From interaction design to scaleable design systems, single-page apps to<br/> something more experimental with WebGL. I help awesome people to build<br/> ambitious yet accessible web projects - the wilder, the better.</p>
          <div className="button1">
            <Button text="MY APPROACH" />
            </div>
        </section>


        {/* what i do section  */}

        <section className='second-section'>
         <p className='section-heading2'>What i do</p>
         <div className='hr-div'>
          <hr />
          </div>
          <h1 className='section-heading'>Full Stack Development</h1>
         <div className='first'>
            <ul className='build'>
              <li> Building responsive website front end using React</li>
              <li>  Creating application backend in Node</li>
              <li>Deployement</li>
            </ul>
            <div className="right-container">
                  <img className='img' src={image} alt="profile" />
            </div>

         </div>


         <h1 className='section-heading'>Problem solving</h1>
         <div className='first'>
            <div className="right-container">
                  <img className='img' src={image} alt="profile" />
            </div>
            <ul className='build'>
              <li> Strong DSA skills in java</li>
              <li>   I love to squeeze out every single millisecond from my code! </li>
              <li>Comfortable to code in java , javascript , python and C++</li>
            </ul>
            

         </div>
        </section>

    </motion.div>
  )
}

export default Home




