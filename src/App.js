import React, { Component } from 'react';

import Header from './Header';
import TodoList from './TodoList';
import Footer from './Footer';

class App extends Component {
    constructor() {
        super();
        this.state = {
            todos: [
                {id: 1, text: '치킨에 맥주 한 잔'},
                {id: 2, text: '삼겹살에 소주 한 잔'},
                {id: 3, text: '리코타샐러드에 봉골레 파스타'},
                {id: 4, text: '떡순튀'}
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
                    deleteTodo={a => this.deleteTodo(a)}
                    saveTodo={(id, text) => this.saveTodo(id, text)}
                    editTodo={id => this.editTodo(id)}
                    editingId={editingId}
                    cancelEdit={() => this.cancelEdit()}
                />
                <Footer />
            </div>
        );
    }
}

export default App;
