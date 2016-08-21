import React, { Component, PropsType } from 'react';
{/*import HeroContent from 'components/HeroContent/HeroContent';*/}

class Slider extends Component{

	static propTypes = {
		
	};

	
	render(){

		const styles = require('./Slider.scss');

		return(
			<div className={styles.SliderHome}>
				<div className={styles.sliderContainer}>
					Jhonata Ribeiro
				</div>
			</div>
		)
	}
}

export default Slider;