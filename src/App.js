import React, { Component } from 'react';

import Header from './Header';
import TodoList from './TodoList';
import Footer from './Footer';

class App extends Component {
    constructor(){
        super();
        this.state={
            todos : [
                {id:1,text: 'todo1'},
                {id:2,text: 'todo2'},
                {id:3,text: 'todo3'},
                {id:4,text: 'todo4'}
            ],
            editingId: null,
            filterName : 'all'
        };
    }

    addTodo(text) {
        this.setState({
            todos: [
                ...this.state.todos, {
                    id: Date.now(),
                    text
                }
            ]
        });
    }
    deleteTodo(id) {
        const newTodos = [...this.state.todos];
        const deleteIndex = newTodos.findIndex(v => v.id === id);
        newTodos.splice(deleteIndex, 1);
        this.setState({ todos: newTodos });
    }
    editTodo(id) {
        this.setState({
            editingId: id
        });
    }
    saveTodo(id, newText) {
        const newTodos = [...this.state.todos];
        const editIndex = newTodos.findIndex(v => v.id === id);
        newTodos[editIndex].text = newText;
        this.setState({
            todos: newTodos,
            editingId: null
        });
    }
    cancelEdit() {
        this.setState({
            editingId: null
        });
    }
    toggleTodo(id) {
        const newTodos = [...this.state.todos];
        const toggleIndex = newTodos.findIndex(v => v.id === id);
        newTodos[toggleIndex].isDone = !newTodos[toggleIndex].isDone;
        this.setState({
            todos: newTodos
        });
    }
    toggleAll() {
        const isAll = this.state.todos.every(v => v.isDone);
        const newTodos = this.state.todos.map(todo => {
            todo.isDone = !isAll;
            return todo;
        });
        this.setState({
            todos: newTodos
        });
    }
    selectFilter(filter) {
        this.setState({ filterName : filter });
    }
    deleteCompleted() {
        const newTodos = this.state.todos.filter(v => !v.isDone);
        this.setState({ todos: newTodos });
    }
    render(){
        const {
            todos,
            editingId,
            filterName
            } = this.state;
        const activeLength = todos.filter(v => !v.isDone).length;
        const viewTodos = todos.filter(({isDone}) => {
            if(
                filterName === 'all' ||
                (filterName === 'active' && !isDone) ||
                (filterName === 'completed' && isDone)
            ) return true;
            return false;
        });
        const isSomeCompleted = todos.some(v => v.isDone);
        return (
            <div className="todo-app">
                <Header addTodo={text => this.addTodo(text)}/>
                <TodoList
                    todos      = {viewTodos}
                    editingId  = {editingId}
                    deleteTodo = {a => this.deleteTodo(a)}
                    saveTodo   = {(id, text) => this.saveTodo(id, text)}
                    editTodo   = {id => this.editTodo(id)}
                    cancelEdit = {() => this.cancelEdit()}
                    toggleTodo = {id => this.toggleTodo(id)}
                    toggleAll  = {()=> this.toggleAll()}
                    />
                <Footer
                    filterName      = {filterName}
                    activeLength    = {activeLength}
                    isSomeCompleted = {isSomeCompleted}
                    selectFilter    = {filter => this.selectFilter(filter)}
                    deleteCompleted = {()=> this.deleteCompleted()}
                    />
            </div>
        );
    }
}

export default App;