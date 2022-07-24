import React from 'react'
import { motion } from "framer-motion";
import { useSpring, animated } from 'react-spring'
import styles from "./KilasBalik.module.css"
import awan5 from "../../../assets/images/homepage/awan6.png"
import logo10 from"../../../assets/images/homepage/logo_10.png"
import logo11 from"../../../assets/images/homepage/logo_11.png"
import logo12 from"../../../assets/images/homepage/logo_12.png"
import logo13 from"../../../assets/images/homepage/logo_13.png"
import logo14 from"../../../assets/images/homepage/logo_14.png"
import { youtube1Animation, jjtAnimation } from "../../../utils/animation";
import { useScroll } from "../UseScroll/useScroll";


export function Kilas () {
const [element, controls] = useScroll();
const styles1 = useSpring({
      loop: { reverse: true },
      from: { x: -100 },
      to: { x: 500 },
      config: {duration: 2000}
    })

const styles2 = useSpring({
      loop: { reverse: true },
      from: { x: 100 },
      to: { x: -600 },
      config: {duration: 2500}
    })

const styles3 = useSpring({
      loop: { reverse: true },
      from: { x: 0 },
      to: { x: 400 },
      config: {duration: 1200}
    })

const styles4 = useSpring({
      loop: { reverse: true },
      from: { y: 0 },
      to: { y: -300 },
      config: {duration: 1200}
    })

    const styles5 = useSpring({
      loop: { reverse: true },
      from: { y: 0 },
      to: { y: 200 },
      config: {duration: 2000}
    })

return (
<div className={`${styles.Bg9}`}> 
      <div className={`${styles.kotak4}`}id='kilasbalik' ref={element}>
      <motion.div className={`${styles.Awan5}`}
      variants={youtube1Animation}  
      animate={controls}
       transition={{
         delay: 0.3,
         type: "tween",
         duration: 1.8,
       }}
      >
              <img src={awan5} alt='pic'/>
      </motion.div>
        
            <animated.div className={`${styles.kotak8}`} style={styles1}>
            <div className={`${styles.logo10}`} >
              <img src={logo10} alt='pic'/>
            </div>
            </animated.div>

           
            <animated.div className={`${styles.kotak9}`}style={styles5}>
            <div className={`${styles.logo11}`}>
              <img src={logo11} alt='pic'/>
            </div>
            </animated.div>

            <animated.div className={`${styles.kotak13}`} style={styles2}>
            <div className={`${styles.logo12}`}>
              <img src={logo12}alt='pic'/>
            </div>
            </animated.div>
            
            <animated.div className={`${styles.kotak11}`}style={styles4}>
            <div className={`${styles.logo13}`}>
              <img src={logo13} alt='pic'/>
            </div>
            </animated.div>

            <animated.div className={`${styles.kotak12}`} style={styles3}>
            <div className={`${styles.logo14}`}>
              <img src={logo14} alt='pic'/>
            </div>
            </animated.div>

            <motion.div className={`${styles.kotak5}`}
            variants={jjtAnimation}  
            animate={controls}
               transition={{
                 delay: 0.3,
                 type: "tween",
                 duration: 1.8
               }}>
            <div className={`${styles.kotak7}`}/>
            <div className={`${styles.kb}`}> Kilas Balik </div>
            </motion.div>
    </div>
</div>
  )
}
