import React , {Component} from 'react';

class Todo extends Component{
	constructor(){
		super();
	}

	componentDidUpdate(){
		if(this.props.isEditing){
			this.textInput.value = this.props.text;
			this.textInput.focus();	
		} 
	}

	handleKeyDown(event){
		const text = event.target.value;
		console.log(text);
		if(!text || event.keyCode !== 13){
			return;
		}
		console.log(text);
		this.props.saveTodo(this.props.id , text);
	}


	render(){
		const text = this.props.text;
		// const {
		// 	text,
		//  isDone,
		// 	isEditing,
		// 	editTodo,
		// 	deleteTodo,
		// 	cancelEdit,
		// } = this.props;
		return(
			<li 
				className={[
					'todo-item',
					this.props.isEditing ? 'editing' : '',
					this.props.isDone ? 'completed' : ''
				].join(' ')}
			>
				<div 
					className="toggle" 
					onClick={this.props.toggleTodo}
				/>
				<div className="todo-item__view">
					<div 
						className="todo-item__view__text"
						onDoubleClick={this.props.editTodo}
					>{text}</div>
					<button 
						className="todo-item__destroy"
						onClick={this.props.deleteTodo}
						>

					</button>
				</div>
				<input 
					className="todo-item__edit" 
					type="text"
					ref={ ref => {this.textInput = ref;}}
					onKeyDown={e => this.handleKeyDown(e)}
					onBlur={this.props.cancelEdit}
				/>
			</li>
		)
	}
}

export default Todo;