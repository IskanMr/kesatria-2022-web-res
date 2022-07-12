import { HtmlHead } from '../../components/HtmlHead';
import { GenericPage } from '../../components/GenericPage';
import { ItemCard } from '../../components/teknik-store/ItemCard';
import { PageTitle } from '../../components/PageTitle';

import StoreData from '../../resources/store-items.json';

export function TeknikStore() {
    return (
        <>
            <HtmlHead title='Teknik Store' decription='Yes' />
            <GenericPage>
                <PageTitle title='Teknik Store' />
                <div className='flex flex-wrap w-100 justify-items-center overflow-hidden place-content-center md:px-[256px]'>
                    {StoreData.map((item) => (
                        <ItemCard item={item} />
                    ))}
                </div>
            </GenericPage>
        </>
    );
}
