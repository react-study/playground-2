import React, {Component} from 'react';

class InputBox extends Component {
    save() {
        this.props.save(this.inputBox.value);
        this.inputBox.value = '';
        this.inputBox.focus();
    }
    withdraw() {
        this.props.withdraw(this.inputBox.value);
        this.inputBox.value = '';
        this.inputBox.focus();
    }
    render() {
        return(
            <div>
                <input 
                    ref={ref=>this.inputBox = ref}
                    type="number"
                />
                <button onClick={()=>this.save()}>입금</button>
                <button onClick={()=>this.withdraw()}>출금</button>
            </div>
        );
    }
}
export default InputBox;
