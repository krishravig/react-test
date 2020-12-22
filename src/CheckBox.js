/**
 * Created by ravkrishnan on 11/18/16.
 */
import React, { Component } from 'react';
import './App.css';

class CheckBox extends Component {
    constructor(props) {
        super(props);
        this.state = {checked:true};
        //this.stateChange = this.stateChange.bind(this);
    }
    stateChange = () => {
       this.setState({checked: !this.state.checked});
    }
    render() {
        var msg;
        if (this.state.checked)
            msg="checked";
        else
            msg="unchecked";
        return (
            <div>
            <input type='checkbox' onChange={this.stateChange} defaultChecked="true"/>
                <h1>checkbox is {msg}</h1>
        </div>);
    }
}


export default CheckBox;