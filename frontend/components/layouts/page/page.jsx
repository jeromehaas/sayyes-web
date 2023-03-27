import DesktopNavigation from "components//blocks/desktop-navigation/desktop-navigation";
import Footer from "components//blocks/footer/footer";

const Page = ({ children }) => {

	return (
		<div className="page">
			<DesktopNavigation />
			{ children }
			<Footer />
		</div>
	)

};

export default Page;