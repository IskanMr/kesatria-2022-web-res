import React, { useState } from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useRouteMatch,
    Redirect,
    useLocation,
  } from "react-router-dom";
  
import { HtmlHead } from '../../components/HtmlHead';
import { PageTitle } from '../../components/PageTitle';
import { HariPertama } from './hari-1/hari1';
import { HariKedua } from './hari-2/hari2';
import agendaData from '../../resources/daftar-agenda.json';

let checkingDay;

export function Agenda() {
    const {path} = useRouteMatch();
    const location = useLocation();
    let cssDay1;
    let cssDay2;
    let changeDay1;
    let changeDay2;
    const clicked = 'font-gill text-2xl font-bold w-32 bg-oranges-default text-white flex place-content-center';
    const unClicked = 'font-gill text-2xl font-bold w-32 bg-oranges-light text-white flex place-content-center';
    if(location.pathname === "/agenda/hari-1" || location.pathname === "/agenda"){
        [cssDay1, changeDay1] = useState(clicked);
        [cssDay2, changeDay2] = useState(unClicked);
    }else{
        [cssDay1, changeDay1] = useState(unClicked);
        [cssDay2, changeDay2] = useState(clicked);
    }
    
    return (
        <>
            <HtmlHead title='Agenda' decription='Yes' />
            <PageTitle title="Agenda" />
            <div className="container mx-auto px-auto w-5/6 place-items-center flex flex-col grow">
                <Router>
                <div id="agenda-hari" className='mx-auto flex flex-row mt-10'>
                    <Link to={`${path}/hari-1`}>
                        <button type='button' id="hari1" className={cssDay1} onClick={()=>{changeDay1(clicked);changeDay2(unClicked);checkingDay=1}}>
                            Hari 1
                        </button>
                    </Link>
                    <Link to={`${path}/hari-2`}>
                        <button type='button' id="hari2" className={cssDay2} onClick={()=>{changeDay2(clicked);changeDay1(unClicked);checkingDay=2}}>
                            Hari 2
                        </button>
                    </Link>
                </div>
                <Switch>
                    <Route exact path={`${path}`}>
                        <Redirect to={`${path}/hari-1`} />
                    </Route>
                    <Route path={`${path}/hari-1`} >
                        {agendaData["hari-1"].map((item) => (
                            // console.log(item.deskripsi)
                            <HariPertama
                                time={item.jam}
                                title={item.judul}
                                deskripsi={item.deskripsi}
                            />
                        ))}
                    </Route>
                    <Route path={`${path}/hari-2`}>
                        {agendaData["hari-2"].map((item) => (
                                // console.log(item.deskripsi)
                                <HariKedua
                                    time={item.jam}
                                    title={item.judul}
                                    deskripsi={item.deskripsi}
                                />
                            ))}
                    </Route>
                </Switch>

                </Router>
                <br/>
                <br/>
                <br/>
                <br/>
            </div>
        </>
    );
}
