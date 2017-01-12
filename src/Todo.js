import React, { Component } from 'react';

class Todo extends Component {
    componentDidUpdate() {
        if(this.props.isEditing) {
            this.textInput.value = this.props.text;
            this.textInput.focus();
        }
    }
    handleKeyDown(e) {
        const text = e.target.value;
        if(!text || e.keyCode !== 13) return;
        this.props.saveTodo(text);
    }
    render() {
        const {
            text,
            isEditing,
            editTodo,
            deleteTodo,
            cancelEdit
        } = this.props;
        return (
            <li className={[
                'todo-item',
                isEditing ? 'editing' : ''
            ].join(' ')}>
                <div className="toggle" />
                <div className="todo-item__view">
                    <div
                        className="todo-item__view__text"
                        onDoubleClick={editTodo}
                    >{text}</div>
                    <button
                        className="todo-item__destroy"
                        onClick={() => deleteTodo(todo)}
                    />
                </div>
                <input
                    className="todo-item__edit"
                    type="text"
                    ref={ref => { this.textInput = ref; }}
                    onKeyDown={e => this.handleKeyDown(e)}
                    onBlur={cancelEdit}
                />
            </li>
        );
    }
}

export default Todo;
