import React, { Component, PropsType } from 'react';
import Slider from 'react-slick';


class Carousel extends Component{

	static propTypes = {
		
	};

	render(){

		const styles = require('./Carousel.scss');

		return(
			<div className={styles.SliderHome}>
				<div className={styles.sliderContainer}>
					Jhonata Ribeiro
				</div>
			</div>
		)
	}
}

export default Carousel;