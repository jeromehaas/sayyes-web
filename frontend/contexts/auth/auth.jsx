import { sha256 } from 'js-sha256';
import { createContext, useEffect, useMemo, useState } from 'react';
import Cookies from 'js-cookie';

const AuthContext = createContext();

const AuthProvider = ({ children }) => {

	// SETUP STATE
	const [isAuthenticated, setIsAuthenticated] = useState(false);
	const [isLoading, setIsLoading] = useState(true);

	// SETUP ROUTER

	const storeToken = () => {
		const developerLoginCode = process.env.NEXT_PUBLIC_DEVELOPER_LOGIN_CODE;
		const token = sha256(developerLoginCode);
		Cookies.set('token', token);
	};

	// LOGIN WITH TOKEN
	const loginWithToken = async () => {
		storeToken();
		setIsAuthenticated(true);
	};

	// LOGIN WITH SESSION
	const loginWithSession = () => {
		setIsAuthenticated(true);
	};

	// DESTROY SESSION
	const destroySession = () => {
		setIsAuthenticated(false);
	};

	// CHECK LOGIN CODE
	const checkLoginCode = (code) => {
		if (code === process.env.NEXT_PUBLIC_DEVELOPER_LOGIN_CODE) loginWithToken();
		if (code !== process.env.NEXT_PUBLIC_DEVELOPER_LOGIN_CODE) destroySession();
	};

	// CHECK SESSION
	const checkSession = () => {
		const token = Cookies.get('token');
		if (token === sha256(process.env.NEXT_PUBLIC_DEVELOPER_LOGIN_CODE)) loginWithSession();
		if (token !== sha256(process.env.NEXT_PUBLIC_DEVELOPER_LOGIN_CODE)) destroySession();
	};

	// GET ENVORONMENT
	const getEnvironment = () => {
		return process.env.NEXT_PUBLIC_ENVIRONMENT;
	};

	// MEMOIZE VALUE
	const value = useMemo(() => { return { isAuthenticated, isLoading, setIsLoading, loginWithToken, loginWithSession, checkSession, checkLoginCode, getEnvironment, destroySession }; }, [isAuthenticated, isLoading]);

	// RETURN PROVIDER
	return (
		<AuthContext.Provider value={ value }>
			{ children }
		</AuthContext.Provider>
	);

};

export {
	AuthContext,
	AuthProvider,
};
