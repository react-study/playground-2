import React, { Component } from 'react';
import { connect } from 'react-redux';

import InputBox from './InputBox';
import AccountBook from './AccountBook';

const stateToProps = state => ({
    account: state.account
});
const dispatchToProps = dispatch => ({
    save: val => dispatch({
        type: 'SAVE_MONEY',
        val
    }),
    withdraw : val => dispatch({
        type: 'WITHDRAW_MONEY',
        val
    })
});
class App extends Component{
    render(){
        const {
            account,
            save,
            withdraw
        }  = this.props;
        return (
            <div>
                <InputBox
                    save = {val => save(val)}
                    withdraw = {val => withdraw(val)}
                />
                <AccountBook account={account} />
            </div>
        );
    }
}

export default connect(stateToProps, dispatchToProps)(App);