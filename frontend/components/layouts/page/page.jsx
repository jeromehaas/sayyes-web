import DesktopNavigation from "components//blocks/desktop-navigation/desktop-navigation";

const Page = ({ children }) => {

	return (
		<div className="page">
			<DesktopNavigation />
			{ children }
		</div>
	)

};

export default Page;