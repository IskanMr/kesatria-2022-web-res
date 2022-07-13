import { HtmlHead } from '../../components/HtmlHead';
import { PageTitle } from '../../components/PageTitle';
import Go from '../../assets/icons/go.svg';

export function Agenda() {
    return (
        <>
            <HtmlHead title='Agenda' decription='Yes' />
            <PageTitle title="Agenda" />
            <div className="container mx-auto px-auto w-5/6 place-items-center flex flex-col">
                <div id="agenda-hari" className='mx-auto flex flex-row mt-10'>
                    <div id="hari1" className='font-gill text-2xl font-bold w-32 bg-orange-default text-white flex place-content-center'>
                        Hari 1
                    </div>
                    <div id="hari2" className='font-gill text-2xl font-bold w-32 bg-orange-light text-white flex place-content-center'>
                        Hari 2
                    </div>
                </div>
                <div id="list-jadwal-hari1" className='pt-10'>
                    <div className="container w-full border-4 border-orange-default flex flex-row rounded-3xl ">
                        <div className="flex flex-row py-6 flex-wrap">
                            <div className="w-32 h-14 my-auto flex place-content-center bg-blue-default text-white font-gill font-bold text-3xl py-2 rounded-2xl mx-9">
                                00.00
                            </div>
                            <div className="sm:w-5/6 flex flex-col max-w-screen-xl">
                                <div className='font-gill text-4xl text-judul font-bold'>
                                    Upacara Pembukaan PPSMB Kesatria 2022
                                </div>
                                <div className='font-gill text-3xl text-judul'>
                                    Kesatria Muda menyaksikan prolog sebelum melakukan moving dari area Tugu Teknik menuju Halaman Depan Smart Green Learning Center (SGLC).
                                </div>
                            </div>
                        </div>
                        <div className='w-21 h-full my-auto mx-auto'>
                                <img src={Go} alt="Go" className='h-full w-16' />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
