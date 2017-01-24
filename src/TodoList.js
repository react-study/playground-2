import React, { Component } from 'react';
import Todo from './Todo';

class TodoList extends Component {

    render(){
        const {
            todos,
            deleteTodo,
            editingId,
            editTodo,
            saveTodo,
            cancelEdit
        } = this.props;

        const todoList = todos.map(({id, text}) =>
            <Todo
                key={`todo#${id}`}
                text={text}
                isEditing={editingId === id}
                editTodo={() => editTodo(id)}
                deleteTodo={() => deleteTodo(id)}
                saveTodo={text => saveTodo(id, text)}
                cancelEdit={cancelEdit}
            />
        );

        return (
            <div className="todo-app__main">
                <div className="toggle-all"></div>
                <ul className="todo-list">
                    {todoList}
                </ul>
            </div>
        );
    }
}

export default TodoList;