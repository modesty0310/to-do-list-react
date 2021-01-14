import React from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faPlus } from '@fortawesome/free-solid-svg-icons'
import styles from './header.module.css'

const Header = () => {
    return (
        <header>
            <h1 className={styles.title}>To Do list</h1>
            <div className={styles.input_box}>
                <input type="text" className={styles.input} />
                <button className={styles.add_btn}><i className="fas fa-plus"></i></button>
            </div>
        </header>
    );
};

export default Header;