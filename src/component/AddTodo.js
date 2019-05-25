import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
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
    title: '',
  };

  /**
   * @param {Event} e
   * @memberof AddTodo
   * @returns {void}
   */
  onChange = e => this.setState({ [e.target.name]: e.target.value });

  /**
   * Submit the new todo
   * @param {Event} e
   * @memberof AddTodo
   * @returns {void}
   */
  onClick = e => {
    const { addTodo } = this.props;
    const { title } = this.state;
    e.preventDefault();
    addTodo(title);
    this.setState({ title: '' });
  };

  /**
   * Render the component
   *
   * @returns {void}
   * @memberof AddTodo
   */
  render() {
    const { text, title } = this.state;
    return (
      <div className="row-wrapper">
        <Input value={title} onChange={this.onChange} />
        <Button type="submit" onClick={this.onClick} myClass="btn-primary">
          {text}
        </Button>
      </div>
    );
  }
}

// PropTypes
AddTodo.propTypes = {
  addTodo: PropTypes.func.isRequired,
};

export default AddTodo;
