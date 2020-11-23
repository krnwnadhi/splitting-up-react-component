import React, { Component } from 'react'
import './App.css'

export class Color extends Component {
    state = {
        color: ''
    }

    onChangehandler = e => {
        this.setState({
            color: e.target.value
        })
    }

    render() {
        const styleColor = {
            background: this.state.color
        }

        return (
            <div style={styleColor}>
                <input
                    type="text"
                    onChange={this.onChangehandler}
                    value={this.state.color}
                />
            </div>
        )
    }
}

export default Color
