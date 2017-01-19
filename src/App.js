import React, { Component } from 'react';

import Header from './Header';
import TodoList from './TodoList';
import Footer from './Footer';

class App extends React.Component {
    constructor(){
        super();
        this.state = {
            todos : [
                {id: 1, text: '치킨?'},
                {id: 2, text: '커피?'}
            ],
            editingId: null
        };
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
    deleteTodo(id){
        const newTodos = [...this.state.todos];
        const deleteIndex = newTodos.findIndex(v => v.id === id);
        newTodos.splice(deleteIndex, 1);
        this.setState({ todos: newTodos });
    }
    editTodo(id){
        this.setState({
            editingId: id
        });
    }
    saveTodo(id, newText){
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
        const {
            todos,
            editingId
        } = this.state;
        return (
            <div className="todo-app">
                <Header addTodo={text => this.addTodo(text)} />
                <TodoList
                    todos={ todos }
                    deleteTodo={id => this.deleteTodo(id)}
                    editingId={editingId}
                    editTodo={id => this.editTodo(id)}
                    saveTodo={(id, text) => this.saveTodo(id, text)}
                    cancelEdit={() => this.cancelEdit()}
                />
                <Footer />
            </div>
        );
    }
}

export default App;