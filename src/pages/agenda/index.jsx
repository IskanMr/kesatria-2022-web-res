import { HtmlHead } from '../../components/HtmlHead';
import { PageTitle } from '../../components/PageTitle';
import { HariPertama } from './hari-1/hari1';

export function Agenda() {
    return (
        <>
            <HtmlHead title='Agenda' decription='Yes' />
            <PageTitle title="Agenda" />
            <div className="container mx-auto px-auto w-5/6 place-items-center flex flex-col">
                <div id="agenda-hari" className='mx-auto flex flex-row mt-10'>
                    <button type='submit' id="hari1" className='font-gill text-2xl font-bold w-32 bg-orange-default text-white flex place-content-center'>
                        Hari 1
                    </button>
                    <button type='submit' id="hari2" className='font-gill text-2xl font-bold w-32 bg-orange-light text-white flex place-content-center'>
                        Hari 2
                    </button>
                </div>
                <HariPertama/>
                <HariPertama/>
                <HariPertama/>
                <HariPertama/>
                <HariPertama/>
                <HariPertama/>
                <HariPertama/>
                <HariPertama/>
                <HariPertama/>
            </div>
        </>
    );
}
