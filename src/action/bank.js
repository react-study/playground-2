const save = val => ({
    type: 'SAVE_MONEY',
    val
});

const withdraw = val => ({
    type: 'WITHDRAW_MONEY',
    val
});

export default {
    save,
    withdraw
};
