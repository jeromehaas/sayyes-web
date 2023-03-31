import DesktopNavigation from "components//blocks/desktop-navigation/desktop-navigation";
import MobileNavigation from "components//blocks/mobile-navigation/mobile-navigation";
import Footer from "components//blocks/footer/footer";
import IntroAnimation from "components//blocks/intro-animation/intro-animation";

const Page = ({ children }) => {

	return (
		<div className="page">
			<DesktopNavigation />
			<MobileNavigation />
			{ children }
			<Footer />
			<IntroAnimation />
		</div>
	)

};

export default Page;