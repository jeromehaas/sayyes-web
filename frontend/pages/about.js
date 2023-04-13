import Page from "components//layouts/page/page";
import AboutIntro from "components//sections/about-intro/about-intro";
import { Fragment } from "react";

const About = () => {

    return  (
        <Page meta={{ title: 'About', description: 'SayYes steht für Nachhaltigkeit und Schönheit. Unser oberstes Ziel ist es, dir den Kauf deines Brautkleides als unvergessliches Erlebnis zu gestalten.' }}>
            <AboutIntro />
        </Page>
    );

};

export default About;