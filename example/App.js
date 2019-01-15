import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import Print from '../src/print/index';
import Break from '../src/break/index';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  render() {
    return (
      <Print direction="vertical" wrapperHeight={200}>
      <p>first</p>
      <p>second</p>
      <p>third</p>
      <p>first</p>
      <p>second</p>
      <p>third</p>
    </Print>
    );
  }
}

App.propTypes = {
}

export default App;
