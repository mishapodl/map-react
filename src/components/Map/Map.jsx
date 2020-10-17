import React from 'react';
import { withScriptjs, withGoogleMap, GoogleMap } from 'react-google-maps';
import { position, GOOGLE_KEY } from '../../config';
import './Map.scss';

const getCoords = async () => {
  const getPosition = coords => {
    position.lat = coords.coords.latitude;
    position.lng = coords.coords.longitude;
  };
  navigator.geolocation.getCurrentPosition(getPosition);
};

const Map = () => (
  <GoogleMap 
    defaultZoom={16} 
    defaultCenter={position} 
  />
);

const WeapperMap = withScriptjs(withGoogleMap(getCoords() && Map));

export const MapComponent = () => {
  return (
    <div className="wrapper-map">
      <WeapperMap
        googleMapURL={GOOGLE_KEY}
        loadingElement={<div style={{ height: `100%` }} />}
        containerElement={<div style={{ height: `100%` }} />}
        mapElement={<div style={{ height: `100%` }} />}
      />
    </div>
  );
};
