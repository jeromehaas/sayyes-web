import Page from "components//layouts/page/page";
import { Fragment } from "react";
import Gallery from "components//sections/gallery/gallery";
import queries from 'graphql/queries';
import client from "graphql/client";

const Collection = ({ data }) => {

    return (
        <Page meta={{ title: "Kollektion", description: 'Bei der Auswahl unserer Brautkleider legen wir viel Wert auf hohe Qualität. Die Einzigartigkeit eines jeden Kleides steht dabei im Vordergrund. Von modernen und schlichten Ausführungen, über romantische Prinzessinen-Kleider bis hin zu extravaganten Couture-Modellen haben wir für jeden Geschmack etwas dabei.' }}>
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