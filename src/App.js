import React, { Component } from 'react';
import axios from 'axios';

import Header from './Header';
import TodoList from './TodoList';
import Footer from './Footer';

const axiosApi = axios.create({
    baseURL: 'http://localhost:2403/todos',
    timeout: 1000,
});

const ax = ({
    method = 'post',
    url = '/',
    data,
    res,
    err = err => { console.error(err); }
})=> {
    if(data) return axiosApi[method](url, data).then(res).catch(err);
    return axiosApi[method](url).then(res).catch(err);
};

class App extends Component {
    constructor() {
        super();
        this.state = {
            todos: [],
            editingId: null
        };
    }
    componentWillMount() {
        ax({
            method: 'get',
            res: ({data}) => {
                this.setState({ todos: data });
            }
        });
    }
    addTodo(text) {
        ax({
            data: { text },
            res: ({data}) => {
                this.setState({
                    todos: [...this.state.todos, data]
                });
            }
        });
    }
    deleteTodo(id) {
        ax({
            method: 'delete',
            url: `/${id}`,
            res: () => {
                const newTodos = [...this.state.todos];
                const deleteIndex = newTodos.findIndex(v => v.id === id);
                newTodos.splice(deleteIndex, 1);
                this.setState({ todos: newTodos });
            }
        });
    }
    editTodo(id) {
        this.setState({
            editingId: id
        });
    }

    saveTodo(id, newText) {
        ax({
            method: 'put',
            url: `/${id}`,
            data: { text: newText },
            res: ({data}) => {
                const newTodos = [...this.state.todos];
                const editIndex = newTodos.findIndex(v => v.id === id);
                newTodos.splice(editIndex, 1, data);
                this.setState({
                    todos: newTodos,
                    editingId: null
                });
            }
        });
    }
    cancelEdit() {
        this.setState({
            editingId: null
        });
    }

    toggleTodo(id) {
        const isDone = this.state.todos.find(v => v.id === id).isDone;
        ax({
            method: 'put',
            url: `/${id}`,
            data: { isDone: !isDone },
            res: ({data}) => {
                const newTodos = [...this.state.todos];
                const editIndex = newTodos.findIndex(v => v.id === id);
                newTodos.splice(editIndex, 1, data);
                this.setState({
                    todos: newTodos
                });
            }
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

    deleteCompleted() {
        const axp = this.state.todos
            .filter(v => v.isDone)
            .map(todo => ax({
                method: 'delete',
                url: `/${todo.id}`
            }));
        const newTodos = this.state.todos.filter(v => !v.isDone);
        axios.all(axp)
        .then(()=> {
            this.setState({ todos: newTodos });
        })
        .catch(err => { console.err(err); });
    }
    render(){
        console.log('render');
        const {
            todos,
            editingId
        } = this.state;
        const filterName = this.props.routeParams.filter;

        const activeLength = todos.filter(v => !v.isDone).length;
        const viewTodos = todos.filter(({isDone}) => {
            if(
                !filterName ||
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
                    deleteCompleted = {()=> this.deleteCompleted()}
                />
            </div>
        );
    }
}

export default App;
