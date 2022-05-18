import styled from "styled-components";
import React from 'react'
import ReactMapboxGl from 'react-mapbox-gl';
import { Marker } from 'react-mapbox-gl';
import CustomMarker from "./Map/CustomMarker";

const Container = styled.div`
  position: absolute;
  width: 30%;
  height: 50%;
  margin-left: 69%;
  top: 12.5%;
  border: 1px solid #C7C2C2;
  box-sizing: border-box;
  border-radius: 6px;
  overflow-y: scroll
`

const LoadMap = ReactMapboxGl({
  accessToken:
    'pk.eyJ1IjoibXphZmFyMjk2IiwiYSI6ImNsMzk5cWp6OTAzb2QzZW50ZG1rdTRxcHgifQ.y5pgWtyIX3dfGqxPz7OMHw',
    animationOptions: {
      essential: true
    },

});

const UserLocation = (props) => {
  const height = '100vh';

  const onMapLoad = (map) => {
    window.map = map;
  };

  const onMapClick = (map) => {

    map.flyTo({
      center: [
      props.long,
      props.lat
      ],
      essential: true // this animation is considered essential with respect to prefers-reduced-motion
      });
  }

  return (
    <Container>
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
      center={[73.19999996299506,33.57003172760032]}
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

          <Marker
            coordinates={[props.long,props.lat]}
            offset={[400, -window.innerHeight * .915]}
          >
            <CustomMarker
              id={props.id}
              status={props.typeOfEmergency}
              priority={props.priority}
              location={props.location}
            />
          </Marker>
      }

    </LoadMap>

    </div>
    </Container>
  );
}

export default UserLocation;


