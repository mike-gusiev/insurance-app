import React, { FunctionComponent } from 'react';
import styled from 'styled-components';

type Props = {};

const Header: FunctionComponent<Props> = () => {
  return <Container>Geekle insurance</Container>;
};

const Container = styled.header`
  grid-area: header;
  width: 100%;
  height: 50px;
  background-color: #205aaf;
  color: #fff;
  line-height: 50px;
  text-align: center;
`;

export default Header;
