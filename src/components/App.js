import React, {Component} from 'react';
import { connect } from 'react-redux';
import TodosActions from '../actions/todos';

import Header from './Header';
import TodoList from './TodoList';
import Footer from './Footer'; 

const mapStateToProps = state => ({
    todos : state.todos,
    editingId : state.editingId
});
const mapDispatchToProps = dispatch => ({
    addTodo:         text => dispatch(TodosActions.addTodo(text)),
    deleteTodo:      id => dispatch(TodosActions.deleteTodo(id)),
    editTodo:        id => dispatch(TodosActions.editTodo(id)),
    saveTodo:        (id, newText) => dispatch(TodosActions.saveTodo(id, newText)),
    cancelEdit:      () => dispatch(TodosActions.cancelEdit()),
    toggleTodo:      id => dispatch(TodosActions.toggleTodo(id)),
    toggleAll:       () => dispatch(TodosActions.toggleAll()),
    deleteCompleted: () => dispatch(TodosActions.deleteCompleted()),
});

class App extends Component{
    render() {
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
        
        const activeLength = todos.filter(v=>!v.isDone).length;
        const viewTodos = todos.filter(({isDone})=>{
            if(
                !filterName
                || (filterName === 'active' && !isDone)
                || (filterName === 'complited' && isDone)
            ) return true;
            return false;
        });
        const isSomeCompleted = todos.some(v=>v.isDone);
        return (
            <div className="todo-app">
                <Header addTodo={text => addTodo(text)} />
                <TodoList 
                    todos={viewTodos} 
                    deleteTodo={todo => deleteTodo(todo)}
                    saveTodo={(id, text) => saveTodo(id, text)}
                    editTodo={(id)=> editTodo(id)}
                    editingId={editingId}
                    cancelEdit={()=> cancelEdit()}
                    toggleTodo={(id)=> toggleTodo(id)}
                    toggleAll={()=> toggleAll()}
                />
                <Footer 
                    filterName={filterName}
                    activeLength={activeLength}
                    isSomeCompleted={isSomeCompleted}
                    selectFilter={filter=> this.selectFilter(filter)}
                    deleteCompleted={() => deleteCompleted()}
                />
            </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
