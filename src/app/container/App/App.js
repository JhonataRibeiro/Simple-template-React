import React, { Component, PropTypes } from 'react';
import { Footer } from '../../components';

class App extends Component {
  
  static propTypes = {
  	children: PropTypes.object.isRequired
  };

  render() {
  	console.log('App container rendering');
    const styles = require('./App.js');
    return (
      <div id='outer-container'>
          <main id='page-wrap'>
      			   <div>
                { this.props.children }
               </div>
               <Footer/>
      		</main>
      </div>
    );
  }
}

export default App;
