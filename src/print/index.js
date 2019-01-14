import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import '../style.less';

const PrintWrapper = styled.div`
  background: #fff;
  font-size: 14px;
  overflow-y: scroll;
  overflow-x: hidden;
  border: 1px solid #ddd;
  font-family: "NSimSun", "SimHei", "FangSong_GB2312";

  ${(props) => props.height && css`
    height: ${props.height}px;
  `}
  @media print {
    .page-container {
      padding: 0 !important;
    }
  }
`;

const PrintArea = styled.div`
  margin: 0;
`;

class Print extends Component {
  constructor(props) {
    super(props);
    this.state = {
      height: 300,
    };
    this.resetHeight = this.resetHeight.bind(this);
  }
  componentDidMount() {
    this.resetHeight();
    window.addEventListener('resize', this.resetHeight);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.resetHeight);
  }

  resetHeight() {
    const innerHeight = document.body.offsetHeight;
    this.setState({
      height: innerHeight - 200,
    });
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
  children: PropTypes.any,
  direction: PropTypes.string.isRequired,
  wrapperHeight: PropTypes.number.isRequired,
  paddingZeroClassName: PropTypes.string,
  marginZeroClassName: PropTypes.string,
  displayNoneClassName: PropTypes.string,
}

export default Print;
