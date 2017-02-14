import React, { Component } from 'react';
import { connect } from 'react-redux';
import TodoActions from '../actions/todos';

import Header from './Header';
import TodoList from './TodoList';
import Footer from './Footer';

const mapStateToProps = state => ({
    todos: state.todos,
    editingId: state.editingId
});
const mapDispatchToProps = dispatch => ({
    addTodo         : text => dispatch(TodoActions.addTodo(text)),
    deleteTodo      : id => dispatch(TodoActions.deleteTodo(id)),
    editTodo        : id => dispatch(TodoActions.editTodo(id)),
    saveTodo        : (id, newText) => dispatch(TodoActions.saveTodo(id, newText)),
    cancelEdit      : () => dispatch(TodoActions.cancelEdit()),
    toggleTodo      : id => dispatch(TodoActions.toggleTodo(id)),
    toggleAll       : () => dispatch(TodoActions.toggleAll()),
    deleteCompleted : () => dispatch(TodoActions.deleteCompleted())
});

class App extends Component {
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
                <Header addTodo={addTodo}/>
                <TodoList
                    todos      = {viewTodos}
                    editingId  = {editingId}
                    deleteTodo = {deleteTodo}
                    saveTodo   = {saveTodo}
                    editTodo   = {editTodo}
                    cancelEdit = {cancelEdit}
                    toggleTodo = {toggleTodo}
                    toggleAll  = {toggleAll}
                />
                <Footer
                    filterName      = {filterName}
                    activeLength    = {activeLength}
                    isSomeCompleted = {isSomeCompleted}
                    deleteCompleted = {deleteCompleted}
                />
            </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
