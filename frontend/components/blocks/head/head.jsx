import NextHead from 'next/head';
import Script from 'next/script';
import PropTypes from 'prop-types';

const Head = ({ meta }) => {

	return (
		<NextHead>
			<title>{`${ meta.title } | SayYes`}</title>
			<meta name="description" content={ meta.description || '' } />
			<meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0" />
			<link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
			<meta property="og:title" content={ meta.title } />
			<meta property="og:description" content={ meta.description } />
			<meta property="og:image" content={ meta.image } />
			<meta property="og:image:width" content="1920" />
			<meta property="og:image:height" content="1080" />
			<meta property="og:image:alt" content={ meta.description } />
			<meta property="og:image:type" content="image/png" />
			<meta property="og:type" content="image/png" />
			<meta property="og:url" content="samirahaas.ch" />
			<meta property="og:site_name" content={ meta.title } />
			<Script defer data-domain="sayyes-bridal.ch" src="https://plausible.io/js/script.js" />
		</NextHead>
	);

};

Head.propTypes = {
	meta: PropTypes.shape({
		title: PropTypes.string,
		description: PropTypes.string,
		image: PropTypes.string,
	}) };

Head.defaultProps = {
	meta: {
		title: 'Schenke einem Brautkleid eine zweite Chance.',
		description: '',
		image: '/images/general/general-01.webp',
	},
};

export default Head;
