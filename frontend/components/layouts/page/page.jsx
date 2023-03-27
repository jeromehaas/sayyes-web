import DesktopNavigation from "components//blocks/desktop-navigation/desktop-navigation";
import MobileNavigation from "components//blocks/mobile-navigation/mobile-navigation";
import Footer from "components//blocks/footer/footer";

const Page = ({ children }) => {

	return (
		<div className="page">
			<DesktopNavigation />
			<MobileNavigation />
			{ children }
			<Footer />
		</div>
	)

};

export default Page;