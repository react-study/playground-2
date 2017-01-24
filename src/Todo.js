import React, { Component } from 'react';

class Todo extends Component {
    componentDidUpdate(){
        if(this.props.isEditing){
            this.textInput.value = this.props.text;
            this.textInput.focus();
        }
    }
    handleKeyDown(e){
        const text = e.target.value;
        if(!text || e.keyCode !== 13) return;
        this.props.saveTodo(text);
    }
    render(){
        const {
            text,
            isDone,
            isEditing,
            editTodo,
            deleteTodo,
            toggleTodo,
            cancelEdit
        } = this.props;

        return (
            <li className={[
                'todo-item',
                isEditing ? 'editing' : '',
                isDone ? 'completed' : ''
            ].join(' ')}>
                <div
                    className="toggle"
                    onClick={toggleTodo}
                ></div>
                <div className="todo-item__view">
                    <div
                        className="todo-item__view__text"
                        onDoubleClick={editTodo}
                    >
                        {text}
                    </div>
                    <button
                        className="todo-item__destroy"
                        onClick={deleteTodo}
                    />
                </div>
                <input
                    type="text"
                    className="todo-item__edit"
                    ref={ref => { this.textInput = ref; }}
                    onKeyDown={e => this.handleKeyDown(e)}
                    onBlur={cancelEdit}
                />
            </li>
        );
    }
}

export default Todo;