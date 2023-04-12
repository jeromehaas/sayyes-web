import Page from "components//layouts/page/page";
import { Fragment } from "react";
import Gallery from "components//sections/gallery/gallery";
import queries from 'graphql/queries';
import client from "graphql/client";

const Collection = ({ data }) => {

    return (
        <Page>
            <Gallery data={ data.dresses } />
        </Page>
    );

};

export async function getServerSideProps() {

    const dresses = await client.query({ query: queries.GET_DRESSES() });

    return {
        props: {
            data: {
                dresses: dresses.data.dresses.data
            },
        },
    };
        

};


export default Collection;