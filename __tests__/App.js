import { shallow, mount } from 'enzyme';

import React from 'react';
import sinon from 'sinon';
import { App, mapDispatchToProps, mapStateToProps } from '../src/App';

describe('App Component', () => {
  let props;
  let wrapper;
  beforeEach(() => {
    props = {
      todos: [],
      onGetTodos: jest.fn(),
      onAddTodo: jest.fn(),
      onDeleteTodo: jest.fn(),
      onMarkComplete: jest.fn(),
    };
    wrapper = shallow(<App {...props} />);
  });

  it('renders without crashing', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should call componentDidMount', () => {
    App.prototype.componentDidMount = jest.fn();
    mount(<App {...props} />);
    const spy = sinon.spy(App.prototype, 'componentDidMount');
    expect(spy).toHaveBeenCalledTimes(1);
  });

  it('should map dispatch to props', () => {
    const dispatch = jest.fn();
    mapDispatchToProps(dispatch).onGetTodos();
    mapDispatchToProps(dispatch).onAddTodo();
    mapDispatchToProps(dispatch).onDeleteTodo();
    mapDispatchToProps(dispatch).onMarkComplete();
    expect(dispatch).toHaveBeenCalled();
  });

  it('should execute instance methods', () => {
    const title = 'my title to testing';
    const id = 2;
    const instance = wrapper.instance();
    instance.addTodo(title);
    instance.delTodo(id);
    instance.markComplete(id);
    expect(props.onAddTodo).toHaveBeenCalled();
    expect(props.onDeleteTodo).toHaveBeenCalled();
    expect(props.onMarkComplete).toHaveBeenCalled();
  });

  it('should map state to props', () => {
    const initialState = {
      todos: [],
    };

    expect(mapStateToProps(initialState).todos).toBeDefined();
  });
});
