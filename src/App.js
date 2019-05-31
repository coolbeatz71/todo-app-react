import React, { Component } from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import AddTodo from './component/AddTodo';
import Todos from './component/Todos';

import { getTodos, addTodo, deleteTodo, checkTodo } from './redux/actions';

/**
 * The principal component
 * @class App
 */
export class App extends Component {
  /**
   * execute when the component mount
   * @returns {void}
   */
  componentDidMount() {
    const { onGetTodos } = this.props;
    onGetTodos();
  }

  /**
   *
   * Add todo in the server
   * @param {string} title
   * @returns {Promise} data
   * @memberof App
   */
  addTodo = title => {
    const { onAddTodo } = this.props;
    onAddTodo(title);
  };

  /**
   *
   * Complete a task
   * @param {int} id
   * @returns {object} todo
   * @memberof App
   */
  markComplete = id => {
    const { onMarkComplete } = this.props;
    onMarkComplete(id);
  };

  /**
   *
   * Delete a task
   * @param {int} id
   * @returns {void}
   * @memberof App
   */
  delTodo = id => {
    const { onDeleteTodo } = this.props;
    onDeleteTodo(id);
  };

  /**
   * Render the component
   *
   * @returns {void}
   * @memberof App
   */
  render() {
    const { todos } = this.props;
    return (
      <div className="column-wrapper">
        <AddTodo addTodo={this.addTodo} />
        <Todos todos={todos} markComplete={this.markComplete} delTodo={this.delTodo} />
      </div>
    );
  }
}

App.propTypes = {
  todos: PropTypes.array.isRequired,
  onGetTodos: PropTypes.func.isRequired,
  onAddTodo: PropTypes.func.isRequired,
  onDeleteTodo: PropTypes.func.isRequired,
  onMarkComplete: PropTypes.func.isRequired,
};

// map the state to props
export const mapStateToProps = state => ({
  todos: state.todos,
});

// map Dispatch functions to props
export const mapDispatchToProps = dispatch => ({
  onGetTodos: () => dispatch(getTodos()),
  onAddTodo: title => dispatch(addTodo(title)),
  onDeleteTodo: id => dispatch(deleteTodo(id)),
  onMarkComplete: id => dispatch(checkTodo(id)),
});

// connect App to redux
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);
