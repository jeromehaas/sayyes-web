import 'styles/main.scss';
import ProtectedRoutes from 'utils/protected-routes';
import { AuthProvider } from 'contexts/auth/auth.jsx';
import PlausibleProvider from 'next-plausible';

const App = ({ Component, pageProps }) => {

	return (
		<PlausibleProvider domain="sayyes-bridal.ch">
			<AuthProvider>
				<ProtectedRoutes>
					<Component { ...pageProps } />
				</ProtectedRoutes>
			</AuthProvider>
		</PlausibleProvider>
	);

};

export default App;
