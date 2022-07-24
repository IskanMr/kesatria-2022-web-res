import React from 'react';
import Slider from 'react-slick';

import styles from '../styles/JalanTeknik.module.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../styles/_fonts.scss';

import arrowPrev from "../assets/images/jalanteknik/arrowprev.png"
import arrowNext from "../assets/images/jalanteknik/arrownext.png"

function SampleNextArrow(props) {
    const { className, onClick } = props;
    return (
        <div // eslint-disable-line jsx-a11y/no-static-element-interactions 
            className={`${className} lg:right-[6.5vw] right-[4.5vw]`}
            style={{ content: `url(${arrowNext})`, height: '13vmin', width: '4vmin', zIndex: '3', display: "block" }}
            onClick={onClick} aria-hidden="true"
        />
    );
}

function SamplePrevArrow(props) {
    const { className, onClick } = props;
    return (
        <div // eslint-disable-line jsx-a11y/no-static-element-interactions
            className={`${className} lg:left-[6.5vw] left-[4.5vw]`}
            style={{ content: `url(${arrowPrev})`, height: '13vmin', width: '4vmin', zIndex: '3', display: "block" }}
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

export function SliderContainer({ Children }) {
    return (
        <>
            <Slider {...settings}>

                {Children.map((child) => {
                    return (
                        <> <div className={`${styles.cardContainer}`}><div className={`${styles.carouselItem} md:h-[70vmin]`}>
                            {child}
                        </div>  </div></>
                    )
                })}

            </Slider>

        </>
    );
}
