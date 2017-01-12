import React, { Component } from 'react';
import Todo from './Todo';

class TodoList extends Component {
    constructor () {
        super();
        this.state = {
            editingId: null
        };
    }


    render () {
        const todos = this.props.todos;
        const todoList = todos.map(({id, text}) => (
            <Todo
                key = {`todo#${id}`}
                text = {text}
                isEditing = { this.props.editingId === id }
                editTodo = { () => this.props.editTodo(id) }
                deleteTodo = { () => this.props.deleteTodo(id) }
                saveTodo = { text => this.props.saveTodo(id , text) }
                cancelEdit = { this.props.cancelEdit }
            />
        ));
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