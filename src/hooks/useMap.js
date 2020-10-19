import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  changeZoom,
  addMarker,
  saveMarkers,
  getMarkers,
  removeMarkers
} from './../redux/actions/';
import data from '../data.json';

export const useMap = () => {
  const [places, setPlaces] = useState([]);
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

  const onShowPlaces = place => {
    return setPlaces(data[place.toLowerCase()].result || []);
  };
  console.log(places);
  return {
    onZoomIn,
    onZoomOut,
    onSetMarker,
    onSaveMarkers,
    onGetMarkers,
    onRemoveMarkers,
    onShowPlaces,
    zoom,
    markers,
    places
  };
};
