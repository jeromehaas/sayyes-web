import Section from "components//layouts/section/section";
import Heading from "components//content/heading/heading";
import Paragraph from "components//content/paragraph/paragraph";

const BuyIntro = () => {

	return (
		<Section className="buy-intro">
			<Heading className="buy-intro__heading">Verkaufe dein Kleid</Heading>
			<div className="buy-intro__content text">
					<Paragraph className="text__item">Wenn du einem Brautkleid eine zweite Chance geben möchtest, bist du bei SayYes genau richtig. Wähle aus unserer Kollektion deinen Stil aus und wir werden dir dieses und weitere Kleider, welche deinen Wünschen entsprechen, zu deinem Anprobe-Termin nach Hause bringen.</Paragraph>
					<Paragraph className="text__item">Wir planen diesen besonderen Event gerne nach deinen Vorstellungen. Sei es mit dir alleine, im kleinen Familien- und Freundeskreis (Fun & Friends) oder wir zelebrieren die Anprobe gleich mit Champagner und feiner Mezze (Bubbles, Food & Friends).</Paragraph>
					<Paragraph className="text__item">Auf Wunsch kann die Anprobe auch gerne bei uns zu Hause, nähe Sursee, stattfinden.</Paragraph>
					<Paragraph className="text__item">Um dir deinen Anprobe-Termin zu sichern, bitten wir dich, das untenstehende Kontaktformular auszufüllen. Wir werden dich so bald wie möglich persönlich kontaktieren um die Details zu besprechen.</Paragraph>
					<Paragraph className="text__item">Eine Anprobe dauert ungefähr 2 Stunden. Der Preis variiert je nach Paket. Solltest du dich jedoch für ein Kleid von SayYes entscheiden, werden dir CHF 75.- zurückerstattet.</Paragraph>
			</div>
		</Section>
	);

};

export default BuyIntro;