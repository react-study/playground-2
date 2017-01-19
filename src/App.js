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
			editingId : null,
			filterName : 'all'
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
		const isAll = this.state.todos.every(v => v.isDone);
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

	selectFilter(filter){
		this.state = {
			filterName : filter
		};
	}

	deletedCompleted(){
		const newTodos = this.state.todos.filter(v => !v.isDone);
		this.setState({
			todos : newTodos
		});
	}

	render(){
		const {
			todos,
			editingId,
			filterName,
		} = this.state;

		const activeLength = todos.filter(v => !v.isDone).length;
		const isSomeCompleted = todos.some(v => v.isDone);
		const viewTodos = todos.filter(({isDone}) => {
			if(filterName === 'all') return true;
			else if(filterName === 'active' && !isDone) return true;
			else if(filterName === 'completed' && isDone) return true;
		});

		return (
			<div className="todo-app">
				<Header addTodo={text => this.addTodo(text)}/>
				<TodoList 
					todos={viewTodos}
					deleteTodo = {todo=>this.deleteTodo(todo)}
					saveTodo = {(id , text) => this.saveTodo(id , text)}
					editTodo = {id => this.editTodo(id)}
					editingId = {editingId}
					toggleTodo = {id => this.toggleTodo(id)}
					toggleAll = {() => this.toggleAll()}
					cancelEdit = {() => this.cancelEdit()}
				/>
				<Footer 
					filterName = {filterName}
					activeLength = {activeLength}
					selectFilter = {filter => this.selectFilter(filter)}
					deletedCompleted = {() => this.deletedCompleted()}
					isSomeCompleted = {isSomeCompleted}
				/>
			</div>
		);
	}

}

export default App;