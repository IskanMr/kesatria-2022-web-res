import Go from '../../../assets/icons/Agenda-go.svg';

function WantGoDay1(){
    return(
        <button type='submit' className='flex self-stretch w-21 justify-center my-6 bg-blue-default bg-opacity-20 mr-6 rounded-r-2xl px-7 py-4 group-hover:bg-oranges-default flex-shrink-0 group-hover:bg-opacity-20 items-stretch duration-100 '>
            <img src={Go} alt="Go" className='h-full w-16' />
        </button>
    )
}



export function HariPertama ({time, title, deskripsi, go}) {
    return(
        <div id="list-jadwal-hari1" className='mt-2 pt-5 mx-auto' style={{
            animation:
                'test-appear-up-anim 0.5s cubic-bezier(0, 1, 1, 1)',
        }}>
            <div className="group container border-6 border-oranges-default block flex-row rounded-3xl hover:bg-oranges-default w-1100 grow cursor-pointer ">
                <div className="self-stretch flex flex-col md:flex-row items-start md:items-center mr-auto md:flex-wrap">
                    <div className="w-32 h-14 my-auto flex place-content-center bg-oranges-default text-white font-gill font-bold text-3xl py-2 md:mt-4 rounded-2xl mx-9 sm:mx-6 group-hover:bg-blue-default lg:my-9">
                        {time}
                    </div>
                    <div className="container sm:w-5/6 flex flex-col">
                        <div className='font-gill text-4xl font-bold text-oranges-default group-hover:text-white ml-6'>
                           {title}
                        </div>
                        <div className='font-gill text-3xl text-judul text-oranges-default group-hover:text-white ml-6 min-w-96'>
                           {deskripsi}
                        </div>
                    </div>
                </div>
                {/* <WantGoDay1/> */}
                {
                    go? <WantGoDay1/> : null
                }
            </div>
        </div>
    )
}
// flex self-stretch items-center justify-center w-16 -mr-7 -my-3 text-black bg-gray-lighter group-hover:bg-accent-blue group-hover:text-white transition-colors duration-100 rounded-r-lg ml-8 flex-shrink-0