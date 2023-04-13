import Section from "components//layouts/section/section"
import Heading from "components//content/heading/heading";
import Picture from "components//content/picture/picture";
import Paragraph from "components//content/paragraph/paragraph";

const SellIntro = () => {

    return (
        <Section className="sell-intro">
            <Heading className="sell-intro__heading" level="h1">Verkaufe dein Kleid</Heading>
            <div className="sell-intro__text text">
                <Paragraph className="text__item">Wir nehmen dein Brautkleid in unser Sortiment auf und werden es mit Freude an eine weitere glückliche Braut vermitteln.</Paragraph>
                <Paragraph className="text__item">Entscheidet sich eine Braut für dein Kleid, erhältst du 60% des Verkaufspreises, 40% gehen an SayYes. </Paragraph>
                <Paragraph className="text__item">Fülle die untenstehende Verkaufsanfrage aus. Nach der Beurteilung des Kleides, nehmen wir Kontakt mit dir auf, senden dir den Kommissionsvertrag zu und besprechen das weitere Vorgehen.</Paragraph>
                <Paragraph className="text__item">Bitte beachte, dass jedes Kleid vor dem Verkauf gereinigt sein muss.</Paragraph>
                <Paragraph className="text__item"></Paragraph>
            </div>
        </Section>
    );

};

export default SellIntro;


