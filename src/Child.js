import React from 'react';

// class Child extends React.Component{
// 	constructor(){
// 		super();
// 		this.state = {
// 			isToggle : false
// 		}
// 		// React doesn't support auto binding
// 		// If want to binding manually, use below sentence.
// 		// this.handleClick = this.handleClick.bind(this)
// 	}

// 	handleClick(){
// 		this.setState({
// 			isToggle : !this.state.isToggle
// 		});
// 	}

// 	render(){
// 		const { isToggle } = this.state;
// 	    return (
// 	      <h1
// 	        style={{ color: isToggle ? '#f00' : '#00f' }}
// 	        {/*onClick={this.handleClick}*/}
// 	        onClick={()=>this.handleClick()}
// 	      >
// 	        Hello!!
// 	      </h1>
// 	    );
// 	}
// }

// class Child extends React.Component {
//   render() {

//     const {
//     	name , gender , isBlue ,
//     	changeColor = () => {} // changeColor 없을 떄, 기본함수 정의
//     } = this.props;
//     return (
//       <div 
//       	style={{
//       		backgroundColor : isBlue ? '#ff0' : '#fff',
//       		transform : 'translate3d(10px,0,0)',
//       		transition : 'all '+(isBlue? '0ms' : '0.4s')
//       	}}
//       	onClick={()=>changeColor()}
//       >
//         <h2>{name}</h2>
//         <strong>{gender}</strong>
//       </div>
//     )
//   }
// };

// Child.defaultProps = {
//   name: '이름없음',
//   gender: '성별없음',
//   isBlue : false
// };

// export default Child;

class Child extends React.Component {
  constructor() {
    super();
    this.state = { toggleColor: false };
  }
  componentWillMount() {
    console.log('1. 컴포넌트가 마운트될 예정입니다.');
  }
  componentDidMount() {
    console.log('2. 컴포넌트가 마운트되었습니다.');
  }
  componentWillReceiveProps(nextProps) {
    console.log('3. 컴포넌트가 새로운 props를 받을 예정입니다 : ', nextProps);
  }
  shouldComponentUpdate(nextProps, nextState) {
    console.log('4. 컴포넌트를 업데이트 해야할지 말지를 판단합니다 : ', nextProps, nextState);
    const shouldUpdate = confirm('업데이트 할까요?');
    return !!shouldUpdate;
  }
  componentWillUpdate(nextProps, nextState) {
    console.log('5. 컴포넌트가 업데이트될 예정입니다 : ', nextProps, nextState);
  }
  componentDidUpdate(prevProps, prevState) {
    console.log('6. 컴포넌트가 업데이트되었습니다 : ', prevProps, prevState);
  }
  componentWillUnmount() {
    console.log('7. 컴포넌트가 언마운트될 예정입니다.');
  }
  bgToggle() {
    this.setState({
      toggleColor: !this.state.toggleColor
    });
  }
  render() {
    const toggleColor = this.state.toggleColor;
    const list = this.props.list.map((v, i) => <li key={i}>{v}</li>);
    return (
      <div>
        <ul style={{
          backgroundColor: toggleColor ? '#acf' : '#fca'
        }}>{list}</ul>
        <button onClick={()=> this.bgToggle()}>색상변경</button>
      </div>
    );
  }
}

Child.propTypes = {
	list : React.PropTypes.arrayOf(
		React.PropTypes.oneOfType([
			React.PropTypes.string,
			React.PropTypes.bool
		])
	)
}

export default Child;

