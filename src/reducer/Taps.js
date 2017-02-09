const tabReducer = (state = {
    focused : 0
}, action) => {
    switch (action.type) {
    default : return state;
    case 'CHANGE_TAB' : {
        return {
            focused : action.focused
        };
    }
    }
};

export default tabReducer;
