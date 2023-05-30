import Section from 'components//layouts/section/section';
import Heading from 'components//content/heading/heading';
import Paragraph from 'components//content/paragraph/paragraph';

const FaqContent = () => {

	return (
		<Section className="faq-content">
			<Heading className="faq-content__heading">FAQs</Heading>
			<div className="faq-content__content content">
				<div className="content__item item">
					<Heading className="item__heading" level="h4">1. Wie vereinbare ich einen Termin?</Heading>
					<Paragraph className="item__text">Fülle das Kontaktformular aus oder sende uns direkt eine Email an yes@sayyes-bridal.ch  Wir werden dich anschliessend kontaktieren.</Paragraph>
				</div>
				<div className="content__item item">
					<Heading className="item__heading" level="h4">2. Wie lange dauert ein Anprobetermin?</Heading>
					<Paragraph className="item__text">Wir planen für die Anprobe ca. 2 Stunden ein.</Paragraph>
				</div>
				<div className="content__item item">
					<Heading className="item__heading" level="h4">3. Wie viel kostet die Beratung?</Heading>
					<Paragraph className="item__text">Unsere Beratungskosten sind CHF 75.00. Darin enthalten ist auch unser Anfahrtsweg zu dir nach Hause.</Paragraph>
				</div>
				<div className="content__item item">
					<Heading className="item__heading" level="h4">4. Was soll ich zum Termin tragen?</Heading>
					<Paragraph className="item__text">Wir empfehlen dir, nudefarbene oder helle Unterwäsche zu tragen. Um unsere Hochzeitskleider bestmöglich vor Verfärbungen zu schützen, bitten wir dich, wenig Make-up zu verwenden.</Paragraph>
				</div>
				<div className="content__item item">
					<Heading className="item__heading" level="h4">5. Wie viele Gäste darf ich bei mir haben?</Heading>
					<Paragraph className="item__text">Diese Entscheidung überlassen wir dir. Aber denke daran, dass viele Gäste auch viele unterschiedliche Meinungen bedeuten und dich somit auch verunsichern können.</Paragraph>
				</div>
				<div className="content__item item">
					<Heading className="item__heading" level="h4">6. In welcher Preislage befinden sich die Brautkleider?</Heading>
					<Paragraph className="item__text">Die Preise unserer Hochzeitskleider bewegen sich zwischen CHF 300.- und CHF 6000.-. Der Preis wird jeweils von der Verkäuferin bestimmt.</Paragraph>
				</div>
				<div className="content__item item">
					<Heading className="item__heading" level="h4">7. Welche Kleidergrössen sind erhältlich?</Heading>
					<Paragraph className="item__text">Wir bieten Kleider in den Grössen von 34 bis 42 an.</Paragraph>
				</div>
				<div className="content__item item">
					<Heading className="item__heading" level="h4">8. Wie schnell erhalte ich mein Kleid?</Heading>
					<Paragraph className="item__text">Der Vorteil von Secondhand-Kleidern ist, dass sie nicht mehr bestellt werden müssen. Du darfst dein Kleid direkt behalten.</Paragraph>
				</div>
				<div className="content__item item">
					<Heading className="item__heading" level="h4">9. Wer nimmt die Anpassungen an meinem Kleid vor?</Heading>
					<Paragraph className="item__text">Am besten suchst du dir eine professionelle Schneiderin in deiner Nähe. Gerne können wir dich dabei unterstützen.</Paragraph>
				</div>
				<div className="content__item item">
					<Heading className="item__heading" level="h4">10. Sind die Anpassungen an meinem Kleid im Preis inbegriffen?</Heading>
					<Paragraph className="item__text">Änderungen sind im Kaufpreis nicht inbegriffen.</Paragraph>
				</div>
				<div className="content__item item">
					<Heading className="item__heading" level="h4">11. Wann ist die Zahlung fällig?</Heading>
					<Paragraph className="item__text">Wir verlangen eine erste Rate über 60% beim Kauf. Die übrigen 40% sind innert 20 Tagen zu überweisen.</Paragraph>
				</div>
				<div className="content__item item">
					<Heading className="item__heading" level="h4">12. Welche Zahlungsmöglichkeiten werden angeboten?</Heading>
					<Paragraph className="item__text">Wir akzeptieren Bargeld, EC-Karte, Kreditkarte, Debitkarte und Twint.</Paragraph>
				</div>
				<div className="content__item item">
					<Heading className="item__heading" level="h4">13. Habe ich ein Rückgaberecht?</Heading>
					<Paragraph className="item__text">Bei guter Begründung darfst du das Kleid bis zu einer Woche nach Kauf retournieren. Die Versandkosten müssen jedoch von dir übernommen werden.</Paragraph>
				</div>
			</div>
		</Section>
	);

};

export default FaqContent;
