import React from "react";
import "../App.css";
import CONF from "../conf.js";

/**
 * Event Handler
 *
 * on space call jump()
 *
 */

const Bird = ({ top }) => {
  const style = { top: `${top}px` };

  return <div className="Bird" style={style}></div>;
};

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      top: 30,
      deltaTop: 0,
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
      deltaTop: newFallPosition.newDeltaPos,
    });
  }

  /**
   * Compute falling down
   * @returns {Object.<number>}
   */
  fall = () => {
    const { top, deltaTop } = this.state;
    const { velocity, acceleration, maxBottom } = CONF;
    // update
    const newDeltaPos = deltaTop + (velocity * acceleration);
    const newPos = top + newDeltaPos;

    //return new pos
    return { newPos: newPos <= maxBottom ? newPos : maxBottom, newDeltaPos };
  }


  /**
   * Compute Jumping
   */
  jump = () => {
    return false;
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
