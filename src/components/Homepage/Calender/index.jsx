import React from 'react';
import { BiCheckbox } from 'react-icons/bi';
import { motion } from 'framer-motion/dist/es/index';

import styles from './CalenderElements.module.css';
import background from '../../../styles/backgrounds.module.css';

import awan50 from '../../../assets/images/homepage/awan2.png';
import awan3 from '../../../assets/images/homepage/awan1.png';
import { youtube1Animation, youtube2Animation } from '../../../utils/animation';
import { useScroll } from '../UseScroll/useScroll';

export function Calender() {
    const [element, controls] = useScroll();
    return (
        <div
            className={`${background.light} flex relative w-full justify-items-center place-content-center items-center`}
            ref={element}
        >
            {' '}
            <motion.div
                className='absolute h-28 md:h-48 -bottom-10 md:top-1/3 right-0 '
                variants={youtube2Animation}
                animate={controls}
                transition={{
                    delay: 0.5,
                    type: 'tween',
                    duration: 1,
                }}
            >
                <img className='h-full' src={awan50} alt='awan' />
            </motion.div>
            <motion.div
                className='absolute h-16 md:h-28 -top-10 md:-top-12 left-0 z-40 '
                variants={youtube1Animation}
                animate={controls}
                transition={{
                    delay: 0.5,
                    type: 'tween',
                    duration: 1,
                }}
            >
                <img className='h-full' src={awan3} alt='awan' />
            </motion.div>
            <div className={`${styles.ship1}`}>
                <div className={`${styles.ship3}`}>
                    <div className={`${styles.Container}`}>
                        <div className={`${styles.Calendar}`}>
                            <div className={`${styles.monthIndicator}`}>
                                <div className={`${styles.time}`}>
                                    {' '}
                                    Agustus 2022{' '}
                                </div>
                            </div>

                            <div className={`${styles.myBg6}`}>
                                <div className={`${styles.dayOfWeek}`}>
                                    <div>Sen</div>
                                    <div>Sel</div>
                                    <div>Rab</div>
                                    <div>Kam</div>
                                    <div>Jum</div>
                                    <div>Sab</div>
                                    <div>Min</div>
                                </div>

                                <div className={`${styles.dateGrid}`}>
                                    <button type='button'>
                                        <div className={`${styles.time}`}>
                                            1
                                        </div>
                                    </button>
                                    <button type='button'>
                                        <div className={`${styles.time}`}>
                                            2
                                        </div>
                                    </button>
                                    <button type='button'>
                                        <div className={`${styles.time}`}>
                                            <div className={`${styles.hari}`}>
                                                3
                                            </div>
                                        </div>
                                    </button>
                                    <button type='button'>
                                        <div className={`${styles.time}`}>
                                            <div className={`${styles.hari}`}>
                                                4
                                            </div>
                                        </div>
                                    </button>
                                    <button type='button'>
                                        <div className={`${styles.time}`}>
                                            5
                                        </div>
                                    </button>
                                    <button type='button'>
                                        <div className={`${styles.time}`}>
                                            6
                                        </div>
                                    </button>
                                    <button type='button'>
                                        <div className={`${styles.time}`}>
                                            7
                                        </div>
                                    </button>
                                    <button type='button'>
                                        <div className={`${styles.time}`}>
                                            8
                                        </div>
                                    </button>
                                    <button type='button'>
                                        <div className={`${styles.time}`}>
                                            9
                                        </div>
                                    </button>
                                    <button type='button'>
                                        <div className={`${styles.time}`}>
                                            10
                                        </div>
                                    </button>
                                    <button type='button'>
                                        <div className={`${styles.time}`}>
                                            11
                                        </div>
                                    </button>
                                    <button type='button'>
                                        <div className={`${styles.time}`}>
                                            12
                                        </div>
                                    </button>
                                    <button type='button'>
                                        <div className={`${styles.time}`}>
                                            13
                                        </div>
                                    </button>
                                    <button type='button'>
                                        <div className={`${styles.time}`}>
                                            14
                                        </div>
                                    </button>
                                    <button type='button'>
                                        <div className={`${styles.time}`}>
                                            15
                                        </div>
                                    </button>
                                    <button type='button'>
                                        <div className={`${styles.time}`}>
                                            16
                                        </div>
                                    </button>
                                    <button type='button'>
                                        <div className={`${styles.time}`}>
                                            17
                                        </div>
                                    </button>
                                    <button type='button'>
                                        <div className={`${styles.time}`}>
                                            18
                                        </div>
                                    </button>
                                    <button type='button'>
                                        <div className={`${styles.time}`}>
                                            19
                                        </div>
                                    </button>
                                    <button type='button'>
                                        <div className={`${styles.time}`}>
                                            20
                                        </div>
                                    </button>
                                    <button type='button'>
                                        <div className={`${styles.time}`}>
                                            21
                                        </div>
                                    </button>
                                    <button type='button'>
                                        <div className={`${styles.time}`}>
                                            22
                                        </div>
                                    </button>
                                    <button type='button'>
                                        <div className={`${styles.time}`}>
                                            23
                                        </div>
                                    </button>
                                    <button type='button'>
                                        <div className={`${styles.time}`}>
                                            24
                                        </div>
                                    </button>
                                    <button type='button'>
                                        <div className={`${styles.time}`}>
                                            25
                                        </div>
                                    </button>
                                    <button type='button'>
                                        <div className={`${styles.time}`}>
                                            26
                                        </div>
                                    </button>
                                    <button type='button'>
                                        <div className={`${styles.time}`}>
                                            27
                                        </div>
                                    </button>
                                    <button type='button'>
                                        <div className={`${styles.time}`}>
                                            28
                                        </div>
                                    </button>
                                    <button type='button'>
                                        <div className={`${styles.time}`}>
                                            29
                                        </div>
                                    </button>
                                    <button type='button'>
                                        <div className={`${styles.time}`}>
                                            30
                                        </div>
                                    </button>
                                    <button type='button'>
                                        <div className={`${styles.time}`}>
                                            31
                                        </div>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={`${styles.ship4}`}>
                    <div className={`${styles.keterangan}`}>
                        PPSMB KESATRIA 2022
                    </div>
                    <BiCheckbox className={`${styles.icon20}`} />
                </div>
            </div>
        </div>
    );
}
