import React, { Component, PropTypes } from 'react';
import Slider from 'react-slick';

class Carousel extends Component {

	render() {
      const settings = {
      className: 'center',
      lazyLoad: false,
      arrows: false,
      draggable: false,
      swipeToSlide: false,
      speed: 2000,
      autoplay: true,
      autoplaySpeed: 6000,
      infinite: true,
      variableWidth: false,
      adaptiveHeight: false,
      slidesToShow: 1,
      slidesToScroll: 1,
      fade: true,
    };
    const styles = require('./Carousel.scss');
    let coverStyle = (img) => {
      return {
        backgroundImage: 'url(' + img + ')',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundColor: '#F071B2C',
        textAlign: 'center',
        height: '90vh'
      };
    };
    return (
      <div className='container-carousel'>
        <Slider { ...settings }>
        <div style={{display: 'inline-block'}}><img src='http://lorempixel.com/g/1400/700'/></div>
        <div style={{display: 'inline-block'}}><img src='http://lorempixel.com/g/1400/700'/></div>
        </Slider>
      </div>
    );
	}
}

export default Carousel;