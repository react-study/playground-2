import React, {Component} from 'react';

import Header from './Header';
import TodoList from './TodoList';
import Footer from './Footer';

class App extends Component{
    constructor() {
        super();
        this.state = {
            todos: [
                {id: 1, text : '아메리카노'},
                {id: 2, text : '카페라떼'},
                {id: 3, text : '카푸치노'}
            ]
        };
    }
    
    addTodo(text) {
        this.setState({
            todos: [
                ...this.state.todos,
                {
                    id: Date.now(),
                    text
                }
            ]
        })
    }
    
    deleteTodo(todo) {
        const newTodos = [...this.state.todos];
        const deleteIndex = newTodos.findIndex(v=>v.id === todo.id);
        newTodos.splice(deleteIndex, 1);
        this.setState({todos : newTodos});
    }
    
    render() {
        return (
            <div className="todo-app">
                <Header addTodo={text => this.addTodo(text)} />
                <TodoList todos={this.state.todos} deleteTodo={todo => this.deleteTodo(todo)}/>
                <Footer />
            </div>
        );
    }
}



export default App;
