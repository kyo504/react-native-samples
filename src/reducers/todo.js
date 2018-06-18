import * as types from '../actions/actionTypes';

const initialState = {
  todos: [],
  filter: 'all',
};

const counter = (state = initialState, action) => {
  switch (action.type) {
    case types.TODO_SET_FILTER:
      return {
        ...state,
        filter: action.payload.filter,
      };
    case types.TODO_ADD:
      return {
        ...state,
        todos: state.todos.concat(action.payload.todo),
      };
    case types.TODO_REMOVE: {
      const { index } = action.payload;
      return {
        ...state,
        todos: [...state.todos.slice(0, index), ...state.todos.slice(index + 1)],
      };
    }
    case types.TODO_TOGGLE_STATUS: {
      const { index } = action.payload;
      return {
        ...state,
        todos: [
          ...state.todos.slice(0, index),
          { ...state.todos[index], completed: !state.todos[index].completed },
          ...state.todos.slice(index + 1),
        ],
      };
    }
    default:
      return state;
  }
};

export default counter;
