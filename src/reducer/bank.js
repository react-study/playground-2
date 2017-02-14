const initialState = {
    account: [],
    total: 0,
    effect: false
};

const bankReducer = (state = initialState, action) => {
    switch(action.type) {
    default: return state;
    case 'SAVE_MONEY': {
        const newResult = state.total + +action.val;
        const newAccount = [
            ...state.account, {
                type: 'save',
                val: action.val,
                result: newResult
            }
        ];
        return {
            account: newAccount,
            total: newResult
        };
    }

    case 'WITHDRAW_MONEY': {
        const newResult = state.total - +action.val;
        const newAccount = [
            ...state.account, {
                type: 'withdraw',
                val: action.val,
                result: newResult
            }
        ];
        return {
            account: newAccount,
            total: newResult
        };
    }

    case 'SHOW_EFFECT': {
        return Object.assign({}, state, {
            effect: true
        });
    }

    case 'HIDE_EFFECT': {
        return Object.assign({}, state, {
            effect: false
        });
    }
    }
};


export default bankReducer;