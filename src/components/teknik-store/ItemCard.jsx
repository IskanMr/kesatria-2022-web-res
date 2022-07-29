export function ItemCard({ item }) {
    return (
        <>
            <div className='m-3 md:m-4 h-[156px] w-[156px] md:h-[244px] md:w-[244px] rounded-3xl drop-shadow-blue overflow-hidden'>
                <img
                    src={`${process.env.PUBLIC_URL}/assets/img/store/${item.imgs[0]}.png`}
                    className='w-full h-full transition ease-in-out duration-300 hover:scale-[1.1] bg-contain bg-center rounded-3xl'
                    alt={item.imgs[0]}
                    loading='lazy'
                />
            </div>
        </>
    );
}
