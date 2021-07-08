import React from "react";
import Carousel from "react-bootstrap/Carousel";
import SlideInfo from "./SlideInfo";

const Slider = () => {
  return (
    <Carousel style={{ zIndex: 0 }}>
      {/* -----------Slider items iteration----------- */}
      {SlideInfo.map((element) => {
        return (
          <Carousel.Item key={element.id}>
            {/* -----------slider item image----------- */}
            <img className="w-100 imgSlider" src={element.image} alt="slide" />
            <Carousel.Caption>
              {/* -----------Slider item title----------- */}
              <h3>{element.title}</h3>
              {/* -----------Slider item Paragraph-----------*/}
              <p>{element.paragraph}</p>
            </Carousel.Caption>
          </Carousel.Item>
        );
      })}
    </Carousel>
  );
};

export default Slider;
