import React, { Component } from 'react'

let timeOut

class CounterClone extends Component {

    state = {
        count: 0,
        loading: true
    }

    componentDidMount() {
        console.log('Component Mounted');
        timeOut = setTimeout(() => {
            this.setState({
                loading: false,
            })
        }, 1000);
    }

    componentDidUpdate() {
        console.log('Component Updated')
    }

    componentWillUnmount() {
        console.log('Component Unmounted');
        clearTimeout(timeOut)
    }

    render() {
        if (this.state.loading) {
            return <p><i> Loading ...</i></p>
        }
        return (
            <div>
                <h6>Counter</h6>
                <p>Current Count is : {this.state.count} </p>
                <button onClick={() => this.setState({ count: this.state.count + 1 })}> Increase Counter </button>
            </div>
        )
    }
}

export default CounterClone
