import React from 'react';
import { useHistory } from 'react-router';
import styles from './login.module.css'

const Login = () => {
    const history = useHistory();
    const onLogin = e => {
        history.push("/list");
    };

    return (
        <section className={styles.containner}>
            <form action="index.html" className={styles.box} method="POST">
                <h1>Login</h1>
                <input type="text" name="" placeholder="UserName" />
                <input type="password" placeholder="Password" />
                <input type="submit" value="Login" onClick={onLogin}/>
            </form>
        </section>

    )
}

export default Login;