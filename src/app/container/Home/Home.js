import React, { Component, PropTypes } from 'react';
import { SliderHome } from '../../components';

class Home extends Component {	

	static propTypes = {

	}

	render(){
		const styles = require('./Home.scss')
		return(
			<div>
			<SliderHome/>
			</div>
			);
	}

}

export default Home;