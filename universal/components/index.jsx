import React from 'react';

if(process.env.NODE_ENV !== 'server'){ // See base index.jsx file for explanation.
  console.log(process.env.NODE_ENV);
  require('./styles/index.css');
}


export default class AppView extends React.Component {
  render() {
    return (
      <div id="default">
        <p>This one is shown only on exactly the base address.</p>
      </div>
    );
  }
}
