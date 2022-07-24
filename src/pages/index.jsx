import { HtmlHead } from '../components/HtmlHead';
import HomeComp from './homepage';

export function Home() {
    return (
        <>
            <HtmlHead title='Beranda' decription='Yes' />
            <div className='flex flex-col bg-gray-lighter -mb-4'>
                <HomeComp />
            </div>
        </>
    );
}
