import React, {Component, PropTypes} from 'react';

class Title extends Component {
	render(){
		const styles = require('./Title.scss');
		return(
				<div className='title'>
					<h2>Tornomec</h2>
				</div>
		);

	}
}

export default Title