import { MAP } from '../constants';

export const changeZoom = payload => ({
  type: MAP.ZOOM,
  payload
});
