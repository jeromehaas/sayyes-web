import FaqContent from "components/sections/faq-content/faq-content";
import Page from "components/layouts/page/page";

const Faq = () => {

    return (
        <Page meta={{ title: 'FAQ'}}>
            <FaqContent />
        </Page>
    );

};

export default Faq;

