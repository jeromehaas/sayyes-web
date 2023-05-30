import Page from 'components/layouts/page/page';
import { Fragment } from 'react';
import SellIntro from 'components//sections/sell-intro/sell-intro';
import SellForm from 'components//sections/sell-form/sell-form';

const Sell = () => {

	return (
		<Page meta={ { title: 'Verkaufen', description: 'Wir nehmen dein Brautkleid in unser Sortiment auf und werden es mit Freude an eine weitere glückliche Braut vermitteln. Entscheidet sich eine Braut für dein Kleid, erhältst du 60% des Verkaufspreises, 40% gehen an SayYes.' } }>
			<SellIntro />
			<SellForm />
		</Page>
	);

};

export default Sell;
