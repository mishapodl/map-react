import React, { useState } from 'react';
import { withScriptjs, withGoogleMap, GoogleMap } from 'react-google-maps';
import { useDispatch } from 'react-redux';
import { position, GOOGLE_KEY } from '../../config';
import './Map.scss';
import { changeZoom } from './../../redux/actions/';

const getCoords = async () => {
  const getPosition = coords => {
    position.lat = coords.coords.latitude;
    position.lng = coords.coords.longitude;
  };
  navigator.geolocation.getCurrentPosition(getPosition);
};

const Map = () => {
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

  return (
    <>
      <div className="zoomControls">
        <button onClick={onZoomIn}>+</button>
        <button onClick={onZoomOut}>-</button>
      </div>
      <GoogleMap
        defaultZoom={12}
        defaultCenter={position}
        options={{ disableDefaultUI: true }}
        zoom={zoom}
      />
    </>
  );
};

const WeapperMap = withScriptjs(withGoogleMap(getCoords() && Map));

export const MapComponent = () => {
  return (
    <>
      <div className="wrapper-map">
        <WeapperMap
          googleMapURL={GOOGLE_KEY}
          loadingElement={<div style={{ height: `100%` }} />}
          containerElement={<div style={{ height: `100%` }} />}
          mapElement={<div style={{ height: `100%` }} />}
        />
      </div>
    </>
  );
};
