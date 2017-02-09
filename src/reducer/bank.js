const initialState = {
    account: [],
    total:0
};

const bankReducer = (state = initialState, action) => {
    switch(action.type){
        case 'SAVE_MONEY':
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

        case 'WITHDRAW_MONEY':
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

        default:
            return state;
    }
};

export default bankReducer;