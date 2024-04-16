import { useState, useRef } from "react";

import './app.css';

import AppHeader from "../app-header";
import ItemStatusFilter from "../item-status-filter";
import TodoList from "../todo-list/todo-list";
import ItemAddForm from "../item-add-form/item-add-form";

const App = () => {

    const maxId = useRef(100);

    const createTodoItem = (label) => {
        return {
            label,
            done: false,
            id: maxId.current++
        }
    }

    const [todos, setTodos] = useState({
        todoData: [
            createTodoItem('Drink coffee'),
            createTodoItem('Make todo app'),
            createTodoItem('Send it to Mindbox')
        ],
        filter: 'All'
    })

    const deleteItems = () => {
        setTodos(({ todoData }) => {

            const newArray = [
                ...todoData
            ];

            const activeItems = newArray.filter((el) => el.done === false);

            return {
                todoData: activeItems
            }
        })
    }

    const addItem = (text) => {
        const newItem = createTodoItem(text);

        setTodos(({ todoData }) => {
            const newArr = [
                ...todoData,
                newItem
            ];

            return {
                todoData: newArr
            }
        })
    }

    const toggleProperty = (arr, id, propName) => {
        const idx = arr.findIndex((el) => el.id === id);
        const oldItem = arr[idx];
        const newItem = { ...oldItem, [propName]: !oldItem[propName] };
        return [
            ...arr.slice(0, idx),
            newItem,
            ...arr.slice(idx + 1)
        ]
    }


    const onToggleDone = (id) => {
        setTodos(({ todoData }) => {
            return {
                todoData: toggleProperty(todoData, id, 'done')
            }
        })
    }

    const onFilterChange = (filter) => {
        setTodos(
            prevTodos => ({
                ...prevTodos,
                filter
            })
        );
    }

    const filterItems = () => {
        if (todos.filter === 'Completed') {
            return [...todos.todoData.filter((el) => el.done === true)]
        } else if (todos.filter === 'Active') {
            return [...todos.todoData.filter((el) => el.done === false)]
        } else {
            return todos.todoData;
        }
    }

    const visibleItems = filterItems();

    const todoCount = todos.todoData.filter((el) => el.done === false).length;

    return (
        <div className="todo-app">
            <AppHeader />
            <div className="todo-actions">
                <ItemAddForm
                    onItemAdded={addItem} />
                <TodoList
                    todos={visibleItems}
                    onToggleDone={onToggleDone} />
                <ItemStatusFilter toDo={todoCount} onItemsDelete={deleteItems} onItemFilter={onFilterChange} />
                <div className="other-lists1"></div>
                <div className="other-lists2"></div>
            </div>
        </div>
    )
}


export default App;