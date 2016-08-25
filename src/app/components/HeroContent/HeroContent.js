import React, {Component} from 'react';
import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';

class HeroContent extends Component {

  shouldComponentUpdate() {
    return false;
  }

  render() {
    const styles = require('./HeroContent.scss');

    return (
      <div className={ styles.heroContent }>
        <div className={ styles.heroContainer }>
          <Grid fluid>
            <Row>
              <div className={ styles.header }>
                <h1>{ this.props.title }</h1>
                <h3>{ this.props.subtitle }</h3>
                <a className="ui primary large button" href={ this.props.href } >
                  { this.props.buttonTitle }
                </a>
              </div>
            </Row>
          </Grid>
        </div>
      </div>
    );
  }
}

class HeroButton extends HeroContent {
  render() {
    let button = <div id={false}></div>;
    let iconClass = this.props.buttonIcon + ' icon';
    let buttonIcon = <i className={ iconClass }></i>;
    let buttonClass = 'ui large primary button centered aligned';
    if (!this.props.buttonIcon) {
      buttonIcon = null;
    }

    if (this.props.main) {
      buttonClass = 'ui huge primary button centered aligned';
    }

    if (this.props.title) {
      button = (<div>
        <div className="centered aligned row" >
          <div className={ buttonClass }>{ this.props.title } { buttonIcon } </div>
        </div>
      </div>);
    }

    return (
      button
    );
  }
}

export default HeroContent;
