import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import { motion } from 'framer-motion';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../../styles/_fonts.scss';

import { XCircleIcon } from '@heroicons/react/solid';
import { youtubeAnimation } from '../../utils/animation';
import { useScroll } from '../../components/Homepage/UseScroll/useScroll';

import { HtmlHead } from '../../components/HtmlHead';
import { PageTitle } from '../../components/PageTitle';

import background from '../../assets/images/pattern-light.png';
import arrowPrev from '../../assets/images/jalanteknik/arrowprev.png';
import arrowNext from '../../assets/images/jalanteknik/arrownext.png';
import cloud from '../../assets/images/awanGabung.png';
import { Gallery1 } from './component/gallery1';
import awan2 from '../../assets/images/dokumentasi/awan2.png';
import awan3 from '../../assets/images/dokumentasi/awan3.png';
import crown from '../../assets/images/dokumentasi/crown.png';
import { Gallery2 } from './component/gallery2';

function SampleNextArrow(props) {
    const { className, onClick } = props;
    return (
        <div // eslint-disable-line jsx-a11y/no-static-element-interactions
            className={className}
            style={{
                content: `url(${arrowNext})`,
                height: '15vmin',
                width: '3.5vmin',
                right: '-3vw',
                zIndex: '3',
                display: 'block',
            }}
            onClick={onClick}
            aria-hidden='true'
        />
    );
}

function SamplePrevArrow(props) {
    const { className, onClick } = props;
    return (
        <div // eslint-disable-line jsx-a11y/no-static-element-interactions
            className={className}
            style={{
                content: `url(${arrowPrev})`,
                height: '15vmin',
                width: '3.5vmin',
                left: '-3vw',
                zIndex: '3',
                display: 'block',
            }}
            onClick={onClick}
            aria-hidden='true'
        />
    );
}

const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
                dots: true,
            },
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                initialSlide: 0,
            },
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            },
        },
    ],
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
};

export function Dokumentasi() {
    const [picked, setPicked] = useState();
    const [picPrevOpen, setPicPrevOpen] = useState(false);

    const handleOnClick = (e) => {
        setPicked(e);
        setPicPrevOpen(true);
    };

    useEffect(() => {
        if (picPrevOpen) {
            document.body.style.overflowY = 'hidden';
        } else {
            document.body.style.overflowY = 'unset';
        }
    }, [picPrevOpen]);

    const [element, controls] = useScroll();
    return (
        <motion.div
            initial={{ opacity: 0, scale: 1 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
        >
            <HtmlHead title='Dokumentasi' desc='Dokumentasi PPSMB Kesatria' />
            <div
                className='bg-white_bone overflow-hidden'
                style={{ backgroundImage: `url(${background})` }}
                ref={element}
            >
                <div
                    className='bg-no-repeat bg-contain h-750 320px:h-400 relative'
                    style={{ backgroundImage: `url(${awan3})` }}
                >
                    <div className='absolute right-32 bottom-0 mx-auto 320px:right-[-2vw]'>
                        <div className='flex md:w-full w-1/2 mx-auto justify-center place-content-center'>
                            <img className='mx-auto' src={crown} alt='' />
                        </div>
                        <div className='mx-auto justify-center place-content-center flex'>
                            <div className='font-samarkan text-4xl md:text-7xl z-10 absolute flex'>
                                Kilas Balik
                            </div>
                            <div
                                id='pagetitle'
                                className='font-samarkan text-4xl md:text-7xl text-white z-0 relative flex ml-2'
                            >
                                Kilas Balik
                            </div>
                        </div>
                    </div>
                    <div className='w-[45vmin] h-[25vmin] z-3 block absolute left-[-15vw] bottom-[-7vw] lg:bottom-[-5vw] lg:left-[-12vw] ml-52 mb-24 320px:left-[-60vw]'>
                        <img
                            className='scale-[70%] lg:scale-[78%]'
                            src={cloud}
                            alt=''
                            style={{
                                width: '100%',
                                height: '100%',
                                zIndex: '3',
                                display: 'flex',
                                position: 'absolute',
                            }}
                        />
                    </div>

                    <div className='w-[45vmin] h-[25vmin] z-3 block absolute right-[-15vw] top-[-8vw] lg:top-[-5vw] lg:right-[-11vw] mr-52 mt-48 320px:right-[-60vw] 320px:top-[-35vw]'>
                        <img
                            className='scale-[70%] lg:scale-[78%]'
                            src={cloud}
                            alt=''
                            style={{
                                width: '100%',
                                height: '100%',
                                zIndex: '3',
                                display: 'flex',
                                position: 'absolute',
                            }}
                        />
                    </div>
                </div>

                <div className='relative mt-56 320px:top-[-10vw]'>
                    <PageTitle title='Dokumentasi' />
                    <div className='flex w-full relative mt-24 320px:mt-14 justify-items-center place-content-center items-center'>
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
                                allowFullScreen
                                title='youtube'
                                className='w-full h-full ring-[16px] md:ring-[24px] ring-blue-default rounded-3xl drop-shadow-container'
                                src='https://www.youtube.com/embed/H38zGL5Iscs'
                            />
                        </motion.div>
                    </div>

                    <div className='w-[45vmin] h-[25vmin] z-3 block absolute left-[-15vw] bottom-[-7vw] lg:bottom-[-5vw] lg:left-[-12vw] ml-52 mb-24 320px:left-[-50vw] 320px:bottom-[-40vw]'>
                        <img
                            className='scale-[70%] lg:scale-[78%]'
                            src={cloud}
                            alt=''
                            style={{
                                width: '100%',
                                height: '100%',
                                zIndex: '3',
                                display: 'flex',
                                position: 'absolute',
                            }}
                        />
                    </div>

                    <div className='w-[45vmin] h-[25vmin] z-3 block absolute right-[-15vw] top-[-8vw] lg:top-[-5vw] lg:right-[-11vw] mr-52 mt-48 320px:right-[-60vw] 320px:top-[-40vw]'>
                        <img
                            className='scale-[70%] lg:scale-[78%]'
                            src={cloud}
                            alt=''
                            style={{
                                width: '100%',
                                height: '100%',
                                zIndex: '3',
                                display: 'flex',
                                position: 'absolute',
                            }}
                        />
                    </div>
                </div>

                <div className='flex flex-col justify-items-center place-content-center items-center w-full relative py-32 320px:pb-32 320px:py-0 '>
                    <PageTitle title='Gallery' />

                    <Slider
                        {...settings}
                        className='flex z-10 mt-24 320px:mt-14 w-7/12 h-500 320px:w-11/12 320px:h-350 justify-items-center  place-content-center items-center bg-blue-default rounded-3xl '
                    >
                        <Gallery1 onPicClick={handleOnClick} />
                        <Gallery2 onPicClick={handleOnClick} />
                    </Slider>

                    <div className='w-[45vmin] h-[25vmin] z-3 block absolute left-[-15vw] bottom-[-7vw] lg:bottom-[-5vw] lg:left-[-12vw] ml-52 mb-24 320px:left-[-50vw] 320px:bottom-[-20vw]'>
                        <img
                            className='scale-[70%] lg:scale-[78%]'
                            src={cloud}
                            alt=''
                            style={{
                                width: '100%',
                                height: '100%',
                                zIndex: '3',
                                display: 'flex',
                                position: 'absolute',
                            }}
                        />
                    </div>

                    <div className='w-[45vmin] h-[25vmin] z-3 block absolute right-[-15vw] top-[-8vw] lg:top-[-5vw] lg:right-[-11vw] mr-52 mt-48 320px:right-[-60vw] 320px:top-[-40vw]'>
                        <img
                            className='scale-[70%] lg:scale-[78%]'
                            src={cloud}
                            alt=''
                            style={{
                                width: '100%',
                                height: '100%',
                                zIndex: '3',
                                display: 'flex',
                                position: 'absolute',
                            }}
                        />
                    </div>
                </div>
            </div>
            {picPrevOpen && (
                <div className='overflow-hidden transition-transform duration-300 '>
                    <button
                        type='button'
                        className='flex overflow-hidden fixed w-screen h-screen left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 items-center justify-items-center place-content-center bg-black/20 backdrop-blur-sm'
                        style={{ zIndex: '10000' }}
                        onClick={() => setPicPrevOpen(false)}
                    >
                        {' '}
                    </button>
                    <div
                        className='flex fixed bg-white left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-screen h-auto md:w-auto md:h-[460px] md:rounded-xl '
                        style={{ zIndex: '10001' }}
                    >
                        <button
                            type='button'
                            onClick={() => setPicPrevOpen(false)}
                        >
                            <XCircleIcon
                                fill='#FFFFFF'
                                className=' absolute top-0 right-0 m-4 text-black w-8 h-8'
                            />
                        </button>
                        <img
                            src={picked}
                            alt='size chart'
                            className='h-100 w-100 md:bg-contain'
                        />
                    </div>
                </div>
            )}
        </motion.div>
    );
}
