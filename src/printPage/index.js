import React from 'react';
import ReactToPrint from "react-to-print";
import styled from 'styled-components';

const PreviewBox = styled.div`
  width: 100%;
  height: 100%;
  padding: 50px 100px;
  background-color: #333;
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
    return (
      <div>
        <ReactToPrint
          trigger={() => <a style={{ visibility: 'hidden' }} id="sofa-print-button" href="#"></a>}
          content={() => this.componentRef}
        />
        <div ref={(el) => (this.componentRef = el)}>
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default PrintPage;
