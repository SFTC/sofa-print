import React, { Component } from 'react';
import styled, { css } from 'styled-components';

const HeaderBar = styled.div`
  height: 60px;
  width: 100%;
  background: #eee;
  display: flex;
`;
class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    const printComponent = document.getElementById('print-wrapper');
    const app = document.getElementById('app');
    console.log('app', app);
    const child = app.firstChild;
    console.log('000000', child);
    app.removeChild(child);
    // app.appendChild(printComponent);
    // window.print();
    // console.log('11111111', child);
    // app.removeChild(printComponent);
    // console.log('llllll', child);
    // app.appendChild(child);
    // console.log('click', printComponent, app.childNodes);
  }
  render() {
    return (
      <HeaderBar id="header">
        <h1>print example</h1>
        <button onClick={this.handleClick}>click</button>
      </HeaderBar>
    );
  }
}

Header.propTypes = {
}

export default Header;
