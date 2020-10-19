import { MAP } from '../constants';

const initialState = {
  zoom: 10,
  markers: []
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
      localStorage.setItem('markers', JSON.stringify(state.markers));
      return state;
    case MAP.GET_MARKERS:
      const markers = JSON.parse(localStorage.getItem('markers'));
      return {
        ...state,
        markers: markers.length ? markers : []
      };
    case MAP.ADD_MARKER:
      return {
        ...state,
        markers: action.payload
      };
    case MAP.REMOVE_MARKERS:
      localStorage.setItem('markers', JSON.stringify([]));
      return {
        ...state,
        markers: []
      };
    default:
      return state;
  }
};
