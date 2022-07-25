import React from 'react';
import foto1 from '../../../assets/images/dokumentasi/photos/1.jpg';
import foto2 from '../../../assets/images/dokumentasi/photos/2.jpg';
import foto3 from '../../../assets/images/dokumentasi/photos/3.jpg';
import foto4 from '../../../assets/images/dokumentasi/photos/4.jpg';
import foto5 from '../../../assets/images/dokumentasi/photos/5.jpg';
import foto6 from '../../../assets/images/dokumentasi/photos/6.jpg';

export function Gallery2() {
    function preview(source) {
        const previewBox = document.querySelector('.preview-box');
        const previewImg = previewBox.querySelector('img');
        const shadow = document.querySelector('.shadow');
        previewBox.classList.add('show');
        previewImg.src = source;
        shadow.classList.add('show');
    }
    function closeIcon() {
        const previewBox = document.querySelector('.preview-box');
        const shadow = document.querySelector('.shadow');
        previewBox.classList.remove('show');
        shadow.classList.remove('show');
    }

    return (
                <div className='container gallery object-cover h-80 w-96 mx-auto grid grid-cols-3 gap-2'>
                    <div
                        className='picture'
                        data-name='2019'
                        onClick={() => preview(foto1)}
                        aria-hidden='true'
                    >
                        <span>
                            <img src={foto1} alt='' />
                        </span>
                    </div>
                    <div
                        className='picture'
                        data-name='2019'
                        onClick={() => preview(foto2)}
                        aria-hidden='true'
                    >
                        <span>
                            <img src={foto2} alt='' />
                        </span>
                    </div>
                    <div
                        className='picture'
                        data-name='2019'
                        onClick={() => preview(foto3)}
                        aria-hidden='true'
                    >
                        <span>
                            <img src={foto3} alt='' />
                        </span>
                    </div>
                    <div
                        className='picture'
                        data-name='2020'
                        onClick={() => preview(foto4)}
                        aria-hidden='true'
                    >
                        <span>
                            <img src={foto4} alt='' />
                        </span>
                    </div>
                    <div
                        className='picture'
                        data-name='2020'
                        onClick={() => preview(foto5)}
                        aria-hidden='true'
                    >
                        <span>
                            <img src={foto5} alt='' />
                        </span>
                    </div>
                    <div
                        className='picture'
                        data-name='2020'
                        onClick={() => preview(foto6)}
                        aria-hidden='true'
                    >
                        <span>
                            <img src={foto6} alt='' />
                        </span>
                    </div>
                </div>
        
    ); 
}