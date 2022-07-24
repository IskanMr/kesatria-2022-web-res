import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect
} from "react-router-dom";

import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../../styles/_fonts.scss';
import styles from '../../styles/dokumentasi.module.css';
import { HtmlHead } from '../../components/HtmlHead';
import { PageTitle } from '../../components/PageTitle';
import background from "../../assets/images/pattern-light.png";
import arrowPrev from "../../assets/images/jalanteknik/arrowprev.png"
import arrowNext from "../../assets/images/jalanteknik/arrownext.png"
import cloud from "../../assets/images/awanGabung.png";
import boxvideo from '../../assets/images/dokumentasi/boxvideo.png'

export function Dokumentasi() {
    return (
        <>
             <HtmlHead title='Dokumentasi' decription='Yes' />

                <div className='py-8 min-h-screen overflow-hidden'/>
                    <PageTitle title='Dokumentasi' />
                    <div className="mt-[-4rem]"/>
            <div>
            <div className="w-[45vmin] h-[25vmin] z-3 block absolute left-[-15vw] bottom-[-7vw] lg:bottom-[-5vw] lg:left-[-12vw] ">
                                            <img className="scale-[70%] lg:scale-[78%]" src={cloud} alt="" style={{ width: '100%', height: '100%', zIndex: '3', display: 'flex', position: 'absolute' }} />
                                        </div>
                <img src={boxvideo} alt="" />
            </div>
        </>
    );
}
