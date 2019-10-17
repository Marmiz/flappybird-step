import React from "react";
import "../App.css";
import CONF from "../conf.js";

/**
 * Set bottom limit
 * 
 * As you can see now the bird falls down indefinitely.
 * Add a maximum top position after which the bird will stop falling, the bottom edge
 *
 * Check conf.js for the list of config values
 * 
 * in fall()
 * 1 - import maxBottom from conf
 * 2 - return newPos if <= maxBottom otherwise maxBottom
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

    this.setState({
      top: newFallPosition.newPos,
    });
  }

  /**
   * Compute falling down
   * @returns {Object.<number>}
   */
  fall = () => {
    const { top } = this.state;
    const { maxBottom } = CONF;
    // update
    const newPos = top + 10; // random number

    //return new pos
    return { newPos: newPos <= maxBottom ? newPos : maxBottom };
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
