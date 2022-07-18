import { useState } from 'react';

import { HtmlHead } from '../../components/HtmlHead';
import { GenericPage } from '../../components/GenericPage';
import { ItemCard } from '../../components/teknik-store/ItemCard';
import { PageTitle } from '../../components/PageTitle';

import StoreData from '../../resources/store-items.json';

import background from '../../assets/images/pattern-light.png';

export function TeknikStore() {
    const [picked, setPicked] = useState(0);
    const [isOpen, setIsOpen] = useState(false);
    const [ukuranOpen, setUkuranOpen] = useState(false);

    const itemClick = (e) => {
        setPicked(e);
        setIsOpen(true);
    };
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
                            <button
                                type='button'
                                onClick={() => {
                                    itemClick(item);
                                }}
                            >
                                <ItemCard item={item} />
                            </button>
                        ))}
                    </div>
                </GenericPage>
            </div>

            {isOpen && (
                <div
                    className='overflow-hidden'
                    style={{ whiteSpace: 'pre-line' }}
                >
                    <button
                        type='button'
                        className='flex absolute w-screen h-screen left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 items-center justify-items-center place-content-center bg-black/20'
                        style={{ zIndex: '10000' }}
                        onClick={() => setIsOpen(false)}
                    >
                        {' '}
                    </button>
                    <div
                        className='flex absolute bg-white left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[960px] h-[460px] rounded-xl '
                        style={{ zIndex: '10001' }}
                    >
                        <div className='flex min-w-[45%] max-w-[45%] rounded-l-xl'>
                            <img
                                src={`${process.env.PUBLIC_URL}/assets/img/store/${picked.imgs[0]}.png`}
                                className='bg-contain bg-center rounded-l-xl'
                                alt={picked.imgs[0]}
                            />
                        </div>
                        <div className='flex flex-col flex-grow  p-12'>
                            <div className=' text-3xl'>{picked.name}</div>
                            <div className='text-3xl text-oranges-default font-semibold'>
                                {picked.price}
                            </div>
                            <div>
                                <div className='flex justify-between text-2xl'>
                                    <div>Deskripsi:</div>
                                    <button
                                        type='button'
                                        onClick={() => {
                                            setUkuranOpen(true);
                                        }}
                                    >
                                        Panduan Ukuran
                                    </button>
                                </div>

                                <div>{picked.desc}</div>
                            </div>
                            <div className='flex justify-between text-2xl'>
                                <button
                                    type='button'
                                    onClick={() => setIsOpen(false)}
                                >
                                    Batalkan
                                </button>
                                <a href={picked.link}>
                                    <button type='button'>Beli</button>
                                </a>
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
                        className='flex absolute bg-white left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[960px] h-[460px] rounded-xl '
                        style={{ zIndex: '10003' }}
                    >
                        ukuran
                    </div>
                </div>
            )}
        </>
    );
}
