import { MAP } from '../constants';

export const changeZoom = payload => ({
  type: MAP.ZOOM,
  payload
});

export const addMarker = payload => ({
  type: MAP.ADD_MARKER,
  payload
});

export const saveMarkers = () => ({
  type: MAP.SAVE_MARKER
});

export const getMarkers = () => ({
  type: MAP.GET_MARKERS
});

export const removeMarkers = () => ({
  type: MAP.REMOVE_MARKERS
});
