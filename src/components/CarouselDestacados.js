import React from 'react';
import { Carousel } from 'react-bootstrap';

import imgSlide1 from '../img/carousel/slide1.webp';
import imgSlide2 from '../img/carousel/slide2.webp';
import imgSlide3 from '../img/carousel/slide3.webp';

export default function CarouselDestacados() {
  return (
    <Carousel>
      <Carousel.Item>
        <img className="d-block w-100" src={imgSlide1} alt="First slide" />
      </Carousel.Item>

      <Carousel.Item>
        <img className="d-block w-100" src={imgSlide2} alt="Second slide" />
      </Carousel.Item>

      <Carousel.Item>
        <img className="d-block w-100" src={imgSlide3} alt="Third slide" />
      </Carousel.Item>
    </Carousel>
  );
}
