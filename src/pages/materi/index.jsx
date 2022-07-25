import { 
    BrowserRouter as Router,
    Switch, 
    Route, 
    useLocation, 
    useRouteMatch,
    NavLink,
    Redirect
} from 'react-router-dom';
import React, {useEffect, useState} from 'react';
// import { DropdownRouter, DropdownRoute, useToggleDropdown } from 'react-dropdown-router';
import { BrowserView, MobileView, isBrowser, isMobile } from 'react-device-detect';
// import ReactPlayer from 'react-player';
import { HtmlHead } from '../../components/HtmlHead';
import { PageTitle } from '../../components/PageTitle';
import { Material1, Material2, Material3, Material4, Material5, Material6, Material7 } from './material/pageMateri';
import { GenericPage } from '../../components/GenericPage';
import background from '../../assets/images/pattern-light.png';
import 'react-dropdown/style.css';

// import { Dropdown } from '../../components/Dropdown';

export function Materi() {
    const dropDownsShow = "show bg-oranges-default w-full overflow-auto mx-auto z-10 absolute";
    const dropDownsHidden = "hidden bg-oranges-default w-2/3 overflow-auto mx-auto z-10 absolute";
    const dropDownsStyle = "flex-row px-1 bg-white text-oranges-default cursor-pointer py-1 w-full hover:bg-oranges-default hover:text-white";
    const dropDownsActive = "flex-row bg-oranges-default px-1 text-white cursor-pointer py-1 w-full";
    const [tampilDropdowns, tampilkanDrop] = useState(dropDownsHidden);
    let rightNow;

    if(useLocation().pathname === "/materi/Personal-Branding"){
        rightNow="Personal Branding";
    }else if(useLocation().pathname === "/materi/Fasilitas-Fakultas-Teknik"){
        rightNow="Fasilitas Fakultas Teknik";
    }else if(useLocation().pathname === "/materi/Pengetahuan-Program-Studi"){
        rightNow="Pengetahuan Program Studi";
    }else if(useLocation().pathname === "/materi/Karya-Aplikatif"){
        rightNow="Karya Aplikatif";
    }else if(useLocation().pathname === "/materi/Jalan-Jalan-Teknik"){
        rightNow="Jalan Jalan Teknik";
    }else if(useLocation().pathname === "/materi/Sejarah-Teknik"){
        rightNow="Sejarah Teknik";
    }else if(useLocation().pathname === "/materi/Swakarya-Kampus"){
        rightNow="Swakarya Kampus";
    }
    const [dropDownsValue, changeValue] = useState(rightNow);
    
    
    
    
    
    
    
      // Close the dropdown if the user clicks outside of it
      window.onclick = function(event) {
        if (!event.target.matches('#dropDownsID')) {
            tampilkanDrop(dropDownsHidden)
        }
      }
    const {path} = useRouteMatch();
    const buttonStyle="text-md text-oranges-default hover:text-white flex border-6 border-oranges-default hover:bg-oranges-default my-2 font-gill font-bold text-2xl rounded-2xl w-96 py-5 justify-center";
    const buttonActive="text-md flex border-6 border-oranges-default bg-oranges-default my-2 font-gill text-2xl rounded-2xl w-96 py-5 justify-center text-white";
    return (
        <>
            <HtmlHead title='Materi' decription='Yes' />
            <div
            className='bg-white_bone'
            style={{ backgroundImage: `url(${background})` }}
        >
            <GenericPage>
            <PageTitle title='Materi'/>
            <div className='h-10'/>
            <Router>
            {!isMobile?
                ""
            :
            <div className="w-4/5 mx-auto">
                <div className="w-full relative inline-block mx-auto">
                    <button id='dropDownsID' onClick={()=>{if(tampilDropdowns===dropDownsShow){tampilkanDrop(dropDownsHidden)}else{tampilkanDrop(dropDownsShow)}}} type='button' className='bg-oranges-default flex-row justify-between px-1 text-white cursor-pointer border-2 py-1 w-full'>
                        {dropDownsValue}
                    <svg className="-mr-1 ml-2 h-5 w-5 py-auto" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                    </button>
                    
                    <div id="myDropdown" className={tampilDropdowns}>
                            <NavLink to={`${path}/Personal-Branding`} className={isActive => isActive? dropDownsActive : dropDownsStyle} activeClassName={dropDownsActive} onClick={(()=>changeValue("Personal Branding"))}>
                                    Personal Branding
                            </NavLink>
                            <NavLink to={`${path}/Fasilitas-Fakultas-Teknik`} className={isActive => isActive? dropDownsActive : dropDownsStyle} activeClassName={dropDownsActive} onClick={(()=>changeValue("Fasilitas Fakultas Teknik"))}>
                                    Fasilitas Fakultas Teknik
                            </NavLink>
                            <NavLink to={`${path}/Pengetahuan-Program-Studi`} className={isActive => isActive? dropDownsActive : dropDownsStyle} activeClassName={dropDownsActive} onClick={(()=>changeValue("Pengetahuan Program Studi"))}>
                                    Pengetahuan Program Studi
                            </NavLink>
                            <NavLink to={`${path}/Karya-Aplikatif`} className={isActive => isActive? dropDownsActive : dropDownsStyle} activeClassName={dropDownsActive} onClick={(()=>changeValue("Karya Aplikatif"))}>
                                    Karya Aplikatif
                            </NavLink>
                            <NavLink to={`${path}/Jalan-Jalan-Teknik`} className={isActive => isActive? dropDownsActive : dropDownsStyle} activeClassName={dropDownsActive} onClick={(()=>changeValue("Jalan-Jalan Teknik"))}>
                                    Jalan-Jalan Teknik
                            </NavLink>
                            <NavLink to={`${path}/Sejarah-Teknik`} className={isActive => isActive? dropDownsActive : dropDownsStyle} activeClassName={dropDownsActive} onClick={(()=>changeValue("Sejarah Teknik"))}>
                                    Sejarah Teknik
                            </NavLink>
                            <NavLink to={`${path}/Swakarya-Kampus`} className={isActive => isActive? dropDownsActive : dropDownsStyle} activeClassName={dropDownsActive} onClick={(()=>changeValue("Swakarya Kampus"))}>
                                    Swakarya Kampus
                            </NavLink>
                    </div>
                </div>
            </div>  
        }
                <div className='flex flex-col md:flex-row gap-x-8 w-9/12 mx-auto'>
                    
                
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
                        
                </div>
            </Router>
            </GenericPage>
            </div>
        </>
    );
}



/* INI DROPDOWN */
            /*  */