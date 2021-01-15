import React from 'react';
import styles from './editor.module.css';
import classNames from 'classnames';

const Editor = ({list, onDelete, onAdd}) => {
    const deleteList = () => {
        onDelete(list)
    };

    const checkList = (e) => { 
        list.checked = !list.checked;
        onAdd(list);
        console.log(list.checked); 
    };

    return (
        <div className={styles.item}>
        <span className={classNames({[styles.item_name]:true, [styles.checked]:list.checked})} onClick={checkList}>
            <i className={classNames({["fas fa-check"]:list.checked})}></i>
            {list.text}
            </span>
        <button className={styles.item_delete} onClick={deleteList}>
            <i className="fas fa-trash-alt" ></i>
        </button>
        </div>
    );
};

export default Editor;