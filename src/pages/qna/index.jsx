import { GenericPage } from '../../components/GenericPage';
import { HtmlHead } from '../../components/HtmlHead';
import { PageTitle } from '../../components/PageTitle';
import { Question } from '../../components/QNA/Question';
import Questions from '../../resources/questions.json';

export function QNA() {
    return (
        <>
            <HtmlHead title='Pertanyaan Umum' decription='Yes' />
            <GenericPage>
                <PageTitle title='Pertanyaan Umum' />
                {Questions.map((item) => (
                    <Question item={item} />
                ))}
            </GenericPage>
        </>
    );
}
