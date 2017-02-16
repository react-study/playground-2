// actions/todos.js
import axios from 'axios';

const axiosApi = axios.create({
    baseURL: 'http://localhost:2403/todos',
    timeout: 1000,
});

const ax = ({
    method = 'put',
    url = '/',
    data = null,
    res,
    err = err => { console.error(err); }
})=> axiosApi[method](url, data).then(res).catch(err);

const TodosActions = {
    getTodos() {
        return dispatch => {
            dispatch({
                type: 'GET_TODOS_REQUEST'
            });
            ax({
                method: 'get',
                res: res => {
                    dispatch({
                        type: 'GET_TODOS',
                        todos: res.data
                    });
                }
            });
        }
    },
    addTodo(text) {
        return dispatch => {
            dispatch({
                type: 'ADD_TODO_REQUEST'
            });
            ax({
                method: 'post',
                data: { text },
                res: res => {
                    dispatch({
                        type: 'ADD_TODO',
                        newTodo: res.data
                    });
                }
            });
        }
    },
    deleteTodo(id) {
        return dispatch => {
            dispatch({
                type: 'DELETE_TODO_REQUEST'
            });
            ax({
                method: 'delete',
                url: `/${id}`,
                res: res => {
                    dispatch({
                        type: 'DELETE_TODO',
                        id
                    })
                }
            });
        };
    },
    editTodo(id) {
        return {
            type: 'EDIT_TODO',
            id
        };
    },
    saveTodo(id, newText) {
        return dispatch => {
            dispatch({
                type: 'SAVE_TODO_REQUEST'
            });
            ax({
                url: `/${id}`,
                data: { text: newText },
                res: res => {
                    dispatch({
                        type: 'SAVE_TODO',
                        id,
                        newText
                    });
                }
            });
        }
    },
    cancelEdit() {
        return {
            type: 'CANCEL_EDIT'
        };
    },
    toggleTodo(id, newDone) {
        return dispatch => {
            dispatch({
                type: 'TOGGLE_TODO_REQUEST'
            });
            ax({
                url: `/${id}`,
                data: { isDone: newDone },
                res: res => {
                    dispatch({
                        type: 'TOGGLE_TODO',
                        id,
                        newDone
                    });
                }
            });
        }
    },
    toggleAll(todos) {
        return dispatch => {
            const isAll = todos.every(v => v.isDone);
            const axp = todos.map(todo => ax({
                url: `/${todo.id}`,
                data: { isDone: !isAll }
            }));
            axios.all(axp).then(res => {
                dispatch({
                    type: 'TOGGLE_ALL',
                    todos: res.map(v => v.data)
                });
            })
            .catch(err => { console.err(err); });
        }
    },
    deleteCompleted(todos) {
        return dispatch => {
            const axp = todos.filter(v => v.isDone).map(todo => ax({
                method: 'delete',
                url: `/${todo.id}`
            }));
            axios.all(axp).then(() => {
                dispatch({
                    type: 'DELETE_COMPLETED'
                });
            })
            .catch(err => { console.err(err); });
        }
    }
};

export default TodosActions;
