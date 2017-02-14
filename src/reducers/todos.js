const initialState = {
    todos: [
        {id: 1, text: '치킨에 맥주 한 잔'},
        {id: 2, text: '삼겹살에 소주 한 잔'},
        {id: 3, text: '리코타샐러드에 봉골레 파스타'},
        {id: 4, text: '떡순튀'}
    ],
    editingId: null
};


const todoReducer = (state = initialState, action) = {
    switch(action.type){
    default: return state;
    case 'ADD_TODO': return {
        todos: [
            ...state.todos, {
                id: Date.now(),
                text: action.text
            }
        ],
        editingId: null
    };
    case 'DELETE_TODO': {
        const newTodos = [...state.todos];
        const deleteIndex = newTodos.findIndex(v => v.id === action.id);
        newTodos.splice(deleteIndex, 1);
        return({
            todos: newTodos,
            editingId: action.id
        });
    }
    case 'EDIT_TODO': return {
        todos: state.todos,
        editingId: action.id
    }
    case 'SAVE_TODO': {
        const newTodos = [...state.todos];
        const editIndex = newTodos.findIndex(v => v.id === action.id);
        newTodos[editIndex].text = action.newText;
        return({
            todos: newTodos,
            editingId: null
        });
    }
    case 'CANCEL_EDIT': return {
        todos: state.todos,
        editingId: null
    }
    case 'TOGGLE_TODO': {
        const newTodos = [...state.todos];
        const toggleIndex = newTodos.findIndex(v => v.id === action.id);
        newTodos[toggleIndex].isDone = !newTodos[toggleIndex].isDone;
        return({
            todos: newTodos,
            editingId: action.id
        });
    }
    case 'TOGGLE_ALL': {
        const isAll = state.todos.every(v => v.isDone);
        const newTodos = state.todos.map(todo => {
            todo.isDone = !isAll;
            return todo;
        });
        this.setState({
            todos: newTodos,
            editingId: null
        });
    }
    case 'DELETE_COMPLEATED': {
        const newTodos = this.state.todos.filter(v => !v.isDone);
        return({
            todos: newTodos,
            editingId: null
        });
    }

    }

}

export default todoReducer;

