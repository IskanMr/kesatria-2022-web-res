import { useState } from 'react';
import { NavLink as NavLinkStock } from 'react-router-dom';

import styles from '../styles/PageHeader.module.css';

import { ReactComponent as HeaderLogo } from '../assets/images/main-header-logo.svg';
import { ReactComponent as HamburgerIcon } from '../assets/icons/list.svg';
import { ReactComponent as RetractUpIcon } from '../assets/icons/chevron-up.svg';

export function PageHeader({ className }) {
    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

    const MobileIcon = isMobileMenuOpen ? RetractUpIcon : HamburgerIcon;

    const NavLink = ({ to, external, children }) => {
        const LinkComponent = external ? 'a' : NavLinkStock;
        return (
            <LinkComponent
                {...{
                    [external ? 'href' : 'to']: to,
                }}
                className={`${styles.hoverUnderlineAnimation} hover:text-blue-default block p-4`}
                onClick={() => {
                    setMobileMenuOpen(false);
                }}
            >
                {children}
            </LinkComponent>
        );
    };

    return (
        <header
            className={`
             z-50 sticky top-0 w-full flex shadow-lg items-start text-pureblack font-medium bg-white md:px-12 md:py-1 ${
                 className ? ` ${className}` : ''
             }`}
        >
            <NavLinkStock
                to='/'
                className='bg-white flex-shrink-0 pl-6 pb-2 pt-1 pr-8 flex items-center uppercase  group'
            >
                <HeaderLogo className='block h-10 md:h-14 w-auto mr-2' />
                <div className='text-black text-xl md:text-2xl hover:text-blue-default transition-colors'>
                    ppsmb kesatria 2022
                </div>
            </NavLinkStock>
            <div
                className={`${styles.navContainer} flex-grow text-sm md:text-lg`}
            >
                <nav
                    className={`fixed w-full md:w-auto left-0 top-0 md:static bg-white md:bg-transparent flex flex-col md:flex-row md:h-full justify-center md:justify-end text-center py-8 pt-24 md:p-0 -z-1 ${
                        !isMobileMenuOpen ? 'transform -translate-y-full' : ''
                    } transition-transform duration-300 md:transform-none md:transition-none`}
                >
                    <NavLink to='/'>Beranda</NavLink>
                    <NavLink to='/jelajah-teknik'>Jelajah Teknik</NavLink>
                    <NavLink to='/agenda'>Agenda</NavLink>
                    <NavLink to='/penugasan'>Penugasan</NavLink>
                    <NavLink to='/materi'>Materi</NavLink>
                    <NavLink to='/teknik-store'>Teknik Store</NavLink>
                    <NavLink to='/pertanyaan-umum'>FAQ</NavLink>
                </nav>
                <button
                    type='button'
                    className='block md:hidden p-4 hover:bg-white hover:bg-opacity-10 active:bg-opacity-20 transition-colors mr-0 ml-auto'
                    onClick={() => {
                        setMobileMenuOpen((prevVal) => !prevVal);
                    }}
                >
                    <MobileIcon
                        className={`${styles.mobileIcon} block h-6 w-auto`}
                    />
                </button>
            </div>
        </header>
    );
}
