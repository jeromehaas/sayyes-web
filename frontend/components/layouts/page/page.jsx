import DesktopNavigation from "components//blocks/desktop-navigation/desktop-navigation";
import MobileNavigation from "components//blocks/mobile-navigation/mobile-navigation";
import Footer from "components//blocks/footer/footer";
import IntroAnimation from "components//blocks/intro-animation/intro-animation";
import Notifier from "components/blocks/notifier/notifier";

const Page = ({ children }) => {

	return (
		<div className="page">
			<DesktopNavigation />
			<MobileNavigation />
			<Notifier />
			{ children }
			<Footer />
			<IntroAnimation />
		</div>
	)

};

export default Page;