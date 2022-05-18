import React, { useEffect, useState, useRef }from 'react';
import { Carousel, Button } from 'antd';
import './ServicesCarousel.scss';

const ServicesCarousel = (props) => {
  const ref = useRef();
  const [fixedCount, setFixedCount] = useState(0);
  let index = 0;

 /* useEffect(() => {
    let count = 0;
    for (let i = 0; i < props.unit.length; i++) {
      if ((props.unit[i].type.toLowerCase()).startsWith(props.typeOfEmergency.toLowerCase()) || (props.unit[i].name.toLowerCase()).startsWith(props.typeOfEmergency.toLowerCase())) {
        count += 1;
      }
    }
    if (ref && ref.current) {
      if (count >= 1) {
        ref.current.goTo(0 , true);
      }
    }
    setFixedCount(count);
  }, [props.unit, props.typeOfEmergency]); */

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
              <div className="help-carousel">
                <div className="carousel-body">
                  <img src={info.unitImg} alt="unit-image" className="unit-image" />
                  <div className="description">
                    <h1>{info.name}</h1>
                    <h2 className="address">{info.address}</h2>
                    <div className="carousel-buttons">
                      <Button className="skip">Skip</Button>
                      <Button>Request</Button>
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
