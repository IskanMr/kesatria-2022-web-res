import { HtmlHead } from '../components/HtmlHead';
<<<<<<< HEAD
import{ HomePage }from './homepage';
=======
import HomeComp from './homepage';
>>>>>>> 4a2179a47825880ad716a63eade67b0cdb815550

export function Home() {
    return (
        <>
            <HtmlHead title='Beranda' decription='Yes' />
            <div className='flex flex-col bg-gray-lighter -mb-4'>
<<<<<<< HEAD
                This is home
                <HomePage />
=======
                <HomeComp />
>>>>>>> 4a2179a47825880ad716a63eade67b0cdb815550
            </div>
        </>
    );
}
