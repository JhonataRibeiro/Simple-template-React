import React, {Component} from 'react'
class Card extends Component {
  render() {
  	const styles = require('./Card.scss');
    return (
      <div className='container'>
          <div>
            Box Jhonata
          </div>
          <div>
            Box Ribeiro
          </div>
      </div>
    );
  }
}
export default Card;
