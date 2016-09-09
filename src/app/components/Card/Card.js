import React, {Component} from 'react'
class Card extends Component {
  render() {
  	const styles = require('./Card.scss');
    return (
      //TODO: O container pode ser tornar um component?
      <div className='container-card'>
          <div className="card">
            Box Jhonata
          </div>
          <div className="card">
            Box Ribeiro
          </div>
      </div>
    );
  }
}
export default Card;
