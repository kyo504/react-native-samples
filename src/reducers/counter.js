import * as types from '../actions/actionTypes';

const initialState = {
  count: 0,
};

const counter = (state = initialState, action) => {
  switch (action.type) {
    case types.INCREMENT:
      return Object.assign({}, { count: state.count + 1 });
    case types.DECREMENT:
      return Object.assign({}, { count: state.count - 1 });
    default:
      return state;
  }
};

export default counter;
