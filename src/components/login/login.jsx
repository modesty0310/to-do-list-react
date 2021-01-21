import React from 'react';
import { useHistory } from 'react-router';
import { useRef } from 'react/cjs/react.development';
import styles from './login.module.css'

const Login = ({authService}) => {
    const formRef = useRef();
    const emailRef = useRef();
    const passwordRef = useRef();
    const history = useHistory();

    const goToList = (userId) => {
        history.push({
            pathname: '/list',
            state: {id: userId}
        })
    }
    const onLoginGoogle = e => {
        e.preventDefault();
        authService
        .login(e.currentTarget.textContent)
        .then(data => goToList(data.user.uid))
    };

    const onLogin = e => {
        e.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        authService
        .signInWithEmailPassword(email, password)
        .then(data=> goToList(data.user.uid))
        .catch(err => {
            alert(err);
            formRef.current.reset();
        });
    };
    const onSignup = () => {
        history.push("/signup")
    }

    return (
        <section className={styles.containner}>
            <form ref={formRef} className={styles.box}>
                <h1>Login</h1>
                <input ref={emailRef} type="text" name="" placeholder="Email" />
                <input ref={passwordRef} type="password" placeholder="Password" />
                <input type="submit" value="Login" onClick={onLogin}/>
                <button className={styles.button} onClick={onLoginGoogle}>
                    Google
                </button>
                <button className={styles.button} onClick={onSignup}>
                    Sign Up
                </button>
            </form>
        </section>
    )
}

export default Login;