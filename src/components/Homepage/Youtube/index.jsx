import React, { useState, useCallback } from 'react';
// import { render } from 'react-dom';
// import { useModal } from 'react-hooks-use-modal';
import { motion } from "framer-motion";
import styles from "./Youtube.module.css"
import awan1 from '../../../assets/images/homepage/awan1.png'
import awan2 from '../../../assets/images/homepage/awan2.png'
import awan20 from '../../../assets/images/homepage/awan3.png'
import { youtubeAnimation, youtube1Animation, youtube2Animation } from "../../../utils/animation";
import { useScroll } from "../UseScroll/useScroll";
import anthem1 from '../../../assets/images/homepage/anthem.png'


export function Youtube() {
  // const [Modal, open, close, isOpen] = useModal('root', {
  //   preventScroll: true,
  //   closeOnOverlayClick: false
  // });

  const [element, controls] = useScroll();
  return (
    <div className={`${styles.Bg2}`} >
       <div className={`${styles.kiki}`} id='youtube'>
      
      <div className={`${styles.box5}`}>
      <div className={`${styles.Awan20}`}>
          <img src={awan20} alt='pic' />
      </div>
      </div>

      <div className={`${styles.box10}`} ref={element}>
        <motion.div className={`${styles.Awan2}`}
          variants={youtube1Animation}  
          animate={controls}
           transition={{
             delay: 0.3,
             type: "tween",
             duration: 1.8,
           }}
        >
              <img src={awan2} alt='pic' />
        </motion.div>
        <motion.div className={`${styles.Awan1}`}
          variants={youtube2Animation}  
          animate={controls}
           transition={{
             delay: 0.3,
             type: "tween",
             duration: 1.8,
           }}
        >
              <img src={awan1} alt='pic' />
        </motion.div>
        </div>
      
        <div className={`${styles.box}`}>
        <motion.div className={`${styles.box2}`}
         variants={youtubeAnimation}  
         animate={controls}
            transition={{
              delay: 0.3,
              type: "tween",
              duration: 1
            }}
        >
        
        <div className={`${styles.box3}`}>
            <div className={`${styles.anthem}`}>
            <img src={anthem1}  alt='pic'/>
            </div>

            <div className={`${styles.teks1}`}>
                ANTHEM
              </div>
              <div className={`${styles.teks2}`}>
                PPSMB KESATRIA 2022
              </div>
        </div>

    </motion.div>
    
    </div>
    </div>
    </div>
    );
}

