import Section from "components//layouts/section/section";
import Heading from "components//content/heading/heading";
import Paragraph from "components//content/paragraph/paragraph";
import Picture from "components//content/picture/picture";

const AboutIntro = () => {

    return (
        <Section className="about-intro">
            <Heading className="about-intro__heading">About</Heading>
            <div className="about-intro__pictures pictures">
				<Picture  className="pictures__item" src="/images/general/general-07.webp" alt="Ramona und Serena" figure={{ form: "sym", position: 'top-right', borderColor: 'blue', backgroundColor: 'blue', ordinate: 'back' }}	 />
				<Picture  className="pictures__item" src="/images/general/general-08.webp" alt="Ramona und Serena" figure={{ form: "sym", position: 'bottom-left', borderColor: 'blue', backgroundColor: '' }}	 />
            </div>
            <div className="about-intro__text text">
                <Paragraph className="text__item">SayYes steht für Nachhaltigkeit und Schönheit. Unser oberstes Ziel ist es, dir den Kauf deines Brautkleides als unvergessliches Erlebnis zu gestalten. Mit viel Liebe zum Detail, einer ehrlichen und persönlichen Beratung in privatem Umfeld und unserem geschulten Blick, werden wir dich auf der Suche nach dem perfekten Brautkleid begleiten. Wir sind Serena und Ramona, Freundinnen seit vielen Jahren und verbunden durch die Liebe zur Mode, Design und dem Besonderen. Mit SayYes möchten wir das Konsum- verhalten in der Brautmodeindustrie nachhaltig verändern und legen hier den Fokus vermehrt auf Kleider von namhaften Designern. Du wirst also auch das eine oder andere Haute Couture Kleid in unserer Kollektion finden.</Paragraph>
                <Paragraph className="text__item">Wir sind Serena und Ramona, Freundinnen seit vielen Jahren und verbunden durch die Liebe zur Mode, Design und dem Besonderen. Mit SayYes möchten wir das Konsum- verhalten in der Brautmodeindustrie nachhaltig verändern und legen hier den Fokus vermehrt auf Kleider von namhaften Designern. Du wirst also auch das eine oder andere Haute Couture Kleid in unserer Kollektion finden.</Paragraph>
                <Heading className="text__item text__item--center" level="h4">Say Yes und gib einem Kleid eine zweite Chance.</Heading>
            </div>
        </Section> 
    );

};

export default AboutIntro;