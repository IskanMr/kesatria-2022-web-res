import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect
  } from "react-router-dom";
import { HtmlHead } from '../../components/HtmlHead';
import { PageTitle } from '../../components/PageTitle';
import { HariPertama } from './hari-1/hari1';
import { HariKedua } from './hari-2/hari2';
import agendaData from '../../resources/daftar-agenda.json';

export function Agenda() {
    // const testing = require('../../resources/daftar-agenda.json');
    console.log(agendaData);
    return (
        <>
            <HtmlHead title='Agenda' decription='Yes' />
            <PageTitle title="Agenda" />
            <div className="container mx-auto px-auto w-5/6 place-items-center flex flex-col">
                <Router>
                <div id="agenda-hari" className='mx-auto flex flex-row mt-10'>
                    <button type='submit' id="hari1" className='font-gill text-2xl font-bold w-32 bg-oranges-default text-white flex place-content-center'>
                        <Link to="hari-1">Hari 1</Link>
                    </button>
                    <button type='submit' id="hari2" className='font-gill text-2xl font-bold w-32 bg-oranges-light text-white flex place-content-center'>
                        <Link to="/hari-2">Hari 2</Link>
                    </button>
                </div>
                <Switch>
                <Route exact path="/">
                    <Redirect to="/agenda" />
                </Route>
                    <Route path="/hari-1">
                        <HariPertama />
                    </Route>
                    <Route path="/hari-2">
                        <HariKedua />
                    </Route>
                </Switch>

                </Router>
            </div>
        </>
    );
}
