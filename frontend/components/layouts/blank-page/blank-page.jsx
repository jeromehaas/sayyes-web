import Head from "components/blocks/head/head";

const BlankPage = ({ children, meta }) => {

	return (
		<div className="blank-page">
			<Head meta={ meta } />
			{ children }
		</div>
	)

};

export default BlankPage;