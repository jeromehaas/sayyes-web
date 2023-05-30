import Section from 'components//layouts/section/section';
import Picture from 'components//content/picture/picture';
import Heading from 'components//content/heading/heading';

const Hero = () => {

	return (
		<Section className="hero">
			<div className="hero__teaser teaser">
				<Picture className="teaser__item" src="/images/general/general-01.webp" alt="Brautkleid" figure={ { form: 'up', position: 'center', borderColor: 'blue', backgroundColor: '', ordinate: '' } } />
				<Picture className="teaser__item" src="/images/general/general-01.webp" alt="Brautkleid" figure={ { form: 'sym', position: 'center', borderColor: 'blue', backgroundColor: 'blue', ordinate: '' } } />
				<Picture className="teaser__item" src="/images/general/general-02.webp" alt="Brautkleid" figure={ { form: 'sym', position: 'center', borderColor: '', backgroundColor: '', ordinate: '' } } />
				<Picture className="teaser__item" src="/images/general/general-06.webp" alt="Brautkleid" figure={ { form: 'down', position: 'bottom-left', borderColor: 'blue', backgroundColor: '', ordinate: '' } } />
			</div>
			<Heading className="hero__heading" level="h1">Nachhaltig. Schön. Einzigartig.</Heading>
			<Heading className="hero__subheading" level="h2">Schenke einem Brautkleid eine zweite Chance.</Heading>
		</Section>
	);

};

export default Hero;
