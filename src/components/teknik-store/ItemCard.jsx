import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { PopUp } from './PopUp';

export function ItemCard({ item, size }) {
    const [click, setClick] = useState(false);
    const history = useHistory();
    const sizeStyle =
        size === 'large'
            ? ' w-80 h-96 sm:w-[30rem] sm:h-[31rem]'
            : ' w-[10rem] h-[11rem] sm:w-80 sm:h-96';
    return (
        <>
            <button
                type='button'
                onClick={() => setClick(true)}
                className={`flex flex-col bg-black text-white justify-items-center align-content-center m-4 ${sizeStyle}`}
            >
                <img
                    src='../assets/background.png'
                    className='w-100 h-56'
                    alt='asd'
                />
                <div className='w-100 text-center '>{item.name}</div>
                <div className='w-100 text-center '>Rp {item.price} </div>
            </button>
            {click && (
                <button type='button' onClick={() => setClick(false)}>
                    <PopUp item={item} />
                </button>
            )}
        </>
    );
}
