import React, {Component} from 'react';

import Header from './Header';
import TodoList from './TodoList';
import Footer from './Footer'; 

class App extends Component{
    constructor() {
        super();
        this.state = {
            todos: [
                {id: 1, text: '아메리카노?'},
                {id: 2, text: '카페라떼'},
                {id: 3, text: '카푸치노'}
            ],
            editingId: null
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
        });
    }
    
    deleteTodo(id) {
        const newTodos = [...this.state.todos];
        const deleteIndex = newTodos.findIndex(v=>v.id === id);
        newTodos.splice(deleteIndex, 1);
        this.setState({todos : newTodos});
    }
    
    editTodo(id) {
        this.setState({
            editingId: id
        });
    }
    
    saveTodo(id, newText) {
        const newTodos = [...this.state.todos];
        const editIndex = newTodos.findIndex(v=>v.id === id);
        newTodos[editIndex].text=newText;
        this.setState({todos : newTodos, editingId: null});
    }
    cancelEdit() {
        this.setState({
            editingId: null
        });
    }
    
    toggleTodo(id) {
        const newTodos = [...this.state.todos];
        const toggleIndex = newTodos.findIndex(v=>v.id === id);
        newTodos[toggleIndex].isDone = !newTodos[toggleIndex].isDone;
        this.setState({todos : newTodos});
    }
    
    toggleAll() {
        const isAll = this.state.todos.every(v=>v.isDone);
        const newTodos = this.state.todos.map(todo=> {
            todo.isDone = !isAll;
            return todo;
        });
        this.setState({
            todos : newTodos
        });
    }
    
    deleteCompleted() {
        const newTodos = this.state.todos.filter(v=> !v.isDone);
        this.setState({todos : newTodos});
    }
    
    render() {
        const {
            todos,
            editingId
        } = this.state;
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
                <Header addTodo={text => this.addTodo(text)} />
                <TodoList 
                    todos={viewTodos} 
                    deleteTodo={todo => this.deleteTodo(todo)}
                    saveTodo={(id, text) => this.saveTodo(id, text)}
                    editTodo={(id)=>this.editTodo(id)}
                    editingId={editingId}
                    cancelEdit={()=>this.cancelEdit()}
                    toggleTodo={(id)=>this.toggleTodo(id)}
                    toggleAll={()=>this.toggleAll()}
                />
                <Footer 
                    filterName={filterName}
                    activeLength={activeLength}
                    isSomeCompleted={isSomeCompleted}
                    selectFilter={filter=> this.selectFilter(filter)}
                    deleteCompleted={() => this.deleteCompleted()}
                />
            </div>
        );
    }
}

export default App;
