// import React from "react";
// import "./App.css";
// import RegularComponent from './Components/RegularComponent'
// import PureComponent from './Components/PureComponent'
// /**
//  * TODO: Please import the `RegularComponent` and `PureComponent`
//  */
// class App extends React.Component {
//   /**
//    * TODO: Please add a state to this component, the key is `name` and the initial value is `John`
//    */
//   state = {
//     name: 'John',
//     count: 0,
//   };

//   render() {
//     console.log("*** Parent Component Render***");
//     return (
//       <div className="App">
//         <button
//           onClick={() =>
//             this.setState({
//               name: 'John',
//               count: this.state.count + 1
//             })
//             // TODO: Please update the value of state `name` to `John`
//           }
//         >
//           Update state
//         </button>
//         <p> {this.state.count} </p>
//         {/* 
//           TODO: Please attach the `RegularComponent` and `PureComponent` here
//         */}
//         <RegularComponent name={this.state.name} />
//         <PureComponent name={this.state.name} />
//       </div>
//     );
//   }
// }

// export default App;



// AWAL - SENIN 23 November 2020


import React from 'react'
import CounterButton from './Components/CounterButton'
import "./App.css"
import Color from './Color'

class App extends React.Component {

  state = {
    show: false
  }

  handleClick = () => {
    this.setState({
      show: !this.state.show
    })
  }

  render() {
    return (
      <div className="App">
        <button onClick={this.handleClick}>
          {this.state.show ? 'Hide Counter' : 'Show Counter'}
        </button>
        {this.state.show && <CounterButton />}
        <br /> <br /> <br />
        <Color />
      </div>
    )
  }
}

export default App

// AKHIR - SENIN 23 November 2020
