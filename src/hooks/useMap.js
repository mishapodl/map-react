import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { changeZoom } from './../redux/actions/';

export const useMap = () => {
  const [zoom, setZoom] = useState(
    JSON.parse(localStorage.getItem('zoom')) || 10
  );
  const dispatch = useDispatch();

  const onZoomIn = () => {
    setZoom(zoom + 1);
    dispatch(changeZoom(zoom));
  };
  const onZoomOut = () => {
    setZoom(zoom - 1);
    dispatch(changeZoom(zoom));
  };

  return {
    onZoomIn,
    onZoomOut,
    zoom
  };
};
