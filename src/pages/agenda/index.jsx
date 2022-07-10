import { HtmlHead } from '../../components/HtmlHead';
import { PageTitle } from '../../components/PageTitle';

export function Agenda() {
    return (
        <>
            <HtmlHead title='Agenda' decription='Yes' />
            <PageTitle title="Agenda" />
            <div className="container mx-auto px-auto w-5/6 place-items-center flex flex-col">
                <div id="agenda-hari" className='mx-auto flex flex-row mt-10'>
                    <div id="hari1" className='w-32 bg-orange-default text-white flex place-content-center'>
                        Hari 1
                    </div>
                    <div id="hari2" className='w-32 bg-orange-light text-white flex place-content-center'>
                        Hari 2
                    </div>
                </div>
                <div id="list-jadwal-hari1">
                    box
                </div>
            </div>
        </>
    );
}
