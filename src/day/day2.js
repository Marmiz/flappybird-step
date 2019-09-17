import React from 'react';

/**
 * Styles
 * Since React Elements will output valid DOM, we can use CSS to style them,
 * Create a CSS file and add some basic CSS for the main view.
 *
 * NOTE: for easinisess with later calculation it's better starting with a fixed width and height of the "screen"
 */



const Day2 = () => <pre>
  create a new css file and add the following css class <br/>
  {`.App {
  position: fixed;
  height: 720px;
  width: 1280px;
  border: 4px solid #000;
  margin: auto;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  overflow: hidden;
}`} <br/><br/> <br/><br/>
{`.Bird {
  position: absolute;
  top: 20px;
  left: 70px;
  width: 50px;
  height: 50px;
  border-radius: 25%;
  background: linear-gradient(75deg, blueviolet, deeppink);
}
`}
</pre>
export default Day2;
