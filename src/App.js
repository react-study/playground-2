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
        });
    }
    deleteTodo(todo) {
        const newTodos = [...this.state.todos];
        const deleteIndex = newTodos.findIndex(v => v.id === todo.id);
        newTodos.splice(deleteIndex, 1);
        this.setState({ todos: newTodos });
    }
    render(){
        return (
            <div className="todo-app">
                <Header addTodo={text => this.addTodo(text)}/>
                <TodoList
                    todos={this.state.todos}
                    deleteTodo={todo => this.deleteTodo(todo)}
                />
                <Footer />
            </div>
        );
    }
}

export default App;
