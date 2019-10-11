import React from "react";
import "../App.css";

/**
 * State
 *
 * The state contains data specific to this component that may change over time.
 * The state is user-defined
 * It should be a plain JavaScript object.
 *
 * If some value isn’t used for rendering or data flow (for example, a timer ID), you don’t have to put it in the state.
 * Such values can be defined as fields on the component instance.
 *
 * To add state to a class
 * 1 - add a class constructor
 * 2 - assiging an itial this.state object
 * 3 - assign a 'top' key to this.state with an initial value of 60.
 */

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      top: 30,
    };
  }

  render() {
    return (
      <div className="App">
        <div className="Bird"></div>
      </div>
    );
  }
}

export default App;
