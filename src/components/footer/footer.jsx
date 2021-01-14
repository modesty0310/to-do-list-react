import React from 'react';
import styles from './footer.module.css'

const Footer = () => {
    
    
    return (
        <footer className={styles.btn_area}>
            <button className={styles.delete_chk_btn}>한 일 지우기</button>
            <button className={styles.delete_all_btn}>모두 지우기</button>
        </footer>
    );
};

export default Footer;