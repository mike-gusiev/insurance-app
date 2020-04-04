import React, { FunctionComponent, ReactNode } from 'react';
import styled from 'styled-components';
import { useGlobalState } from '../../store/store';
import Backdrop from './Backdrop';

type Props = {
  children: ReactNode;
};

const Modal: FunctionComponent<Props> = ({ children }) => {
  const [modal] = useGlobalState('modal');
  return (
    modal.show && (
      <>
        <Backdrop />
        <Container>{children}</Container>
      </>
    )
  );
};

const Container = styled.div`
  width: 70vw;
  height: 70vh;
  background-color: #fff;
  z-index: 2;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 10px;
`;

export default Modal;
