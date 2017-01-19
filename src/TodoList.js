import React, {Component} from 'react';
import Todo from './Todo';

const TodoList = ({
    todos,
    editingId,
    editTodo,
    deleteTodo,
    saveTodo,
    cancelEdit,
    toggleTodo,
    toggleAll
}) => {
    const todoList = todos.map(({id, text, isDone}) => (
        <Todo 
            key={`todo#${id}`} 
            text={text}
            isDone={isDone}
            isEditing={editingId === id}
            editTodo={()=>editTodo(id)}
            deleteTodo={()=>deleteTodo(id)}
            saveTodo={text=>saveTodo(id, text)}
            cancelEdit={cancelEdit}
            toggleTodo={()=>toggleTodo(id)}
        />
    ));
    
    return(
        <div className="todo-app__main">
            <div 
                className={[
                    'toggle-all',
                    todos.every(todo=>todo.isDone) ? 'checked' : ''
                ].join(' ')}
                onClick={toggleAll}
            />
            <ul className="todo-list">
                {todoList}
            </ul>
        </div>
    );
};

export default TodoList;
