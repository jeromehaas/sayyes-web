import DataPrivacyContent from "components//sections/data-privacy-content/data-privacy-content";
import Page from "components/layouts/page/page";
import { Fragment } from "react";

const DataPrivacy = () => {

    return (
        <Page meta={{ title: 'Datenschutz', description: 'Bei einem Besuch dieser Website erheben wir keine personenbezogenen Daten von Ihnen. Personenbezogene Daten werden nur erhoben, wenn Sie uns diese selbst über unser Kontaktformular mitteilen.' }}>
            <DataPrivacyContent />
        </Page>
    );

};

export default DataPrivacy;

