import React from 'react';

const Editor = ({key, text}) => {


    return (
        <div class="item">
        <span class="item-name" ><i class="fas fa-check hide"></i>{text}</span>
        <button class="item-delete">
            <i class="fas fa-trash-alt" ></i>
        </button>
        </div>
    );
};

export default Editor;