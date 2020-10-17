import { INCREMENT } from '../constants';

const initialState = {
  counter: 1
};

export const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT:
      return {
        ...state,
        counter: state.counter + 1
      };
    default:
      return state;
  }
};
