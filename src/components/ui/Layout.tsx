import React, { FunctionComponent, ReactNode } from 'react';
import styled from 'styled-components';
import Header from './Header';
import Footer from './Footer';

type Props = {
  children: ReactNode;
};
const Layout: FunctionComponent<Props> = ({ children }) => {
  return (
    <Container>
      <Header />
      {children}
      <Footer />
    </Container>
  );
};

const Container = styled.div`
  display: grid;
  grid-template-areas:
    'header'
    'pageHeader'
    'buttons'
    'calculator'
    'results'
    'footer';
  grid-template-columns: 1fr;
  grid-template-rows: 50px 50px 2fr 1fr 50px;
  grid-gap: 10px;
  height: 100vh;
  @media (min-width: 600px) {
    grid-template-areas:
      'header header'
      'pageHeader pageHeader'
      'logo buttons'
      'logo  calculator'
      'logo results'
      'footer footer';
    grid-template-columns: 30% 1fr;
    grid-template-rows: 50px 50px 2fr 1fr 1fr 50px;
  }
  @media (min-width: 992px) {
    grid-template-areas:
      'header header header'
      'pageHeader pageHeader pageHeader'
      'logo buttons calculator'
      'logo results .'
      'footer footer footer';
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: 50px 50px 2fr 1fr 50px;
  }
`;

export default Layout;
