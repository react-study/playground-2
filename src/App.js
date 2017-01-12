/**
 * Created by younjinkim on 2017. 1. 10..
 */
import React, { Component } from 'react';
import Header from './Header';
import TodoList from './TodoList';
import Footer from './Footer';

class App extends Component{
    constructor(){
        super();
        this.state = {
            todos:[
                { id: 1, text: '기본 할일1'},
                { id: 2, text: '기본 할일2'},
                { id: 3, text: '기본 할일3'},
                { id: 4, text: '기본 할일4'}
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

    editTodo(id){
        this.setState({ editingId: id });
    }

    saveTodo(id, newText){
        const newTodos = [...this.state.todos];
        const editIndex = newTodos.findIndex(v => v.id === id);
        newTodos[editIndex].text = newText;
        this.setState({ todos : newTodos, editingId: null });
    }

    deleteTodo(id){
        const newTodos = [...this.state.todos];
        const deleteIndex = newTodos.findIndex(v => v.id === id);
        newTodos.splice(deleteIndex,1);
        this.setState({ todos : newTodos });
    }

    cancelEdit(){
        this.setState({ editingId: null });
    }

    render(){
        const { todos, editingId } = this.state;
        return (
            <div className="todo-app">
                <Header addTodo={ text => this.addTodo(text) }/>
                <TodoList
                    todos={todos}
                    saveTodo={(id, text) => this.saveTodo(id, text)}
                    editTodo={id => this.editTodo(id)}
                    editingId = {editingId}
                    cancelEdit={() => this.cancelEdit()}
                    deleteTodo={todo => this.deleteTodo(todo)}
                />
                <Footer/>
            </div>
        );
    }
}

export default App;