import React, { FunctionComponent } from 'react';
import styled from 'styled-components';
import { useDispatch } from '../../store/store';
import { handleModal } from '../../store/actions';

type Props = {};

const Backdrop: FunctionComponent<Props> = () => {
  const dispatch = useDispatch();

  const handleCloseModal = () => {
    handleModal(dispatch, false, '')
  };
  return <Container onClick={handleCloseModal} />;
};

const Container = styled.div`
  position: fixed;
  width: 100vw;
  height: 100vh;
  z-index: 1;
  left: 0;
  top: 0;
  background-color: rgba(0, 0, 0, 0.5);
`;

export default Backdrop;
