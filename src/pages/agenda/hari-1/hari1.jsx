import Go from '../../../assets/icons/Agenda-go.svg';

function WantGoDay1(){
    return(
        <button type='submit' className='flex self-stretch w-21 justify-center my-6 bg-oranges-default bg-opacity-20 mr-6 rounded-r-2xl px-7 py-4 group-hover:bg- blue-default flex-shrink-0 group-hover:bg-opacity-20 items-stretch duration-100 '>
            <img src={Go} alt="Go" className='h-full w-16' />
        </button>
    )
}



export function HariPertama ({time, title, deskripsi, go}) {
    const buttonAll = "group container border-6 border-oranges-default block flex-row rounded-3xl w-1100 grow py-4";
    const titleAgenda = 'font-gill text-4xl font-bold text-oranges-default';
    const deskripsiAgenda = 'font-gill text-3xl text-judul text-oranges-default min-w-96';
    const timeAgenda= "w-32 h-14 my-auto flex place-content-center bg-oranges-default text-white font-gill font-bold text-3xl py-2 md:mt-4 rounded-2xl mx-9 agenda:mx-6 lg:my-9";
    const buttonGoAll = "group container border-6 border-oranges-default block flex-row rounded-3xl hover:bg-oranges-default w-1100 grow cursor-pointer py-4";
    const titleGoAgenda = 'font-gill text-4xl font-bold text-oranges-default group-hover:text-white';
    const deskripsiGoAgenda = 'font-gill text-3xl text-judul text-oranges-default group-hover:text-white min-w-96';
    const timeGoAgenda= "w-32 h-14 my-auto flex place-content-center bg-oranges-default text-white font-gill font-bold text-3xl py-2 md:mt-4 rounded-2xl mx-9 agenda:mx-6 group-hover:bg- blue-default lg:my-9";
    return(
        

        <div id="list-jadwal-hari2" className='mt-2 pt-5 mx-auto' style={{
            animation:
                'test-appear-up-anim 0.5s cubic-bezier(0, 1, 1, 1)',
        }}>
        <div className={go?buttonGoAll:buttonAll}>
            <div className="self-stretch flex flex-col md:flex-row items-start md:items-center mr-auto agenda:flex-wrap">
                <div className={go?timeGoAgenda:timeAgenda}>
                    {time}
                </div>
                <div className="container sm:w-5/6 flex flex-col agenda:w-full">
                    <div className={go?titleGoAgenda:titleAgenda}>
                       {title}
                    </div>
                    <div className={go?deskripsiGoAgenda:deskripsiAgenda}>
                       {deskripsi}
                    </div>
                </div>
            </div>
                {/* <WantGoDay2/> */}
                {
                    go? <WantGoDay1/> : null
                }
            </div>
        </div>
    )
}
// flex self-stretch items-center justify-center w-16 -mr-7 -my-3 text-black bg-gray-lighter group-hover:bg-accent-oranges group-hover:text-white transition-colors duration-100 rounded-r-lg ml-8 flex-shrink-0