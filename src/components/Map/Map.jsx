import React from 'react';
import { withScriptjs, withGoogleMap, GoogleMap } from 'react-google-maps';
import { position, GOOGLE_KEY } from '../../config';
import { useMap } from './../../hooks/useMap';
import './Map.scss';

const getCoords = async () => {
  const getPosition = coords => {
    position.lat = coords.coords.latitude;
    position.lng = coords.coords.longitude;
  };
  navigator.geolocation.getCurrentPosition(getPosition);
};

const Map = () => {
  const { onZoomIn, onZoomOut, zoom } = useMap();

  const contentMap = (
    <>
      <div className="zoomControls">
        <button onClick={onZoomIn}>+</button>
        <button onClick={onZoomOut}>-</button>
      </div>
    </>
  );

  return (
    <>
      {contentMap}
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
