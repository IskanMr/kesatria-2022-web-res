import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import React from 'react';
import { GenericPage } from '../../../components/GenericPage';
import { HtmlHead } from '../../../components/HtmlHead';
import { PageTitle } from '../../../components/PageTitle';
import '../../../styles/materi.scss';

export function Materi2() {
    return (
        <>
            <HtmlHead title='Penugasan' decription='Yes' />
            <PageTitle title='Penugasan' />
            <section className='home' id='home'>
                <div className='home-wrapper'>
                    <div className='content-left'>
                        <h1 className='heading'>Materi 3 : Judul Materi</h1>
                        <p className='explanation'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Etiam vel tempus nunc, sit amet sodales dui.
                            Duis pellentesque elit ut magna tristique, id
                            blandit augue venenatis. Aenean hendrerit neque eget
                            rhoncus vehicula. Pellentesque habitant morbi
                            tristique senectus et netus et malesuada fames ac
                            turpis egestas. Phasellus ut ultricies ante. Proin
                            ultrices pellentesque nulla, ut fringilla dolor
                            mollis tristique. Cras non tincidunt enim, et rutrum
                            arcu.
                        </p>
                    </div>
                    <div className='round-box'>
                        <button
                            type='submit'
                            id='materi-1'
                            className='item-list1 block1'
                        >
                            {' '}
                            Materi 1{' '}
                        </button>
                        <button
                            type='submit'
                            id='materi-2'
                            className='item-list2 block2'
                        >
                            {' '}
                            Materi 2{' '}
                        </button>
                        <button
                            type='submit'
                            id='materi-3'
                            className='item-list3 block3'
                        >
                            {' '}
                            Materi 3{' '}
                        </button>
                    </div>
                    <div className='container2-box2'>
                        <button
                            type='submit'
                            id='classroom'
                            className='item-list4 block4'
                        >
                            GO TO CLASSROOM
                        </button>
                    </div>
                </div>
            </section>
        </>
    );
}
