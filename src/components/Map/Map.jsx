import React from 'react';
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker
} from 'react-google-maps';
import { position, GOOGLE_KEY } from '../../config';
import { useMap } from './../../hooks/useMap';
import './Map.scss';

const getCoords = async () => {
  const getPosition = coords => {
    position.lat = coords.coords.latitude;
    position.lng = coords.coords.longitude;
  };
  navigator.geolocation.getCurrentPosition(getPosition);
  return position;
};

const Map = () => {
  const {
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
  } = useMap();

  const contentMap = (
    <>
      <div className="conrol-panel">
        <div className="control-panel-zoom">
          <button onClick={onZoomIn}>+</button>
          <button onClick={onZoomOut}>-</button>
        </div>
        <div className="conrol-panel-markers">
          <button onClick={onSaveMarkers}>Save markers</button>
          <button onClick={onGetMarkers}>Show markers</button>
          <button onClick={onRemoveMarkers}>Remove markers</button>
        </div>
        <div className="places">
          <button onClick={e => onShowPlaces(e.target.value)} value="restaurants">
            Restaurants
          </button>
          <button onClick={e => onShowPlaces(e.target.value)} value="hospitals">
            Hospitals
          </button>
        </div>
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
        onClick={onSetMarker}
        zoom={zoom}
      >
        {markers.map(({ lat, lng }, index) => {
          return <Marker key={index} position={{ lat, lng }} />;
        })}
        {places.map(({ geometry: { location: { lat, lng } } }, index) => (
          <Marker key={index} position={{ lat, lng }} />
        ))}
      </GoogleMap>
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
