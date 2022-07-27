import React from 'react'
import { FaAngleDown } from 'react-icons/fa';
import { motion } from "framer-motion";
import styles from "./HeroElements.module.css"
import maskot from "../../../assets/images/homepage/mascot.png"
import logo2 from "../../../assets/images/homepage/logo_2.png"
import { homeAnimation, homeInfoAnimation, homeInfo2Animation } from "../../../utils/animation";



export function HeroSection() {
  return (
    
    <div className={`${styles.Bg1}`} id='home' >
      <div className={`${styles.maxwidth}`}>
      
      <div className={`${styles.sizing}`} >

      
      <motion.div className={`${styles.mascot}`} 
      // variants={homeAnimation}
      // transition={{ delay: 1, duration: 1, type: "tween" }}
      >
        <img src={maskot}alt='pic'/>
      </motion.div>
      

      
      <motion.div className={`${styles.logo2}`}
        // variants={homeInfoAnimation}  
        // transition={{ delay: 1.2, duration: 1, type: "tween" }}
      >
      <img src={logo2} alt='pic'/>
      </motion.div>
      
      <motion.div className={`${styles.brand}`}
      variants={homeInfoAnimation}  
      transition={{ delay: 0.3, duration: 0.6, type: "tween" }}
      >
      PPSMB KESATRIA 2022
      </motion.div>

      <motion.div className={`${styles.brand1}`}
        variants={homeInfoAnimation}
        transition={{delay: 0.3, duration: 0.6, type: 'tween',}}
        >
          PPSMB KESATRIA 2022
      </motion.div>

      <motion.div className={`${styles.scroll}`}
       variants={homeInfo2Animation}  
       transition={{ delay: 1.5, duration: 0.6, type: "tween" }}
      >
        Scroll Down
      </motion.div>

      <motion.div className= {`${styles.topToBtm}`}
       variants={homeInfo2Animation}  
       transition={{ delay: 1.5, duration: 0.6, type: "tween" }}
      >
      <a href="#youtube" className={`${styles.anchor}`}>
      <FaAngleDown className={`${styles.iconPosition}`} />
      </a>
      </motion.div>        
      
      </div>
      </div>
    </div>
    
    
  )
}

