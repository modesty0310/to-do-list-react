import React from 'react';
import styles from './footer.module.css'

const Footer = ({deleteAll, deleteChecked}) => {
    
    const allDelete = () => {
        deleteAll()
    }

    const chkDelete = () => {
        deleteChecked()
    }
    
    return (
        <footer className={styles.btn_area}>
            <button className={styles.delete_chk_btn} onClick={chkDelete}>한 일 지우기</button>
            <button className={styles.delete_all_btn} onClick={allDelete}>모두 지우기</button>
        </footer>
    );
};

export default Footer;