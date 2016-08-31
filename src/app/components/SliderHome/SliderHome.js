import React, { Component, PropTypes } from 'react';
import Slider from 'react-slick';

class SliderHome extends Component {

	render() {
      const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    const styles = require('./SliderHome.scss');
    return (
      <div className='container'>
        <Slider { ...settings }>
        <div style={{display: 'inline-block'}}><h3>1</h3></div>
        <div style={{display: 'inline-block'}}><h3>2</h3></div>
        </Slider>
      </div>
    );
	}
}

export default SliderHome;