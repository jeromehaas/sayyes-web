import { useState, useEffect, useContext } from 'react'
import { ChevronLeft, X as Close } from 'react-feather';
import { useRouter } from 'next/router';
import { setCookie } from 'cookies-next';
import { sha256 } from 'js-sha256';
import { AuthContext } from 'contexts/auth/auth';

const LoginForm = () => {

    // BRING IN ROUTER
    const router = useRouter();

    // SETUP STATE
    const [ input, setInput ] = useState('');

    // BRING IN AUTH-CONTEXT
    const { setIsAuthenticated, isAuthenticated } = useContext(AuthContext)

    // EVENT HANDLERS
    const updateInput = (value) => setInput(input + value);;
    const resetInput = () => setInput('');
    const deleteInput = () => setInput(input.substring(0, input.length - 1))

    // CHECK FORM WHEN INPUT OF 6 CHARS IS REACHED
    useEffect(() => {
        if (input.length !== 6) return;
        if (input !== process.env.NEXT_PUBLIC_DEVELOPER_LOGIN_CODE) resetInput();
        if (input === process.env.NEXT_PUBLIC_DEVELOPER_LOGIN_CODE) login();
    }, [input]);

    // LOGIN
    const login = () => {
        setCookie('auth-token', sha256(input));
        setIsAuthenticated(true);
        router.push('/');
    };

    // UPDATE INPUT ON KEYPRESS
    const handleKeyPress = (event) => {
      updateInput(event.key);
    };

    // LISTEN ON KEYDOWN
    useEffect(() => {
      document.addEventListener('keydown', handleKeyPress);
      return () => document.removeEventListener('keydown', handleKeyPress);
    }, [input]);

  return (
    <div className="login-form">
      <div className="login-form__wrapper">
        <img className="login-form__logo" src="/logos/logo-sayyes.svg" width="80" height="80" alt="SAYYES" />            
        <div className="login-form__dial-wrapper">
          <button className="login-form__dial-button dial-button" onClick={ () => updateInput(1) }>1</button>
          <button className="login-form__dial-button dial-button" onClick={ () => updateInput(2) }>2</button>
          <button className="login-form__dial-button dial-button" onClick={ () => updateInput(3) }>3</button>
          <button className="login-form__dial-button dial-button" onClick={ () => updateInput(4) }>4</button>
          <button className="login-form__dial-button dial-button" onClick={ () => updateInput(5) }>5</button>
          <button className="login-form__dial-button dial-button" onClick={ () => updateInput(6) }>6</button>
          <button className="login-form__dial-button dial-button" onClick={ () => updateInput(7) }>7</button>
          <button className="login-form__dial-button dial-button" onClick={ () => updateInput(8) }>8</button>
          <button className="login-form__dial-button dial-button" onClick={ () => updateInput(9) }>9</button>
          <button className="login-form__dial-button dial-button" onClick={ () => deleteInput() }><ChevronLeft className="dial-button__icon" /></button>
          <button className="login-form__dial-button dial-button" onClick={ () => updateInput(0) }>0</button>
          <button className="login-form__dial-button dial-button" onClick={ () => resetInput() }><Close className="dial-button__icon" /></button>
        </div>
        <div className="login-form__dots-wrapper">
          <div className={`login-form__dot ${ input.length >= 1 ? 'login-form__dot--active' : ''}`}></div>
          <div className={`login-form__dot ${ input.length >= 2 ? 'login-form__dot--active' : ''}`}></div>
          <div className={`login-form__dot ${ input.length >= 3 ? 'login-form__dot--active' : ''}`}></div>
          <div className={`login-form__dot ${ input.length >= 4 ? 'login-form__dot--active' : ''}`}></div>
          <div className={`login-form__dot ${ input.length >= 5 ? 'login-form__dot--active' : ''}`}></div>
          <div className={`login-form__dot ${ input.length >= 6 ? 'login-form__dot--active' : ''}`}></div>
        </div>
      </div>
    </div>
  );

};

export default LoginForm;