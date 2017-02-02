import React, {Component} from 'react';

import InputBox from './InputBox';
import AccoutBook from './AccountBook';

class App extends Component {
    constructor() {
        super();
        this.state = {
            total : 0,
            accountBook : []
        };
    }
    
    addDeposit(deposit) {
        const total = this.state.total + (deposit * 1);
        this.setState({
            accountBook : [
                ...this.state.accountBook, 
                {
                    deposit : Number(deposit).toLocaleString('en'),
                    total : Number(total).toLocaleString('en')
                }
            ],
            total
        });
    }
    
    addWithdraw(withdraw) {
        const total = this.state.total - (withdraw * 1);
        if(total < 0) {
            alert('잔액이 부족합니다');
            return;
        }
        this.setState({
            accountBook : [
                ...this.state.accountBook, 
                {
                    withdraw : Number(withdraw).toLocaleString('en'),
                    total : Number(total).toLocaleString('en')
                }
            ],
            total
        });
    }
    
    render() {
        const accountList = this.state.accountBook.map(({deposit, withdraw, total}, i) => (
            <AccoutBook
                key={i}
                deposit={deposit}
                withdraw={withdraw}
                total={total}
            />
        ));
        return (
            <div>
                <InputBox 
                    addDeposit = {(value) => this.addDeposit(value)}
                    addWithdraw = {(value) => this.addWithdraw(value)}
                />
                <table>
                    <thead>
                        <tr>
                            <th>입금</th>
                            <th>출금</th>
                            <th>잔액</th>
                        </tr>
                    </thead>
                    <tbody>
                        {accountList}
                    </tbody>
                </table>
                
            </div>
        );
    }
}

export default App;
