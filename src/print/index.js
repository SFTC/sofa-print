import React, { Component } from 'react';
// import PropTypes from 'prop-types';

function handlePrint() {
  window.print();
}
class Print extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
    this.handleBack = this.handleBack.bind(this);
  }
  handleBack(e) {
    e.preventDefault();
    console.log('handle back la');
  }
  render() {
    return (
      <div>
        <button onClick={handlePrint}>打印</button>
        <button onClick={this.handleBack}>返回</button>
      </div>
    );
  }
}

Print.propTypes = {
}

export default Print;
