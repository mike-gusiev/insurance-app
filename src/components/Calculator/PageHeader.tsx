import React, { FunctionComponent } from 'react';
import styled from 'styled-components';

type Props = {};

const PageHeader: FunctionComponent<Props> = () => {
  return (
    <Container>
      <h1>More than just insurance. What would you like to protect?</h1>
    </Container>
  );
};

const Container = styled.div`
  grid-area: pageHeader;
  height: 50px;
  line-height: 50px;
  text-align: center;
`;

export default PageHeader;
