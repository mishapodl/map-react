import { MAP } from '../constants';

const initialState = {
  zoom: 10
};

export const mapReducer = (state = initialState, action) => {
  switch (action.type) {
    case MAP.ZOOM:
      localStorage.setItem('zoom', action.payload);
      return {
        ...state,
        zoom: action.payload
      };
    case MAP.SAVE_MARKER:
      return {
        state
      };
    case MAP.GET_MARKER:
      return {
        state
      };
    // case MAP.LOGIN_FAILURE:
    //   return {
    //     state
    //   };
    default:
      return state;
  }
};
