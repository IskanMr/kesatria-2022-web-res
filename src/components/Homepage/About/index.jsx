import React from 'react'
import { motion } from "framer-motion";
import { useSpring, animated } from 'react-spring'
import { AwanContainer, AboutContainer, AboutRow, Column1, Column2, Column3, Column4, TextWrapper, TopLine, Heading, Subtitle, Img, ImgWrap, ImgDep,ImgDep1, ImgDep12, ImgDep3, ImgDep4, ImgDep5,Img11, Img14, Img12, Img13, Img4, Img15} from './AboutElements'
import { useScroll } from "../UseScroll/useScroll";
import { aboutAnimations, about1Animations } from "../../../utils/animation";
import styles from "./AboutElements.module.css"
import img from '../../../assets/images/homepage/logo_2.png'
import img2 from '../../../assets/images/homepage/logo_4.png'
import img3 from '../../../assets/images/homepage/logo_5.png'
import img4 from '../../../assets/images/homepage/logo_6.png'
import img5 from '../../../assets/images/homepage/logo_7.png'
import img6 from '../../../assets/images/homepage/logo_8.png'
import img8 from '../../../assets/images/homepage/awan4.png'

export function AboutSection  ()  {
const [element, controls] = useScroll();
const styles5 = useSpring({
  loop: true,
  from: { rotateZ: 0 },
  to: { rotateZ: 360 },
  config: { duration: 3500}
})

    return (
        <AboutContainer>
            <div className={`${styles.sizing10}`} ref={element}>
            <motion.div
                className={`${styles.AboutWrapper}`}
                variants={aboutAnimations}
                animate={controls}
                transition={{
                    delay: 0.3,
                    type: 'tween',
                    duration: 1.6,
                }}
            >
                <AboutRow>
                    <Column1>
                        <TextWrapper>
                            <TopLine to='/'> Mengenal PPSMB KESATRIA 2022 </TopLine>
                            <Heading to='/'>  ANTACHANDRA </Heading>
                            <Subtitle to='/'> Antachandra (terbang ke bulan) diawali dengan lepas landas dari permukaan bumi yang menggambarkan perjuangan awal atau titik awal para Kesatria Muda untuk mengawali kesaksian dan kegiatan mereka di lingkungan sivitas akademika UGM. Tidak pernah berhenti terbang sebelum sampai ke tujuan, kesatria dapat diartikan sebagai seorang pejuang yang tangguh, tetap dalam pendirian, dan konsisten dalam segala tindakan yang harus siap sedia bertanggung jawab atas segala tindakannya. </Subtitle>
                        </TextWrapper>
                    </Column1>

                    <Column2>
                        <ImgWrap>
                            <Img src={img} alt='pic' />
                        </ImgWrap>
                        <Column3>
                            <ImgDep>
                                <ImgDep1>
                                    <Img11 src={img2} alt='pic'/>
                                </ImgDep1>
                                {/* <animated.div
                                    className={`${styles.ImgDep1}`}
                                    style={styles5}
                                /> */}

                                <ImgDep12>
                                    <Img12 src={img3} alt='pic' />
                                </ImgDep12>
                                {/* <animated.div
                                    className={`${styles.ImgDep2}`}
                                    style={styles5}
                                /> */}

                                <ImgDep3>
                                    <Img13 src={img4} alt='pic'/>
                                </ImgDep3>
                                {/* <animated.div
                                    className={`${styles.ImgDep3}`}
                                    style={styles5}
                                /> */}

                                <ImgDep4>
                                    <Img14 src={img5} alt='pic' />
                                </ImgDep4>
                                {/* <animated.div
                                    className={`${styles.ImgDep4}`}
                                    style={styles5}
                                /> */}

                                <ImgDep5>
                                    <Img15 src={img6} alt='pic' />
                                </ImgDep5>
                                {/* <animated.div
                                    className={`${styles.ImgDep5}`}
                                    style={styles5}
                                /> */}
                            </ImgDep>
                        </Column3>
                    </Column2>
                    <motion.div
                        variants={about1Animations}
                        animate={controls}
                        transition={{
                            delay: 0.3,
                            type: 'tween',
                            duration: 1.6,
                        }}
                    >
                        <AwanContainer>
                        <Column4>
                            <Img4 src={img8} alt='pic' />
                        </Column4>
                        </AwanContainer>
                    </motion.div>
                </AboutRow>
            </motion.div>
            </div>
        </AboutContainer>
    );
};

