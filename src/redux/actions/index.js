import axios from 'axios';
import * as types from '../action-types';
import * as env from '../../environment';

export const addTodo = title => dispatch => {
  // Post a todo to the server using its title
  axios
    .post(env.ADD_URL, {
      title,
      completed: false,
    })
    .then(res =>
      dispatch({
        type: types.ADD_TODO,
        payload: res.data,
      }),
    );
};

export const deleteTodo = id => dispatch => {
  // Delete a todo from the server using its ID
  axios.delete(`${env.DELETE_URL}${id}`).then(() =>
    dispatch({
      type: types.DELETE_TODO,
      payload: id,
    }),
  );
};

export const getTodos = () => dispatch => {
  // Get todos from the server
  axios.get(env.GET_URL).then(res =>
    dispatch({
      type: types.GET_TODOS,
      payload: res.data,
    }),
  );
};

export const checkTodo = payload => ({
  type: types.CHECK_TODO,
  payload,
});
