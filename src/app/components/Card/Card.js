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
                <h3>This is a title for a card</h3>
                <span class="card-summary">
        A summary will also be present. Usually two to three brief sentences about the content on the detail page.
      </span>
              </div>
              <div className="card">
                <div style={ cardImage }></div>
                <h3>This is a title for a card</h3>
                <span class="card-summary">
        A summary will also be present. Usually two to three brief sentences about the content on the detail page.
      </span>
              </div>
              <div className="card">
                <div style={ cardImage }></div>
                <h3>This is a title for a card</h3>
                <span class="card-summary">
        A summary will also be present. Usually two to three brief sentences about the content on the detail page.
      </span>
              </div>
          </div>
      </div>
    );
  }
}
export default Card;
