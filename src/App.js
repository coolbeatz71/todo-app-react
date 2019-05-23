import React, { Component } from 'react';

/**
 * Principal component
 *
 * @class App
 * @extends {Component}
 */
class App extends Component {
  state = {
    text: 'Hello word',
  };

  render() {
    const { text } = this.state;
    return (
      <h1>{text}</h1>
    );
  }
}

export default App;
