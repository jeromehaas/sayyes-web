
import LoginForm from "components/sections/login-form/login-form";
import BlankPage from "components/layouts/blank-page/blank-page";

const Login = () => {

    return (
        <BlankPage meta={{ title: 'Login' }}>
            <LoginForm /> 
        </BlankPage>
    )

};

export default Login;