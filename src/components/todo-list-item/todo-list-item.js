import React from 'react';

import './todo-list-item.css';

const TodoListItem = ({ label, onToggleDone, done }) => {

    let classNames = 'todo-list-item';
    if (done) {
        classNames += ' done';
    }

    return (
        <span className={classNames}>
            <div className="item-status"
                onClick={onToggleDone}><div className="checkmark"></div></div>
            <p
                onClick={onToggleDone}
                className="todo-list-item-label">
                {label}
            </p>
        </span>
    );
}


export default TodoListItem;
