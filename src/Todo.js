import React, { Component } from 'react';

class Todo extends Component {
    render() {
        const text = this.props.text;
        return (
            <li className="todo-item">
                <div className="toggle" />
                <div className="todo-item__view">
                    <div className="todo-item__view__text">{text}</div>
                    <button
                        className="todo-item__destroy"
                        onClick={this.props.deleteTodo}
                    />
                </div>
                <input className="todo-item__edit" type="text" />
            </li>
        );
    }
}

export default Todo;
