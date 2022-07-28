import React, { useState, useCallback } from 'react';
// import { render } from 'react-dom';
// import { useModal } from 'react-hooks-use-modal';
import { motion } from 'framer-motion';
import styles from './Youtube.module.css';

import { GenericPage } from '../../GenericPage';

import awan1 from '../../../assets/images/homepage/awan1.png';
import awan2 from '../../../assets/images/homepage/awan2.png';
import {
    youtubeAnimation,
    youtube1Animation,
    youtube2Animation,
} from '../../../utils/animation';
import { useScroll } from '../UseScroll/useScroll';

export function Youtube() {
    // const [Modal, open, close, isOpen] = useModal('root', {
    //   preventScroll: true,
    //   closeOnOverlayClick: false
    // });

    const [element, controls] = useScroll();
    return (
        <div className={`${styles.Bg2}`} id='youtube'>
            <GenericPage className='flex relative w-full h-full justify-items-center place-content-center items-center overflow-hidden'>
                <div className='flex w-full h-full justify-items-center place-content-center items-center overflow-hidden'>
                    <div className='flex w-full h-full relative' ref={element}>
                        <motion.div
                            className=' absolute h-[64px] md:h-auto bottom-36 left-[5vw] md:left-[7vw] md:bottom-24'
                            variants={youtube1Animation}
                            animate={controls}
                            transition={{
                                delay: 0.3,
                                type: 'tween',
                                duration: 1.8,
                            }}
                        >
                            <img
                                className='h-full w-full'
                                src={awan2}
                                alt='cloud'
                            />
                        </motion.div>
                        <motion.div
                            className=' absolute h-[42px] md:h-auto top-32 right-[7vw] md:right-[12vw] md:top-40'
                            variants={youtube2Animation}
                            animate={controls}
                            transition={{
                                delay: 0.3,
                                type: 'tween',
                                duration: 1.8,
                            }}
                        >
                            <img
                                className='h-full w-full'
                                src={awan1}
                                alt='cloud'
                            />
                        </motion.div>
                    </div>

                    <div className={`${styles.box}`}>
                        <motion.div
                            className='flex w-96 h-[320px] md:w-[996px] md:h-[600px] '
                            variants={youtubeAnimation}
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
                                src='https://www.youtube.com/embed/eR618MSqRRs'
                            />
                        </motion.div>
                    </div>
                </div>
            </GenericPage>
        </div>
    );
}
