import Section from "components//layouts/section/section";
import Heading from "components//content/heading/heading";
import Paragraph from "components//content/paragraph/paragraph";
import Link from "next/link";

const ImprintContent = () => {

    return (
        <Section className="imprint-content">
            <Heading className="imprint-content__heading">Impressum</Heading>
            <div className="imprint-content__content content">
                <div className="content__item item">
                    <Heading className="item__heading" level="h4">Verantwortlich für Konzeption, Inhalte und Redaktion:</Heading>
                    <Paragraph className="item__text">SayYes KLG</Paragraph>
                    <Paragraph className="item__text">Blumenrainstrasse 1</Paragraph>
                    <Paragraph className="item__text">6032 Emmen</Paragraph>
                    <Link className="item__link" href="mailto:yes@sayyes-bridal.ch"><Paragraph className="item__text">yes@sayyes-bridal.ch</Paragraph></Link>
                </div>
                <div className="content__item item">
                    <Heading className="item__heading" level="h4">Haftungsausschluss</Heading>
                    <Paragraph className="item__text">Der Autor übernimmt keinerlei Gewähr hinsichtlich der inhaltlichen Richtigkeit, Genauigkeit, Aktualität, Zuverlässigkeit und Vollständigkeit der Informationen. Haftungsansprüche gegen den Autor wegen Schäden materieller oder immaterieller Art, welche aus dem Zugriff oder der Nutzung bzw. Nichtnutzung der veröffentlichten Informationen, durch Missbrauch der Verbindung oder durch technische Störungen entstanden sind, werden ausgeschlossen. Alle Angebote sind unverbindlich. Der Autor behält es sich ausdrücklich vor, Teile der Seiten oder das gesamte Angebot ohne gesonderte Ankündigung zu verändern, zu ergänzen, zu löschen oder die Veröffentlichung zeitweise oder endgültig einzustellen.</Paragraph>
                </div>
                <div className="content__item item">
                    <Heading className="item__heading" level="h4">Haftung für Links</Heading>
                    <Paragraph className="item__text">Verweise und Links auf Webseiten Dritter liegen ausserhalb unseres Verantwortungs-bereichs Es wird jegliche Verantwortung für solche Webseiten abgelehnt. Der Zugriff und die Nutzung solcher Webseiten erfolgen auf eigene Gefahr des Nutzers oder der Nutzerin.</Paragraph>
                </div>
                <div className="content__item item">
                    <Heading className="item__heading" level="h4">Urheberrechte</Heading>
                    <Paragraph className="item__text">Die Urheber- und alle anderen Rechte an Inhalten, Bildern, Fotos oder anderen Dateien auf der Website gehören ausschliesslich der oben genannten Firma/Person oder den speziell genannten Rechtsinhabern. Für die Reproduktion jeglicher Elemente ist die schriftliche Zustimmung der Urheberrechtsträger im Voraus einzuholen.</Paragraph>
                </div>

            </div>

        </Section>
    )

};

export default ImprintContent;