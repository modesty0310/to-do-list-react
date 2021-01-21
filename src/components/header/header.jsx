import React from 'react';
import { useRef } from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faPlus } from '@fortawesome/free-solid-svg-icons'
import styles from './header.module.css'

const Header = ({onAdd}) => {
    const textRef = useRef();
    const formRef = useRef();

    const onSubmit = e => {
        e.preventDefault();
        const list = {
            id: Date.now(), 
            text: textRef.current.value || "", 
            checked:false
        };
        onAdd(list);
        formRef.current.reset();
    };

    return (
        <header>
            <h1 className={styles.title}>To Do list</h1>
            <form ref={formRef} className={styles.input_box}>
                <input ref={textRef} type="text" className={styles.input} />
                <button className={styles.add_btn} onClick={onSubmit}><i className="fas fa-plus"></i></button>
            </form>
        </header>
    );
};

export default Header;