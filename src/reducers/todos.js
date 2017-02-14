const initialState = {
    todos : [
        {id: 1, text: '치킨?'},
        {id: 2, text: '커피?'}
    ],
    editingId: null
};

/*
const todoResucerMapper = {
    'a' : (),
    'b' :

};

export default (state = initialState, action) =>
    todoReducerMapper[action.type]
    ? todoResucerMapper[action.type](state, action)
    : state;
*/

const todoReducer = (state = initialState , action) => {
    switch(action.type) {
        default : return state;
        case 'ADD_TODO' :return {
             todos: [
                ...state.todos, {
                    id: Date.now(),
                    text : action.text
                }
             ],
            editingId : null
        };
        case 'DELETE_TODO' : {
                const newTodos = [...state.todos];
                const deleteIndex = newTodos.findIndex(v => v.id === id);
                newTodos.splice(deleteIndex, 1);
                return {
                    todos: newTodos,
                    editingId : null
                };
        };
        case 'EDIT_TODO' :
            return {
                todos: state.todos,
                editingId: action.id
            };

        case 'SAVE_TODO' :
            {
                const newTodos = [...state.todos];
                const editIndex = newTodos.findIndex(v => v.id === action.id);
                newTodos[editIndex].text = newText;
                return {
                    todos: newTodos,
                    editingId: null
                };
            };
        case 'CANCEL_EDIT' :
            return {
                editingId: null
            };

        case 'TOGGLE_TODO' : {
            const newTodos = [...state.todos];
            const toggleIndex = newTodos.findIndex(v => v.id === action.id);
            newTodos[toggleIndex].isDone = !newTodos[toggleIndex].isDone;
            return {
                todos: newTodos,
                editingId : null
            };
        };
        case 'TOGGLE_ALL' : {
            const isAll = state.todos.every(v => v.isDone);
            const newTodos = state.todos.map(todo => {
                todo.isDone = !isAll;
                return todo;
            });
            return {
                todos: newTodos,
                editingId : null
            };

        };
        case 'DELETE_COMPLETED' : {
            const newTodos = state.todos.filter(v => !v.isDone);
            return {
                todos: newTodos,
                editingId : null
            };
        };

    }
};
/*
addTodo(text){
    this.setState({
        todos: [
            ...this.state.todos, {
                id: Date.now(),
                text
            }
        ]
    });
},
deleteTodo(id){
    const newTodos = [...this.state.todos];
    const deleteIndex = newTodos.findIndex(v => v.id === id);
    newTodos.splice(deleteIndex, 1);
    this.setState({ todos: newTodos });
},
editTodo(id){
    this.setState({
        editingId: id
    });
},
saveTodo(id, newText){
    const newTodos = [...this.state.todos];
    const editIndex = newTodos.findIndex(v => v.id === id);
    newTodos[editIndex].text = newText;
    this.setState({
        todos: newTodos,
        editingId: null
    });
},
cancelEdit(){
    this.setState({
        editingId: null
    });
},
toggleTodo(id){
    const newTodos = [...this.state.todos];
    const toggleIndex = newTodos.findIndex(v => v.id === id);
    newTodos[toggleIndex].isDone = !newTodos[toggleIndex].isDone;
    this.setState({
        todos: newTodos
    });
},
toggleAll(){
    const isAll = this.state.todos.every(v => v.isDone);
    const newTodos = this.state.todos.map(todo => {
        todo.isDone = !isAll;
        return todo;
    });
    this.setState({
        todos: newTodos
    });
},
deleteCompleted(){
    const newTodos = this.state.todos.filter(v => !v.isDone);
    this.setState({ todos: newTodos });
}
*/
export default todoReducer;