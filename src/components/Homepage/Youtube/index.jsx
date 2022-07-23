import React, { useState, useCallback } from 'react';
// import { render } from 'react-dom';
// import { useModal } from 'react-hooks-use-modal';
import "../Youtube/youtube.css"
import awan1 from '../../images/awan1.png'
import awan2 from '../../images/awan2.png'
import awan20 from '../../images/awan3.png'
import { youtubeAnimation, youtube1Animation, youtube2Animation } from "../../animation";
import { motion } from "framer-motion";
import { useScroll } from "../UseScroll/useScroll";
import anthem1 from "../../images/anthem.png"


function Youtube() {
  // const [Modal, open, close, isOpen] = useModal('root', {
  //   preventScroll: true,
  //   closeOnOverlayClick: false
  // });

  const [element, controls] = useScroll();
  return (
    <div className="Bg2" >
       <div className='max-width' id='youtube'>
      
      <div className='box5'>
      <div className='Awan20'>
          <img src={awan20} />
      </div>
      </div>

      <div className='box' ref={element}>
        <motion.div className='Awan2'
          variants={youtube1Animation}  
          animate={controls}
           transition={{
             delay: 0.3,
             type: "tween",
             duration: 1.8,
           }}
        >
              <img src={awan2} />
        </motion.div>
        <motion.div className='Awan1'
          variants={youtube2Animation}  
          animate={controls}
           transition={{
             delay: 0.3,
             type: "tween",
             duration: 1.8,
           }}
        >
              <img src={awan1} />
        </motion.div>
      
        <section className='box10'  ref={element}>
        <motion.div className='box2'
         variants={youtubeAnimation}  
         animate={controls}
            transition={{
              delay: 0.3,
              type: "tween",
              duration: 1
            }}
        >
        <div className='box3'>
            <div className='anthem'>
            <img src={anthem1} />
            </div>
            
            {/* <iframe iframe width="560" height="315" src="https://www.youtube.com/embed/M4ZoCHID9GI" title="YouTube video player" frameborder="0" border-radius="20px"allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"gesture="media"allowfullscreen></iframe> */}
              <div className='teks1'>
                ANTHEM
              </div>
              <div className='teks2'>
                PPSMB KESATRIA 2022
              </div>
        </div>
      </motion.div>
      </section>
      </div>
      </div>
    </div>
  )
}

export default Youtube