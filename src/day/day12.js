import React from "react";
import "../App.css";

/**
 * Update + Fall fn
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

  // Calculate the falling down acceleration
  fall = () => {
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
