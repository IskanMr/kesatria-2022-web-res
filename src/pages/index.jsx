import { HtmlHead } from '../components/HtmlHead';

export function Home() {
    return (
        <>
            <HtmlHead title='Beranda' decription='Yes' />
            <div className='flex flex-col bg-gray-lighter -mb-4'>
                This is home
            </div>
        </>
    );
}
