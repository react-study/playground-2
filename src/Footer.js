import React , { Component } from 'react';
import classNames from 'classnames';

const Footer =({
	selectFilter,
	filterName,
	activeLength,
	deletedCompleted,
	isSomeCompleted
}) => (
	<div className="footer">
		<span className="todo-count">
			<strong>{activeLength}</strong>
			<span>{activeLength > 1 ? 'item' : 'items'}</span>
		</span>
		<ul className="todo-filters">
			<li>
				<a 
					href="javascript:void(0)" 
					onClick={() => selectFilter('all')}
					className={filterName === 'all' ? 'selected' : ''}
				>
				All</a>
			</li>
			<li>
				<a 
					href="javascript:void(0)" 
					onClick={() => selectFilter('active')}
					className={filterName == 'active' ? 'selected' : ''}
				>
				Active</a>
			</li>
			<li>
				<a
				 	href="javascript:void(0)" 
				 	onClick={() => selectFilter('completed')}
				 	className={filterName === 'completed' ? 'selected' :''}
				 >Completed</a>
			</li>
		</ul>

		<button 
			className={classNames(
				'todo-delete-completed' , 
				{'hidden' : !isSomeCompleted}
				)
			}
			onClick={deletedCompleted}
		>
		Delete Completed</button>
	</div>
);
	

export default Footer;