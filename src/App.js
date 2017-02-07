import React, {Component} from 'react';
import InputBox from './InputBox';
import AccountBook from './AccountBook';

class App extends Component {
    constructor() {
        super();
        this.state = {
            account: [],
            total : 0
        };
    }
    save(val) {
        val = val * 1;
        const newResult = this.state.total + val;
        const newAccount = [...this.state.account,{
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
        const newAccount = [...this.state.account,{
            type: 'withdraw',
            val,
            result: newResult
        }];
        this.setState({
            account: newAccount,
            total: newResult
        });
    }
    render(){
        return (
            <div>
                <InputBox 
                    save={val=>this.save(val)}
                    withdraw={val=>this.withdraw(val)}
                />
                <AccountBook 
                    account = {this.state.account}
                />
            </div>
        );
    }
}

export default App;
