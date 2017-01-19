import React, { Component } from 'react';

import Header from './Header';
import TodoList from './TodoList';
import Footer from './Footer';

class App extends Component{
	constructor(){
		super();
		this.state = {
			todos : [
				{
					id : 1,
					text : '치킨에 맥주한잔!'
				},
				{
					id : 2,
					text : '막걸리에 맥주한잔!'
				},
				{
					id : 3,
					text : '세번째 Todo'
				},
				{
					id : 4,
					text : '네번째 Todo'
				}
			],
			editingId : null
		};
	}

	addTodo(text){
		this.setState({
			todos : [
				...this.state.todos,
				{
					id : Date.now(),
					text
				}
			]
		});
	}

	saveTodo(id , newText){
		const newTodos = [...this.state.todos];
		// const editIndex = newTodos.findIndex(v => v.id === id);
		const editIndex = newTodos.findIndex(v => v.id === id);

		console.log(editIndex);
		newTodos[editIndex].text = newText;
		this.setState({
			todos : newTodos,
			editingId : null
		});

	}

	deleteTodo(id){
		const newTodos = [...this.state.todos];
		const deleteIndex = newTodos.findIndex(v => v.id === id);
		newTodos.splice(deleteIndex , 1);
		this.setState({todos : newTodos});
	}

	editTodo(id){
		this.setState({
			editingId : id
		});
	}

	toggleTodo(id){
		console.log(11);
		const newTodos = [...this.state.todos];
		console.log(newTodos)
		const toggleIndex = newTodos.findIndex(v => v.id  === id);
		newTodos[toggleIndex].isDone = !newTodos[toggleIndex].isDone;
	}

	toggleAll(){
		const isAll = this.state.todos.every((v=>v.isDone);
		const newTodos = this.state.todos.map(todo => {
			todo.isDone = !isAll;
		});

		this.setState({
			todos : newTodos
		})
	}

	cancelEdit(){
		this.setState({
			editingId : null
		});
	}

	render(){
		const {
			todos,
			editingId
		} = this.state;

		return (
			<div className="todo-app">
				<Header addTodo={text => this.addTodo(text)}/>
				<TodoList 
					todos={todos}
					deleteTodo = {todo=>this.deleteTodo(todo)}
					saveTodo = {(id , text) => this.saveTodo(id , text)}
					editTodo = {id => this.editTodo(id)}
					editingId = {editingId}
					toggleTodo = {id => this.toggleTodo(id)}
					toggleAll = {() => this.toggleAll()}
					cancelEdit = {() => this.cancelEdit()}
				/>
				<Footer />
			</div>
		);
	}

}

export default App;