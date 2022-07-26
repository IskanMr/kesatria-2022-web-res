import { HtmlHead } from '../../../components/HtmlHead';
import { GenericPage } from '../../../components/GenericPage';
import { PageTitle } from '../../../components/PageTitle';
import styles from '../../../styles/JalanTeknik.module.css';

import background from '../../../assets/images/pattern-light.png';
import cloud from '../../../assets/images/awanGabung.png';
import sadewa from '../../../assets/images/jalanteknik/sadewaJJT.png';

export function JalanJalanTeknik() {
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
                    <div className='overflow-hidden w-[45vmin] h-[25vmin] flex absolute right-0 top-[10vh] md:top-[15vh] md:right-[0] '>
                        <img
                            className='w-100 h-100 z-[3] flex absolute scale-[70%] md:scale-[90%] right-[-10vw] lg:right-[-4vw]'
                            src={cloud}
                            alt=''
                        />
                    </div>
                    <div className='overflow-hidden w-[45vmin] h-[25vmin] hidden absolute left-0 md:bottom-[-7vh] md:flex'>
                        <img
                            className='w-100 h-100 z-[3] flex absolute scale-[70%] md:scale-[90%] md:left-[0vw]'
                            src={cloud}
                            alt=''
                        />
                    </div>
                    <div className='w-100 flex items-center justify-center z-[2] p-[2rem] py-[2rem]'>
                        <div className='flex w-[100%] md:w-[80vw] h-[160vmin] bg-[#224860] rounded-[5vmin] relative items-center justify-center md:h-[60vmin]'>
                            {/* <div className='flex flex-wrap justify-items-center overflow-hidden place-content-center md:px-[15%] z-[3]'>
                                <div className='m-3 md:m-4 h-[156px] w-[156px] md:h-[244px] md:w-[244px] rounded-3xl drop-shadow-blue overflow-hidden bg-[#FFFFFF]'>
                                    <img
                                        src={`${sadewa}`}
                                        className='w-full h-full transition ease-in-out duration-300 hover:scale-[1.1] bg-contain bg-center rounded-3xl'
                                        alt=''
                                        loading='lazy'
                                    />
                                </div>
                            </div> */}
                        </div>
                    </div>
                </GenericPage>
            </div>
        </>
    );
}
