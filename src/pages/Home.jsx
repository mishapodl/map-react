import React from 'react';
import { Link } from 'react-router-dom';
import { MapComponent } from '../components/Map/Map';

const Home = () => {
  return (
    <div>
      <Link to="/about">About</Link>
      <MapComponent />
    </div>
  );
};
export default Home;
