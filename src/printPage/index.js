import React from 'react';
import ReactToPrint from "react-to-print";

class Print extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
    this.printMethod = this.printMethod.bind(this);
  }

  printMethod() {
    document.getElementById('print-button').click();
  }

  render() {
    return (
      <div>
        <ReactToPrint
          trigger={() => <a style={{ visibility: 'hidden' }} id="print-button" href="#"></a>}
          content={() => this.componentRef}
        />
        <div ref={(el) => (this.componentRef = el)}>
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default Print;
