import { useState, useEffect, useContext } from 'react';
import { useRouter } from 'next/router';
import { getCookie } from 'cookies-next';
import { sha256 } from 'js-sha256';
import { AuthContext } from 'contexts/auth/auth';

const ProtectedRoutes = ({ children }) => {

    // BRING IN AUTH-CONTEXT
    const { isAuthenticated, setIsAuthenticated } = useContext(AuthContext);

    // SETUP ROUTER
    const router = useRouter();

    // CHECK TOKEN 
    const checkToken = (token) => {
        return token === sha256(process.env.NEXT_PUBLIC_DEVELOPER_LOGIN_CODE) ? true : false; 
    };

    // GET CURRENT PAHT
    const currentPath = router.pathname;

    // GET ENVIRONMENT
    const environment = process.env.NEXT_PUBLIC_ENVIRONMENT;

    // CHECK IF TOKEN IS VALID 
    useEffect(() => {
        const authToken = getCookie('auth-token');
        const tokenIsValid = checkToken(authToken);
        tokenIsValid 
            ? setIsAuthenticated(true)
            : router.push('/login');       
    }, [ isAuthenticated ]);

    // RETURN CHILDREN IF ENVIRONMENT IS PRODUCTION
    if (environment === 'production') {
        return children;
    };
    
    // RETURN CHILDREN ON LOGIN ROUTE
    if (currentPath === '/login') {
        return children;         
    };

    // RETURN CHILDREN IF AUTHENTICATION IS SUCCESSFULL
    if (isAuthenticated === true) {
        return children;
    };

};

export default ProtectedRoutes;

