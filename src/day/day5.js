import React from "react";
import "../App.css";

/**
 * Class
 *
 * In order to add state we need to convert App from function to Class.
 * To convert it we have to follow the following steps
 *  1 - Create an ES6 class, with the same name, that extends React.Component.
 *  2 - Add a single empty method to it called render().
 *  3 - Move the body of the function into the render() method.
 *  4 - Delete the remaining empty function declaration.
 */

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <div className="Bird"></div>
      </div>
    );
  }
}

export default App;
