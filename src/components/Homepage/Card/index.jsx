import React from 'react';

import background from '../../../styles/backgrounds.module.css';

import agendaIcon from '../../../assets/images/homepage/Agenda1.png';
import materiIcon from '../../../assets/images/homepage/Agenda2.png';
import penugasanIcon from '../../../assets/images/homepage/Agenda3.png';

const types = [
    { name: 'Agenda', icon: agendaIcon, link: '/agenda' },
    { name: 'Materi', icon: materiIcon, link: '/materi' },
    { name: 'Penugasan', icon: penugasanIcon, link: '/penugasan' },
];

export function Cards() {
    return (
        <div
            className={`${background.light} flex flex-col md:flex-row w-full pb-6 md:pb-14 justify-items-center place-content-center items-center gap-10 md:gap-16`}
        >
            {types.map((type) => (
                <a
                    href={type.link}
                    type='button'
                    className='flex flex-col drop-shadow-containerBlueX hover:drop-shadow-containerBlueO p-4 md:p-6 bg-white ring-2 ring-blue-default rounded-xl group hover:scale-110 transition ease-in-out duration-300'
                >
                    <div className='flex bg-blue-default w-24 h-24 md:w-40 md:h-40 p-4 md:p-6 justify-items-center place-content-center items-center rounded-xl mb-6'>
                        <img
                            className='w-full'
                            src={type.icon}
                            alt='agendaIcon'
                        />
                    </div>
                    <button
                        type='button'
                        className='text-sm md:text-base py-1 md:py-2 rounded-lg transition ease-in-out duration-300 text-white bg-oranges-default group-hover:text-oranges-default group-hover:bg-white ring-2 ring-oranges-default'
                    >
                        {type.name}
                    </button>
                </a>
            ))}
        </div>
    );
}
