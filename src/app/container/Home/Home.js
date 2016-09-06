import React, { Component, PropTypes } from 'react';
import { Carousel, Card } from '../../components';

class Home extends Component {	

	static propTypes = {

	}

	render(){
		const styles = require('./Home.scss')
		return(
			<div>
			<Carousel/>
			<Card/>
			</div>
			);
	}

}

export default Home;