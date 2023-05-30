import DesktopNavigation from 'components//blocks/desktop-navigation/desktop-navigation';
import MobileNavigation from 'components//blocks/mobile-navigation/mobile-navigation';
import Footer from 'components//blocks/footer/footer';
import IntroAnimation from 'components//blocks/intro-animation/intro-animation';
import Notifier from 'components/blocks/notifier/notifier';
import Head from 'components/blocks/head/head';

const Page = ({ children, meta }) => {

	return (
		<div className="page">
			<Head meta={ meta } />
			<DesktopNavigation />
			<MobileNavigation />
			<Notifier />
			{ children }
			<Footer />
			<IntroAnimation />
		</div>
	);

};

export default Page;
