import { HtmlHead } from '../components/HtmlHead';
import{ HomePage }from './homepage/index';
import { CountDown } from '../components/CountDown';

export function Home() {
    return (
        <>
            <HtmlHead title='Beranda' decription='Yes' />
            <div className='flex flex-col bg-gray-lighter -mb-4'>
                <HomePage />
                {/* <CountDown /> */}
            </div>
        </>
    );
}
