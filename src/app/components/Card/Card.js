import React, {Component} from 'react'
class Card extends Component {
  render() {
  	const styles = require('./Card.scss');
    return (
      <div className='container'>
          <div className="cardHuge">
            Box Jhonata
          </div>
          <div className="cardSmall">
            Box Ribeiro
          </div>
      </div>
    );
  }
}
export default Card;
