import React, { Component } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../../styles/_fonts.scss';
import styles from '../../styles/JalanTeknik.module.css';
import { HtmlHead } from '../../components/HtmlHead';
import { PageTitle } from '../../components/PageTitle';
import { GenericPage } from '../../components/GenericPage';
import background from "../../assets/images/pattern-light.png";

const customeSlider = React.createRef();

const gotoNext = () => {
    customeSlider.current.slickNext()
}

const gotoPrev = () => {
    customeSlider.current.slickPrev()
}

const settings = {
    dots: true,
    autoplay: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrow: false,
};

export function JelajahTeknik() {
    return (
        <>
            <div className="bg-white_bone block w-100" style={{ backgroundImage: `url(${background})` }}>
                <HtmlHead title='Jelajah Teknik' decription='Yes' />
                <div className="carousel-container" style={{
                    display: 'block',
                    height: '100%',
                    width: '100%',
                    // position: 'relative',
                    justifyContent: 'center',
                    zIndex: '-2'
                }}>
                    <GenericPage>
                        <PageTitle title='Jelajah Teknik' />

                        <div className="card-container pt-10" style={{
                            alignItems: 'center',
                            justifyContent: 'center',
                            width: '100%',
                            height: '100%',
                            zIndex: '-1',
                        }}>
                            <button className='btn-slick' type='button' onClick={() => gotoPrev()} style={{ width: '8vmin', left: '15vw', top: '55%', verticalAlign: 'middle', overflow: 'hidden', zIndex: '3', position: 'absolute', display: 'block' }} >
                                <svg width='100%' height='100%' xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth='2'>
                                    <path strokeLinecap='round' strokeLinejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                                </svg>
                            </button>
                            <Slider ref={customeSlider} {...settings}>
                                {/* <CCarouselItem className="bg-[#224860] h-[100vh] w-[800px] flex flex-col relative" style={{  }}>
                                    <CImage className="" src="https://media-exp1.licdn.com/dms/image/C5603AQEDk8-4kGrnZw/profile-displayphoto-shrink_200_200/0/1630935435708?e=1660176000&v=beta&t=PNfAzjZMoa-mMuT_yxhGUAOsVXCjjeFlwio9D2s-3t4" alt="slide 1" />
                                    <CCarouselCaption>
                                        <h5 className="text-center">Semangat JIT ^_^</h5>
                                        <p className="text-center">dari koor tercinta</p>
                                    </CCarouselCaption>
                                </CCarouselItem>
                                <CCarouselItem className="bg-[#224860] h-[100vh] flex flex-col relative" style={{ }}>
                                    <CImage className="" src="https://media-exp1.licdn.com/dms/image/C5603AQEDk8-4kGrnZw/profile-displayphoto-shrink_200_200/0/1630935435708?e=1660176000&v=beta&t=PNfAzjZMoa-mMuT_yxhGUAOsVXCjjeFlwio9D2s-3t4" alt="slide 1" />
                                    <CCarouselCaption>
                                        <h5 className='text-center'>Semangat JIT ^_^</h5>
                                        <p className='text-center'>lalaa</p>
                                    </CCarouselCaption>
                                </CCarouselItem> */}
                                <div className={`${styles.carouselItem} carousel-item bg-[#224860] h-[450px] ml-auto mr-auto relative items-center justify-center align-center`} ref={element => {
                                    if (element) element.style.setProperty('display', 'flex', 'important'); 
                                }}>
                                    <img src="https://media-exp1.licdn.com/dms/image/C5603AQEDk8-4kGrnZw/profile-displayphoto-shrink_200_200/0/1630935435708?e=1660176000&v=beta&t=PNfAzjZMoa-mMuT_yxhGUAOsVXCjjeFlwio9D2s-3t4" alt="" />
                                    <h3 className='text-white pt-[18rem] text-center absolute'>Semangat JIT ^_^</h3>
                                </div>
                                <div className={`${styles.carouselItem} carousel-item bg-[#224860] h-[450px] ml-auto mr-auto relative items-center justify-center align-center`} ref={element => {
                                    if (element) element.style.setProperty('display', 'flex', 'important');
                                }}>
                                    <img src="https://media-exp1.licdn.com/dms/image/C5603AQEDk8-4kGrnZw/profile-displayphoto-shrink_200_200/0/1630935435708?e=1660176000&v=beta&t=PNfAzjZMoa-mMuT_yxhGUAOsVXCjjeFlwio9D2s-3t4" alt="" />
                                    <h3 className='text-white pt-[18rem] text-center absolute'>:)</h3>
                                </div>
                            </Slider>
                            <button className='btn-slick' type='button' onClick={() => gotoNext()} style={{ width: '8vmin', right: '15vw', top: '55%', verticalAlign: 'middle', overflow: 'hidden', zIndex: '3', position: 'absolute', display: 'block' }}>
                                <svg width='100%' height='100%' xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                </svg>
                            </button>
                        </div>

                    </GenericPage >
                </div>
            </div >
        </>
    );
}
