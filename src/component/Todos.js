import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TodoItem from './TodoItem';

/**
 * Display each todos
 * @class Todos
 */
class Todos extends Component {
  /**
   * Render the component
   *
   * @returns {void}
   * @memberof Todos
   */
  render() {
    const { todos, markComplete, delTodo } = this.props;
    return todos.map(todo => (
      <TodoItem key={todo.id} todo={todo} markComplete={markComplete} delTodo={delTodo} />
    ));
  }
}

Todos.propTypes = {
  todos: PropTypes.array.isRequired,
  markComplete: PropTypes.func.isRequired,
  delTodo: PropTypes.func.isRequired,
};

export default Todos;
