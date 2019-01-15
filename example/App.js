import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import Print from '../src/print/index';
import Break from '../src/break/index';

const AppWrapper = styled.div`
  padding: 20px;
`;
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  render() {
    return (
      <AppWrapper>
        <Print direction="vertical" wrapperHeight={500}>
          <p>first</p>
          <p>second</p>
          <p>third</p>
        </Print>
      </AppWrapper>
    );
  }
}

App.propTypes = {
}

export default App;
