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

import { HtmlHead } from '../../components/HtmlHead';
import { PageTitle } from '../../components/PageTitle';

import background from "../../assets/images/pattern-light.png";
import arrowPrev from "../../assets/images/jalanteknik/arrowprev.png"
import arrowNext from "../../assets/images/jalanteknik/arrownext.png"
import cloud from "../../assets/images/awanGabung.png";
import {Gallery1 } from "./component/gallery1";
import awan2 from '../../assets/images/dokumentasi/awan2.png'
import awan3 from '../../assets/images/dokumentasi/awan3.png'
import crown from '../../assets/images/dokumentasi/crown.png'
import { Gallery2 } from "./component/gallery2";
import { GenericPage } from '../../components/GenericPage';

function SampleNextArrow(props) {
    const { className, onClick } = props;
    return (
        <div // eslint-disable-line jsx-a11y/no-static-element-interactions 
            className={className}
            style={{ content: `url(${arrowNext})`, height: '15vmin', width: '3.5vmin', right: '10.5vw', zIndex: '3', display: "block" }}
            onClick={onClick} aria-hidden="true"
        />
    );
}

function SamplePrevArrow(props) {
    const { className, onClick } = props;
    return (
        <div // eslint-disable-line jsx-a11y/no-static-element-interactions
            className={className}
            style={{ content: `url(${arrowPrev})`, height: '15vmin', width: '3.5vmin', left: '10.5vw', zIndex: '3', display: "block" }}
            onClick={onClick} aria-hidden="true"
        />
    );
}

const settings = 
{
    dots: true,
    infinite: false,
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
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 0
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
    ],
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />
  };
            
        

export function Dokumentasi() {
    return (
        <>
            <HtmlHead title='Dokumentasi' decription='Yes' />
            <div
                className='bg-white_bone overflow-x-hidden'
                style={{ backgroundImage: `url(${background})` }}
            >
                
                    <div className="bg-no-repeat bg-contain h-750 320px:h-400 relative" style={{ backgroundImage: `url(${awan3})` }}>
                    <div className='absolute right-32 bottom-0 mx-auto 320px:right-[-2vw]'>
                        <div className="flex md:w-full w-1/2 mx-auto justify-center place-content-center">
                            <img className="mx-auto" src={crown} alt="" />
                        </div>
                        <div className="mx-auto justify-center place-content-center flex">
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
                         <div className="w-[45vmin] h-[25vmin] z-3 block absolute left-[-15vw] bottom-[-7vw] lg:bottom-[-5vw] lg:left-[-12vw] ml-52 mb-24 320px:left-[-60vw]">
                            <img className="scale-[70%] lg:scale-[78%]" src={cloud} alt="" style={{ width: '100%', height: '100%', zIndex: '3', display: 'flex', position: 'absolute' }} />
                        </div>

                        <div className="w-[45vmin] h-[25vmin] z-3 block absolute right-[-15vw] top-[-8vw] lg:top-[-5vw] lg:right-[-11vw] mr-52 mt-48 320px:right-[-60vw] 320px:top-[-35vw]">
                            <img className="scale-[70%] lg:scale-[78%]" src={cloud} alt="" style={{ width: '100%', height: '100%', zIndex: '3', display: 'flex', position: 'absolute' }} />
                        </div>

                </div>
            
               
                <div className="relative mt-56 320px:top-[-10vw]" >
                        <PageTitle title='Dokumentasi' />
                        <div className="mx-auto my-32 bg-blue-default rounded-2xl w-1/2 h-400 320px:w-4/5 relative 320px:top-[-10vw]"> 
                        
                        <iframe
                                    src='https://www.youtube.com/embed/H38zGL5Iscs'
                                    style={{ width: "95%", height: "95%" }}
                                    allow='autoplay'
                                    title='Rewind PPSMB Kesatria'
                                    className="mx-auto py-5"
                                />
                        
                        </div>
                        <div className="w-[45vmin] h-[25vmin] z-3 block absolute left-[-15vw] bottom-[-7vw] lg:bottom-[-5vw] lg:left-[-12vw] ml-52 mb-24 320px:left-[-50vw] 320px:bottom-[-40vw]">
                            <img className="scale-[70%] lg:scale-[78%]" src={cloud} alt="" style={{ width: '100%', height: '100%', zIndex: '3', display: 'flex', position: 'absolute' }} />
                        </div>

                        <div className="w-[45vmin] h-[25vmin] z-3 block absolute right-[-15vw] top-[-8vw] lg:top-[-5vw] lg:right-[-11vw] mr-52 mt-48 320px:right-[-60vw] 320px:top-[-40vw]">
                            <img className="scale-[70%] lg:scale-[78%]" src={cloud} alt="" style={{ width: '100%', height: '100%', zIndex: '3', display: 'flex', position: 'absolute' }} />
                        </div>
                </div>
                
            </div>
                
                
            {/* <div className="relative">
                <PageTitle title='Behind The Scene' />
            
                <div className="mx-auto my-32 bg-blue-default rounded-2xl w-3/4 h-400 py-9">
                    <Slider {...settings}>
                        <Gallery1 />
                        <Gallery1 />
                        <Gallery1 />
                        <Gallery1 />
                    </Slider>
                </div>
                <div className="w-[45vmin] h-[25vmin] z-3 block absolute left-[-15vw] bottom-[-7vw] lg:bottom-[-5vw] lg:left-[-12vw] ml-52 mb-24 320px:left-[-50vw]">
                    <img className="scale-[70%] lg:scale-[78%]" src={cloud} alt="" style={{ width: '100%', height: '100%', zIndex: '3', display: 'flex', position: 'absolute' }} />
                </div>

                <div className="w-[45vmin] h-[25vmin] z-3 block absolute right-[-15vw] top-[-8vw] lg:top-[-5vw] lg:right-[-11vw] mr-52 mt-48 320px:right-[-60vw] 320px:top-[-35vw]">
                    <img className="scale-[70%] lg:scale-[78%]" src={cloud} alt="" style={{ width: '100%', height: '100%', zIndex: '3', display: 'flex', position: 'absolute' }} />
                </div>
            </div>     */}
        </>
    );
}
