const TodosActions = {
    addTodo(text){
        return {
            type: 'ADD_TODO',
            text
        };
    },
    deleteTodo(id){
        return {
            type: 'DELETE_TODO',
            id
        };
    },
    editTodo(id){
        return {
            type: 'EDIT_TODO',
            id
        };
    },
    saveTodo(id, newText){
        return {
            type: 'SAVE_TODO',
            id,
            newText
        };
    },
    cancelEdit(){
        return {
            type: 'CANCEL_EDIT'
        };
    },
    toggleTodo(id){
        return {
            type: 'TOGGLE_TODO',
            id
        };
    },
    toggleAll(){
        return {
            type: 'TOGGLE_ALL'
        };
    },
    deleteComplated(){
        return {
            type: 'DELETE_COMPLEATED'
        };
    }
}

export default TodosActions;
