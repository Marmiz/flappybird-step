import React from "react";
import "../App.css";

/**
 * New stateless component
 *
 * Move bird to a new stateless component
 */

const Bird = () => {
  return <div className="Bird"></div>;
};

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      top: 30
    };
  }

  render() {
    return (
      <div className="App">
        <Bird />
      </div>
    );
  }
}

export default App;
