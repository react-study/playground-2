import React, { Component } from 'react';
import axios from 'axios';
import update from 'immutability-helper';

import Header from './Header';
import TodoList from './TodoList';
import Footer from './Footer';

const axiosApi = axios.create({
    baseURL: 'http://localhost:2403/todos',
    timeout: 1000,
});

const ax = ({
    method = 'put',
    url = '/',
    data = null,
    res = () => {},
    err = err => { console.error(err); }
})=> axiosApi[method](url, data).then(res).catch(err);

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
            res: ({ data }) => {
                this.setState({
                    todos: data
                });
            }
        });
    }
    addTodo(text) {
        ax({
            method: 'post',
            data: { text },
            res: ({data}) => {
                const newTodos = update(this.state.todos, {
                    $push: [data]
                });
                this.setState({
                    todos: newTodos
                });
            }
        });
    }
    deleteTodo(id) {
        const prevTodos = this.state.todos;
        const deleteIndex = prevTodos.findIndex(v => v.id === id);
        const newTodos = update(prevTodos, {
            $splice: [[deleteIndex, 1]]
        });

        this.setState({ todos: newTodos });

        ax({
            method: 'delete',
            url: `/${id}`,
            err: err => {
                this.setState({ todos: prevTodos });
            }
        });
    }
    editTodo(id) {
        this.setState({
            editingId: id
        });
    }

    saveTodo(id, newText) {
        const prevTodos = this.state.todos;
        const editIndex = newTodos.findIndex(v => v.id === id);
        const newTodos = update(prevTodos, {
            [editIndex]: {
                text: {
                    $set: newText
                }
            }
        });
        this.setState({
            todos: newTodos,
            editingId: null
        });

        ax({
            url: `/${id}`,
            data: { text: newText },
            err: err => {
                console.error(err);
                this.setState({
                    todos: prevTodos
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
        const prevTodos = this.state.todos;
        const editIndex = prevTodos.findIndex(v => v.id === id);
        const newDone = !prevTodos[editIndex].isDone;
        const newTodos = update(prevTodos, {
            [editIndex]: {
                isDone: {
                    $set: newDone
                }
            }
        });
        
        this.setState({ todos: newTodos });

        ax({
            url: `/${id}`,
            data: { isDone: newDone },
            err: err => {
                this.setState({ todos: prevTodos });
            }
        });
    }
    toggleAll() {
        const prevTodos = this.state.todos;
        const isAll = !prevTodos.every(v => v.isDone);
        const newTodos = update(prevTodos, {
            $apply: todos => todos.map(todo => {
                todo.isDone = isAll;
                return todo;
            })
        });
        
        this.setState({
            todos: newTodos
        });

        const axp = newTodos.map(todo =>
            axiosApi.put(`/${todo.id}`, { isDone: !isAll })
        );
        axios.all(axp).catch(() => {
            this.setState({ todos: prevTodos });
        });
    }

    deleteCompleted() {
        const prevTodos = this.state.todos;
        const newTodos = update(prevTodos, {
            $apply: todos => todos.filter(v => !v.isDone)
        });
        
        this.setState({
            todos: newTodos
        });

        const axp = prevTodos
            .filter(v => v.isDone)
            .map(todo => ax({
                method: 'delete',
                url: `/${todo.id}`
            }));

        axios.all(axp)
        .catch(() => {
            this.setState({ todos: prevTodos });
        });
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
