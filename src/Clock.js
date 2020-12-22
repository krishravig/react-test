import React, {Component} from 'react';
import Timer from './Timer.js';


class Clock extends Component {
    constructor(props) {
        super(props);
        this.state = {date: new Date().toLocaleTimeString()};
    }


    render(){
        const tick = () =>{
            this.setState({date: new Date().toLocaleTimeString()});
        }
        setInterval(tick, 1000);
        return (

        <div>
            <h1> Current Time: {this.state.date}</h1>
            <Timer value={this.state.date} />
        </div>
        );
    }
}

export default Clock;
