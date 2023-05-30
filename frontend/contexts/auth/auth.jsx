import { createContext, useMemo, useState } from 'react';

const AuthContext = createContext();

const AuthProvider = ({ children }) => {

	const [isAuthenticated, setIsAuthenticated] = useState(false);

	const value = useMemo(() => { return { isAuthenticated, setIsAuthenticated }; }, [isAuthenticated]);

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
