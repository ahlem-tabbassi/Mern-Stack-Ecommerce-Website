import React, { useEffect, useRef } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Gallery.css';


const Stats = () => {
    
    const itemsPerPage = 4;
  
   
      
    const images = [
      require('../assets/1.jpg').default,
      require('../assets/2 (2).jpg').default,
      require('../assets/3.png').default,
      require('../assets/4.png').default,
      require('../assets/5.png').default,
      require('../assets/6.jpg').default,
      require('../assets/7.jpg').default,
      require('../assets/8.png').default,
    ];
  
    const sliderRef = useRef(null);

    useEffect(() => {
      const interval = setInterval(() => {
        sliderRef.current.slickNext();
      }, 3000); // Adjust the interval duration (in milliseconds) as per your requirements
  
      return () => clearInterval(interval);
    }, []);
    const settings = {
      dots: false,
      arrows: true,
      infinite: true,
      speed: 500,
      slidesToShow: itemsPerPage,
      slidesToScroll: itemsPerPage,
    };
  
    return (
      <section className="stats">
        <div className="container">
          <div className="title">
            <h1>Style Gallery</h1>
          </div>
          <Slider ref={sliderRef} {...settings}>
          {images.map((image, index) => (
            <div key={index} className="carousel-item">
              <img src={image} alt={`${index + 1}`} />
            </div>
          ))}
        </Slider>
          
        </div>
      </section>
    );
  };
  
  export default Stats;
  