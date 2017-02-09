const save = val => {
    return dispatch => {
        dispatch({
            type : 'SAVE_MONEY',
            val
        });
        dispatch(changeEffect());
    };
};
const withdraw = val => {
    return dispatch => {
        dispatch({
            type : 'WITHDRAW_MONEY',
            val
        });
        dispatch(changeEffect());
    };
};

const changeEffect = () => {
    return dispatch => {
        dispatch({
            type : 'SHOW_EFFECT'
        });
        setTimeout(()=> {
            dispatch({
                type : 'HIDE_EFFECT'
            });
        }, 500);
    };
};

export default {
    save,
    withdraw
};
