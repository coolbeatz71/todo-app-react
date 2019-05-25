import React, { Component } from 'react';
import AddTodo from './component/AddTodo';
import Todos from './component/Todos';
import HttpRequest from './services/HttpRequest';

const getUrl = 'https://jsonplaceholder.typicode.com/todos?_limit=8';
const deleteUrl = 'https://jsonplaceholder.typicode.com/todos/';
const postUrl = 'https://jsonplaceholder.typicode.com/todos';

/**
 * The principal component
 * @class App
 */
class App extends Component {
  state = {
    todos: [],
  };

  /**
   * execute when the component mount
   * @returns {void}
   */
  componentDidMount() {
    HttpRequest.get(getUrl).then(data => {
      this.setState({ todos: data });
    });
  }

  // Add Todo
  addTodo = title => {
    const { todos } = this.state;
    HttpRequest.post(postUrl, {
      title,
      completed: false,
    }).then(res => this.setState({ todos: [...todos, res.data] }));
  };

  // Complete Todo
  markComplete = id => {
    const { todos } = this.state;
    this.setState({
      todos: todos.map(todo => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      }),
    });
  };

  // Delete Todo
  delTodo = id => {
    const { todos } = this.state;
    HttpRequest.delete(`${deleteUrl}${id}`).then(() =>
      this.setState({ todos: [...todos.filter(todo => todo.id !== id)] }),
    );
  };

  /**
   * Render the component
   *
   * @returns {void}
   * @memberof App
   */
  render() {
    const { todos } = this.state;
    return (
      <div className="column-wrapper">
        <AddTodo addTodo={this.addTodo} />
        <Todos todos={todos} markComplete={this.markComplete} delTodo={this.delTodo} />
      </div>
    );
  }
}

export default App;
