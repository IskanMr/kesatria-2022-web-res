import { useState } from 'react';
import { motion } from 'framer-motion';

import { GenericPage } from '../../components/GenericPage';
import { HtmlHead } from '../../components/HtmlHead';
import { PageTitle } from '../../components/PageTitle';
import { Question } from '../../components/QNA/Question';

import { ReactComponent as Search } from '../../assets/icons/search.svg';
import background from '../../assets/images/pattern-light.png';

import { openInNewTab } from '../../utils/openInNewTab';

import Questions from '../../resources/questions.json';

export function QNA() {
    const [list, setList] = useState(Questions);
    const onInputChange = (e) => {
        setList(Questions.filter((a) => a.question.toLowerCase().includes(e)));
    };
    return (
        <>
            <HtmlHead title='Pertanyaan Umum' decription='Yes' />
            <div
                className='bg-white_bone'
                style={{ backgroundImage: `url(${background})` }}
            >
                <GenericPage>
                    <PageTitle title='Pertanyaan Umum' />

                    <div className='flex w-100 mt-6  justify-items-center place-content-center'>
                        <label className='flex  w-[100%] md:w-[642px] p-3 bg-white rounded-xl items-center text-sm md:text-base'>
                            <span>
                                <Search className='h-4 md:h-5' />
                            </span>
                            <input
                                className='flex flex-grow ml-1 md:ml-2 border-none outline-none'
                                placeholder='Ketik pertanyaanmu...'
                                type='text'
                                onChange={(e) => {
                                    onInputChange(e.target.value);
                                }}
                            />
                        </label>
                    </div>
                    <div className='flex justify-center mt-6'>
                        <div className='flex flex-col w-100 md:w-3/4'>
                            {list.map((item) => (
                                <motion.div
                                    initial={{ y: 0, opacity: 0 }}
                                    animate={{ y: -10, opacity: 1 }}
                                    transition={{ duration: 1 }}
                                >
                                    <Question item={item} />
                                </motion.div>
                            ))}
                        </div>
                    </div>
                    <div className='flex justify-center mt-4 md:mt-8'>
                        Pertanyaan kamu tidak ada di laman ini? Silahkan hubungi
                        <button
                            type='button'
                            onClick={() =>
                                openInNewTab('https://line.me/R/ti/p/@NRB2565A')
                            }
                            className='ml-1 text-oranges-default hover:text-oranges-light transition ease-in-out duration-300'
                        >
                            {' '}
                            sini
                        </button>
                    </div>
                </GenericPage>
            </div>
        </>
    );
}
