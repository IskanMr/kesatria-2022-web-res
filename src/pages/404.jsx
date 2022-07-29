import { HtmlHead } from '../components/HtmlHead';

export function NotFound() {
    return (
        <>
            <HtmlHead title='404 Not Found' decription='Yes' />
            <div className='flex flex-col items-center justify-center flex-grow p-8'>
                <h1 className='text-8xl font-display font-bold text-oranges-default mb-2'>
                    404
                </h1>
                <p className='text-lg font-display font-semilight'>
                    Halaman tidak ditemukan
                </p>
            </div>
        </>
    );
}
