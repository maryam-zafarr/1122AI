import styled from 'styled-components';
import { useEffect, useState } from 'react';
import eye from '../../assets/eye.svg'
import './marker.scss';

const CustomMarker = (props) => {
  const [color, setColor] = useState('');

  useEffect(() => {
    setColor('#F07373');

    switch(props.priority) {
      case 'High':
        setColor('#F07373');
        break;
      case 'Medium':
        setColor('#0000FF');
        break;
      default:
        setColor('#F07373');
    }
  }, [props.status]);

  return (
    <div className="custom-marker">
      <div className="marker-circle-two"></div>
      <div className="marker-box">
        <div>
          <div className="line">
            <div
              className="marker-circle"
              style={{
                backgroundColor: color
              }}
            />
            <h1>{props.location}</h1>
          </div>
          <div className="line">
            <img src={eye} />
            <h2>{props.status}</h2>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CustomMarker;
