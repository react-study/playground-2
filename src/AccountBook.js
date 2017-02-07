import React, {Component} from 'react';

class AccountBook extends Component {
    render() {
        const accountData = this.props.account.map(({type, val, result}, i)=> (
            <tr key={`account${i}`}>
                <td>{type === 'save' ? val : ''}</td>
                <td>{type === 'withdraw'? val : ''}</td>
                <td>{result}</td>
            </tr>
        ));
        
        return(
            <table>
                <thead>
                    <tr>
                        <td>입금</td>
                        <td>출금</td>
                        <td>잔액</td>
                    </tr>
                </thead>
                <tbody>
                    {accountData}
                </tbody>
            </table>
                
            
        );
    }
}
export default AccountBook;
