import React, { Component } from 'react';

import Header from './Header';
import TodoList from './TodoList';
import Footer from './Footer';

class App extends Component {
    constructor(){
        super();
        this.state = {
            todos: [
                {id: 1, text: 'chicken and beer1'},
                {id: 2, text: 'chicken and beer2'},
                {id: 3, text: 'chicken and beer3'},
                {id: 4, text: 'chicken and beer4'}
            ],
            editingId: null
        }
    }
    addTodo(text){
        this.setState({
            todos: [
                ...this.state.todos, {
                    id: Date.now(),
                    text
                }
            ]
        });
    }

    deleteTodo(todo){
        const newTodos = [...this.state.todos];
        const deleteIndex = newTodos.findIndex(v => v.id === todo.id);
        newTodos.splice(deleteIndex, 1);
        this.setState({ todos: newTodos });
    }

    editTodo(id){
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

    cancelEdit(){
        this.setState({
            editingId: null
        });
    }

    render(){
        return (
            <div className="todo-app">
                <Header addTodo={ text => this.addTodo(text) } />
                <TodoList
                    todos={ this.state.todos }
                    deleteTodo={ todo => this.deleteTodo(todo) }
                    saveTodo={ (id, text) => this.saveTodo(id, text) }
                    editTodo={ id => this.editTodo(id) }
                    editingId={ this.state.editingId }
                    cancelEdit={ () => this.cancelEdit() }
                />
                <Footer />
            </div>
        );
    }
}

export default App;
