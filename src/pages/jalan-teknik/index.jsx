import { motion } from 'framer-motion';

import { Link } from 'react-router-dom';
import { HtmlHead } from '../../components/HtmlHead';
import { PageTitle } from '../../components/PageTitle';
import { CardContainer } from '../../components/CardContainer';

import '../../styles/_fonts.scss';

import background from '../../assets/images/pattern-light.png';
import cloud from '../../assets/images/awanGabung.png';
import JJT from '../../assets/images/jalanteknik/fotoJJT.png';

export function JelajahTeknik() {
    const Children = [
        <>
            <div className='card-one w-[45vw] 768px:w-[65vw] flex-col flex justify-center px-[3rem] font-medium 768px:font-normal 768px:px-[1rem]'>
                <h3 className='font-gill font-bold text-white text-center text-[30px] 1024px:text-[22px] 768px:text-[4.5vmin] my-[1.5rem]'>
                    JALAN-JALAN TEKNIK
                </h3>
                <div className='items-center justify-center flex h-100 w-100 mr-auto ml-auto md:hidden'>
                    <img src={JJT} alt='Foto JJT' />
                </div>
                <p className='font-gill text-white text-center text-[22px] 1024px:text-[20px] 768px:text-[3vmin] mb-[1.5rem] 768px:my-[1.5rem]'>
                    Jalan-jalan Teknik menjadi salah satu kegiatan yang ada di
                    PPSMB (Pelatihan Pembelajar Sukses untuk Mahasiswa Baru)
                    KESATRIA 2022. Sebagai mahasiswa teknik, penting bagi kita
                    untuk mengetahui letak hingga penjelasan dari masing-masing
                    departemen yang ada di Fakultas Teknik dimana terdapat total
                    8 Departemen. Tak hanya itu, kita juga dapat mengetahui
                    fasilitas-fasilitas Fakultas Teknik yang tentunya menunjang
                    aktivitas perkuliahan.
                </p>
                <div className='button-container justify-center items-center flex flex-row'>
                    <div className=' text-white text-[16px] xl:text-[18px] mb-[1.5rem]'>
                        <button
                            className='font-gill font-medium bg-[#F26628] rounded-full p-[0.5rem] px-[1.5rem]'
                            type='button'
                        >
                            <Link to='jelajah-teknik/jalan-jalan-teknik'>
                                JELAJAHI LEBIH LANJUT
                            </Link>
                        </button>
                    </div>
                </div>
            </div>
            <div className='card-two w-[35vw] h-auto flex-row items-center justify-center hidden md:flex pr-[2rem]'>
                <div className='h-auto w-[60vmin]'>
                    <img src={JJT} alt='Foto JJT' />
                </div>
            </div>
        </>,
    ];
    return (
        <>
            <HtmlHead title='Jelajah Teknik' decription='Yes' />
            <div
                className='bg-white_bone -z-3'
                style={{ backgroundImage: `url(${background})` }}
            >
                <div className='py-8 min-h-screen overflow-hidden'>
                    <PageTitle title='Jelajah Teknik' />
                    <div className='mt-[-4rem]'>
                        <motion.div
                            initial={{ opacity: 0, scale: 1 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 1 }}
                        >
                            <div className='relative'>
                                <div className='w-[45vmin] h-[25vmin] z-3 block absolute right-[2vw] top-[5vh] lg:top-[3.5vh] lg:right-[0vw] '>
                                    <img
                                        className='w-100 h-100 z-[3] flex absolute scale-[70%] lg:scale-[78%]'
                                        src={cloud}
                                        alt=''
                                    />
                                </div>
                            </div>
                            <div className='relative'>
                                <div className='w-[45vmin] h-[25vmin] z-3 block absolute left-[0vw] bottom-[-190vmin] md:bottom-[-95vmin] md:left-[0vw] '>
                                    <img
                                        className='w-100 h-100 z-[3] flex absolute scale-[70%] lg:scale-[78%]'
                                        src={cloud}
                                        alt=''
                                    />
                                </div>
                            </div>
                            <CardContainer Children={Children} />
                        </motion.div>
                    </div>
                </div>
            </div>
        </>
    );
}
