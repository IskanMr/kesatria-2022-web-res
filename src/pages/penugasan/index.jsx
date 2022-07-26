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
import { GenericPage } from '../../components/GenericPage';
import { HtmlHead } from '../../components/HtmlHead';
import { PageTitle } from '../../components/PageTitle';
import background from '../../assets/images/pattern-light.png';

export function Penugasan() {
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
        location.pathname === '/penugasan/hari-1' ||
        location.pathname === '/penugasan'
    ) {
        [cssDay1, changeDay1] = useState(clicked);
        [cssDay2, changeDay2] = useState(unClicked);
    } else {
        [cssDay1, changeDay1] = useState(unClicked);
        [cssDay2, changeDay2] = useState(clicked);
    }
    return (
        <>
            <HtmlHead title='Penugasan' decription='Yes' />
            <div
                className='bg-white_bone'
                style={{ backgroundImage: `url(${background})` }}
            >
                <GenericPage>
                    <PageTitle title='Penugasan' />
                    <div className='container mx-auto px-auto w-5/6 place-items-center flex flex-col grow'>
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
                                        }}
                                    >
                                        Hari 2
                                    </button>
                                </Link>
                            </div>
                            <Switch>
                                <Route exact path={`${path}`}>
                                    <Redirect to={`${path}/hari-1`} />
                                </Route>
                                <Route path={`${path}/hari-1`}>
                                    <div className='h-10' />
                                    <div
                                        className='block h-md xl:h-xl lg:h-xl sm:h-lg mx-auto w-full'
                                        style={{
                                            animation:
                                                'test-appear-up-anim 1s cubic-bezier(0, 1, 1, 1)',
                                        }}
                                    >
                                        <iframe
                                            src='https://drive.google.com/file/d/1_tcICPVA-Qk2n7NIQ8KNlAnmBTqfkwmX/preview'
                                            className='w-full overflow-hidden h-full'
                                            allow='autoplay'
                                            title='Penugasan'
                                            height='100%'
                                            width='80%'
                                        />
                                    </div>
                                </Route>
                                <Route path={`${path}/hari-2`}>
                                    <div className='h-10' />

                                    <div
                                        className='block xl:h-xl lg:h-xl md:h-xl sm:h-lg 320px:h-md mx-auto w-full'
                                        style={{
                                            animation:
                                                'test-appear-up-anim 1s cubic-bezier(0, 1, 1, 1)',
                                        }}
                                    >
                                        <iframe
                                            src='https://drive.google.com/file/d/1cbd2SdryjZ-WMC7s1kHnldox9wHa1ALS/preview'
                                            className='w-full overflow-hidden h-full'
                                            allow='autoplay'
                                            title='Penugasan'
                                            height='100%'
                                            width='80%'
                                        />
                                    </div>
                                </Route>
                            </Switch>
                        </Router>
                    </div>
                </GenericPage>
            </div>
        </>
    );
}
