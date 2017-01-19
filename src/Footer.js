import React from 'react';
import ClassNames from 'classnames';
    
const Footer = ({
    selectFilter,
    filterName,
    isSomeCompleted,
    activeLength,
    deleteCompleted
}) => (
    <div className="footer">
        <span className="todo-count">
            <strong>{activeLength}</strong>{' '}
            <span>{activeLength > 1 ? 'items' : 'item'}</span>
        </span>
        <ul className="todo-filters">
            <li>
                <a
                    onClick={()=>selectFilter('all')}
                    className={ClassNames({
                        'selected' : filterName === ''
                    })}
                >
                All</a>
            </li>
            <li>
                <a 
                    onClick={()=>selectFilter('active')}
                    className={ClassNames({
                        'selected' : filterName === 'active'
                    })}
                >Active</a>
            </li>
            <li>
                <a 
                    onClick={()=>selectFilter('complited')}
                    className={ClassNames({
                        'selected' : filterName === 'complited'
                    })}
                >Complited</a>
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
