import NextHead from "next/head";
import PropTypes from 'prop-types';

const Head = ({ meta }) => {

    return (
     <NextHead>
        <title>{`${ meta.title } | SAYYES`}</title>
        <meta name="description" content={ meta.description || "Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus facere repellat voluptatem natus doloremque a tenetur, numquam eligendi nulla velit inventore necessitatibus molestias dicta officia, eos autem corrupti asperiores possimus." } />
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
        <meta property="og:title" content={ meta.title } />
        <meta property="og:description" content={ meta.description } />
        <meta property="og:image" content={ meta.image } />
        <meta property="og:image:width" content="1920"/>
        <meta property="og:image:height" content="1080"/>
        <meta property="og:image:alt" content={ meta.description }/>
        <meta property="og:image:type" content="image/png"/>
        <meta property="og:type" content="image/png"/>
        <meta property="og:url" content="samirahaas.ch"/>
        <meta property="og:site_name" content={ meta.title } />
    </NextHead>
    );

};

Head.propTypes = {
    meta: PropTypes.object
};

Head.defaultProps = {
    meta: {
        title: 'Schenke einem Brautkleid eine zweite Chance.',
        description: '',
        image: '/images/general/general-01.webp',
    },
};

export default Head;