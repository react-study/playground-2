import React , { Component } from 'react';
import Todo from './Todo';

class TodoList extends Component{

	render(){
		const todoList = this.props.todos.map(({id , text , isDone})=>(
			<Todo 
				key = {`todo#${id}`} 
				text = {text} 
				isEditing = {this.props.editingId === id}
				editTodo = {() => this.props.editTodo(id)}
				deleteTodo = {() => this.props.deleteTodo(id)}
				saveTodo = {(id , text) => this.props.saveTodo(id , text)}
				toggleTodo = {() => this.props.toggleTodo(id)}
				cancelEdit = {this.props.cancelEdit}
				isDone = {this.props.isDone}

			/>
		));

		return (
			<div className="todo-app__main">
				<div 
					className="toggle-all"

					className={[
						'toggle-all',
						todos.every(todo => todo.isDone) ? 'checked' : ''
					].join(' ')}
				></div>
				<ul className="todo-list">
					{todoList}
				</ul>
			</div>
		)
	}
}


export default TodoList;