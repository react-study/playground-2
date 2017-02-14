import React, { Component } from 'react';
import { connect } from 'react-redux';
import TodoActions from '../actions/todos';


import axios from 'axios';

import Header from './Header';
import TodoList from './TodoList';
import Footer from './Footer';


const mapStateToProps = state => ({
    todos: state.todos,
    editingId: state.editingId
});
const mapDispatchToProps = dispatch => ({
    addTodo: text => dispatch(TodoActions.addTodo(text)),
    deleteTodo: id => dispatch(TodoActions.deleteTodo(id)),
    editTodo: id => dispatch(TodoActions.editTodo(id)),
    saveTodo: (id, newText) => dispatch(TodoActions.saveTodo(id, newText)),
    cancelEdit: () => dispatch(TodoActions.cancelEdit()),
    toggleTodo: id => dispatch(TodoActions.toggleTodo(id)),
    toggleAll: () => dispatch(TodoActions.toggleAll()),
    deleteCompleted: () => dispatch(TodoActions.deleteCompleted()),
});



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
    /*
    componentWillMount() {
        ax({
            method: 'get',
            res: ({data}) => {
                this.setState({ todos: data });
            }
        });
    }*/
    render(){
        const {
            todos,
            editingId,
            addTodo,
            deleteTodo,
            editTodo,
            saveTodo,
            cancelEdit,
            toggleTodo,
            toggleAll,
            deleteCompleted
    } = this.props;
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
                <Header addTodo={text => addTodo(text)}/>
                <TodoList
                    todos      = {viewTodos}
                    editingId  = {editingId}
                    deleteTodo = {a => deleteTodo(a)}
                    saveTodo   = {(id, text) => saveTodo(id, text)}
                    editTodo   = {id => editTodo(id)}
                    cancelEdit = {() => cancelEdit()}
                    toggleTodo = {id => toggleTodo(id)}
                    toggleAll  = {()=> toggleAll()}
                />
                <Footer
                    filterName      = {filterName}
                    activeLength    = {activeLength}
                    isSomeCompleted = {isSomeCompleted}
                    deleteCompleted = {()=> deleteCompleted()}
                />
            </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);