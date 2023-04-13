import Page from "components/layouts/page/page";
import Hero from "components/sections/hero/hero";
import { Fragment } from "react";

const Start = ( ) => {

  return (
		<Page meta={{ title: 'Schenke einem Brautkleid eine zweite Chance', description: 'SayYes steht für Nachhaltigkeit und Schönheit. Unser oberstes Ziel ist es, dir den Kauf deines Brautkleides als unvergessliches Erlebnis zu gestalten. Mit viel Liebe zum Detail, einer ehrlichen und persönlichen Beratung in privatem Umfeld und unserem geschulten Blick, werden wir dich auf der Suche nach dem perfekten Brautkleid begleiten.'}}>
			<Hero />
		</Page>
  );

};

export default Start;
