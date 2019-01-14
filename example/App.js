import React, { Component } from 'react';
// import PropTypes from 'prop-types';

import Print from '../src/index';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  render() {
    return (
      <div>
        <h1>打印示例页面</h1>
        <Print />
      </div>
    );
  }
}

App.propTypes = {
}

export default App;
