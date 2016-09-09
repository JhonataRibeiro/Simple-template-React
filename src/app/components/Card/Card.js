import React, {Component} from 'react'
class Card extends Component {
  render() {
  	const styles = require('./Card.scss');
    const cardImage = {
        background:'red',
        width:'100%',
        height:'40px',
    }
    return (
      //TODO: O container pode ser tornar um component?
      <div className='container-card'>
          <div className="cards">
              <div className="card">
                {/*Image of card*/}
                <div style={ cardImage }></div>
                <span>Card One</span>
              </div>
              <div className="card">
                <div style={ cardImage }></div>
                <span>Card Two</span>
              </div>
              <div className="card">
                <div style={ cardImage }></div>
                <span>Card Three</span>
              </div>
          </div>
      </div>
    );
  }
}
export default Card;
