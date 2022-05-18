import React, { useEffect, useState, useRef }from 'react';
import { Carousel, Button } from 'antd';
import './ServicesCarousel.scss';

const ServicesCarousel = (props) => {
  const ref = useRef();
  const [fixedCount, setFixedCount] = useState(0);
  let index = 0;
  const [disabled, setDisabled] = useState(false);

  function handleClick()  {

    var msg = 'Emergency Type: '+ props.case.typeOfEmergency + '\nTime of Incident: ' + props.case.time + '\nLocation: ' + props.case.location + '\nCoordinates: ' + props.case.long + ' , ' + props.case.lat + '\nContact Number: ' + props.case.phoneNumber;
    fetch('http://localhost:5000/api/messages', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({to:'whatsapp:+923365184489', body: msg})
    })
      .then(res => res.json())

      if (disabled === true) {
        return;
      }
      setDisabled(true);
  }

  const settings = {
    arrows: true,
    dots: false,
    infinite: false,
    speed: 500,
    slidesToScroll: 1,
    centerMode: true,
    slidesToShow: 1,
    centerPadding: '0',
  };
  return (
    <div className="help-carousel-container">
      <Carousel {...settings} ref={ref}>
        {props.unit.map((info) => {
            index += 1;
            return (
              <div className="help-carousel" key={info.id}>
                <div className="carousel-body">
                  <img src={info.unitImg} alt="unit-image" className="unit-image" />
                  <div className="description">
                    <h1>{info.name}</h1>
                    <h2 className="address">{info.address}</h2>
                    <div className="carousel-buttons">
                      <Button className="skip">Skip</Button>
                      <Button onClick={() => handleClick()} disabled={disabled}>{disabled ? 'Requested' : 'Request'}</Button>
                    </div>
                  </div>
                </div>
              </div>
            )

        })}
        </Carousel>
      </div>
  )
}

export default ServicesCarousel;
