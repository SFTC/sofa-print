import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import './style.css';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <div className="laba-header">
        <h1>hello world</h1>
      </div>
    );
  }
}

Header.propTypes = {
}

export default Header;
