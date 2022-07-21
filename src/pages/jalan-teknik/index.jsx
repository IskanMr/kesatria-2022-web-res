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


const customeSlider = React.createRef();

const gotoNext = () => {
    customeSlider.current.slickNext()
}

const gotoPrev = () => {
    customeSlider.current.slickPrev()
}

function SampleNextArrow(props) {
    const { className, onClick } = props;
    return (
      <div // eslint-disable-line jsx-a11y/no-static-element-interactions 
        className={className}
        style={{ content:`url(${arrowNext})`, height:'15vmin', width:'4vmin', right:'11vw', zIndex:'3', display: "block" }}
        onClick={onClick} aria-hidden="true"
      />
    );
  }
  
  function SamplePrevArrow(props) {
    const { className, onClick } = props;
    return (
      <div // eslint-disable-line jsx-a11y/no-static-element-interactions
        className={className}
        style={{ content:`url(${arrowPrev})`, height:'15vmin', width:'4vmin', left:'11vw', zIndex:'3', display: "block" }}
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
                <div className='py-8 min-h-screen overflow-hidden'>
                    <PageTitle title='Jelajah Teknik' />
                    <Slider ref={customeSlider} {...settings}>
                        <div className={`${styles.cardContainer} card-container`}>
                            <div className={`${styles.carouselItem} carousel-item`}>
                                <img src="https://media-exp1.licdn.com/dms/image/C5603AQEDk8-4kGrnZw/profile-displayphoto-shrink_200_200/0/1630935435708?e=1660176000&v=beta&t=PNfAzjZMoa-mMuT_yxhGUAOsVXCjjeFlwio9D2s-3t4" alt="" />
                                <h3 className='text-white pt-[18rem] text-center absolute'>Semangat JIT ^_^</h3>
                            </div>
                        </div>
                        <div className={`${styles.cardContainer} `}>
                            <div className={`${styles.carouselItem}`}>
                                <img src="https://media-exp1.licdn.com/dms/image/C5603AQEDk8-4kGrnZw/profile-displayphoto-shrink_200_200/0/1630935435708?e=1660176000&v=beta&t=PNfAzjZMoa-mMuT_yxhGUAOsVXCjjeFlwio9D2s-3t4" alt="" />
                                <h3 className='text-white pt-[18rem] text-center absolute'>:)</h3>
                            </div>
                        </div>
                    </Slider>
                </div>
            </div >
        </>
    );
}
