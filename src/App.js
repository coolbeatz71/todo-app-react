import React, { Component } from 'react';
import Button from './component/common/Button';
import Input from './component/common/Input';

/**
 * Principal component
 *
 * @class App
 * @extends {Component}
 */
class App extends Component {
  state = {
    text: 'Add',
  };

  render() {
    const { text } = this.state;
    return (
      <div className="inline-wrapper">
        <Input />
        <Button type="submit" myClass="btn-primary">
          {text}
        </Button>
      </div>
    );
  }
}

export default App;
