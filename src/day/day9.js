import React from "react";
import "../App.css";

/**
 * Lifecycle
 * 
 * Each component has several “lifecycle methods” that you can use
 * to run code at particular times in the process.
 *
 * Add a `componentDidMount` method to App.
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