import React, { Component } from 'react';
import Button from './common/Button';
import Input from './common/Input';

/**
 * Add Todo component
 *
 * @class AddTodo
 * @extends {Component}
 */
class AddTodo extends Component {
  state = {
    text: 'Add',
  };

  /**
   * Render the component
   *
   * @returns {void}
   * @memberof AddTodo
   */
  render() {
    const { text } = this.state;
    return (
      <div className="row-wrapper">
        <Input />
        <Button type="submit" myClass="btn-primary">
          {text}
        </Button>
      </div>
    );
  }
}

export default AddTodo;
