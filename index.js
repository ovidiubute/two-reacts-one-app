var React = require('react');
var ReactDOM = require('react-dom');

console.log(
  "Hi, I'm React inside your bundle. My version is: " + React.version
);
console.log(
  "Hey there, I'm a React on the window, my version is different: " +
    window.React.version
);

ReactDOM.render(
  React.createElement(
    'h1',
    { className: 'greeting' },
    "Hello, world! I'm a bundled React!"
  ),
  document.getElementById('root')
);

window.ReactDOM.render(
  React.createElement(
    'h1',
    { className: 'greeting' },
    "Hello, world! I'm a window loving React!"
  ),
  document.getElementById('root-window')
);
