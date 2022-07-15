import React, { Component } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../../styles/_fonts.scss';
import { CCarouselItem, CImage, CCarouselCaption } from '@coreui/react';
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
};

export function JelajahTeknik() {
    return (
        <>
            <div className="bg-white_bone" style={{ backgroundImage: `url(${background})` }}>
                <GenericPage>
                    <HtmlHead title='Jelajah Teknik' decription='Yes' />
                    <PageTitle title='Jelajah Teknik' />
                    <div className="container pt-5" >
                        <button type='button' onClick={() => gotoPrev()}>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-[40rem]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth='2'>
                                <path strokeLinecap='round' strokeLinejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                            </svg>
                        </button>
                        <button type='button' onClick={() => gotoNext()}>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-[170rem]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                            </svg>
                        </button>
                        <Slider ref={customeSlider} {...settings}>
                            <CCarouselItem className="" style={{ marginLeft: 'auto', marginRight: 'auto' }}>
                                <CImage className="block w-100 ml-auto mr-auto" src="https://media-exp1.licdn.com/dms/image/C5603AQEDk8-4kGrnZw/profile-displayphoto-shrink_200_200/0/1630935435708?e=1660176000&v=beta&t=PNfAzjZMoa-mMuT_yxhGUAOsVXCjjeFlwio9D2s-3t4" alt="slide 1" />
                                <CCarouselCaption>
                                    <h5 className="text-center">Semangat JIT ^_^</h5>
                                    <p className="text-center">dari koor tercinta</p>
                                </CCarouselCaption>
                            </CCarouselItem>
                            <CCarouselItem className="" style={{ marginLeft: 'auto', marginRight: 'auto' }}>
                                <CImage className="block w-100 ml-auto mr-auto" src="https://media-exp1.licdn.com/dms/image/C5603AQEDk8-4kGrnZw/profile-displayphoto-shrink_200_200/0/1630935435708?e=1660176000&v=beta&t=PNfAzjZMoa-mMuT_yxhGUAOsVXCjjeFlwio9D2s-3t4" alt="slide 1" />
                                <CCarouselCaption className="block ml-auto mr-auto">
                                    <h5 className='text-center'>Semangat JIT ^_^</h5>
                                    <p className='text-center'>lalaa</p>
                                </CCarouselCaption>
                            </CCarouselItem>
                        </Slider>
                    </div>
                </GenericPage >
            </div>
        </>
    );
}
