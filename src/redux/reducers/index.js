import initialState from '../store/initialState';
import * as types from '../action-types';

const reducer = (state = initialState, action) => {
  switch (action.type) {
    // on GET_TODOS we just fill the state with new todos
    case types.GET_TODOS:
      return {
        ...state,
        todos: action.payload,
      };
    case types.ADD_TODO:
      // push new todo to the todos array
      return {
        ...state,
        todos: [...state.todos, { ...action.payload }],
      };
    case types.DELETE_TODO:
      // remove the todo where id is matching
      return {
        ...state,
        todos: state.todos.filter(todo => todo.id !== action.payload),
      };
    case types.CHECK_TODO:
      return {
        ...state,
        todos: state.todos.map(todo => {
          if (todo.id === action.payload) {
            todo.completed = !todo.completed;
          }
          return todo;
        }),
      };
    default:
      return state;
  }
};

export default reducer;
