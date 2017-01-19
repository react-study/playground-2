import React, { Component } from 'react';

class Header extends Component{
	handleKeyDown(event){
		const val = event.target.value;
		if(!val || event.keyCode !== 13){
			return;
		}
		this.props.addTodo(val);
		event.target.value = '';
	}

	render(){
		return(
			<header>
				<div className="todo-app__header">todos</div>
				<input 
					type="text" 
					className="todo-app__new-todo"
					onKeyDown={ e => this.handleKeyDown(e)}
					placeholder="What needs to be done?"
				/>
			</header>
		);
	}
}

export default Header;