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
import styles from '../../styles/JalanTeknik.module.css';
import { HtmlHead } from '../../components/HtmlHead';
import { PageTitle } from '../../components/PageTitle';
import background from "../../assets/images/pattern-light.png";
import arrowPrev from "../../assets/images/jalanteknik/arrowprev.png"
import arrowNext from "../../assets/images/jalanteknik/arrownext.png"
import cloud from "../../assets/images/awanGabung.png"

function SampleNextArrow(props) {
    const { className, onClick } = props;
    return (
        <div // eslint-disable-line jsx-a11y/no-static-element-interactions 
            className={className}
            style={{ content: `url(${arrowNext})`, height: '15vmin', width: '4vmin', right: '11vw', zIndex: '3', display: "block" }}
            onClick={onClick} aria-hidden="true"
        />
    );
}

function SamplePrevArrow(props) {
    const { className, onClick } = props;
    return (
        <div // eslint-disable-line jsx-a11y/no-static-element-interactions
            className={className}
            style={{ content: `url(${arrowPrev})`, height: '15vmin', width: '4vmin', left: '11vw', zIndex: '3', display: "block" }}
            onClick={onClick} aria-hidden="true"
        />
    );
}

const settings = {
    dots: false,
    autoplay: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />
};

export function JelajahTeknik() {
    return (
        <>
            <HtmlHead title='Jelajah Teknik' decription='Yes' />
            <div className="bg-white_bone -z-3" style={{ backgroundImage: `url(${background})` }}>
                <div className='pt-8 sm:py-12 min-h-screen'>
                    <img src={cloud} alt="" style={{ right: '2.5%', top: '23.5%', width: 'auto', height: 'auto', zIndex: '3', display: 'flex', position: 'absolute' }} />
                    <img src={cloud} alt="" style={{ left: '0%', bottom: '-5%', width: 'auto', height: 'auto', zIndex: '3', display: 'flex', position: 'absolute' }} />
                    <PageTitle title='Jelajah Teknik' />
                    <Slider {...settings}>
                        <div className={`${styles.cardContainer}`}>
                            <div className={`${styles.carouselItem}`}>
                                <div className='card-one w-[45vw] flex-col flex justify-start'>
                                    <h3 className='font-gill font-bold text-white text-center ml-[4rem] mb-[4vmin] text-[4vmin]'>Ngulik Teknik</h3>
                                    <p className='font-gill font-bold text-white text-center ml-[4rem] mb-[7vmin] text-[3.5vmin]'>
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, possimus neque molestias nam exercitationem natus voluptatum quos unde sint impedit esse aliquid eaque rem quaerat. Sequi, eveniet ipsum ex cupiditate vero at!
                                    </p>
                                    <div className='button-container justify-center items-center flex flex-row'>
                                        <div className=' text-white text-[16pt] ml-[4rem]'>
                                            <button className="font-gill font-bold bg-[#F26628] rounded-full p-4 px-6" type='button'>
                                                <Link to="jelajah-teknik/ngulik-teknik">JELAJAHI LEBIH LANJUT</Link>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                <div className='card-two w-[35vw] flex flex-row items-center justify-center'>
                                    <img style={{ height: '370px', width: '370px' }} src="https://media-exp1.licdn.com/dms/image/C5603AQEDk8-4kGrnZw/profile-displayphoto-shrink_200_200/0/1630935435708?e=1660176000&v=beta&t=PNfAzjZMoa-mMuT_yxhGUAOsVXCjjeFlwio9D2s-3t4" alt="" />
                                </div>
                            </div>
                        </div>
                        <div className={`${styles.cardContainer} `}>
                            <div className={`${styles.carouselItem}`}>
                                <div className='card-one w-[45vw] flex-col flex justify-start'>
                                    <h3 className='font-gill font-bold text-white text-center ml-[4rem] mb-[4vmin] text-[4vmin]'>Mozilla Hubs</h3>
                                    <p className='font-gill font-bold text-white text-center ml-[4rem] mb-[7vmin] text-[3.5vmin]'>
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, possimus neque molestias nam exercitationem natus voluptatum quos unde sint impedit esse aliquid eaque rem quaerat. Sequi, eveniet ipsum ex cupiditate vero at!
                                    </p>
                                    <div className='button-container justify-center items-center flex flex-row'>
                                        <div className=' text-white text-[16pt] ml-[4rem]'>
                                            <button className="font-gill font-bold bg-[#F26628] rounded-full p-4 px-6" type='button'>
                                                <Link to="jelajah-teknik/jalan-jalan-teknik">JELAJAHI LEBIH LANJUT</Link>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                <div className='card-two w-[35vw] flex flex-row items-center justify-center'>
                                    <img style={{ height: '370px', width: '370px' }} src="https://media-exp1.licdn.com/dms/image/C5603AQEDk8-4kGrnZw/profile-displayphoto-shrink_200_200/0/1630935435708?e=1660176000&v=beta&t=PNfAzjZMoa-mMuT_yxhGUAOsVXCjjeFlwio9D2s-3t4" alt="" />
                                </div>
                            </div>
                        </div>
                    </Slider>
                </div>
            </div>

        </>
    );
}
