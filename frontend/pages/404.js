 import BlankPage from "components/layouts/blank-page/blank-page";
import Error from "components/sections/error/error";

const PageNotFound = () => {

    return (
        <BlankPage meta={{ title: '404' }}>
            <Error />
        </BlankPage>
    )

};

export default PageNotFound;