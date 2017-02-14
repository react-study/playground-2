const TodoActions = {
    addTodo(text) {
        return {
            type : 'ADD_TODO',
            text
        };
    },
    deleteTodo(id){
        return {
            type : 'DELETE_TODO',
            id
        };
    },
    editTodo(id){
        return {
            type : 'EDIT_TODO',
            id
        };
    },
    saveTodo(id, newText){
        return {
            type : 'SAVE_TODO',
            id,
            newText
        };
    },
    cancelEdit(){
        return {
            type : 'CANCEL_EDIT'

        };
    },
    toggleTodo(id){
        return {
            type : 'TOGGLE_TODO',
            id
        };
    },
    toggleAll(){
        return {
            type : 'TOGGLE_ALL'
        };
    },
    deleteCompleted(){
        return {
            type : 'DELETE_COMPLETED'
        };
    }
};

export default TodoActions;


