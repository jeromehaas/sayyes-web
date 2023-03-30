import Page from "components//layouts/page/page";
import Heading from "components//content/heading/heading";
import Paragraph from "components//content/paragraph/paragraph";
import { Fragment } from "react";
import BuyIntro from "components//sections/buy-intro/buy-intro";
import BuyForm from "components//sections/buy-form/buy-form";

const Buy = () => {

	return (
		<Fragment>
			<BuyIntro />
			<BuyForm />
		</Fragment>

	)

};

export default Buy;