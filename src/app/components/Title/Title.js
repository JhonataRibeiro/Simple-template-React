import React, {Component, PropTypes} from 'react';

class Title extends Component {
	render(){
		const styles = require('./Title.scss');
		return(
			<div>
				<div className='title'>
					
					<h2>Tornomec</h2>
				</div>
			</div>
		);

	}
}

export default Title;