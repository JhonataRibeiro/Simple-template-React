import React, { Component, PropTypes } from 'react';
import Slider from 'react-slick';

class SliderHome extends Component {

	render() {
      const settings = {
      dots: true
    };
    return (
      <div style={{height: '90vh' }}>
        <Slider>
          <div key={1}><img src='http://placekitten.com/g/1400/700' /></div>
          <div key={2}><img src='http://placekitten.com/g/1400/700' /></div>
        </Slider>
      </div>
    );
	}
}

export default SliderHome;