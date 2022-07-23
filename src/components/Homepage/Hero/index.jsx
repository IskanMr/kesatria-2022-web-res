import React from 'react'
import "../HeroSection/HeroSection.css"
import maskot from "../../images/mascot.png"
import logo2 from "../../images/logo_2.png"
import { FaAngleDown } from 'react-icons/fa';
import { motion } from "framer-motion";
import { homeAnimation, homeInfoAnimation, homeInfo2Animation } from "../../animation";



function HeroSection() {
  return (
    
    <div className="Bg1" id='home' >
      <div class="max-width">
      
      <div className='sizing'>

      
      <motion.div className="mascot" 
      // variants={homeAnimation}
      // transition={{ delay: 1, duration: 1, type: "tween" }}
      >
        <img src={maskot} />
      </motion.div>
      

      
      <motion.div className="logo2"
        // variants={homeInfoAnimation}  
        // transition={{ delay: 1.2, duration: 1, type: "tween" }}
      >
      <img src={logo2} />
      </motion.div>
      
      <motion.div className="brand"
      variants={homeInfoAnimation}  
      transition={{ delay: 0.3, duration: 0.6, type: "tween" }}
      >
      PPSMB KESATRIA 2022
      </motion.div>

      <motion.div className="brand1"
      variants={homeInfoAnimation}  
      transition={{ delay: 0.3, duration: 0.6, type: "tween" }}
      >
      PPSMB KESATRIA 2022
      </motion.div>
      
      <motion.div className="scroll" 
       variants={homeInfo2Animation}  
       transition={{ delay: 1.5, duration: 0.6, type: "tween" }}
      >
        Scroll Down
      </motion.div>

      <motion.div className= "top-to-btm"
       variants={homeInfo2Animation}  
       transition={{ delay: 1.5, duration: 0.6, type: "tween" }}
      >
      <a href="#youtube" className='anchor'>
      <FaAngleDown className="icon-position icon-style">
      </FaAngleDown>
      </a>
      </motion.div>        
      
      </div>
      </div>
    </div>
    
    
  )
}

export default HeroSection