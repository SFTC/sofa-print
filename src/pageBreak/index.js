import React from 'react';
import styled from 'styled-components';

const BreakBox = styled.div`
  page-break-after: always;
  height: 20px;
  background: #eee;
  box-shadow: 0 -1px 1px 1px #ddd;

  @media print {
    height: 0px;
    box-shadow: none;
  }
`;

const PageBreak = () => (<BreakBox />);

export default PageBreak;
