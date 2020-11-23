import React, { Component } from 'react'

class CounterButton extends Component {

    state = {
        counter: 0
    }

    plusButton = () => {
        this.setState({
            counter: this.state.counter + 1
        })
    };

    minusButton = () => {
        if (this.state.counter === 0) {
            this.setState({
                counter: 0
            });
        } else {
            this.setState({
                counter: this.state.counter - 1
            });
        }
    };

    render() {
        return (
            <div>
                <br />
                <button onClick={this.minusButton}>-</button>
                <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
                {this.state.counter}
                <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
                <button onClick={this.plusButton}>+</button>
            </div>
        )
    }
}

export default CounterButton