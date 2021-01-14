import React from 'react';
import styles from './editor.module.css'

const Editor = ({list, text, onDelete}) => {
    const onClick = () => {
        onDelete(list.id)
        console.log(list.id);
    };

    return (
        <div className={styles.item}>
        <span className={styles.item_name} ><i className="fas fa-check" className={styles.hide}></i>{text}</span>
        <button className={styles.item_delete} onClick={onClick}>
            <i className="fas fa-trash-alt" ></i>
        </button>
        </div>
    );
};

export default Editor;