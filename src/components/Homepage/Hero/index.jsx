import React from 'react';
import { FaAngleDown } from 'react-icons/fa';
import { motion } from 'framer-motion';

import { GenericPage } from '../../GenericPage';

import styles from './HeroElements.module.css';
import maskot from '../../../assets/images/homepage/mascot.png';
import logo2 from '../../../assets/images/homepage/logo_2.png';
import {
    homeAnimation,
    homeInfoAnimation,
    homeInfo2Animation,
} from '../../../utils/animation';

export function HeroSection() {
    return (
        <div className={`${styles.Bg1} min-h-screen`} id='home'>
            <GenericPage className='flex flex-col w-full h-full items-center place-content-center'>
                <div className='flex flex-col md:flex-row w-full items-center place-content-center mb-6 md:mb-0'>
                    <motion.div
                        className='h-[360px] md:h-[70vh] md:w-1/2 flex items-center place-content-center'
                        variants={homeAnimation}
                        transition={{
                            delay: 0.3,
                            duration: 0.6,
                            type: 'tween',
                        }}
                    >
                        <img src={maskot} alt='maskot' />
                    </motion.div>
                    <div className='flex flex-row md:flex-col w-full md:w-1/2 items-center place-content-center'>
                        <motion.div
                            className='flex h-auto w-1/2 md:h-[47vh] md:w-auto mr-6 md:mr-0'
                            variants={homeInfoAnimation}
                            transition={{
                                delay: 0.3,
                                duration: 0.6,
                                type: 'tween',
                            }}
                        >
                            <img src={logo2} alt='logo' />
                        </motion.div>

                        <motion.div
                            className='flex place-content-center text-4xl md:text-6xl w-1/2 md:w-full font-bold'
                            variants={homeInfoAnimation}
                            transition={{
                                delay: 0.3,
                                duration: 0.6,
                                type: 'tween',
                            }}
                        >
                            <div className='flex flex-col place-content-center md:items-center z-[2] absolute  text-blue-dark'>
                                <span>PPSMB KESATRIA</span>
                                <span>2022</span>
                            </div>
                            <div
                                className={`${styles.txtOutline} flex flex-col place-content-center md:items-center text-white z-0 relative  -ml-3 md:ml-2 mt-1`}
                            >
                                <span>PPSMB KESATRIA</span>
                                <span>2022</span>
                            </div>
                        </motion.div>
                    </div>
                </div>

                <a
                    href='#youtube'
                    className='flex flex-col group items-center place-content-center justify-items-center'
                >
                    <motion.div
                        className='font-bold text-xs md:text-base'
                        variants={homeInfo2Animation}
                        transition={{
                            delay: 0.3,
                            duration: 0.6,
                            type: 'tween',
                        }}
                    >
                        <span className='group-hover:text-oranges-default transition ease-in-out duration-300'>
                            Scroll Down
                        </span>
                        <span className='flex justify-items-center place-content-center items-center'>
                            <FaAngleDown
                                className={`${styles.iconPosition} h-12 group-hover:text-oranges-default transition ease-in-out duration-300`}
                            />
                        </span>
                    </motion.div>
                </a>
            </GenericPage>
        </div>
    );
}
