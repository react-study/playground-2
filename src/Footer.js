import React, { Component } from 'react';

class Footer extends Component {
    render() {
        return (
            <div className="footer">
                <span className="todo-count">
                    <strong>{this.props.activeLength}</strong>{' '}
                    <span>{this.props.activeLength > 1 ? 'items' : 'item'}</span>{' '}left
                </span>
                <ul className="todo-filters">
                    <li>
                        <a
                            onClick={() => this.props.selectFilter('all')}
                            className={this.props.filterName == 'all' ? 'selected' : ''}
                        >All</a>
                    </li>
                    <li>
                        <a
                            onClick={() => this.props.selectFilter('active')}
                            className={this.props.filterName == 'active' ? 'selected' : ''}
                        >Active</a>
                    </li>
                    <li>
                        <a
                            onClick={() => this.props.selectFilter('completed')}
                            className={this.props.filterName == 'completed' ? 'selected' : ''}
                        >Completed</a>
                    </li>
                </ul>
                <button
                    className={[
                        'todo-delete-completed',
                        !this.props.isSomeCompleted ? 'hidden' : ''
                        ].join(' ')}
                        onClick={this.props.deleteCompleted}
                >
                    Delete Completed
                </button>
            </div>
        );
    }
}

export default Footer;
