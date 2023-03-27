import 'styles/main.scss';
import Page from 'components//layouts/page/page';

const App = ({ Component, pageProps }) => {

  return (
		<Page>
    	<Component {...pageProps} />
		</Page>
  );

};

export default App;
