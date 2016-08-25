import React, { Component, PropTypes } from 'react';
import { SliderHome } from '../../components';

class Home extends Component {
	
	static propTypes = {

	}

	render(){
		const styles = require('./Home.scss')
		return(
			<div>
			<SliderHome title="Guincho 24 horas" buttonTitle="Solicite" main="true" buttonIcon="right arrow" href="#"/>
			</div>
			);
	}

}

export default Home;