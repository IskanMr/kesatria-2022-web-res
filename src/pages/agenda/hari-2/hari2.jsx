import Go from '../../../assets/icons/Agenda-go.svg';

export function HariKedua (jam, judul, deskripsi, go) {
    return(
        <div id="list-jadwal-hari1" className='pt-6'>
            <div className="group container w-full border-6 border-blue-default flex flex-row rounded-3xl hover:bg-blue-default cursor-pointer">
                <div className="flex flex-row py-6 flex-wrap">
                    <div className="w-32 h-14 my-auto flex place-content-center bg-blue-default text-white font-gill font-bold text-3xl py-2 rounded-2xl mx-9 sm:mx-6 group-hover:bg-orange-default">
                        00.00
                    </div>
                    <div className="sm:w-5/6 flex flex-col max-w-screen-xl ">
                        <div className='font-gill text-4xl font-bold text-blue-default group-hover:text-white ml-6'>
                            Upacara Pembukaan PPSMB Kesatria 2022
                        </div>
                        <div className='font-gill text-3xl text-judul text-blue-default group-hover:text-white ml-6'>
                            Kesatria Muda menyaksikan prolog sebelum melakukan moving dari area Tugu Teknik menuju Halaman Depan Smart Green Learning Center (SGLC).
                        </div>
                    </div>
                </div>
                <button type='submit' className='flex self-stretch w-21 justify-center my-6 bg-blue-default bg-opacity-20 mr-6 rounded-r-2xl px-7 py-4 group-hover:bg-orange-default flex-shrink-0 group-hover:bg-opacity-20 items-stretch duration-100'>
                        <img src={Go} alt="Go" className='h-full w-16' />
                </button>
            </div>
        </div>
    )
}
// flex self-stretch items-center justify-center w-16 -mr-7 -my-3 text-black bg-gray-lighter group-hover:bg-accent-blue group-hover:text-white transition-colors duration-100 rounded-r-lg ml-8 flex-shrink-0