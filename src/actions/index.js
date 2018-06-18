import * as types from './actionTypes';
import store from '../store/configureStore';

export const increment = () => {
  return {
    type: types.INCREMENT,
  };
};

export const decrement = () => {
  return {
    type: types.DECREMENT,
  };
};

export const setFilter = filter => {
  return {
    type: types.TODO_SET_FILTER,
    payload: { filter },
  };
};

export const addTodo = todo => {
  return {
    type: types.TODO_ADD,
    payload: { todo },
  };
};

export const removeTodo = index => {
  return {
    type: types.TODO_REMOVE,
    payload: { index },
  };
};

export const toggleStatus = index => {
  return {
    type: types.TODO_TOGGLE_STATUS,
    payload: { index },
  };
};
