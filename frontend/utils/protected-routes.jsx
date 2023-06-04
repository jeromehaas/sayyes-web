import { useEffect, useContext } from 'react';
import { useRouter } from 'next/router';
import { AuthContext } from 'contexts/auth/auth.jsx';

const ProtectedRoutes = ({ children }) => {

	// BRING IN AUTH-CONTEXT
	const { isAuthenticated, checkSession, isLoading, setIsLoading, getEnvironment } = useContext(AuthContext);

	// SETUP ROUTER
	const router = useRouter();

	// RETURN CHILDREN IF ENVIRONMENT IS PRODUCTION
	const environment = getEnvironment();
	const currentPath = router.pathname;

	// ON FIRST RENDER CHECK SESSION TOKEN
	useEffect(() => {
		checkSession();
		setIsLoading(false);
	}, [currentPath]);

	// AFTER LOADING IF USER IS NOT AUTHENTICATED REDIRECT TO LOGIN
	useEffect(() => {
		if (!isLoading && !isAuthenticated && environment !== 'production' && currentPath !== '/login') {
			router.push('/login');
		};
	}, [isAuthenticated, isLoading]);

	// IF USER IS ON PRODUCTION ENVIRONMENT ON LOGIN PAGE REDIRECT TO START
	useEffect(() => {
		if (!isLoading && environment === 'production' && currentPath === '/login') {
			router.push('/');
		};
	}, [isAuthenticated, isLoading]);

	// AFTER LOADING IF USER IS AUTHENTICATED AND ON LOGIN PAGE REDIRECT TO START
	useEffect(() => {
		if (!isLoading && isAuthenticated && environment !== 'production' && currentPath === '/login') {
			router.push('/');
		};
	}, [isAuthenticated, isLoading]);

	// IF USER IS ON PRODUCTION ENVIRONMENT SHOW CONTENT
	if (environment === 'production' && !isLoading) {
		return children;
	};

	// IF USER IS AUTHENTICATED SHOW CONTENT
	if (isAuthenticated && !isLoading) {
		return children;
	};

	// IF USER IS ON LOGIN PAGE SHOW CONTENT
	if (currentPath === '/login') {
		return children;
	};

	// IF USER IS AUTHENTICATED SHOW CONTENT
	if (isAuthenticated && !isLoading) {
		return children;
	};

	// IF USER IS NOT AUTHENTICATED OR PAGE IS LOADING DONT SHOW CONTENT
	if (isLoading || !isAuthenticated) {
		return null;
	};

};

export default ProtectedRoutes;
