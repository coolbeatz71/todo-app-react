import React from 'react';
import AddTodo from './component/AddTodo';
import TodoItem from './component/TodoItem';

const App = () => {
  return (
    <div className="column-wrapper">
      <AddTodo />
      <TodoItem />
    </div>
  );
};

export default App;
