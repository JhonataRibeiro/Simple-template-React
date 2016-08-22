import React, { Component, PropsType } from 'react';
import Slider from 'react-slick';

class Carousel extends Component{

	render(){
		const styles = require('./Carousel.scss');
		var settings = {
			dots: true,
			infinite: true,
			speed: 500,
			slidesToShow: 1,
			slidesToScroll: 1
		};
		return (
			<Slider {...settings}>
				<div><img src="http://lorempixel.com/1400/700/"/></div>
				<div><img src="http://lorempixel.com/1400/700/"/></div>
			</Slider>
				);
			}
		}

export default Carousel;