import React from 'react'
import "../JJT/JjtElements.css"
import { jjtAnimation } from "../../animation";
import { motion } from "framer-motion";
import { useScroll } from "../UseScroll/useScroll";

function Jjt() {

  const [element, controls] = useScroll();
  
  return (
    <div className="Bg4" id='jelajahteknik'>
      <motion.div className='max-width' ref={element}
            variants={jjtAnimation}  
            animate={controls}
               transition={{
                 delay: 0.3,
                 type: "tween",
                 duration: 1.8
               }}
            > 
       <div className='kotak'>
                <div className='kotak2'>
                <div className='kotak3'>
                <div className='kotak1'></div>
                <div className='jjt1'> Jalan-Jalan Teknik </div>
                </div>
                </div>
        </div>
        </motion.div>
    </div>
    
    
    
    
  )
}

export default Jjt