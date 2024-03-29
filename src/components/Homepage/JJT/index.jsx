import React from 'react'
import { motion } from "framer-motion";
import { jjtAnimation } from "../../../utils/animation";
import { useScroll } from "../UseScroll/useScroll";
import styles from "./JjtElements.module.css"

export function Jjt() {

  const [element, controls] = useScroll();
  
  return (
    <div className={`${styles.Bg4}`} id='jelajahteknik'>
      <motion.div className={`${styles.maxwidth}`} ref={element}
            variants={jjtAnimation}  
            animate={controls}
               transition={{
                 delay: 0.3,
                 type: "tween",
                 duration: 1.8
               }}
            > 
       <div className={`${styles.kotak}`}>
                <div className={`${styles.kotak2}`}>
                <div className={`${styles.kotak3}`}>
                <div className={`${styles.kotak1}`}/>
                <div className={`${styles.jjt1}`}> Jalan-Jalan Teknik </div>
                </div>
                </div>
        </div>        
            </motion.div>
        
        </div>
    );
}

