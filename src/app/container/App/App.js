import React, { Component, PropTypes } from 'react';
import { Footer } from '../../components';

class App extends Component {
  
  static propTypes = {
  	children: PropTypes.object.isRequired
  };

  render() {
  	console.log('App container rendering');
    return (
      <div id='outer-container'>
          <h1>Hello App.</h1>
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
