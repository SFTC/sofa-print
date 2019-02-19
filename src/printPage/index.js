import React from 'react';
import PropTypes from 'prop-types';
import ReactToPrint from "react-to-print";
import styled, { css }  from 'styled-components';

const PreviewBox = styled.div`
  height: 100%;
  box-sizing: content-box;
  background-color: #f5f5f5;
  ${(props) => props.pageWidth && css`
    width: ${props.pageWidth}px;
    padding: 50px calc((100% - ${props.pageWidth}px)/2);
  `}
`;

class PrintPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
    this.printMethod = this.printMethod.bind(this);
  }

  printMethod() {
    document.getElementById('sofa-print-button').click();
  }

  render() {
    const { previewStyle, pageWidth } = this.props;
    return (
      <div>
        <ReactToPrint
          trigger={() => <a style={{ visibility: 'hidden' }} id="sofa-print-button" href="#"></a>}
          content={() => this.componentRef}
        />
        {previewStyle ?
          <PreviewBox pageWidth={pageWidth}>
            <div ref={(el) => (this.componentRef = el)}>
              {this.props.children}
            </div>
          </PreviewBox> :
          <div ref={(el) => (this.componentRef = el)}>
            {this.props.children}
          </div>
        }
      </div>
    );
  }
}

PrintPage.propTypes = {
  previewStyle: PropTypes.bool,
  pageWidth: PropTypes.number,
}
PrintPage.defaultProps = {
  previewStyle: false,
  pageWidth: 764,
}

export default PrintPage;
