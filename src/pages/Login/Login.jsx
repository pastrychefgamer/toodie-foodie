import React from 'react';
import LoginForm from '../../components/LoginForm/Loginform';
// import styles from './Login.module.css';

const Login = (props) => {
    return (
        <main>
            <h1>Login</h1>
            <LoginForm 
            {...props}
            handleSignUpOrLogin={props.handleSignupOrLogin}
            />
        </main>
    );
}

export default Login;