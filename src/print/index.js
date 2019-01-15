import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

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
  color: rgba(0,0,0,.65);
  background-color: #fff;
  border-color: #d9d9d9;
  outline: none;
`;

const ActionBar = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  height: 50px;
  padding: 0 20px;
  background: #f4f4f4;
  box-shadow: 0 3px 5px #ccc;
`;
const PageContainer = styled.div`
  width: 950px;
  height: 800px;

  ${(props) => props.debugStyle && css`
    body * {
      visibility: hidden;
    }
    @page {
      margin: 0px 0px;
    }
    #section-to-print {
      margin-left: 0;
      padding: 0;
    }
    #section-to-print, #section-to-print * {
      visibility: visible;
    }
    #section-to-print .break-page {
      page-break-after: always;
      height: 0px;
      box-shadow: none;
      margin-top: 0;
    }
    //具体页面需要重置的样式//
    .action-bar {
      height: 0;
      display: none;
    }
  `}
  ${(props) => !props.debugStyle && css`
    @media print {
      body * {
        visibility: hidden;
      }
      @page {
        margin: 0px 0px;
      }
      #section-to-print {
        // 打印区域样式
        margin-left: 0;
        padding: 0;
      }
      #section-to-print, #section-to-print * {
        visibility: visible;
      }
      #section-to-print .break-page {
        page-break-after: always;
        height: 0px;
        box-shadow: none;
        margin-top: 0;
      }
      //具体页面需要重置的样式//
      .action-bar {
        height: 0;
        display: none;
      }
    }
  `}
`;

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
`;

const PrintArea = styled.div`
  margin: 0;
`;
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
    const { direction, wrapperHeight } = this.props;

    const width = direction === 'horizontal' ? 1050 : 950;
    return (
      <PageContainer debugStyle={false}>
        <ActionBar className="action-bar">
          <Button onClick={handlePrint} style={{ marginRight: 10 }}>
            打印
          </Button>
          <Button onClick={this.handleBack}>
            返回
          </Button>
        </ActionBar>
        <PrintWrapper className="print-wrapper" style={{ width }} height={wrapperHeight}>
          <PrintArea id="section-to-print">
            { this.props.children }
          </PrintArea>
        </PrintWrapper>
      </PageContainer>
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
