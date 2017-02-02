import React, {Component} from 'react';

class AccountBook extends Component {
    render() {
        const {
            deposit,
            withdraw,
            total
        } = this.props;
        return (
            <tr>
                <td>{deposit}</td>
                <td>{withdraw}</td>
                <td>{total}</td>
            </tr>
        );
    }
}

export default AccountBook;
