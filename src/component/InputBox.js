// src/component/InputBox.js

import React, { Component } from 'react';

class InputBox extends Component {
    save() {
        this.props.save(this.inputbox.value);
        this.inputbox.value = '';
        this.inputbox.focus();
    }
    withdraw() {
        this.props.withdraw(this.inputbox.value);
        this.inputbox.value = '';
        this.inputbox.focus();
    }
    render() {
        return (
            <div>
                <input
                    ref={ref => this.inputbox = ref}
                    type="number"
                />
                <button onClick={()=> this.save()}>입금</button>
                <button onClick={()=> this.withdraw()}>출금</button>
            </div>
        );
    }
}

export default InputBox;
