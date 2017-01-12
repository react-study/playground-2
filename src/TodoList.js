/**
 * Created by younjinkim on 2017. 1. 10..
 */
import React, { Component } from 'react';
import Todo from './Todo';

const TodoList = ({
    todos,
    editingId,
    editTodo,
    deleteTodo,
    saveTodo,
    cancelEdit
}) => {
    const todoList = todos.map(({ id, text }) => (
        <Todo
            key={`todo#${id}`}
            text={text}
            isEditing={editingId === id}
            editTodo={() => editTodo(id)}
            saveTodo={(newText) => saveTodo(id, newText)}
            deleteTodo={() => deleteTodo(id)}
            cancelEdit={cancelEdit}
        />
    ));
    return (
        <div className="toto-app__main">
            <div className="toggle-all"></div>
            <ul className="todo-list">
                {todoList}
            </ul>
        </div>
    );

};


export default TodoList;