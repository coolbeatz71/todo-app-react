import reducers from '../../../src/redux/reducers';
import initialState from '../../../src/redux/store/initialState';
import * as types from '../../../src/redux/action-types';

describe('Reducer', () => {
  it('should returns the initial state when no action type is passed', () => {
    const reducer = reducers(undefined, {});
    expect(reducer).toEqual(initialState);
  });

  it('should GET_TODOS', () => {
    const action = {
      type: types.GET_TODOS,
      payload: {
        id: 1,
        userId: 1,
        title: 'I need to attend a meeting tomorow',
        completed: false,
      },
    };
    const reducer = reducers(initialState, action);
    expect(reducer.todos).toBeDefined();
    expect(reducer.todos).toBeInstanceOf(Object);
    expect(reducer.todos).toEqual(action.payload);
  });

  it('should ADD_TODO', () => {
    const action = {
      type: types.ADD_TODO,
      payload: {
        id: 1,
        userId: 1,
        title: 'Just for testing',
        completed: true,
      },
    };
    const reducer = reducers(initialState, action);
    expect(reducer.todos).toBeDefined();
    expect(reducer.todos).toBeInstanceOf(Array);
    expect(reducer.todos[0]).toEqual(action.payload);
  });

  it('should DELETE_TODO', () => {
    const newState = {
      todos: [
        {
          id: 1,
          userId: 1,
          title: 'I need to attend a meeting tomorow',
          completed: false,
        },
        {
          id: 2,
          userId: 1,
          title: 'I need to eat first',
          completed: false,
        },
      ],
    };
    const action = {
      type: types.DELETE_TODO,
      payload: 1,
    };
    const reducer = reducers(newState, action);
    expect(reducer.todos).toBeDefined();
    expect(reducer.todos).toBeInstanceOf(Array);
    expect(reducer.todos).toHaveLength(1);
  });

  it('should CHECK_TODO', () => {
    const newState = {
      todos: [
        {
          id: 1,
          userId: 1,
          title: 'I need to attend a meeting tomorow',
          completed: false,
        },
      ],
    };
    const action = {
      type: types.CHECK_TODO,
      payload: 1,
    };
    const reducer = reducers(newState, action);
    expect(reducer.todos).toBeDefined();
    expect(reducer.todos).toBeInstanceOf(Array);
    expect(reducer.todos[0]).toBeInstanceOf(Object);
    expect(reducer.todos[0].completed).toBeTruthy();
    expect(reducer.todos[0].id).toEqual(newState.todos[0].id);
  });

  it('should not CHECK_TODO', () => {
    const newState = {
      todos: [
        {
          id: 2,
          userId: 1,
          title: 'I need to attend a meeting tomorow',
          completed: false,
        },
      ],
    };
    const action = {
      type: types.CHECK_TODO,
      payload: 1,
    };
    const reducer = reducers(newState, action);
    expect(reducer.todos).toBeDefined();
    expect(reducer.todos).toBeInstanceOf(Array);
    expect(reducer.todos[0]).toBeInstanceOf(Object);
    expect(reducer.todos[0].completed).toBeFalsy();
    expect(reducer.todos[0].id).toEqual(newState.todos[0].id);
  });
});
