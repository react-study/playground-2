
import React, { Component } from 'react';
import { connect } from 'react-redux';

import InputBox from '../component/InputBox';
import AccountBook from '../component/AccountBook';
import Tabs from '../component/Tabs';

import bankAction from '../action/bank';
import tabAction from '../action/tab';

const stateToProps = state => ({
    account: state.bank.account,
    effect: state.bank.effect,
    focused: state.tab.focused
});

const dispatchToProps = dispatch => ({
    save: val => dispatch(bankAction.save(val)),
    withdraw: val => dispatch(bankAction.withdraw(val)),
    changeTab: index => dispatch(tabAction.changeTab(index))
});

class App extends Component {
    render() {
        const {
            account,
            effect,
            save,
            withdraw,
            focused,
            changeTab
            } = this.props;

        return (
            <div className={effect ? 'effect' : ''}>
                <Tabs focused={focused} changeTab={changeTab} />
                <InputBox
                    save={val => save(val)}
                    withdraw={val => withdraw(val)}
                    />
                <AccountBook account={account} />
            </div>
        );
    }
}

export default connect(stateToProps, dispatchToProps)(App);