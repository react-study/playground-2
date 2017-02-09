import React, { Component } from 'react';

class AccountBook extends Component {
    render() {
        const accountData = this.props.account.map(({type, val, result}, i) => (
            <tr key={'account' + i}>
                <td>{type === 'save' ? val : ''}</td>
                <td>{type === 'withdraw' ? val : ''}</td>
                <td>{result}</td>
            </tr>
        ));
        return (
            <table>
                <thead>
                <tr>
                    <th>입금</th>
                    <th>출금</th>
                    <th>계</th>
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