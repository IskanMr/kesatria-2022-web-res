import React from "react";

import { HtmlHead } from '../../../components/HtmlHead';
import { GenericPage } from '../../../components/GenericPage';
import { PageTitle } from '../../../components/PageTitle';

import styles from '../../../styles/JalanTeknik.module.css';

import background from '../../../assets/images/pattern-light.png';
import cloud from "../../../assets/images/awanGabung.png"

export function NgulikTeknik() {
    return (
        <>
            <HtmlHead title='Ngulik Teknik' decription='Yes' />
            <div
                className='bg-white_bone'
                style={{ backgroundImage: `url(${background})` }}>
                <GenericPage>
                    <PageTitle title='Ngulik Teknik' />

                    <div className={`${styles.videoContainer} 998px:flex-row mt-[-1rem]`}>
                        <div className="overflow-hidden w-[45vmin] h-[25vmin] z-3 flex absolute right-0 top-[10vh] md:top-[11.5vh] md:right-[0] ">
                            <img className="scale-[70%] md:scale-[85%] right-[-10vw] md:right-[-3vw]" src={cloud} alt="" style={{ width: '100%', height: '100%', zIndex: '3', display: 'flex', position: 'absolute' }} />
                        </div>
                        {/* <div className="overflow-hidden w-[45vmin] h-[25vmin] z-3 flex absolute left-0 bottom-[-16vh] 998px:bottom-[-12vh]">
                            <img className="scale-[70%] md:scale-[78%] left-[-10vw] 998px:left-[-3vw]" src={cloud} alt="" style={{ width: '100%', height: '100%', zIndex: '3', display: 'flex', position: 'absolute' }} />
                        </div> */}
                        <div className="container bg-[#224860] p-[1.5rem] h-[60vmin] w-[100%] 998px:h-[65vmin] 998px:w-[51.5vw] rounded-2xl my-[2rem] mx-[2rem]">
                            <iframe style={{ width: '100%', height: '100%' }} width="885" height="498" src="https://www.youtube.com/embed/UE6_A7amZ5w" title="SUBATHON DAY 34 #2 . 10400 hari hari" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
                        </div>
                        <div className="container bg-[#224860] p-[1.5rem] h-[130vmin] w-[100%] 998px:h-[65vmin] 998px:w-[33.5%] rounded-2xl">
                            <iframe style={{ width: '100%', height: '100%' }} title="livechat" allowFullScreen="" frameBorder="0" height="270" src="https://www.youtube.com/live_chat?v=UE6_A7amZ5w&embed_domain=localhost" width="480" />
                        </div>
                    </div>

                </GenericPage>
            </div >
        </>
    );
}
