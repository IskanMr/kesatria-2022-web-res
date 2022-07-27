import { motion } from 'framer-motion';

import { HtmlHead } from '../../../components/HtmlHead';
import { GenericPage } from '../../../components/GenericPage';
import { PageTitle } from '../../../components/PageTitle';
import styles from '../../../styles/JalanTeknik.module.css';

import background from '../../../assets/images/pattern-light.png';
import cloud from '../../../assets/images/awanGabung.png';

export function JalanJalanTeknik() {
    const forumArray = [
        {
            number: 1,
            title: 'Sadewa',
            image: 'sadewaJJT',
            link: 'https://www.facebook.com/'
        },
        {
            number: 2,
            title: 'Abimanyu',
            image: 'abimanyuJJT',
            link: 'https://www.google.com/'
        },
        {
            number: 3,
            title: 'Subadra',
            image: 'subadraJJT',
            link: 'https://www.twitter.com/'
        },
        {
            number: 4,
            title: 'Gatotkaca',
            image: 'gatotkacaJJT',
            link: 'https://www.linkedin.com/'
        },
        {
            number: 5,
            title: 'Srikandi',
            image: 'srikandiJJT',
            link: 'https://www.facebook.com/'
        },
        {
            number: 6,
            title: 'Batari',
            image: 'batariJJT',
            link: 'https://www.facebook.com/'
        },
        {
            number: 7,
            title: 'Abiyasa',
            image: 'abiyasaJJT',
            link: 'https://www.facebook.com/'
        },
    ];

    return (
        <>
            <HtmlHead title='Jalan Jalan Teknik' decription='Yes' />
            <div
                className='bg-white_bone -z-4'
                style={{ backgroundImage: `url(${background})` }}
            >
                <GenericPage>
                    <div className='justify-center items-center flex'>
                        <div className='h-100 w-100 text-center text-white mb-[1rem] md:mb-[2rem]'>
                            <h2 className='font-gill font-bold bg-[#F26628] text-[14px] md:text-[20px] p-[0.5rem] px-[1rem]'>
                                MOZILLA HUBS
                            </h2>
                        </div>
                    </div>
                    <PageTitle title='Jalan Jalan Teknik' />
                    <motion.div
                        initial={{ opacity: 0, scale: 1 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1 }}
                    >
                        <div className='overflow-hidden w-[45vmin] h-[25vmin] flex absolute right-0 top-[10vh] md:top-[15vh] md:right-[0] '>
                            <img
                                className='w-100 h-100 z-[3] flex absolute scale-[70%] md:scale-[90%] 1360px:scale-[100%] right-[-10vw] lg:right-[-4vw]'
                                src={cloud}
                                alt=''
                            />
                        </div>
                        <div className='overflow-hidden w-[45vmin] h-[25vmin] hidden absolute left-0 top-[85vmin] 1360px:top-[74vmin] lg:flex'>
                            <img
                                className='w-100 h-100 z-[3] flex absolute scale-[90%] 1360px:scale-[100%] left-[-4vw] 1360px:left-[-2vw]'
                                src={cloud}
                                alt=''
                            />
                        </div>
                        <motion.div
                            initial={{ y: 0, opacity: 0 }}
                            animate={{ y: -10, opacity: 1 }}
                            transition={{ duration: 1 }}
                        >
                            <div className='w-100 flex items-center justify-center z-[2] p-[2rem] py-[2rem] md:pt-[3rem]'>
                                <div className='flex flex-wrap w-[100%] md:w-[80vw] h-[100%] py-[1rem] pb-[2rem] bg-[#224860] rounded-[5vmin] relative items-center justify-center md:h-auto'>
                                    {forumArray.map((item) => (
                                        <button type='button' key={item.id}>
                                            <a href={`${item.link}`} target="_blank" rel="noopener noreferrer">
                                                <div className='m-3 md:m-4 h-[144px] w-[215px] md:h-[155px] md:w-[244px] rounded-3xl overflow-hidden bg-white drop-shadow-orange'>
                                                    <div className='relative items-center justify-center flex pt-[8px]'>
                                                        <img
                                                            src={`${process.env.PUBLIC_URL}/assets/img/jalanteknik/${item.image}.png`}
                                                            className='w-auto h-[100px] transition ease-in-out duration-300 hover:scale-[1.1] bg-contain bg-center rounded-3xl'
                                                            alt={item.title}
                                                        />
                                                    </div>
                                                    <div className='md:text-[22px] text-center font-gill font-bold text-[#F26628] text-[18px] py-[6px] md:py-[8px] uppercase'>
                                                        {item.title}
                                                    </div>
                                                </div>
                                            </a>
                                        </button>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                </GenericPage>
            </div>
        </>
    );
}
