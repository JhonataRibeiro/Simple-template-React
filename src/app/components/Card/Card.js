import React, {Component} from 'react'
class Card extends Component {
  render() {
  	const styles = require('./Card.scss');
    const imgUrl = 'http://placeimg.com/400/200/animals';
    const cardImage = {
        backgroundImage: 'url(' + imgUrl + ')',
    }
    return (
      //TODO: O container pode ser tornar um component?
      <div className='container-card'>
          <div className="cards">
              <div className="card">
                {/*Image of card*/}
                <span className="card-header" style={cardImage}></span>
                <h3>This is a title for a card</h3>
                    <span className="card-summary">
                    A summary will also be present. 
                    Usually two to three brief sentences 
                    about the content on the detail page.
                    </span>
                </div>
                 <div className="card">
                {/*Image of card*/}
                <span className="card-header" style={cardImage}></span>
                <h3>This is a title for a card</h3>
                    <span className="card-summary">
                    A summary will also be present. 
                    Usually two to three brief sentences 
                    about the content on the detail page.
                    </span>
                </div>

             <div className="card">
                {/*Image of card*/}
                <span className="card-header" style={cardImage}></span>
                <h3>This is a title for a card</h3>
                    <span className="card-summary">
                    A summary will also be present. 
                    Usually two to three brief sentences 
                    about the content on the detail page.
                    </span>
                </div>
          </div>
      </div>
    );
  }
}
export default Card;
