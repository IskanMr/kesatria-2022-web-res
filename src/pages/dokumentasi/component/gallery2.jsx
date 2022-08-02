import React from 'react';
import '../index.css';
import foto1 from '../../../assets/images/dokumentasi/gallery2/foto1.jpg';
import foto2 from '../../../assets/images/dokumentasi/gallery2/foto2.jpg';
import foto3 from '../../../assets/images/dokumentasi/gallery2/foto3.jpg';
import foto4 from '../../../assets/images/dokumentasi/gallery2/foto4.jpg';
import foto5 from '../../../assets/images/dokumentasi/gallery2/foto5.jpg';
import foto6 from '../../../assets/images/dokumentasi/gallery2/foto6.jpg';

export function Gallery2(props) {
    const { onPicClick } = props;

    const picStyle = '';

    return (
        <>
            <div className='container gallery object-cover md:max-w-[93%] mx-auto my-auto grid grid-cols-2 md:grid-cols-3 gap-5 320px:gap-2'>
                <button
                    type='button'
                    className={picStyle}
                    onClick={() => onPicClick(foto1)}
                >
                    <span>
                        <img src={foto1} alt='' />
                    </span>
                </button>
                <button
                    type='button'
                    className={picStyle}
                    onClick={() => onPicClick(foto2)}
                >
                    <span>
                        <img src={foto2} alt='' />
                    </span>
                </button>
                <button
                    type='button'
                    className={picStyle}
                    onClick={() => onPicClick(foto3)}
                >
                    <span>
                        <img src={foto3} alt='' />
                    </span>
                </button>
                <button
                    type='button'
                    className={picStyle}
                    data-name='2020'
                    onClick={() => onPicClick(foto4)}
                >
                    <span>
                        <img src={foto4} alt='' />
                    </span>
                </button>
                <button
                    type='button'
                    className={picStyle}
                    data-name='2020'
                    onClick={() => onPicClick(foto5)}
                >
                    <span>
                        <img src={foto5} alt='' />
                    </span>
                </button>
                <button
                    type='button'
                    className={picStyle}
                    data-name='2020'
                    onClick={() => onPicClick(foto6)}
                >
                    <span>
                        <img src={foto6} alt='' />
                    </span>
                </button>
            </div>
        </>
    );
}
