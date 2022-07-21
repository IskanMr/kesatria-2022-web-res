import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import React from 'react';
import { GenericPage } from '../../components/GenericPage';
import { HtmlHead } from '../../components/HtmlHead';
import { PageTitle } from '../../components/PageTitle';

export function Materi1() {
    const ButtonStyle="text-oranges-default flex border-2 border-oranges-default hover:oranges-default w-96 my-2 text-4xl font-gill rounded-xl";
    return (
        <>
            <HtmlHead title='Materi' decription='Yes' />
            <PageTitle title='Materi' />
            <div className="container flex flex-row">
                <div id="listmateri" className='flex flex-col w-96'>
                    <button type="submit" className="text-oranges-default flex border-2 border-oranges-default hover:oranges-default w-96 my-2 text-4xl font-gill rounded-xl w-96 py-7">
                        MATERI 1
                    </button>
                    <button type="submit" className={ButtonStyle}>
                        MATERI 2
                    </button>
                    <button type="submit" className={ButtonStyle}>
                        MATERI 3
                    </button>
                </div>
            </div>
        </>
    );
}
