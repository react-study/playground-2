import React from 'react';
import { Link } from 'react-router';
import ClassNames from 'classnames';

const Footer = ({
    filterName,
    activeLength,
    deleteCompleted,
    isSomeCompleted
}) => (
    <div className="footer">
        <span className="todo-count">
            <strong>{activeLength}</strong>{' '}
            <span>{activeLength > 1 ? 'items' : 'item'}</span>
            {' '}left
        </span>
        <ul className="todo-filters">
            <li>
                <Link to="/" className={ClassNames({
                    'selected' : !filterName
                })}>All</Link>
            </li>
            <li>
                <Link to="/active" className={ClassNames({
                    'selected' : filterName === 'active'
                })}>Active</Link>
            </li>
            <li>
                <Link to="/completed" className={ClassNames({
                    'selected' : filterName === 'completed'
                })}>Completed</Link>
            </li>
        </ul>
        <button
            className={ClassNames('todo-delete-completed', {
                'hidden' : !isSomeCompleted
            })}
            onClick={deleteCompleted}
        >
            Delete Completed
        </button>
    </div>
);

export default Footer;
