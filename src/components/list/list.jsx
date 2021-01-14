import React from 'react';
import Header from '../header/header';
import styles from './list.module.css'


const List = () => {


    return (
    <section className={styles.list}>
        <Header />
        <ul className="items">
        </ul>
        <footer className="btn-area">
            <button className="delete-chk-btn">한 일 지우기</button>
            <button className="delete-all-btn">모두 지우기</button>
        </footer>
    </section>
    );
};

export default List;