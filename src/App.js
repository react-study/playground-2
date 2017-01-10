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
            ]
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
    deleteTodo(todo) {
        const newTodos = [...this.state.todos]
        const deleteIndex = newTodos.findIndex(v => v.id === todo.id);
        newTodos.splice(deleteIndex, 1);
        this.setState({todos: newTodos});
    }
    render(){
        return (
            <div className="todo-app">
                <Header addTodo={ text => this.addTodo(text) }/>
                <TodoList
                    todos={ this.state.todos }
                    deleteTodo = { todo => this.deleteTodo(todo) }
                />
                <Footer/>
            </div>
        );
    }
}

export default App;