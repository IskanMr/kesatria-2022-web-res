import { GenericPage, PageTitle } from '../../components/GenericPage';
import { HtmlHead } from '../../components/HtmlHead';
import { SearchBar } from '../../components/QNA/SearchBar';

export function QNA() {
    return (
        <>
            <HtmlHead title='QNA' decription='Yes' />
            <GenericPage>
                <PageTitle text='QNA' />
                <SearchBar />
            </GenericPage>
        </>
    );
}
