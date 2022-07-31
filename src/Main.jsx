// Forcibly remove the inherited styles from the WP theme
import './utils/wp-styles-fix';

import { StrictMode, useEffect } from 'react';
import {
    BrowserRouter,
    Switch,
    Route,
    useLocation,
    useHistory,
} from 'react-router-dom';

import './styles/main.scss';

import { PageHeader } from './components/PageHeader';
import { PageFooter } from './components/PageFooter';
import { ScrollToTop } from './components/scrollToTop';

import * as pages from './pages/_listing';

function RemoveTrailingSlash() {
    const { pathname } = useLocation();
    const history = useHistory();
    useEffect(() => {
        if (pathname.endsWith('/')) {
            history.replace(pathname.slice(0, -1));
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
                        <Route exact path='/' component={pages.Home} />

                        <Route path='/penugasan' component={pages.Penugasan} />
                        <Route
                            exact
                            path='/jelajah-teknik'
                            component={pages.JelajahTeknik}
                        />
                        <Route
                            path='/jelajah-teknik/jalan-jalan-teknik'
                            component={pages.JalanJalanTeknik}
                        />
                        <Route path='/agenda' component={pages.Agenda} />
                        <Route path='/materi' component={pages.Materi} />
                        <Route
                            path='/dokumentasi'
                            component={pages.Dokumentasi}
                        />
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
