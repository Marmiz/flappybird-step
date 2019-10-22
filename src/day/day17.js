import React from "react";
import "../App.css";
import CONF from "../conf.js";

/**
 * Linear Jump
 *
 * Take current top position,
 * adds 100
 *
 * update state with new top position
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
    window.addEventListener('keydown', this.handlePress)
  }

  /** DEV ONLY */
  componentWillUnmount() {
    clearInterval(this.t);
    window.removeEventListener('keydown', this.handlePress)
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

  /**
   * Compute Jumping
   */
  jump = () => {
    const { top } = this.state;
    // update
    const newPos = top - 100; // random number

    this.setState({ top: newPos });
  }

  /**
   * event handler
   */
  handlePress = e => {
    const kc = e.keyCode;

    // space -> Jump
    if(kc === 32) {
      this.jump();
    }
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
