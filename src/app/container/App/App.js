import React, { Component, PropTypes } from 'react';
import { Footer } from '../../components';

class App extends Component {
  
  static propTypes = {
  	children: PropTypes.object.isRequired
  };

  render() {
  	console.log('App container rendering');
    const styles = require('./App.scss');
    console.log(styles);
    return (
      <div id='outer-container'>
          <main id='page-wrap'>
      			   <div>
                { this.props.children }
               </div>
               <div className={styles.app}>
                  <div className={styles.brand}>Jhonata Ribeiro</div>
               </div>
               <Footer/>
      		</main>
      </div>
    );
  }
}

export default App;
