import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import Checkbox from './common/Checkbox';
import Button from './common/Button';

/**
 * @class TodoItem
 * @extends {Component}
 */
class TodoItem extends Component {
  /**
   *Creates an instance of TodoItem.
   * @param {*} props
   * @memberof TodoItem
   */
  constructor(props) {
    super(props);
    this.props = props;
  }

  /**
   * CSS effect when Task is marked as completed
   * @returns {object} object
   * @memberof TodoItem
   */
  completedStyle() {
    const { todo } = this.props;
    return {
      fontWeight: todo.completed && 'bold',
      color: todo.completed && '#aaa',
      textDecoration: todo.completed ? 'line-through' : 'none',
    };
  }

  /**
   * render the component
   * @returns {void}
   * @memberof TodoItem
   */
  render() {
    const { todo, markComplete, delTodo } = this.props;
    const { id, title, completed } = todo;
    this.markComplete = markComplete.bind(this, id);
    this.delTodo = delTodo.bind(this, id);

    return (
      <div className="items">
        <div className="row-items">
          <Checkbox markComplete={this.markComplete} checked={completed} />
          <p style={this.completedStyle()}>{title}</p>
        </div>
        <Button type="submit" onClick={this.delTodo} myClass="btn-danger">
          <i className="fas fa-trash-alt" />
        </Button>
      </div>
    );
  }
}

TodoItem.propTypes = {
  todo: PropTypes.object.isRequired,
  markComplete: PropTypes.func.isRequired,
  delTodo: PropTypes.func.isRequired,
};

export default TodoItem;
