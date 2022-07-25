import React from 'react';

import { Link } from 'react-router-dom';
import { HtmlHead } from '../../components/HtmlHead';
import { PageTitle } from '../../components/PageTitle';
import { SliderContainer } from '../../components/SliderContainer';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../../styles/_fonts.scss';

import background from '../../assets/images/pattern-light.png';
import cloud from '../../assets/images/awanGabung.png';

export function JelajahTeknik() {
    const Children = [
        <>
            <div className='card-one w-[45vw] 768px:w-[65vw] flex-col flex justify-center px-[3rem] 768px:px-[1rem]'>
                <div className='w-[45vmin] h-[25vmin] z-3 block absolute right-[-15vw] top-[-8vw] lg:top-[-5vw] lg:right-[-11vw] '>
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
                <h3 className='font-gill font-bold text-white text-center text-[4vmin] 1024px:text-[3.5vmin] 768px:text-[6.5vmin] my-[1.5rem]'>
                    NGULIK TEKNIK
                </h3>
                <div className='md:hidden'>
                    <img
                        style={{
                            alignItems: 'center',
                            justifyContent: 'center',
                            display: 'flex',
                            height: '100%',
                            width: '100%',
                            marginLeft: 'auto',
                            marginRight: 'auto',
                        }}
                        src='https://media-exp1.licdn.com/dms/image/C5603AQEDk8-4kGrnZw/profile-displayphoto-shrink_200_200/0/1630935435708?e=1660176000&v=beta&t=PNfAzjZMoa-mMuT_yxhGUAOsVXCjjeFlwio9D2s-3t4'
                        alt=''
                    />
                </div>
                <p className='font-gill font-bold text-white text-center text-[3vmin] 1024px:text-[2.5vmin] 768px:text-[4vmin] mb-[1.5rem] 768px:my-[1.5rem]'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quas, possimus neque molestias nam exercitationem natus
                    voluptatum quos unde sint impedit esse aliquid eaque rem
                    quaerat. Sequi, eveniet ipsum ex cupiditate vero at!
                </p>
                <div className='button-container justify-center items-center flex flex-row'>
                    <div className=' text-white text-[3.5vmin] md:text-[3vmin] mb-[1.5rem]'>
                        <button
                            className='font-gill font-bold bg-[#F26628] rounded-full p-[0.5rem] px-[1rem]'
                            type='button'
                        >
                            <Link to='jelajah-teknik/ngulik-teknik'>
                                JELAJAHI LEBIH LANJUT
                            </Link>
                        </button>
                    </div>
                </div>
                <div className='w-[45vmin] h-[25vmin] z-3 block absolute left-[-15vw] bottom-[-7vw] lg:bottom-[-5vw] lg:left-[-12vw] '>
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
            <div className='card-two w-[35vw] flex-row items-center justify-center hidden pr-[2rem] md:flex'>
                <div className='h-[55vmin] w-[55vmin]'>
                    <img
                        style={{ height: '100%', width: '100%' }}
                        src='https://media-exp1.licdn.com/dms/image/C5603AQEDk8-4kGrnZw/profile-displayphoto-shrink_200_200/0/1630935435708?e=1660176000&v=beta&t=PNfAzjZMoa-mMuT_yxhGUAOsVXCjjeFlwio9D2s-3t4'
                        alt=''
                    />
                </div>
            </div>
        </>,
        <>
            <div className='card-one w-[45vw] 768px:w-[65vw] flex-col flex justify-center px-[3rem] 768px:px-[1rem]'>
                <div className='w-[45vmin] h-[25vmin] z-3 block absolute right-[-15vw] top-[-8vw] lg:top-[-5vw] lg:right-[-11vw] '>
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
                <h3 className='font-gill font-bold text-white text-center text-[4vmin] 1024px:text-[3.5vmin] 768px:text-[6.5vmin] my-[1.5rem]'>
                    JALAN-JALAN TEKNIK
                </h3>
                <div className='md:hidden'>
                    <img
                        style={{
                            alignItems: 'center',
                            justifyContent: 'center',
                            display: 'flex',
                            height: '100%',
                            width: '100%',
                            marginLeft: 'auto',
                            marginRight: 'auto',
                        }}
                        src='https://media-exp1.licdn.com/dms/image/C5603AQEDk8-4kGrnZw/profile-displayphoto-shrink_200_200/0/1630935435708?e=1660176000&v=beta&t=PNfAzjZMoa-mMuT_yxhGUAOsVXCjjeFlwio9D2s-3t4'
                        alt=''
                    />
                </div>
                <p className='font-gill font-bold text-white text-center text-[3vmin] 1024px:text-[2.5vmin] 768px:text-[4vmin] mb-[1.5rem] 768px:my-[1.5rem]'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quas, possimus neque molestias nam exercitationem natus
                    voluptatum quos unde sint impedit esse aliquid eaque rem
                    quaerat. Sequi, eveniet ipsum ex cupiditate vero at!
                </p>
                <div className='button-container justify-center items-center flex flex-row'>
                    <div className=' text-white text-[3.5vmin] md:text-[3vmin] mb-[1.5rem]'>
                        <button
                            className='font-gill font-bold bg-[#F26628] rounded-full p-[0.5rem] px-[1rem]'
                            type='button'
                        >
                            <Link to='jelajah-teknik/jalan-jalan-teknik'>
                                JELAJAHI LEBIH LANJUT
                            </Link>
                        </button>
                    </div>
                </div>
                <div className='w-[45vmin] h-[25vmin] z-3 block absolute left-[-15vw] bottom-[-7vw] lg:bottom-[-5vw] lg:left-[-12vw] '>
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
            <div className='card-two w-[35vw] flex-row items-center justify-center hidden pr-[2rem] md:flex'>
                <div className='h-[55vmin] w-[55vmin]'>
                    <img
                        style={{ height: '100%', width: '100%' }}
                        src='https://media-exp1.licdn.com/dms/image/C5603AQEDk8-4kGrnZw/profile-displayphoto-shrink_200_200/0/1630935435708?e=1660176000&v=beta&t=PNfAzjZMoa-mMuT_yxhGUAOsVXCjjeFlwio9D2s-3t4'
                        alt=''
                    />
                </div>
            </div>
        </>,
    ];
    return (
        <>
            <HtmlHead title='Jelajah Teknik' decription='Yes' />
            <div
                className='bg-white_bone -z-3'
                style={{ backgroundImage: `url(${background})` }}
            >
                <div className='py-8 min-h-screen overflow-hidden'>
                    <PageTitle title='Jelajah Teknik' />
                    <div className='mt-[-4rem]'>
                        <SliderContainer Children={Children} />
                    </div>
                </div>
            </div>
        </>
    );
}
