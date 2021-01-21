import React from 'react';
import { useRef } from 'react';
import { useHistory } from 'react-router';
import styles from './sign_up.module.css'

const SignUp = ({authService}) => {
    const emailRef = useRef();
    const passwordRef = useRef();
    const history = useHistory();

    const onSignUp = e => {
        e.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        authService
        .signUpWithEmailPasswoerd(email, password).then(() => {
            alert('회원가입이 완료되었습니다.')
            history.push("/")
        })
        .catch(function (error) {
            alert(error.code)
        });
    };

    return (
        <section className={styles.containner}>
            <form className={styles.box} >
                <h1>SignUp</h1>
                <input ref={emailRef} type="text" name="" placeholder="Email" />
                <input ref={passwordRef} type="password" placeholder="Password" />
                <input type="submit" value="Sign up" onClick={onSignUp} />
            </form>
        </section>
    );
};

export default SignUp;