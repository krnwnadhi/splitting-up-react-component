import React from "react";
import "./App.css";
// import Counter from "./Components/Counter";
import CounterClone from "./Components/CounterClone";

class App extends React.Component {
  state = {
    showCounter: false,
  };

  render() {
    return (
      <div className="App">
        <h1> Example of React LifeCycle</h1>
        <button onClick={() => this.setState({ showCounter: !this.state.showCounter })}>{this.state.showCounter ? "Hide Counter" : "Show Counter"}</button>
        {/* {this.state.showCounter && <Counter />} */}
        {this.state.showCounter && <CounterClone />}
      </div>
    );
  }
}

export default App;
