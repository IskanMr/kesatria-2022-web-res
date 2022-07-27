import React from 'react';
import { motion } from 'framer-motion';
import { useSpring } from 'react-spring';

import { useScroll } from '../UseScroll/useScroll';
import { aboutAnimations } from '../../../utils/animation';
import img from '../../../assets/images/homepage/logo_2.png';
import img2 from '../../../assets/images/homepage/logo_4.png';
import img3 from '../../../assets/images/homepage/logo_5.png';
import img4 from '../../../assets/images/homepage/logo_6.png';
import img5 from '../../../assets/images/homepage/logo_7.png';
import img6 from '../../../assets/images/homepage/logo_8.png';
import img8 from '../../../assets/images/homepage/awan4.png';
import { GenericPage } from '../../GenericPage';

export function AboutSection() {
    const [element, controls] = useScroll();
    const styles5 = useSpring({
        loop: true,
        from: { rotateZ: 0 },
        to: { rotateZ: 360 },
        config: { duration: 3500 },
    });

    return (
        <div
            className='flex justify-items-center place-content-center w-full h-screen md:py-[5vh] md:h-auto -mt-32'
            ref={element}
        >
            <GenericPage>
                <motion.div
                    className='flex w-full h-full flex-col-reverse gap-8 md:gap-0  md:flex-row justify-items-center place-content-center items-center'
                    variants={aboutAnimations}
                    animate={controls}
                    transition={{
                        delay: 0.3,
                        type: 'tween',
                        duration: 1.6,
                    }}
                >
                    <div className='flex flex-col gap-4 w-full md:w-1/3 justify-items-center items-center md:items-start md:justify-items-start place-content-center'>
                        <div className=' font-semibold text-lg md:text-2xl'>
                            Mengenal PPSMB KESATRIA 2022
                        </div>
                        <div className='font-bold text-3xl md:text-5xl'>
                            ANTACHANDRA
                        </div>
                        <div className='text-base md:text-xl text-justify'>
                            Antachandra (terbang ke bulan) diawali dengan lepas
                            landas dari permukaan bumi yang menggambarkan
                            perjuangan awal atau titik awal para Kesatria Muda
                            untuk mengawali kesaksian dan kegiatan mereka di
                            lingkungan sivitas akademika UGM. Tidak pernah
                            berhenti terbang sebelum sampai ke tujuan, kesatria
                            dapat diartikan sebagai seorang pejuang yang
                            tangguh, tetap dalam pendirian, dan konsisten dalam
                            segala tindakan yang harus siap sedia bertanggung
                            jawab atas segala tindakannya.
                        </div>
                    </div>
                    <div className='flex flex-col w-full md:w-1/2 justify-items-start place-content-center items-center'>
                        <div className='flex w-1/2 h-auto md:w-auto md:h-[40vh] justify-items-center place-content-center items-center'>
                            <img className='h-full' src={img} alt='pic' />
                        </div>

                        <div className='flex flex-row w-full gap-4 z-10 justify-items-center place-content-center items-center'>
                            <div className='flex w-14 h-14 md:w-20 md:h-20 p-2 rounded-md justify-items-center place-content-center bg-white shadow-lg'>
                                <img
                                    className='w-full h-full'
                                    src={img2}
                                    alt='img2'
                                />
                            </div>
                            <div className='flex w-14 h-14 md:w-20 md:h-20 p-2 rounded-md justify-items-center place-content-center bg-white shadow-lg'>
                                <img
                                    className=' h-full'
                                    src={img3}
                                    alt='img3'
                                />
                            </div>
                            <div className='flex w-14 h-14 md:w-20 md:h-20 p-2 rounded-md justify-items-center place-content-center bg-white shadow-lg'>
                                <img
                                    className=' h-full'
                                    src={img4}
                                    alt='img4'
                                />
                            </div>
                            <div className='flex w-14 h-14 md:w-20 md:h-20 p-2 rounded-md justify-items-center place-content-center bg-white shadow-lg'>
                                <img
                                    className=' h-full'
                                    src={img5}
                                    alt='img5'
                                />
                            </div>
                            <div className='flex w-14 h-14 md:w-20 md:h-20 p-2 rounded-md justify-items-center place-content-center bg-white shadow-lg'>
                                <img className='h-full' src={img6} alt='img6' />
                            </div>
                        </div>
                    </div>
                </motion.div>
            </GenericPage>
        </div>
    );
}
