import React from 'react';
import Checkbox from './common/Checkbox';
import Button from './common/Button';

const TodoItem = () => {
  return (
    <div className="items">
      <div className="row-items">
        <Checkbox />
        <p>My todo title goes here</p>
      </div>
      <Button type="submit" myClass="btn-danger">
        <i className="fas fa-trash-alt" />
      </Button>
    </div>
  );
};

export default TodoItem;
