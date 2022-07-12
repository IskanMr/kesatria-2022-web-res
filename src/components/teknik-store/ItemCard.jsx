export function ItemCard({ item }) {
    return (
        <>
            <img
                src={`${process.env.PUBLIC_URL}/assets/img/store/${item.img}.png`}
                className='m-3 md:m-4 h-[156px] w-[156px] md:h-[244px] md:w-[244px] bg-cover bg-center rounded-3xl drop-shadow-blue'
                alt={item.img}
            />
        </>
    );
}
