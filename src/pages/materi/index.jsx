import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import React from 'react';
import ReactPlayer from 'react-player';
import { GenericPage } from '../../components/GenericPage';
import { HtmlHead } from '../../components/HtmlHead';
import { PageTitle } from '../../components/PageTitle';
import Materi2 from './materi-2/materi2';
import Materi3 from './materi-3/materi3';
import '../../styles/materi.scss';
// import { Dropdown } from '../../components/Dropdown';

export function Materi1() {
    const ButtonStyle="text-oranges-default flex border-2 border-oranges-default hover:oranges-default w-96 my-2 text-4xl font-gill rounded-xl";
    return (
        <>
            {/* <Materi1/> */}
            <HtmlHead title='Materi' decription='Yes' />
            <PageTitle title='Materi' />
            {/* INI DROPDOWN */}
            {/* <div className="hidden bg-gray-200 flex justify-center items-center">
                <div className="relative inline-block text-left">
                <div>
                <button  type="button" className="inline-flex w-full justify-center rounded-md border border-gray-300 bg-oranges-default px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-100" id="menu-button" aria-expanded="true" aria-haspopup="true">
                    MATERI
                    <svg className="-mr-1 ml-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                </button>
                </div>
                <div className="absolute right-0 mt-2 w-56 origin-top-right rounded-md bg-oranges-default shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabIndex="-1">
                <div className="py-1" role="none">
                    <a href="/" className="block px-4 py-2 text-sm text-white hover:bg-gray-200" role="menuitem" tabIndex="-1" id="menu-item-0">MATERI 1</a>
                    <a href="/" className="block px-4 py-2 text-sm text-white hover:bg-gray-200" role="menuitem" tabIndex="-1" id="menu-item-1">MATERI 2</a>
                    <a href="/" className="block px-4 py-2 text-sm text-white hover:bg-gray-200" role="menuitem" tabIndex="-1" id="menu-item-2">MATERI 3</a>
                </div>
                </div>
                </div>
            </div> */}
            <div className='flex flex-col md:flex-row px-8 gap-5 '>
                <div className="container flex flex-row w-1/4 justify-center">
                    <div id="listmateri" className='flex flex-col'>
                        <button type="submit" className="text-md text-oranges-default hover:text-white flex border-2 border-oranges-default hover:bg-oranges-default my-2 font-gill rounded-xl w-96 py-3 justify-center">
                            MATERI 1
                        </button>
                        <button type="submit" className="text-md text-oranges-default hover:text-white flex border-2 border-oranges-default hover:bg-oranges-default my-2 font-gill rounded-xl w-96 py-3 justify-center">
                            MATERI 2
                        </button>
                        <button type="submit" className="text-md text-oranges-default hover:text-white flex border-2 border-oranges-default hover:bg-oranges-default my-2 font-gill rounded-xl w-96 py-3 justify-center">
                            MATERI 3
                        </button>
                    </div>
                </div>
                <div>
                    <div>
                        <h1 className='text-black'> Materi 1: Judul Materi</h1>
                    </div>
                    {/* VIDEO PLAYER */}
                    <div>
                    <div className='player-wrapper md:px-96'>
                        <ReactPlayer
                        className='react-player'
                        url='https://youtu.be/Rq5SEhs9lws'
                        width='100%'
                        height='100%'
                        />
                    </div>
                    </div>
                    <div className=''>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing
                                elit. Etiam vel tempus nunc, sit amet sodales dui.
                                Duis pellentesque elit ut magna tristique, id
                                blandit augue venenatis. Aenean hendrerit neque eget
                                rhoncus vehicula. Pellentesque habitant morbi
                                tristique senectus et netus et malesuada fames ac
                                turpis egestas. Phasellus ut ultricies ante. Proin
                                ultrices pellentesque nulla, ut fringilla dolor
                                mollis tristique. Cras non tincidunt enim, et rutrum
                                arcu.</p>
                    </div>
                    <div className='flex justify-center md:justify-start'>
                        <a target="_blank" rel='noreferrer' href="https://drive.google.com/file/d/11Tu3N7OGoPihq8Fty_U1p9q-eqUSrdN2/view?usp=sharing"
                        className='bg-oranges-default hover:text-black  text-white px-4 py-2 rounded-lg'><h5>GO TO CLASSROOM</h5>
                        </a>
                    </div>
                </div>
                
            </div>
            {/* DROPDOWN MENU */}
            {/* <Dropdown/> */}
            

        </>
    );
}
