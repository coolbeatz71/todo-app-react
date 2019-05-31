import configureMockStore from 'redux-mock-store';
import mockAxios from 'axios';
import thunk from 'redux-thunk';
import { applyMiddleware } from 'redux';
import promiseMiddleware from 'redux-promise-middleware';
import * as types from '../../../src/redux/action-types';
import { addTodo, deleteTodo, getTodos, checkTodo } from '../../../src/redux/actions';

const mockStore = configureMockStore([thunk]);
applyMiddleware(promiseMiddleware);

describe('Actions', () => {
  let store;
  const todoId = 3;

  beforeEach(() => {
    store = mockStore({
      todos: {},
    });
  });
  it('dispatches GET_TODOS action and returns data', async () => {
    mockAxios.get.mockImplementationOnce(() =>
      Promise.resolve({
        data: [
          {
            id: 1,
            userId: 1,
            title: 'I need to attend a meeting tomorow',
            completed: false,
          },
        ],
      }),
    );

    await store.dispatch(getTodos());
    const actions = store.getActions();

    expect(actions[0].type).toEqual(types.GET_TODOS);
    expect(actions[0].payload[0].completed).toBeFalsy();
  });

  it('dispatches ADD_TODO action and returns data', async () => {
    mockAxios.post.mockImplementationOnce(() =>
      Promise.resolve({
        data: {
          id: 2,
          userId: 1,
          title: 'Just for testing',
          completed: true,
        },
      }),
    );

    await store.dispatch(addTodo());
    const actions = store.getActions();

    expect(actions[0].type).toEqual(types.ADD_TODO);
    expect(actions[0].payload.completed).toBeTruthy();
  });

  it('dispatches DELETE_TODO action and returns data', async () => {
    mockAxios.delete.mockImplementationOnce(() => Promise.resolve());

    await store.dispatch(deleteTodo(todoId));
    const actions = store.getActions();

    expect(actions[0].type).toEqual(types.DELETE_TODO);
    expect(actions[0].payload).toBe(3);
  });

  it('dispatches CHECK_TODO action and returns data', async () => {
    await store.dispatch(checkTodo(todoId));
    const actions = store.getActions();

    expect(actions[0].type).toEqual(types.CHECK_TODO);
    expect(actions[0].payload).toBe(3);
  });
});
