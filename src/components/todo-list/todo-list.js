import React from 'react';

import TodoListItem from '../todo-list-item';
import './todo-list.css';

const TodoList = ({ todos, onToggleDone }) => {

  const elements = todos.map((item) => {
    const { id, ...itemProps } = item;

    return (
      <li key={id} className="todo-list-item">
        <TodoListItem
          {...itemProps}
          onToggleDone={() => onToggleDone(id)} />
      </li>
    );
  });

  return (
    <ul className="todo-list">
      {elements}
    </ul>
  );
};

export default TodoList;
