import React from 'react';
import ClassNames from 'classnames';

const Footer = ({
    selectFilter,
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
                <a
                    onClick={()=> selectFilter('all')}
                    className={ClassNames({
                        'selected': filterName === 'all'
                    })}
                >All</a>
            </li>
            <li>
                <a
                    onClick={()=> selectFilter('active')}
                    className={ClassNames({
                        'selected' : filterName === 'active'
                    })}
                >Active</a>
            </li>
            <li>
                <a
                    onClick={()=> selectFilter('completed')}
                    className={ClassNames({
                        'selected' : filterName === 'completed'
                    })}
                >Completed</a>
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
