import React from "react";
import "../App.css";

/**
 * Linear Fall
 *
 * in fall()
 * 1 - read current `top` val from this.state
 * 2 - add an arbitrary integer to it (eg 16)
 * 3 - return a new object with new fall position
 */

const Bird = ({ top }) => {
  const style = { top: `${top}px` };

  return <div className="Bird" style={style}></div>;
};

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      top: 30
    };
  }

  componentDidMount() {
    this.t = setInterval(() => this.checkGame(), 16.66 );
  }

  // Check game state and decide
  checkGame = () => {
    return this.updateGame();
  }

  // We update state only here.
  // Perform all our calculation first then pass the new data to setState
  updateGame = () => {
    const newFallPosition = this.fall();
    return false;
  }

  /**
   * Compute falling down
   * @returns {Object.<number>}
   */
  fall = () => {
    const { top } = this.state;
    // update
    const newPos = top + 10; // random number

    //return new pos
    return { newPos: newPos };
  }

  render() {
    const { top } = this.state;
    return (
      <div className="App">
        <Bird top={top} />
      </div>
    );
  }
}

export default App;
