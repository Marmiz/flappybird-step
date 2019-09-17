import React from 'react';

/*
Rendering element to the DOM with render()

First create a div with the id="root" in your index.html
Application made with React usually have one single root node, however if you are integrating with an exesting app you may have
as many hisolated nodes as you like.

To render a React Element into a root node pass it to ReactDOM.render()
Render a react Element into the DOM.
*/


// Boilerplate: ignore this
const Day0 = () => (
        <pre>
        {"ReactDOM.render(<App/>, document.getElementById('root'))"}
        </pre>
);
export default Day0;
