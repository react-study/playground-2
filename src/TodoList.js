/**
 * Created by younjinkim on 2017. 1. 10..
 */
import React, { Component } from 'react';
import Todo from './Todo';

class TodoList extends Component{
    render(){
        const { todos } = this.props;

        const todoList = todos.map((todo) => (
            <Todo
                key={`todo#${todo.id}`}
                text={todo.text}
                deleteTodo={() => this.props.deleteTodo(todo)}
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
    }
}

export default TodoList;