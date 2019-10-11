import React from "react";
import "../App.css";

/**
 * Props
 *
 * Like JS functions, components accept arbitrary input called `props`.
 * JSX passes its attributes as a single object, so:
 *
 * Props is always an object.
 *
 * If you are using a Class instead of a function you can acces it as `this.props` instance method.
 *
 * To pass a prop to a component:
 * 1 - add a  `top` tag and pass it the value of `this.state.top`.
 * 2 - in the Bird component read the `top` value from the props object.
 * 3 - use that value to create a `top` CSS style string.
 * 4 - add it to the rendered markup to let React render that value.
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
