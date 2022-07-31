import React, {useState} from 'react';
import { XIcon } from '@heroicons/react/solid';
import '../index.css';
import foto1 from '../../../assets/images/dokumentasi/gallery1/foto1.jpg';
import foto2 from '../../../assets/images/dokumentasi/gallery1/foto2.jpg';
import foto3 from '../../../assets/images/dokumentasi/gallery1/foto3.jpg';
import foto4 from '../../../assets/images/dokumentasi/gallery1/foto4.jpg';
import foto5 from '../../../assets/images/dokumentasi/gallery1/foto5.jpg';
import foto6 from '../../../assets/images/dokumentasi/gallery1/foto6.jpg';

export function Gallery1() {
    const[picked, setPicked] = useState()
    const[picPrevOpen, setPicPrevOpen] = useState(false)

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

    function onPicClick (img){
        setPicked(img);
        setPicPrevOpen(true);
    }

    const picStyle = ''

    

    return (
        <><div className='container gallery object-cover md:max-w-[93%] mx-auto my-auto grid grid-cols-2 md:grid-cols-3 gap-5 320px:gap-2'>
                    <button type='button'
                        className={picStyle}
                        
                        onClick={() => onPicClick(foto1)}
                    >
                        <span>
                            <img src={foto1} alt='' />
                        </span>
                    </button>
                    <button type='button'
                        className={picStyle}
                        
                        onClick={() => onPicClick(foto2)}
            
                    >
                        <span>
                            <img src={foto2} alt='' />
                        </span>
                    </button>
                    <button type='button'
                        className={picStyle}
                        
                        onClick={() => onPicClick(foto3)}
                        
                    >
                        <span>
                            <img src={foto3} alt='' />
                        </span>
                    </button>
                    <button type='button'
                        className={picStyle}
                        data-name='2020'
                        onClick={() => onPicClick(foto4)}
                        
                    >
                        <span>
                            <img src={foto4} alt='' />
                        </span>
                    </button>
                    <button type='button'
                        className={picStyle}
                        data-name='2020'
                        onClick={() => onPicClick(foto5)}
                        
                    >
                        <span>
                            <img src={foto5} alt='' />
                        </span>
                    </button>
                    <button type='button'
                        className={picStyle}
                        data-name='2020'
                        onClick={() => onPicClick(foto6)}
                        
                    >
                        <span>
                            <img src={foto6} alt='' />
                        </span>
                    </button>
                </div>
                
            {picPrevOpen && (
                <div className='overflow-hidden absolute'>
                    <button
                        type='button'
                        className='flex absolute w-screen h-screen left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 items-center justify-items-center place-content-center bg-black/20'
                        style={{ zIndex: '10002' }}
                        onClick={() => setPicPrevOpen(false)}
                    >
                        {' '}
                    </button>
                    <div
                        className='flex absolute bg-white left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-screen h-auto md:w-auto md:h-[460px] md:rounded-xl '
                        style={{ zIndex: '10003' }}
                    >
                        <button
                            type='button'
                            onClick={() => setPicPrevOpen(false)}
                        >
                            <XIcon className='md:hidden absolute top-0 right-0 m-4 text-black w-8 h-8' />
                        </button>
                        <img
                            src={picked}
                            alt='size chart'
                            className='h-100 w-100 md:bg-contain'
                        />
                    </div>
                </div>
            )}
        </>
                
        
    ); 
}