import Page from "components/layouts/page/page";
import { Fragment } from "react";
import SellIntro from "components//sections/sell-intro/sell-intro";
import SellForm from "components//sections/sell-form/sell-form";

const Sell = () => {

    return (
        <Page>
            <SellIntro />
            <SellForm />
        </Page>
    );

};

export default Sell;