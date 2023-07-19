import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const Banner = () => {
  const onChange = (index) => {
    // Handle slide change event
  };

  const onClickItem = (index) => {
    // Handle click on slide event
  };

  const onClickThumb = (index) => {
    // Handle click on thumbnail event
  };

  return (
    <Carousel showArrows={true} onChange={onChange} onClickItem={onClickItem} onClickThumb={onClickThumb}>
      <div>
        <img src={require('../assets/banner.png').default} alt="Slide 1" />
      
      </div>
      <div>
        <img src={require('../assets/SALE.png').default} alt="Slide 2" />
       
      </div>
      <div>
        <img src={require('../assets/bgd.png').default} alt="Slide 3" />
        
      </div>
    </Carousel>
  );
};

export default Banner;
