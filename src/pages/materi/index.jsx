import { 
    BrowserRouter as Router,
    Switch, 
    Route, 
    Link, 
    useRouteMatch,
    NavLink,
    Redirect
} from 'react-router-dom';
import Dropdown from 'react-dropdown';
import React from 'react';
import { BrowserView, MobileView, isBrowser, isMobile } from 'react-device-detect';
import ReactPlayer from 'react-player';
import { HtmlHead } from '../../components/HtmlHead';
import { PageTitle } from '../../components/PageTitle';
import { Material1, Material2, Material3, Material4, Material5, Material6, Material7 } from './material/pageMateri';
import 'react-dropdown/style.css';

// import { Dropdown } from '../../components/Dropdown';

export function Materi() {
    const {path} = useRouteMatch();
    const buttonStyle="text-md text-oranges-default hover:text-white flex border-6 border-oranges-default hover:bg-oranges-default my-2 font-gill font-bold text-2xl rounded-2xl w-96 py-5 justify-center";
    const buttonActive="text-md flex border-6 border-oranges-default bg-oranges-default my-2 font-gill text-2xl rounded-2xl w-96 py-5 justify-center text-white";
    const options = [
        {value: 'one', label: 'One' },
        {value: 'two', label: 'two'},
        {value: 'three', label: 'three'},
        {value: 'four', label: 'four'},
        {value: 'five', label: 'five'},
      ];
    const defaultOption = options[0];
    return (
        <>
            <HtmlHead title='Materi' decription='Yes' />
            <PageTitle title='Materi' />
            <div className="w-2/3 mx-auto">
                        <MobileView>
                            <Dropdown options={options} value={defaultOption} placeholder="Select an option" />
                        </MobileView>
            </div>
                <div className='flex flex-row md:flex-col gap-x-8 w-9/12 mx-auto'>
                    
                <Router>
                    {!isMobile ?
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
                        </div>:""
}
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