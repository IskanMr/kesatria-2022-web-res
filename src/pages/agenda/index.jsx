import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useRouteMatch,
    Redirect
  } from "react-router-dom";
import { HtmlHead } from '../../components/HtmlHead';
import { PageTitle } from '../../components/PageTitle';
import { HariPertama } from './hari-1/hari1';
import { HariKedua } from './hari-2/hari2';
import agendaData from '../../resources/daftar-agenda.json';
// function DayLink({ day, children }) {
//     const { url } = useRouteMatch();
//     return (
//         <NavLink
//             to={`${url}/hari-${day}`}
//             /* className='py-2 px-4 font-display font-semilight rounded-lg transition-colors duration-100'/* activeClassName='bg-accent-yellow-dark hover:bg-accent-yellow-dark' */
//         >
//             {children}
//         </NavLink>
//     );
// }
export function Agenda() {
    console.log(agendaData["hari-2"]);
    const { url, path } = useRouteMatch();
    return (
        <>
            <HtmlHead title='Agenda' decription='Yes' />
            <PageTitle title="Agenda" />
            <div className="container mx-auto px-auto w-5/6 place-items-center flex flex-col grow">
                <Router>
                <div id="agenda-hari" className='mx-auto flex flex-row mt-10'>
                    <button type='submit' id="hari1" className='font-gill text-2xl font-bold w-32 bg-oranges-default text-white flex place-content-center'>
                        <Link to={`${path}/hari-1`}>Hari 1</Link>
                    </button>
                    <button type='submit' id="hari2" className='font-gill text-2xl font-bold w-32 bg-oranges-light text-white flex place-content-center'>
                        <Link to={`${path}/hari-2`}>Hari 2</Link>
                    </button>
                </div>
                <Switch>
                <Route exact path="/">
                    <Redirect to="/agenda/hari-1" />
                </Route>
                    <Route path={`${path}/hari-1`}>
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
