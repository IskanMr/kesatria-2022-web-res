import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

import { XIcon } from '@heroicons/react/solid';

import { HtmlHead } from '../../components/HtmlHead';
import { GenericPage } from '../../components/GenericPage';
import { ItemCard } from '../../components/teknik-store/ItemCard';
import { PageTitle } from '../../components/PageTitle';

import { openInNewTab } from '../../utils/openInNewTab';

import background from '../../assets/images/pattern-light.png';
import sizeChart from '../../assets/images/teknikStore/sizeChart.png';

import StoreData from '../../resources/store-items.json';

const button = (type) => {
    return `w-full md:w-56 py-3 rounded-lg ${
        type === 'primary'
            ? 'text-white bg-oranges-default hover:text-oranges-default hover:bg-white ring-2 ring-oranges-default'
            : 'text-gray-default hover:text-black/75 ring-2 ring-gray-default hover:ring-black/75'
    }`;
};

export function TeknikStore() {
    const [picked, setPicked] = useState(0);
    const [isOpen, setIsOpen] = useState(false);
    const [ukuranOpen, setUkuranOpen] = useState(false);

    const itemClick = (e) => {
        setPicked(e);
        setIsOpen(true);
    };

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflowY = 'hidden';
        } else {
            document.body.style.overflowY = 'unset';
        }
    }, [isOpen]);

    return (
        <>
            <HtmlHead title='Teknik Store' decription='Yes' />
            <div
                className='bg-white_bone'
                style={{ backgroundImage: `url(${background})` }}
            >
                <GenericPage>
                    <PageTitle title='Teknik Store' />
                    <div className='flex flex-wrap w-100 justify-items-center overflow-hidden place-content-center md:px-[15%]'>
                        {StoreData.map((item) => (
                            <motion.div
                                initial={{ y: 0, opacity: 0 }}
                                animate={{ y: -10, opacity: 1 }}
                                transition={{ duration: 1 }}
                            >
                                <button
                                    type='button'
                                    onClick={() => {
                                        itemClick(item);
                                    }}
                                >
                                    <ItemCard item={item} />
                                </button>
                            </motion.div>
                        ))}
                    </div>
                </GenericPage>
            </div>

            {isOpen && (
                <div
                    className=' transition-transform duration-300 '
                    style={{ whiteSpace: 'pre-line' }}
                >
                    <button
                        type='button'
                        className='flex fixed w-screen h-screen left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 items-center justify-items-center place-content-center bg-black/20'
                        style={{ zIndex: '10000' }}
                        onClick={() => setIsOpen(false)}
                    >
                        {' '}
                    </button>
                    <div
                        className='flex flex-col md:flex-row fixed bg-white left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-screen h-screen md:w-[960px] md:h-[460px] md:rounded-xl '
                        style={{ zIndex: '10001' }}
                    >
                        <button type='button' onClick={() => setIsOpen(false)}>
                            <XIcon className='md:hidden absolute top-0 right-0 m-4 text-white w-8 h-8' />
                        </button>
                        <div className='flex w-100 md:min-w-[45%] md:max-w-[45%] h-1/2 md:h-full md:rounded-l-xl'>
                            <img
                                loading='lazy'
                                src={`${process.env.PUBLIC_URL}/assets/img/store/${picked.imgs[0]}.png`}
                                className='bg-contain bg-center md:rounded-l-xl'
                                alt={picked.imgs[0]}
                            />
                        </div>
                        <div className='flex flex-col flex-grow place-content-between p-6 md:p-12'>
                            <div className='flex flex-col items-center md:items-start gap-3'>
                                <div className='text-2xl md:text-3xl'>
                                    {picked.name}
                                </div>
                                <div className='text-2xl md:text-3xl text-oranges-default font-semibold'>
                                    {picked.price}
                                </div>
                                <div className='flex flex-col gap-3'>
                                    <div className='flex justify-between text-xl md:text-2xl'>
                                        <div>Deskripsi:</div>
                                        {picked.id === '1' && (
                                            <button
                                                className=' text-gray-default hover:text-black/75 underline'
                                                type='button'
                                                onClick={() => {
                                                    setUkuranOpen(true);
                                                }}
                                            >
                                                Panduan Ukuran
                                            </button>
                                        )}
                                    </div>

                                    <div>{picked.desc}</div>
                                </div>
                            </div>

                            <div className='hidden md:flex justify-between text-xl'>
                                <button
                                    className={`${button('secondary')}`}
                                    type='button'
                                    onClick={() => setIsOpen(false)}
                                >
                                    Batalkan
                                </button>

                                <button
                                    onClick={() => openInNewTab(picked.link)}
                                    className={`${button('primary')}`}
                                    type='button'
                                >
                                    Beli
                                </button>
                            </div>
                            <div className='md:hidden w-100'>
                                <button
                                    onClick={() => openInNewTab(picked.link)}
                                    className={`${button('primary')}`}
                                    type='button'
                                >
                                    Beli Sekarang
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
            {ukuranOpen && (
                <div className='overflow-hidden'>
                    <button
                        type='button'
                        className='flex absolute w-screen h-screen left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 items-center justify-items-center place-content-center bg-black/20'
                        style={{ zIndex: '10002' }}
                        onClick={() => setUkuranOpen(false)}
                    >
                        {' '}
                    </button>
                    <div
                        className='flex absolute bg-white left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-screen h-auto md:w-auto md:h-[460px] md:rounded-xl '
                        style={{ zIndex: '10003' }}
                    >
                        <button
                            type='button'
                            onClick={() => setUkuranOpen(false)}
                        >
                            <XIcon className='md:hidden absolute top-0 right-0 m-4 text-black w-8 h-8' />
                        </button>
                        <img
                            src={sizeChart}
                            alt='size chart'
                            className='h-100 w-100 md:bg-contain'
                        />
                    </div>
                </div>
            )}
        </>
    );
}
