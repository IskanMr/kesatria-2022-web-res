import { useState } from 'react';
import { GenericPage } from '../../components/GenericPage';
import { HtmlHead } from '../../components/HtmlHead';
import { PageTitle } from '../../components/PageTitle';
import { Question } from '../../components/QNA/Question';
import Questions from '../../resources/questions.json';

import { ReactComponent as Search } from '../../assets/icons/search.svg';

export function QNA() {
    const [list, setList] = useState(Questions);
    const onInputChange = (e) => {
        setList(Questions.filter((a) => a.question.toLowerCase().includes(e)));
    };
    return (
        <>
            <HtmlHead title='Pertanyaan Umum' decription='Yes' />
            <GenericPage>
                <PageTitle title='Pertanyaan Umum' />

                <div className='flex w-100 mt-6  justify-items-center place-content-center'>
                    <label className='flex  w-[100%] md:w-[642px] py-2 px-3 bg-white rounded-xl items-center '>
                        <span>
                            <Search className='h-[14px]' />
                        </span>
                        <input
                            className='flex flex-grow ml-2 border-none outline-none'
                            placeholder='Ketik pertanyaanmu...'
                            type='text'
                            onChange={(e) => {
                                onInputChange(e.target.value);
                            }}
                        />
                    </label>
                </div>
                <div className='flex justify-center'>
                    <div className='flex flex-col w-100 md:w-3/4'>
                        {list.map((item) => (
                            <Question item={item} />
                        ))}
                    </div>
                </div>
                <div className='flex justify-center'>
                    Pertanyaan kamu tidak ada di laman ini? Silahkan hubungi
                    <a href='/pertanyaan-umum' className='ml-1'>
                        {' '}
                        sini
                    </a>
                </div>
            </GenericPage>
        </>
    );
}
