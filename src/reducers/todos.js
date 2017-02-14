const initialState = {
    todos: [
        {id: 1, text: '아메리카노?'},
        {id: 2, text: '카페라떼'},
        {id: 3, text: '카푸치노'}
    ],
    editingId: null
};

// const todoReducerMapper = {
//     'a' : () => {},
//     'b' : () => {},
// };
// 
// export default (state = initialState, action) => {
//     todoReducerMapper[action.type] ? todoReducerMapper[action.type](state, action) : state;
// };

const todosReducer = (state = initialState, action) => {
    switch (action.type) {
    default: return state;
    case 'ADD_TODO': {
        return {
            todos: [
                ...state.todos,
                {
                    id: Date.now(),
                    text: action.text
                }
            ],
            editingId : null
        };
    }
    case 'DELETE_TODO': {
        const newTodos = [...state.todos];
        const deleteIndex = newTodos.findIndex(v=>v.id === action.id);
        newTodos.splice(deleteIndex, 1);
        return {
            todos : newTodos,
            editingId : null
        };
    }
    case 'EDIT_TODO': {
        return {
            todos: state.todos,
            editingId: action.id
        };
    }
    case 'SAVE_TODO': {
        const newTodos = [...state.todos];
        const editIndex = newTodos.findIndex(v=>v.id === action.id);
        newTodos[editIndex].text= action.newText;
        return {
            todos : newTodos, 
            editingId: null
        };
    }
    case 'CANCEL_TODO': {
        return {
            todos : state.todos,
            editingId: null
        };
    }
    case 'TOGGLE_TODO': {
        const newTodos = [...state.todos];
        const toggleIndex = newTodos.findIndex(v=>v.id === action.id);
        newTodos[toggleIndex].isDone = !newTodos[toggleIndex].isDone;
        return {
            todos : newTodos,
            editingId : null
        };
    }
    case 'TOGGLE_ALL': {
        const isAll = state.todos.every(v=>v.isDone);
        const newTodos = state.todos.map(todo=> {
            todo.isDone = !isAll;
            return todo;
        });
        return {
            todos : newTodos,
            editingId : null
        };
    }
    case 'DELETE_COMPLETED': {
        const newTodos = state.todos.filter(v=> !v.isDone);
        return {
            todos: newTodos,
            editingId: null
        };
    }
    }
};

export default todosReducer;
