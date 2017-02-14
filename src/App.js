import React, { Component } from 'react';
import { connect } from 'react-redux';
import InputBox from './InputBox';
import AccountBook from './AccountBook';

const stateToProps = state => ({
    account: state.account
});

const actionToProps = dispatch => ({
    save: val => dispatch({
        type: 'SAVE_MONEY',
        val
    }),
    withdraw: val => dispatch({
        type: 'WITHDRAW_MONEY',
        val
    })
});

class App extends Component {
    /*
    save(val) {
        val = val * 1;
        const newResult = this.state.total + val;
        const newAccount = [...this.state.account, {
            type: 'save',
            val,
            result: newResult
        }];
        this.setState({
            account: newAccount,
            total: newResult
        });
    }
    withdraw(val) {
        val = val * 1;
        const newResult = this.state.total - val;
        const newAccount = [...this.state.account, {
            type: 'withdraw',
            val,
            result: newResult
        }];
        this.setState({
            account: newAccount,
            total: newResult
        });
    }
    */
    render() {
        const {
            account,
            save,
            withdraw
        } = this.props;

        return (
            <div>
                <InputBox
                    save={val => save(val)}
                    withdraw={val => withdraw(val)}
                />
                <AccountBook account={account} />
            </div>
        );
    }
}

export default connect(stateToProps, actionToProps)(App);
