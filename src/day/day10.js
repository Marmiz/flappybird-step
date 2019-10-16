import React from "react";
import "../App.css";

/**
 * Game Loop
 *
 * A note on game developement.
 * At a core a videogame is a program that runs on a loop
 *
 *  Process Input => Update Game => Render
 * (and repeat)
 *
 * The render part will ba handled by React, so we won't need a game engine
 *
 * Let's start by creating a game update loop that check the game
 * every 16.66 ms
 *
 * ( 1000 ms / 60hz ) -> most common refresh rate on monitors.
 *
 * Add checkGame methodo to class.
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
      return false;
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
