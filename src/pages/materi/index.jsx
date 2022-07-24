import { 
    BrowserRouter as Router,
    Switch, 
    Route, 
    Link, 
    useRouteMatch,
    NavLink,
    Redirect
} from 'react-router-dom';
import React from 'react';
import { BrowserView, MobileView, isBrowser, isMobile } from 'react-device-detect';
import ReactPlayer from 'react-player';
import { HtmlHead } from '../../components/HtmlHead';
import { PageTitle } from '../../components/PageTitle';
import { Material1, Material2, Material3, Material4, Material5, Material6, Material7 } from './material/pageMateri';

// import { Dropdown } from '../../components/Dropdown';

export function Materi() {
    const {path} = useRouteMatch();
    const buttonStyle="text-md text-oranges-default hover:text-white flex border-6 border-oranges-default hover:bg-oranges-default my-2 font-gill font-bold text-2xl rounded-2xl w-96 py-5 justify-center";
    const buttonActive="text-md flex border-6 border-oranges-default bg-oranges-default my-2 font-gill text-2xl rounded-2xl w-96 py-5 justify-center text-white";
    return (
        <>
            <HtmlHead title='Materi' decription='Yes' />
            <PageTitle title='Materi' />
                <div className='flex flex-row md:flex-col gap-x-8 w-9/12 mx-auto'>
                    
                <Router>
                    <BrowserView>
                        <div id="listmateri" className='flex flex-col'>
                            <NavLink to={`${path}/Personal-Branding`} className={isActive => isActive? buttonActive : buttonStyle} activeClassName={buttonActive}>
                            <button type="submit" className='font-bold'>
                                    Personal Branding
                                </button> 
                            </NavLink>
                            <NavLink to={`${path}/Fasilitas-Fakultas-Teknik`} className={isActive => isActive? buttonActive : buttonStyle} activeClassName={buttonActive}>
                                <button type="submit" className='font-bold'>
                                    Fasilitas Fakultas Teknik
                                </button> 
                            </NavLink>
                            <NavLink to={`${path}/Pengetahuan-Program-Studi`} className={isActive => isActive? buttonActive : buttonStyle} activeClassName={buttonActive}>
                            <button type="submit" className='font-bold'>
                                    Pengetahuan Program Studi
                                </button> 
                            </NavLink>
                            <NavLink to={`${path}/Karya-Aplikatif`} className={isActive => isActive? buttonActive : buttonStyle} activeClassName={buttonActive}>
                                <button type="submit" className='font-bold'>
                                    Karya Aplikatif
                                </button> 
                            </NavLink>
                            <NavLink to={`${path}/Jalan-Jalan-Teknik`} className={isActive => isActive? buttonActive : buttonStyle} activeClassName={buttonActive}>
                            <button type="submit" className='font-bold'>
                                    Jalan-Jalan Teknik
                                </button> 
                            </NavLink>
                            <NavLink to={`${path}/Sejarah-Teknik`} className={isActive => isActive? buttonActive : buttonStyle} activeClassName={buttonActive}>
                                <button type="submit" className='font-bold'>
                                    Sejarah Teknik
                                </button> 
                            </NavLink>
                            <NavLink to={`${path}/Swakarya-Kampus`} className={isActive => isActive? buttonActive : buttonStyle} activeClassName={buttonActive}>
                                <button type="submit" className='font-bold'>
                                    Swakarya Kampus
                                </button> 
                            </NavLink>
                        </div>
                        </BrowserView>
                        <MobileView>
                            <div className="hidden bg-gray-200 flex justify-center items-center">
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
                            </div>
                        </MobileView>
                        <Switch>
                            <Route exact path={`${path}`}>
                                <Redirect to={`${path}/Personal-Branding`} />
                            </Route>
                            <Route path={`${path}/Personal-Branding`} >
                                <Material1/>
                            </Route>
                            <Route path={`${path}/Fasilitas-Fakultas-Teknik`} >
                                <Material2/>
                            </Route>
                            <Route path={`${path}/Pengetahuan-Program-Studi`} >
                                <Material3/>
                            </Route>
                            <Route path={`${path}/Karya-Aplikatif`} >
                                <Material4/>
                            </Route>
                            <Route path={`${path}/Jalan-Jalan-Teknik`} >
                                <Material5/>
                            </Route>
                            <Route path={`${path}/Sejarah-Teknik`} >
                                <Material6/>
                            </Route>
                            <Route path={`${path}/Swakarya-Kampus`} >
                                <Material7/>
                            </Route>
                        
                        </Switch>
                        </Router>
                </div>
            

        </>
    );
}



/* INI DROPDOWN */
            /*  */