import React, {Component} from 'react';
import {connect} from 'react-redux';
import InputBox from '../component/InputBox';
import AccountBook from '../component/AccountBook';
import Taps from '../component/Taps';
import bankAction from '../action/bank';
import TapsAction from '../action/Taps';

const stateToProps = state => ({
    account : state.bank.account,
    effect : state.bank.effect,
    focused : state.tab.focused
});

const dispatchToProps = dispatch => ({
    save : val => dispatch(bankAction.save(val)),
    withdraw : val => dispatch(bankAction.withdraw(val)),
    changeTab : index => dispatch(TapsAction.changeTab(index))
});

class App extends Component {
    render(){
        const {
            account,
            save,
            withdraw,
            focused,
            changeTab,
            effect,
        } = this.props;
        
        return (
            <div className={effect ? 'effect' : ''}>
                <Taps focused={focused} changeTab={changeTab} />
                <InputBox 
                    save={val=>save(val)}
                    withdraw={val=>withdraw(val)}
                />
                <AccountBook 
                    account = {account}
                />
            </div>
        );
    }
}

export default connect(stateToProps, dispatchToProps)(App);
