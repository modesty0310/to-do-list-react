import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useHistory } from 'react-router';
import Editor from '../editor/editor';
import Footer from '../footer/footer';
import Header from '../header/header';
import styles from './list.module.css'


const List = ({authService, listRepository}) => {
    const [lists, setLists] = useState({});
    const [userId, setUserId] = useState();
    const history = useHistory();

    const onAdd = (list) => {
        setLists(lists => {
            const updated = {...lists};
            updated[list.id] = list;
            return updated;
        });
        listRepository.saveList(userId, list)
    };

    const onDelete = (list) => {
        setLists(lists => {
            const deleted = {...lists};
            delete deleted[list.id]
            return deleted;
        });
        listRepository.removeList(userId, list)
    };

    const deleteAll = () => {
        setLists(lists => {
            const deleted = {};
            return deleted;
        });
        listRepository.removeAll(userId)
    };

    const deleteChecked = () => {
        const deletedChk = Object.keys(lists).filter(key => lists[key].checked === false);
        const databaseDel = Object.keys(lists).filter(key => lists[key].checked !== false);
        setLists(lists => {
            const updated = {...deletedChk};
            return updated;
        });
        for (const list of databaseDel) {
            listRepository.removeChecked(userId, list);
            console.log(list);
        }
    };


    const onLogout = () => {
        authService.logout();
    };

    useEffect(() => {
        if(!userId){
            return;
        };
        const sync = listRepository.syncLists(userId, lists => {
            setLists(lists);
        })
        return () => sync();
    }, [userId]);

    useEffect(() => {
        authService.onAuthChange((user) => {
            if(user) {
                setUserId(user.uid);
            }else{
                history.push('/');
            }
        });
    });


    return (
    <section className={styles.list}>
        <Header onAdd={onAdd} onLogout={onLogout}/>
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