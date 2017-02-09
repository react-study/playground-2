import React, {Component} from 'react';
import {connect} from 'react-redux';
import InputBox from '../component/InputBox';
import AccountBook from '../component/AccountBook';
import bankAction from '../action/bank';

const stateToProps = state => ({
    account : state.account
});

const dispatchToProps = dispatch => ({
    save : val => dispatch(bankAction.save(val)),
    withdraw : val => dispatch(bankAction.withdraw(val))
});

class App extends Component {
    render(){
        const {
            account,
            save,
            withdraw
        } = this.props;
        
        return (
            <div>
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
