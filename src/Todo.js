/**
 * Created by younjinkim on 2017. 1. 10..
 */
import React, { Component } from 'react';

class Todo extends Component{
    render(){
        const { text } = this.props;
        return (
            <li className="todo-item">
                <div className="toggle"/>
                <div className="todo-item__view">
                    <div className="todo-item__view__text">{text}</div>
                    <button
                        className="todo-item__destroy"
                        onClick={this.props.deleteTodo}
                    />
                </div>
                <input type="text" className="todo-item__edit"/>
            </li>
        );
    }

    componentWillUnmount(){
        console.log(this.props);
    }
}

export default Todo;