import React from 'react';

import { HtmlHead } from '../../../components/HtmlHead';
import { GenericPage } from '../../../components/GenericPage';
import { PageTitle } from '../../../components/PageTitle';

import styles from '../../../styles/JalanTeknik.module.css';

import background from '../../../assets/images/pattern-light.png';
import cloud from '../../../assets/images/awanGabung.png';

export function NgulikTeknik() {
    const Domain = window.location.hostname;
    return (
        <>
            <HtmlHead title='Ngulik Teknik' decription='Yes' />
            <div
                className='bg-white_bone -z-4'
                style={{ backgroundImage: `url(${background})` }}
            >
                <GenericPage>
                    <PageTitle title='Ngulik Teknik' />

                    <div
                        className={`${styles.videoContainer} 998px:flex-row mt-[-1rem]`}
                    >
                        <div className='overflow-hidden w-[45vmin] h-[25vmin] flex absolute right-0 top-[13vh] md:top-[17vh] md:right-[0] '>
                            <img
                                className='scale-[70%] md:scale-[78%] right-[2vw] md:right-[1vw]'
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
                        <div className='overflow-hidden w-[45vmin] h-[25vmin] hidden absolute left-0 998px:bottom-[-11vh] 998px:flex'>
                            <img
                                className='scale-[70%] md:scale-[78%] 998px:left-[0vw]'
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
                        <div className='container bg-[#224860] p-[1.5rem] h-[60vmin] w-[100%] 998px:h-[65vmin] 998px:w-[51.5vw] rounded-2xl my-[2rem] mx-[2rem] z-3'>
                            <iframe
                                style={{ width: '100%', height: '100%' }}
                                width='885'
                                height='498'
                                src='https://www.youtube.com/embed/UE6_A7amZ5w'
                                title='SUBATHON DAY 34 #2 . 10400 hari hari'
                                frameBorder='0'
                                allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                                allowFullScreen
                            />
                        </div>
                        <div className='container bg-[#224860] p-[1.5rem] h-[130vmin] w-[100%] 998px:h-[65vmin] 998px:w-[33.5%] rounded-2xl z-3'>
                            <iframe
                                style={{ width: '100%', height: '100%' }}
                                title='livechat'
                                allowFullScreen=''
                                frameBorder='0'
                                height='270'
                                src={`https://www.youtube.com/live_chat?v=UE6_A7amZ5w&embed_domain=${Domain}`}
                                width='480'
                            />
                        </div>
                    </div>
                </GenericPage>
            </div>
        </>
    );
}
