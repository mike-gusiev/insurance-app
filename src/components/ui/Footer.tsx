import React, { FunctionComponent } from 'react';
import styled from 'styled-components';

type Props = {};

const Footer: FunctionComponent<Props> = () => {
  return <Container>Mike Gusev @copy 2020</Container>;
};

const Container = styled.footer`
  grid-area: footer;
  align-self: end;
  width: 100%;
  height: 50px;
  background-color: #205aaf;
  color: #fff;
  line-height: 50px;
  text-align: center;
`;

export default Footer;
