import React from 'react';
import { useRef } from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faPlus } from '@fortawesome/free-solid-svg-icons'
import styles from './header.module.css'

const Header = ({onAdd}) => {
    const textRef = useRef();

    const onSubmit = e => {
        e.preventDefault();
        const text =  textRef.current.value || ""
        onAdd(text);
    };

    const onEnter = e => {
        if(e.key === "Enter"){
            const text =  textRef.current.value || ""
            onAdd(text);
        };
    };

    return (
        <header>
            <h1 className={styles.title}>To Do list</h1>
            <div className={styles.input_box}>
                <input ref={textRef} type="text" className={styles.input} onKeyPress={onEnter}/>
                <button className={styles.add_btn} onClick={onSubmit}><i className="fas fa-plus"></i></button>
            </div>
        </header>
    );
};

export default Header;