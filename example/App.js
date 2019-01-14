import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import styled from 'styled-components';
import Print from '../src/index';
import Break from '../src/break/index';

const Button = styled.button`
  line-height: 1.2;
  display: inline-block;
  font-weight: 400;
  text-align: center;
  touch-action: manipulation;
  cursor: pointer;
  background-image: none;
  border: 1px solid transparent;
  white-space: nowrap;
  padding: 0 15px;
  font-size: 12px;
  border-radius: 4px;
  height: 28px;
  user-select: none;
  transition: all .3s cubic-bezier(.645,.045,.355,1);
  position: relative;
  color: rgba(0,0,0,.65);
  background-color: #fff;
  border-color: #d9d9d9;
`;

const PageContainer = styled.div`
  background: #E5E5E5;
  padding: 20px;
  height: 100vh;
`;

const ActionBar = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
`;

function handlePrint() {
  window.print();
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  render() {
    return (
      <PageContainer id="page-container">
        <ActionBar className="action-bar">
          <Button onClick={handlePrint} style={{ marginRight: 10 }}>
            打印
          </Button>
          <Button onClick={this.handleBack}>
            返回
          </Button>
        </ActionBar>
        <Print direction="vertical" wrapperHeight={200}>
          <p>first</p>
          <p>second</p>
          <p>third</p>
          <Break />
          <p>first</p>
          <p>second</p>
          <p>third</p>
        </Print>
      </PageContainer>
    );
  }
}

App.propTypes = {
}

export default App;
