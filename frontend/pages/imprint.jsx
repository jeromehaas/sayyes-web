import ImprintContent from 'components//sections/imprint-content/imprint-content';
import Page from 'components/layouts/page/page';

const Imprint = () => {

	return (
		<Page meta={ { title: 'Impressum', description: 'SayYes KLG • Blumenrainstrasse 1 • 6032 Emmen • yes@sayes-bridal.ch' } }>
			<ImprintContent />
		</Page>
	);

};

export default Imprint;
