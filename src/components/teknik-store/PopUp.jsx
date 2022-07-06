export function PopUp({ item }) {
    return (
        <>
            <div className='flex flex-col top-0 bottom-0 left-0 right-0 overflow-hidden absolute w-screen h-screen m-0 p-0 bg-black justify-items-center place-content-center'>
                {item.name}
            </div>
        </>
    );
}
