import React, { Component } from 'react';

class Footer extends Component {
    render () {
        return (
            <div className="footer">
                <span className="todo-count">0 item left</span>
                <ul className="todo-filters">
                    <li>
                        <a href="">All</a>
                    </li>
                    <li>
                        <a href="">Active</a>
                    </li>
                    <li>
                        <a href="">Complated</a>
                    </li>
                </ul>
                <button className="todo-delete-complate">
                    delete Complate
                </button>
            </div>

        );
    }
}

export default Footer;