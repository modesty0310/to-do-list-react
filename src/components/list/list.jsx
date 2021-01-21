import React from 'react';
import { useState } from 'react';
import Editor from '../editor/editor';
import Footer from '../footer/footer';
import Header from '../header/header';
import styles from './list.module.css'


const List = () => {
    const [lists, setLists] = useState({});

    const onAdd = (list) => {
        setLists(lists => {
            const updated = {...lists};
            updated[list.id] = list;
            return updated;
        });
    };

    const onDelete = (list) => {
        setLists(lists => {
            const deleted = {...lists};
            delete deleted[list.id]
            return deleted;
        });
    };

    const deleteAll = () => {
        setLists(lists => {
            const deleted = {};
            return deleted;
        });
    };

    const deleteChecked = () => {
        const deletedChk = Object.keys(lists).filter(key => lists[key].checked === false)
        console.log(deletedChk);
        setLists(lists => {
            const updated = {...deletedChk};
            return updated;
        });
    };


    return (
    <section className={styles.list}>
        <Header onAdd={onAdd} />
        <ul className={styles.items}>
            {
                Object.keys(lists).map(key => (
                    <Editor key={key} list={lists[key]} onDelete={onDelete} onAdd={onAdd}/> 
                ))
            }
            
        </ul>
        <Footer deleteAll={deleteAll} deleteChecked={deleteChecked}/>
    </section>
    );
};

export default List;