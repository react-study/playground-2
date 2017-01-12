/**
 * Created by younjinkim on 2017. 1. 10..
 */
import React, { Component } from 'react';

class Todo extends Component{
    componentDidUpdate(){
        if (this.props.isEditing) {
            this.textInput.value = this.props.text;
            this.textInput.focus();
        }
    }

    handleKeyDown(e){
        const text = e.target.value;
        if (!text || e.keyCode !== 13) return;
        this.props.saveTodo(text);
    }

    render(){
        const { text, editTodo, deleteTodo, cancelEdit, isEditing } = this.props;
        return (
            <li className={[
                'todo-item',
                isEditing ? 'editing' : ''
            ].join(' ')}>
                <div className="toggle"/>
                <div className="todo-item__view">
                    <div
                        className="todo-item__view__text"
                        onDoubleClick={editTodo}
                    >{text}</div>
                    <button
                        className="todo-item__destroy"
                        onClick={deleteTodo}
                    />
                </div>
                <input
                    type="text"
                    className="todo-item__edit"
                    onKeyDown={e => this.handleKeyDown(e)}
                    onBlur={cancelEdit}
                    ref={ref => {this.textInput = ref;}}
                />
            </li>
        );
    }

    componentWillUnmount(){
        console.log(this.props);
    }
}

export default Todo;