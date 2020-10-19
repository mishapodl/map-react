import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  changeZoom,
  addMarker,
  saveMarkers,
  getMarkers,
  removeMarkers
} from './../redux/actions/';

export const useMap = () => {
  const [zoom, setZoom] = useState(
    JSON.parse(localStorage.getItem('zoom')) || 10
  );

  const dispatch = useDispatch();
  const { markers } = useSelector(state => state.mapReducer);

  const onZoomIn = () => {
    setZoom(zoom + 1);
    dispatch(changeZoom(zoom));
  };
  const onZoomOut = () => {
    setZoom(zoom - 1);
    dispatch(changeZoom(zoom));
  };

  const onSetMarker = e => {
    dispatch(
      addMarker([
        ...markers,
        {
          lat: e.latLng.lat(),
          lng: e.latLng.lng(),
          time: new Date()
        }
      ])
    );
  };

  const onSaveMarkers = () => dispatch(saveMarkers());
  const onGetMarkers = () => dispatch(getMarkers());
  const onRemoveMarkers = () => dispatch(removeMarkers());

  return {
    onZoomIn,
    onZoomOut,
    onSetMarker,
    onSaveMarkers,
    onGetMarkers,
    onRemoveMarkers,
    zoom,
    markers
  };
};
