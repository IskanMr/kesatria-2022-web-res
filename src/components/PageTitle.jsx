export function PageTitle({title}){
    return(
        <div className="flex place-content-center">
            <div className="font-samarkan text-7xl place-content-center z-10 absolute flex" >
                {title}
            </div>
            <div id="pagetitle" className="font-samarkan text-7xl place-content-center text-white z-0 relative flex ml-2" >
                {title}
            </div>
        </div>
    )
}