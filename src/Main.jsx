// Forcibly remove the inherited styles from the WP theme
import './utils/wp-styles-fix';

import { StrictMode, useEffect } from 'react';
import {
    BrowserRouter,
    Switch,
    Route,
    useLocation,
    useHistory,
    Redirect,
} from 'react-router-dom';

import './styles/main.scss';

import { PageHeader } from './components/PageHeader';
import { PageFooter } from './components/PageFooter';

import * as pages from './pages/_listing';
import { ScrollToTop } from './utils/ScrollToTop';

function RemoveTrailingSlash() {
    const { pathname } = useLocation();
    const history = useHistory();
    useEffect(() => {
        if (pathname === '/') {
            history.push('/agenda');
        }
    }, []);

    return null;
}

function Main() {
    return (
        <BrowserRouter>
            <RemoveTrailingSlash />
            <ScrollToTop />

            <div className='flex flex-col min-h-screen'>
                <PageHeader className='flex-shrink-0' />

                <main className='flex-grow flex flex-col'>
                    <Switch>
                        <Route exact path='/'>
                            <Redirect to='/agenda' />
                        </Route>
                        <Route path='/penugasan' component={pages.Penugasan} />
                        {/* <Route
                            exact
                            path='/jelajah-teknik'
                            component={pages.JelajahTeknik}
                        /> */}
                        <Route
                            path='/jelajah-teknik/ngulik-teknik'
                            component={pages.NgulikTeknik}
                        />
                        <Route
                            path='/jelajah-teknik/jalan-jalan-teknik'
                            component={pages.JalanJalanTeknik}
                        />
                        <Route path='/agenda' component={pages.Agenda} />
                        <Route path='/materi' component={pages.Materi} />
                        {/* <Route
                            path='/dokumentasi'
                            component={pages.Dokumentasi}
                        /> */}
                        <Route
                            path='/teknik-store'
                            component={pages.TeknikStore}
                        />
                        <Route path='/pertanyaan-umum' component={pages.QNA} />

                        {/* The 404 page */}
                        <Route component={pages.NotFound} />
                    </Switch>
                </main>
                <PageFooter className='flex-shrink-0' />
            </div>
        </BrowserRouter>
    );
}

export const renderedComponent = (
    <StrictMode>
        <Main />
    </StrictMode>
);
