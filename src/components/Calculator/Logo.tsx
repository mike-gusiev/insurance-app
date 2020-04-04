import React, { FunctionComponent } from 'react';
import styled from 'styled-components';
import logo from '../assets/images/gecko.jpg';

type Props = {};

const Logo: FunctionComponent<Props> = () => {
  return (
    <Container>
      <img src={logo} alt="gecko" />
    </Container>
  );
};

const Container = styled.div`
  grid-area: logo;
  display: none;
  @media (min-width: 600px) {
    display: initial;
  }
`;

export default Logo;
