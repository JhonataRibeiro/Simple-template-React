import React, {Component, PropTypes} from 'react';

class Title extends Component {
	render(){
		const styles = require('./Title.scss');
		return(
				<div className='wraperTitle'>
					{/*TODO: pass title by props*/}
					<h2 className='title'>sample project</h2>
					}
				</div>
		);
	}
}
export default Title