import React from 'react';
import { motion } from 'framer-motion';

import styles from './KilasBalik.module.css';
import awan5 from '../../../assets/images/homepage/awan6.png';
import logo10 from '../../../assets/images/homepage/logo_10.png';
import logo11 from '../../../assets/images/homepage/logo_11.png';
import logo12 from '../../../assets/images/homepage/logo_12.png';
import logo13 from '../../../assets/images/homepage/logo_13.png';
import logo14 from '../../../assets/images/homepage/logo_14.png';
import {
    youtubeAnimation,
    youtube1Animation,
    jjtAnimation,
} from '../../../utils/animation';
import { useScroll } from '../UseScroll/useScroll';

export function Kilas() {
    const [element, controls] = useScroll();

    const smallCon =
        'flex bg-white h-10 w-10 md:h-24 md:w-24 p-1 md:p-3 rounded-md md:rounded-[32px] drop-shadow-conSmallMb md:drop-shadow-conSmall justify-items-center place-content-center items-center';
    return (
        <div
            className={`${styles.Bg10} flex relative w-full py-48 justify-items-center place-content-center items-center `}
            id='kilasbalik'
            ref={element}
        >
            <motion.div
                className='absolute -top-12 -left-24 h-36 md:h-52'
                variants={youtube1Animation}
                animate={controls}
                transition={{
                    delay: 0.3,
                    type: 'tween',
                    duration: 1,
                }}
            >
                <img className='w-full h-full' src={awan5} alt='pic' />
            </motion.div>
            <div className='flex w-full h-full justify-items-center place-content-center items-center'>
                <motion.div
                    className='flex w-80 h-60 md:w-[520px] md:h-96 '
                    variants={jjtAnimation}
                    animate={controls}
                    transition={{
                        delay: 0.3,
                        type: 'tween',
                        duration: 1,
                    }}
                >
                    <iframe
                        title='youtube'
                        className='w-full h-full ring-[16px] md:ring-[24px] ring-blue-default rounded-3xl drop-shadow-container'
                        src='https://www.youtube.com/embed/H38zGL5Iscs'
                    />
                </motion.div>
            </div>

            <motion.div
                className='absolute top-[15%] md:top-1/3 left-1/4'
                variants={jjtAnimation}
                animate={controls}
                transition={{
                    delay: 0.3,
                    type: 'tween',
                    duration: 1,
                }}
            >
                <div className={smallCon}>
                    <img className='h-full' src={logo10} alt='logo21' />
                </div>
            </motion.div>

            <motion.div
                className='absolute bottom-[10%] md:bottom-1/3 left-[15%]'
                variants={jjtAnimation}
                animate={controls}
                transition={{
                    delay: 0.3,
                    type: 'tween',
                    duration: 1,
                }}
            >
                <div className={smallCon}>
                    <img className='h-full' src={logo11} alt='logo18' />
                </div>
            </motion.div>

            <motion.div
                className='absolute bottom-[12%] md:top-1/2 right-1/2 md:right-1/4'
                variants={jjtAnimation}
                animate={controls}
                transition={{
                    delay: 0.3,
                    type: 'tween',
                    duration: 1,
                }}
            >
                <div className={smallCon}>
                    <img className='h-full' src={logo12} alt='logo19' />
                </div>
            </motion.div>

            <motion.div
                className='absolute top-[13%] md:top-[20%] right-1/3 md:right-[15%]'
                variants={jjtAnimation}
                animate={controls}
                transition={{
                    delay: 0.3,
                    type: 'tween',
                    duration: 1,
                }}
            >
                <div className={smallCon}>
                    <img className='h-full' src={logo13} alt='logo20' />
                </div>
            </motion.div>

            <motion.div
                className='absolute bottom-[4%] md:bottom-1/4 right-[15%] md:right-[4%]'
                variants={jjtAnimation}
                animate={controls}
                transition={{
                    delay: 0.3,
                    type: 'tween',
                    duration: 1,
                }}
            >
                <div className={smallCon}>
                    <img className='h-full' src={logo14} alt='logo22' />
                </div>
            </motion.div>
        </div>
    );
}
