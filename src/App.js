import React, { Component } from 'react';

import Header from './Header';
import TodoList from './TodoList';
import Footer from './Footer';

class App extends Component {
    constructor () {
        super();
        this.state = {
            todos: [
                {id: 1, text:'1111111'},
                {id: 2, text:'222222222'},
                {id: 3, text:'33333333333'},
                {id: 4, text:'4444444444'}
            ],
            editingId: null
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
        })
    }
    deleteTodo(id) {
        const newTodos = [...this.state.todos]
        const deleteIndex = newTodos.findIndex(v => v.id === id);
        newTodos.splice(deleteIndex, 1);
        this.setState({
            todos: newTodos
        });
    }
    editTodo(id) {
        this.setState({
            editingId: id
        });
    }
    saveTodo(id) {
        const newText = [...this.state.todos];
        const editIndex = newTodos.findIndex( v => v.id  === id );
        newTodos[editIndex].text = newText;
        this.setState({
            todos: newTodos,
            editindId: null
        });
    }
    cancelEdit(){
        this.setState({
            editingId: null
        });
    }

    render(){
        const {
            todos, editingId
        } = this.state
        return (
            <div className="todo-app">
                <Header addTodo={ text => this.addTodo(text) }/>
                <TodoList
                    todos={ this.state.todos }
                    deleteTodo = { todo => this.deleteTodo(todo) }
                    saveTodo = { (id, text) => this.saveTodo(id, text) }
                    editTodo = { id => this.editTodo(id) }
                    editingId = { id => this.editTodo(id) }
                    cancelEdit = { id => this.cancelEdit() }
                />
                <Footer/>
            </div>
        );
    }
}

export default App;