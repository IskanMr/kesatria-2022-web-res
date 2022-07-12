import { GenericPage } from '../../components/GenericPage';
import { HtmlHead } from '../../components/HtmlHead';
import { SearchBar } from '../../components/QNA/SearchBar';
import { PageTitle } from '../../components/PageTitle';

export function QNA() {
    return (
        <>
            <HtmlHead title='QNA' decription='Yes' />
            <GenericPage>
                <PageTitle title='QNA' />
                <SearchBar />
            </GenericPage>
        </>
    );
}
