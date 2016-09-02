import React, {Component, PropTypes} from 'react';

class Title extends Component {
	render(){
		const styles = require('./Title.scss');
		return(
				<div className='wraperTitle'>
					<h2 className='title'>Tornomec</h2>
				</div>
		);
	}
}
export default Title