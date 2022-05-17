import React from 'react'
import ReactMapboxGl from 'react-mapbox-gl';
import { Marker } from 'react-mapbox-gl';
import { Layer, Feature } from 'react-mapbox-gl';
import { useState, useEffect } from 'react';
import axios from 'axios';
import CustomMarker from './CustomMarker';

const LoadMap = ReactMapboxGl({
  accessToken:
    'pk.eyJ1IjoibXphZmFyMjk2IiwiYSI6ImNsMzk5cWp6OTAzb2QzZW50ZG1rdTRxcHgifQ.y5pgWtyIX3dfGqxPz7OMHw',
    animationOptions: {
      essential: true
    },
    scrollZoom: false
});

const Map = ({item}) => {
  const height = '100vh';
  const [cases, setCases] = useState([]);

  useEffect(() => {
    const getCases = async () => {
      try {
        const res = await axios.get(
          "http://localhost:5000/api/cases"
        );
        setCases(res.data);
      } catch (err) {}
    };
    getCases();
  });

  const onMapLoad = (map) => {
    window.map = map;
  };

  const onMapClick = (map) => {
    window.map = map;
  }

  return (
    <div style={{
      height: height,
      transition: '1s',
      overflow: 'hidden'

    }}>
    <LoadMap
      antialias={false}
      containerStyle={{
        height: '100vh',
        right: '0',
        overflow: 'hidden',
        transition: '1s',

      }}
      center={[73.09759116299506,33.59003172760032]}
      flyToOptions={{
        speed: 0
      }}
      onClick={onMapClick}
      onStyleLoad={onMapLoad}
      pitch = {[0]}
      style="mapbox://styles/mapbox/light-v10"

      zoom = {[12]}
    >

      {
        cases.map(item => (
          <Marker
            item={item}
            key={item.id}
            coordinates={[item.long,item.lat]}
            offset={[400, -window.innerHeight * .915]}
          >
            <CustomMarker
              id={item._id}
              status={item.typeOfEmergency}
              priority={item.priority}
            />
          </Marker>
        ))
      }

    </LoadMap>

    </div>
  );
}

export default Map

