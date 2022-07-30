import React from 'react';
import { motion } from 'framer-motion';

import { jjtAnimation } from '../../../utils/animation';
import { useScroll } from '../UseScroll/useScroll';

import styles from './JjtElements.module.css';
import background from '../../../styles/backgrounds.module.css';

export function Jjt() {
    const [element, controls] = useScroll();

    return (
        <div
            className={`${background.dark} overflow-y-visible py-48 px-4 sm:px-8 md:min-h-screen flex w-full h-full justify-items-center place-content-center items-center relative`}
            id='jelajahteknik'
            ref={element}
        >
            <motion.div
                className='flex w-96 h-[320px] md:w-[996px] md:h-[600px] '
                variants={jjtAnimation}
                animate={controls}
                transition={{
                    delay: 0.3,
                    type: 'tween',
                    duration: 1,
                }}
            >
                <div
                    className={`${styles.jjtImg} relative w-full h-full ring-[16px] md:ring-[24px] ring-blue-default rounded-3xl drop-shadow-container`}
                >
                    <div className='absolute top-0 left-0 bg-oranges-default px-4 py-2 md:px-8 md:py-4 rounded-tl-3xl rounded-br-3xl text-white font-bold md:text-2xl'>
                        Jalan-Jalan Teknik
                    </div>
                </div>
            </motion.div>
        </div>
    );
}
