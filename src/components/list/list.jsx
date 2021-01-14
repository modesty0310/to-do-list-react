import React from 'react';
import { useState } from 'react';
import Editor from '../editor/editor';
import Footer from '../footer/footer';
import Header from '../header/header';
import styles from './list.module.css'


const List = () => {
    const [lists, setLists] = useState([]);

    const onAdd = (text) => {
        setLists(lists => {
            const updated = [...lists, {id: Date.now(), text}];
            return updated;
        });
    };

    return (
    <section className={styles.list}>
        <Header onAdd={onAdd}/>
        <ul className={styles.items}>
            {
                lists.map(list => (
                    <Editor key={list.id} text={list.text}/> 
                ))
            }
            
        </ul>
        <Footer />
    </section>
    );
};

export default List;