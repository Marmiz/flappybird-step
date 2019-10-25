import React from "react";
import "../App.css";
import CONF from "../conf.js";

/**
 * Move Pipes
 *
 * inside `updatePipes` map pipes array so that x get shifted
 * as well as spacing them
 */

// DEV ONLY
const Pipe = ({ x, height }) => {
  const style = Object.assign({ left: `${x}px` }, { height });
  return <div style={style} className="Pipe top"/>;
};

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
      pipes: []
    };
  }

  componentDidMount() {
    this.t = setInterval(() => this.checkGame(), 16.66);
    window.addEventListener("keydown", this.handlePress);
  }

  /** DEV ONLY */
  componentWillUnmount() {
    clearInterval(this.t);
    window.removeEventListener("keydown", this.handlePress);
  }

  // Check game state and decide
  checkGame = () => {
    return this.updateGame();
  };

  // We update state only here.
  // Perform all our calculation first then pass the new data to setState
  updateGame = () => {
    const newFallPosition = this.fall();
    const newPipes = this.updatePipes();

    this.setState({
      top: newFallPosition.newPos,
      deltaTop: newFallPosition.newDeltaPos,
      pipes: newPipes
    });
  };

  /**
   * Compute falling down
   * @returns {Object.<number>}
   */
  fall = () => {
    const { top, deltaTop } = this.state;
    const { velocity, acceleration, maxBottom } = CONF;
    // update
    const newDeltaPos = deltaTop + velocity * acceleration;
    const newPos = top + newDeltaPos;

    //return new pos
    return { newPos: newPos <= maxBottom ? newPos : maxBottom, newDeltaPos };
  };

  /**
   * Compute Jumping
   */
  jump = () => {
    const { top } = this.state;
    const { jumpDistance } = CONF;

    const newPos = top + jumpDistance;

    // this.setState({top: newPos >= minTop ? newPos : minTop})
    this.setState({ top: newPos, deltaTop: jumpDistance });
  };

  /**
   * event handler
   */
  handlePress = e => {
    const kc = e.keyCode;

    // space -> Jump
    if (kc === 32) {
      this.jump();
    }
  };

  /**
   * Update pipes position
   */
  updatePipes = () => {
    const { pipes } = this.state;
    const { mapWidth, pipeWidth } = CONF;

    const cleaned = pipes.filter(p => p.x >= -(pipeWidth) );

    const o = {
      x: mapWidth,
      id: Math.random(),
      height: 570
    };
    const withNew = [...cleaned, o];
    // each block should take 2s
    const movePipes = withNew.map(p => Object.assign(p, { x: p.x - 40 }));
    return movePipes;
  };

  render() {
    const { top, pipes } = this.state;
    return (
      <div className="App">
        <Bird top={top} />
        {pipes.map(p => (
          <React.Fragment key={p.id}>
            <Pipe {...p} type="top" />
          </React.Fragment>
        ))}
      </div>
    );
  }
}

export default App;
