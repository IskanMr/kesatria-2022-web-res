import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import React from 'react';
import { GenericPage } from '../../components/GenericPage';
import { HtmlHead } from '../../components/HtmlHead';
import { PageTitle } from '../../components/PageTitle';
import '../../styles/materi.scss';
import image from '../../assets/pattern1_story 1.svg';

export function Penugasan() {
    return (
        <div
            style={{ backgroundImage: `url(${image})` }}
            className='w-full h-screen bg-repeat-x bg-cover'
        >
            <HtmlHead title='Penugasan' decription='Yes' />
            <PageTitle title='Penugasan' />
            <div className='flex -mt-8'>
                <div className='relative flex w-full h-full shadow hover:shadow-3xl rounded-xl place-content-center pt-8 shadow-lg shadow-cyan-500/50'>
                    <iframe
                        src='https://drive.google.com/file/d/1canFad3kwDTDxoo2FdayU39Hww2W5_k0/preview'
                        style={{ width: 1800, height: 1000 }}
                        allow='autoplay'
                        title='Detail Penugasan'
                        className='absolute w-full shadow hover:shadow-2xl shadow-blue-500/50 rounded-2xl place-content-center mt-8 '/
                    >
                </div>
            </div>
        </div>
    );
}
