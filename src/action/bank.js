const save = val => dispatch({
    type: 'SAVE_MONEY',
    val
});

const withdraw = val =>dispatch({
    type: 'WITHDRAW_MONEY',
    val
});

export default {
    save,
    withdraw
}