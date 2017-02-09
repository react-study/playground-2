import React, { Component } from 'react';
import { connect } from 'react-redux';

import InputBox from '../component/InputBox';
import AccountBook from '../component/AccountBook';

import bankAction from '../action/bank';

const stateToProps = state => ({
	// State로 선언
	// App.js 안에서 감시 될 대상의 props 설정
	account : state.account
});

const dispatchToProps = dispatch => ({
	// 위 선언 된 state를 이용해 어떠한 액션들을 선언
	save : val => dispatch(bankAction.save(val)),
	withdraw : val => dispatch(bankAction.withdraw(val))
});

class App extends Component {
    // constructor() {
    //     super();
    //     this.state = {
    //         account: [],
    //         total: 0
    //     };
    // }
	//
    // save(val) {
    //     val = val * 1;
    //     const newResult = this.state.total + val;
    //     const newAccount = [...this.state.account, {
    //         type: 'save',
    //         val,
    //         result: newResult
    //     }];
    //     this.setState({
    //         account: newAccount,
    //         total: newResult
    //     });
    // }
    // withdraw(val) {
    //     val = val * 1;
    //     const newResult = this.state.total - val;
    //     const newAccount = [...this.state.account, {
    //         type: 'withdraw',
    //         val,
    //         result: newResult
    //     }];
    //     this.setState({
    //         account: newAccount,
    //         total: newResult
    //     });
    // }

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

// export default App;
export default connect(stateToProps , dispatchToProps)(App);
