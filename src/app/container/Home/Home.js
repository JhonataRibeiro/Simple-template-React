import React, { Component, PropTypes } from 'react';
import { Carousel } from '../../components';

class Home extends Component {	

	static propTypes = {

	}

	render(){
		const styles = require('./Home.scss')
		return(
			<div>
			<Carousel/>
			Jhonata Ribeiro 
			</div>
			);
	}

}

export default Home;