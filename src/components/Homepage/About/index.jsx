import React from 'react'
import {AboutRow, Column1, Column2, Column3, Column4, TextWrapper, TopLine, Heading, Subtitle, Img, ImgWrap, ImgDep,ImgDep1, ImgDep12, ImgDep3, ImgDep4, ImgDep5,Img11, Img14, Img12, Img13, Img4, Img15} from './AboutElements'
import { useScroll } from "../UseScroll/useScroll";
import { motion } from "framer-motion";
import { aboutAnimations, about1Animations } from "../../animation";
import { useSpring, animated } from 'react-spring'
import "../About/AboutElements.css"

const AboutSection = ({lightBg, id, imgStart, topLine, lightText, headLine, darkText, description, img,img2, img3, img4, img5, img6,img8, alt}) => {
const [element, controls] = useScroll();
const styles = useSpring({
  loop: true,
  from: { rotateZ: 0 },
  to: { rotateZ: 360 },
  config: { duration: 3500}
})

  return (
      
      <section className="AboutContainer" lightBg={lightBg} id={id} ref={element}>
          <motion.div className="AboutWrapper"
            variants={aboutAnimations}
            animate={controls}
            transition={{
              delay: 0.3,
              type: "tween",
              duration: 1.6,
            }}
          >
            <AboutRow imgStart={imgStart}>
              <Column1>
                <TextWrapper>
                <TopLine> {topLine} </TopLine>
                <Heading lightText={lightText} > {headLine}</Heading>
                <Subtitle darkText={darkText} > {description} </Subtitle>
                </TextWrapper>
              </Column1>
              
              <Column2>
                <ImgWrap>
                  <Img src={img} alt={alt} />
                </ImgWrap>
              <Column3>
                <ImgDep>

                  <ImgDep1 >
                  <Img11 src={img2} alt={alt} />
                  </ImgDep1>
                  <animated.div className='ImgDep1' style={styles} />

                  <ImgDep12>
                  <Img12 src={img3} alt={alt} />
                  </ImgDep12>
                  <animated.div className='ImgDep2' style={styles} />
                  
                  <ImgDep3>
                  <Img13 src={img4} alt={alt} />
                  </ImgDep3>
                  <animated.div className='ImgDep3' style={styles} />

                  <ImgDep4>
                  <Img14 src={img5} alt={alt} />
                  </ImgDep4>
                  <animated.div className='ImgDep4' style={styles} />

                  <ImgDep5>
                  <Img15 src={img6} alt={alt} />
                  </ImgDep5>
                  <animated.div className='ImgDep5' style={styles} />

                </ImgDep>
              </Column3>
              </Column2>
              <motion.div variants={about1Animations}
            animate={controls}
            transition={{
              delay: 0.3,
              type: "tween",
              duration: 1.6,
            }}
              >
              <Column4>
              <Img4 src={img8} alt={alt} />
              </Column4>
              </motion.div>
            </AboutRow>
          </motion.div>
      </section>
    
  )
}

export default AboutSection