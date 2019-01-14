import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import './style.css';

function handlePrint() {
  window.print();
}
class Print extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  render() {
    return (
      <div>
        <button onClick={handlePrint}>打印</button>
      </div>
    );
  }
}

Print.propTypes = {
}

export default Print;
