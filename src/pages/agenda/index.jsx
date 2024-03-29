import React, { useState } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useRouteMatch,
    Redirect,
    useLocation,
} from 'react-router-dom';

import { HtmlHead } from '../../components/HtmlHead';
import { PageTitle } from '../../components/PageTitle';
import { HariPertama } from './hari-1/hari1';
import { HariKedua } from './hari-2/hari2';
import agendaData from '../../resources/daftar-agenda.json';
import { GenericPage } from '../../components/GenericPage';
import background from '../../assets/images/pattern-light.png';

let checkingDay;

export function Agenda() {
    const { path } = useRouteMatch();
    const location = useLocation();
    let cssDay1;
    let cssDay2;
    let changeDay1;
    let changeDay2;
    const clicked =
        'font-gill text-xl md:text-2xl font-bold w-32 bg-oranges-default text-white flex place-content-center transition ease-in-out duration-300';
    const unClicked =
        'font-gill text-xl md:text-2xl font-bold w-32 bg-oranges-light text-white flex place-content-center transition ease-in-out duration-300';
    if (
        location.pathname === '/agenda/hari-1' ||
        location.pathname === '/agenda'
    ) {
        [cssDay1, changeDay1] = useState(clicked);
        [cssDay2, changeDay2] = useState(unClicked);
    } else {
        [cssDay1, changeDay1] = useState(unClicked);
        [cssDay2, changeDay2] = useState(clicked);
    }

    return (
        <>
            <HtmlHead title='Agenda' decription='Yes' />
            <div
                className='bg-white_bone'
                style={{ backgroundImage: `url(${background})` }}
            >
                <GenericPage>
                    <PageTitle title='Agenda' />
                    <div className='mx-auto place-items-center flex flex-col shrink w-full '>
                        <Router>
                            <div
                                id='agenda-hari'
                                className='mx-auto flex flex-row mt-10'
                            >
                                <Link to={`${path}/hari-1`}>
                                    <button
                                        type='button'
                                        id='hari1'
                                        className={cssDay1}
                                        onClick={() => {
                                            changeDay1(clicked);
                                            changeDay2(unClicked);
                                            checkingDay = 1;
                                        }}
                                    >
                                        Hari 1
                                    </button>
                                </Link>
                                <Link to={`${path}/hari-2`}>
                                    <button
                                        type='button'
                                        id='hari2'
                                        className={cssDay2}
                                        onClick={() => {
                                            changeDay2(clicked);
                                            changeDay1(unClicked);
                                            checkingDay = 2;
                                        }}
                                    >
                                        Hari 2
                                    </button>
                                </Link>
                            </div>
                            <div className='lg:w-4/5 w-full'>
                                <Switch>
                                    <Route exact path={`${path}`}>
                                        <Redirect to={`${path}/hari-1`} />
                                    </Route>
                                    <Route path={`${path}/hari-1`}>
                                        {agendaData['hari-1'].map((item) => (
                                            // console.log(item.deskripsi)
                                            <HariPertama
                                                time={item.jam}
                                                title={item.judul}
                                                deskripsi={item.deskripsi}
                                            />
                                        ))}
                                    </Route>
                                    <Route path={`${path}/hari-2`}>
                                        {agendaData['hari-2'].map((item) => (
                                            // console.log(item.deskripsi)
                                            <HariKedua
                                                time={item.jam}
                                                title={item.judul}
                                                deskripsi={item.deskripsi}
                                            />
                                        ))}
                                    </Route>
                                </Switch>
                            </div>
                        </Router>
                        <br />
                        <br />
                        <br />
                        <br />
                    </div>
                </GenericPage>
            </div>
        </>
    );
}
