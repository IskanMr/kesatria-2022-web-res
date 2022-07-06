import { HtmlHead } from '../../components/HtmlHead';
import { GenericPage, PageTitle } from '../../components/GenericPage';
import { ItemCard } from '../../components/teknik-store/ItemCard';

import StoreData from '../../resources/store-items.json';

export function TeknikStore() {
    return (
        <>
            <HtmlHead title='Teknik Store' decription='Yes' />
            <GenericPage>
                <PageTitle text='Teknik Store' />
                <div className='flex flex-wrap w-100 justify-items-center overflow-hidden place-content-center'>
                    {StoreData.map((item) => (
                        <ItemCard item={item} size={item.size} />
                    ))}
                </div>
            </GenericPage>
        </>
    );
}
