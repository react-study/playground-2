import React, {Component} from 'react';

class InputBox extends Component {
    checkValue(fnc) {
        const regNumber = /^[0-9]*$/;
        if(this.inputValue.value === '' || !regNumber.test(this.inputValue.value)) {
            alert('숫자만 입력해주시기 바랍니다.');
        } else {
            fnc(this.inputValue.value);
        }
        this.inputValue.value = '';
    }
    
    render() {
        return (
            <div>
                <input type="text" ref={ref=>{ this.inputValue = ref; }}/>
                <button onClick={()=>this.checkValue(this.props.addDeposit)}>입금</button>
                <button onClick={()=>this.checkValue(this.props.addWithdraw)}>출금</button>
            </div>
        );
    }
}

export default InputBox;
