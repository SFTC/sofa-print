import React, { Component } from 'react';
import styled, { css } from 'styled-components';
// import Print from '../../src/printPage';

const PageWrapper = styled.div`
  padding: 20px;
`;
class PrintPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      orderList: [1, 2, 3, 4, 5],
      skuList: [1, 2, 3, 4],
    };
  }
  render() {
    const { orderList, skuList } = this.state;
    return (
      <div>
        {/* <Print
          trigger={() => <a href="#">Print this out!</a>}
          content={() => this.componentRef}
        /> */}
        <PageWrapper id="print-wrapper" ref={el => (this.componentRef = el)}>
          {orderList.map((order) => (
            <div key={order}>
              <h2>order detail table</h2>
              <table>
                <thead>
                  <tr>
                    <th>column 1</th>
                    <th>column 2</th>
                    <th>column 3</th>
                    <th>column 4</th>
                    <th>column 5</th>
                    <th>column 6</th>
                    <th>column 7</th>
                    <th>column 8</th>
                    <th>column 9</th>
                  </tr>
                </thead>
                <tbody>
                  {skuList.map((sku) => (
                    <tr key={sku}>
                      <td>data 1</td>
                      <td>data 2</td>
                      <td>data 3</td>
                      <td>data 4</td>
                      <td>data 5</td>
                      <td>data 6</td>
                      <td>data 7</td>
                      <td>data 8</td>
                      <td>data 9</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <div className="break-page"></div>
            </div>
          ))}
        </PageWrapper>
      </div>
    );
  }
}

PrintPage.propTypes = {
}

export default PrintPage;
