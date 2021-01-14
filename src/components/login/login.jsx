import React from 'react';
import styles from './login.module.css'

const Login = () => {


    return (
        <form action="index.html" className={styles.box} method="POST">
            <h1>Login</h1>
            <input type="text" name="" placeholder="UserName" />
            <input type="password" placeholder="Password" />
            <input type="submit" value="Login" />
        </form>
    )
}

export default Login;