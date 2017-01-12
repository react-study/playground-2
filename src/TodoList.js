import React, { Component } from 'react';
import Todo from './Todo';

class TodoList extends Component {
  constructor(){
    super();
    this.state = {
      editingId: null
    }
  }

  editTodo(id) {
    this.setState({
      editingId: id
    });
  }

  render() {
    const todos = this.props.todos;

    const todoList = todos.map( todo => (
      <Todo
        key={`todo#${todo.id}`}
        text={todo.text}
        isEditing={ this.state.editingId === todo.id  }
        editTodo={ () => this.props.editTodo(todo.id) }
        deleteTodo={ () => this.props.deleteTodo(todo) }
        addTodo={ this.addTodo }
        saveTodo={ text => this.props.saveTodo(todo.id, text) }
      />
    ));
    return (
      <div className="todo-app__main">
        <div className="toggle-all"></div>
        <ul className="todo-list">
          { todoList }
        </ul>
      </div>
    );
  }
}

export default TodoList;
