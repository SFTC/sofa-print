import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import '../style.css';

const PrintWrapper = styled.div`
  margin-top: 20px;
  background: #fff;
  font-size: 14px;
  overflow-y: scroll;
  overflow-x: hidden;
  border: 1px solid #ddd;
  font-family: "NSimSun", "SimHei", "FangSong_GB2312";

  ${(props) => props.height && css`
    height: ${props.height}px;
  `}
`;

const PrintArea = styled.div`
  margin: 0 auto;
`;

class Print extends Component {
  constructor(props) {
    super(props);
    this.state = {
      height: 300,
    };
  }
  render() {
    const { direction } = this.props;
    const { height } = this.state;

    const width = direction === 'horizontal' ? 1050 : 950;
    return (
      <PrintWrapper className="print-wrapper" style={{ width }} height={height}>
        <PrintArea id="section-to-print">
          { this.props.children }
        </PrintArea>
      </PrintWrapper>
    );
  }
}

Print.propTypes = {
  direction: PropTypes.string.isRequired,
  children: PropTypes.any,
}

export default Print;
