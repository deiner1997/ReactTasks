import React, { Component } from 'react';
import './App.css';
import PropTypes from 'prop-types'
import Layout from './components/layout';
class App extends Component {
  static propTypes = {
    children: PropTypes.object.isRequired
  };
  render() {
    return (
      <div className='backgroundimg'>
        <Layout />
        <div className="App">
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default App;
