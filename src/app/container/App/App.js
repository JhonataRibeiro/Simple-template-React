import React, { Component, PropTypes } from 'react';
import { Footer } from '../../components';

class App extends Component {

    static propTypes = {
        children: PropTypes.object.isRequired
    };

    render() {
        console.log('App container rendering');
        //TODO: add normalize
        //const normalize = require('../../../../node_modules/normalize.css/normalize.css');
        const styles = require('./App.scss');
        console.log(styles);
        return (
            <div id='outer-container'>
                <main id='page-wrap'>
                        { this.props.children }
                        <Footer/>
                </main>
            </div>
        );
    }
}

export default App;
