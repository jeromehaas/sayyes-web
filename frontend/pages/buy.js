import Page from "components//layouts/page/page";
import Heading from "components//content/heading/heading";
import Paragraph from "components//content/paragraph/paragraph";
import { Fragment } from "react";
import BuyIntro from "components//sections/buy-intro/buy-intro";
import BuyForm from "components//sections/buy-form/buy-form";

const Buy = () => {

	return (
		<Page meta={{ title: 'Kaufen', description: 'Wenn du einem Brautkleid eine zweite Chance geben möchtest, bist du bei SayYes genau richtig. Wähle aus unserer Kollektion deinen Stil aus und wir werden dir dieses und weitere Kleider, welche deinen Wünschen entsprechen, zu deinem Anprobe-Termin nach Hause bringen.'  }}>
			<BuyIntro />
			<BuyForm />
		</Page>

	)

};

export default Buy;