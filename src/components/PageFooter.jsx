import { Link } from 'react-router-dom';
import styles from '../styles/PageFooter.module.css';

import { openInNewTab } from '../utils/openInNewTab';

import { ReactComponent as FooterLogo } from '../assets/icons/kesatriaLogoW.svg';

import { ReactComponent as TwitterIcon } from '../assets/icons/socials/twitter.svg';
import { ReactComponent as InstagramIcon } from '../assets/icons/socials/instagram.svg';
import { ReactComponent as TiktokIcon } from '../assets/icons/socials/tiktok.svg';
import { ReactComponent as LineIcon } from '../assets/icons/socials/line.svg';
import { ReactComponent as YoutubeIcon } from '../assets/icons/socials/youtube.svg';

function SocialItem({
    icon: IconComponent,
    targetBaseUrl,
    noSuffix,
    children,
}) {
    return (
        <button
            type='button'
            onClick={() =>
                openInNewTab(targetBaseUrl + (!noSuffix ? children : ''))
            }
            className='flex items-center font-semilight group my-2 max-w-max'
        >
            <div className='bg-white group-hover:bg-oranges-default text-black p-1 rounded-full'>
                <IconComponent className='block w-4 h-4 p-0.5 fill-current' />
            </div>
            <span className='block text-sm md:text-base group-hover:text-oranges-default ml-2'>
                {children}
            </span>
        </button>
    );
}

export function PageFooter({ className }) {
    return (
        <footer
            className={`${styles.footerContainer} bg-black text-gray-lighter flex flex-col md:flex-row font-semilight p-8 ${className}`}
        >
            {/* TODO: Group the latter text-containing parts (with <div>s) instead of the current approach, to allow similar/uniform left-aligning in mobile viewports */}
            <div className='flex flex-row items-center w-auto md:w-2/5 mb-8 md:mb-0'>
                <FooterLogo className='block fill-gray-lighter text-gray-lighter h-28 w-auto mr-4' />
                <div className='text-xs'>
                    <p className=' font-bold uppercase text-xl mb-4'>
                        PPSMB Kesatria 2022
                    </p>
                    <button
                        className='mb-4 text-sm md:text-base hover:text-oranges-default text-left'
                        type='button'
                        onClick={() =>
                            openInNewTab(
                                'https://www.google.com/maps/place/Jl.+Grafika,+Sendowo,+Caturtunggal,+Kec.+Depok,+Kabupaten+Sleman,+Daerah+Istimewa+Yogyakarta+55281/data=!4m2!3m1!1s0x2e7a584dc07272d7:0x900bfbf5ee983dc1?sa=X&ved=2ahUKEwiJiJiPpof5AhVDErcAHeJyAeQQ8gF6BAgWEAE'
                            )
                        }
                    >
                        <div>
                            Jalan Grafika
                            <br />
                            Mlati, Yogyakarta 55281, ID
                        </div>
                    </button>

                    <p>
                        <Link
                            to='/'
                            className='hover:text-oranges-default text-sm md:text-base'
                            title='Go to home page'
                        >
                            https://ppsmb.ft.ugm.ac.id
                        </Link>
                    </p>
                </div>
            </div>
            <div className='flex flex-col flex-grow md:items-center'>
                <div className='flex flex-col'>
                    <p className=' font-bold text-xl mb-4'>Official Account:</p>{' '}
                    <div className='flex'>
                        <div className='flex flex-col mr-12'>
                            <SocialItem
                                icon={TwitterIcon}
                                targetBaseUrl='https://twitter.com/'
                            >
                                ppsmb_kesatria
                            </SocialItem>
                            <SocialItem
                                icon={TiktokIcon}
                                targetBaseUrl='https://tiktok.com/@'
                            >
                                ppsmb_kesatria
                            </SocialItem>
                            <SocialItem
                                icon={LineIcon}
                                targetBaseUrl='https://line.me/R/ti/p/'
                            >
                                @NRB2565A
                            </SocialItem>
                        </div>
                        <div className='flex flex-col'>
                            <SocialItem
                                icon={InstagramIcon}
                                targetBaseUrl='https://instagram.com/'
                            >
                                ppsmb_kesatria
                            </SocialItem>
                            <SocialItem
                                icon={YoutubeIcon}
                                targetBaseUrl='https://www.youtube.com/channel/UCmv4fLH2lves3QtOS4V33PQ'
                                noSuffix
                            >
                                PPSMB KESATRIA
                            </SocialItem>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
