import Section from "components//layouts/section/section";
import Heading from "components//content/heading/heading";
import Paragraph from "components//content/paragraph/paragraph";

const DataPrivacyContent = () => {

    return (
        <Section className="data-privacy-content">
            <Heading className="data-privacy-content__heading">Datenschutz</Heading>
            <div className="data-privacy-content__content content">
                <div className="content__item item">
                    <Heading className="item__heading" level="h4">1. Erhebung, Verarbeitung und Nutzung personenbezogener Daten</Heading>
                    <Paragraph className="item__text">Bei einem Besuch dieser Website erheben wir keine personenbezogenen Daten von Ihnen. Personenbezogene Daten werden nur erhoben, wenn Sie uns diese selbst über unser Kontaktformular mitteilen. Diese Daten werden ausschliesslich zur Beantwortung Ihres Anliegens genutzt und danach wieder gelöscht.</Paragraph>
                </div>
                <div className="content__item item">
                    <Heading className="item__heading" level="h4">2. Verwendung von eigenen Cookies</Heading>
                    <Paragraph className="item__text">Beim Aufruf bestimmter Seiten wird ein so genanntes «Session-Cookie» gesetzt. Hierbei handelt es sich um eine kleine Textdatei, welche ausschliesslich dazu dient, bestimmte Applikationen nutzen zu können. Sie können bei den meisten Webbrowsern die Einstellungen so ändern, dass Ihr Browser neue Cookies nicht akzeptiert oder Sie können erhaltene Cookies jederzeit von Ihrem Computer löschen lassen.</Paragraph>
                </div>
                <div className="content__item item">
                    <Heading className="item__heading" level="h4">3. Server-Log-Dateien</Heading>
                    <Paragraph className="item__text">Wie bei jeder Verbindung mit einem Webserver protokolliert und speichert der Server unseres Webhosting-Anbieters Hostpoint in 8640 Rapperswil-Jona, Schweiz, bestimmte technische Daten. Zu diesen Daten gehören die IP-Adresse und das Betriebssystem Ihres Geräts, die Daten, die Zugriffszeit, die Art des Browsers sowie die Browser-Anfrage inklusive der Herkunft der Anfrage (Referrer). Dies ist aus technischen Gründen erforderlich, um Ihnen unsere Website zur Verfügung zu stellen. Der Webhosting-Anbieter schützt diese Daten mit technischen und organisatorischen Massnahmen vor unerlaubten Zugriffen und gibt sie nicht an Dritte weiter. Soweit wir dabei personenbezogene Daten verarbeiten, tun wir dies aufgrund unseres Interesses, Ihnen die bestmögliche Nutzererfahrung zu bieten und die Sicherheit und Stabilität unserer Systeme zu gewährleisten.</Paragraph>
                </div>
                <div className="content__item item">
                    <Heading className="item__heading" level="h4">4. Dritt-Anbieter</Heading>
                    <Paragraph className="item__text">Wir weisen Sie darauf hin, dass wir bei Links und Inhalte Dritter die auf unserer Webseite auftauchen können, keinen Einfluss auf die Datenschutzbestimmungen Dritter haben und diese nicht garantieren können.</Paragraph>
                </div>
                <div className="content__item item">
                    <Heading className="item__heading" level="h4">5. Google Analytics</Heading>
                    <Paragraph className="item__text">Diese Website nutzt Google Analytics, einen Webanalysedienst der Google Inc., 1600 Amphitheatre Parkway, Mountain View, CA 94043, USA. Google Analytics verwendet sog. «Cookies», d.h. Textdateien, die auf Ihrem Computer gespeichert werden und die eine Analyse der Benutzung der Website durch Sie ermöglichen.Google nutzt diese Informationen, um im Auftrag des Betreibers dieser Website Ihre Nutzung der Website auszuwerten, um Reports über die Websiteaktivitäten zusammenzustellen und um weitere mit der Websitenutzung und der Internetnutzung verbundene Dienstleistungen gegenüber dem Websitebetreiber zu erbringen. Die im Rahmen von Google Analytics von Ihrem Browser übermittelte IP-Adresse wird nicht mit anderen Daten von Google zusammengeführt.Durch eine entsprechende Einstellung in Ihrem Browser können Sie die Speicherung der Cookies verhindern oder wieder löschen.</Paragraph>
                </div>
                <div className="content__item item">
                    <Heading className="item__heading" level="h4">6. Ihre Rechte</Heading>
                    <Paragraph className="item__text">Ihnen stehen grundsätzlich die Rechte auf Auskunft, Berichtigung, Löschung, Einschränkung, Datenübertragbarkeit, Widerruf und Widerspruch zu. Wenn Sie glauben, dass die Verarbeitung Ihrer Daten gegen das Datenschutzrecht verstösst oder Ihre datenschutzrechtlichen Ansprüche sonst in einer Weise verletzt worden sind, können Sie sich bei der Aufsichtsbehörde beschweren.</Paragraph>
                </div>
                <div className="content__item item">
                    <Heading className="item__heading" level="h4">7. Urheberrechte</Heading>
                    <Paragraph className="item__text">Alle Inhalte auf sayyes-bridal.ch sind urheberechtlich geschützt, und gehören einzig und allein der SayYes KLG oder den ausdrücklich genannten Rechtsinhabern. Für eine Verwendung jeglicher Art von Inhalten auf sayyes-bridal.ch ist schriftlich im Voraus eine Zustimmung einzuholen.</Paragraph>
                    <Paragraph className="item__text">Datenschutzerklärung vom April 2023</Paragraph>
                </div>
                <div className="content__item item">
                    <Paragraph className="item__text">Sie erreichen uns unter folgenden Kontaktdaten:</Paragraph>
                    <Paragraph className="item__text">SayYes KLG</Paragraph>
                    <Paragraph className="item__text">Blumenrainstrasse 1</Paragraph>
                    <Paragraph className="item__text">6032 Emmen</Paragraph>
                    <Paragraph className="item__text">yes@sayyes-bridal.ch</Paragraph>
                </div>
                <div className="content__item item">
                    <Heading className="item__heading" level="h4"></Heading>
                    <Paragraph className="item__text"> </Paragraph>
                </div>

            </div>

        </Section>
    )

};

export default DataPrivacyContent;