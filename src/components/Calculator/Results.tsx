import React, { FunctionComponent } from 'react';
import styled from 'styled-components';
import { useGlobalState, useDispatch } from '../../store/store';
import { handleModal } from '../../store/actions';
import Modal from '../ui/Modal';
import Form from '../Form';

type Props = {};

const Results: FunctionComponent<Props> = () => {
  const [price] = useGlobalState('price');
  const dispatch = useDispatch();

  const handleProceedBuying = () => {
    handleModal(dispatch, true, 'name');
  };

  return (
    <Container>
      <Text>Your price will be {price.toFixed(2)}</Text>
      <Button disabled={!price} onClick={handleProceedBuying}>
        Buy insurance
      </Button>
      <Modal>
        <Form>some children in here</Form>
      </Modal>
    </Container>
  );
};

const Container = styled.div`
  grid-area: results;
  display: flex;
  justify-content: space-around;
`;

const Text = styled.p`
  grid-column: 2/3;
  height: 50px;
  width: 200px;
  border: 1px solid #ef7014;
  border-radius: 10px;
  line-height: 50px;
  text-align: center;
  &:hover {
    border: 1px solid #c3580c;
  }
`;

const Button = styled.button`
  justify-self: center;
  align-self: start;
  width: 100px;
  height: 50px;
  border-radius: 10px;
  outline: none;
  background-color: #ef7014;
  color: #fff;
  cursor: pointer;
  &:disabled {
    background-color: grey;
  }
  &:active,
  &:hover:not([disabled]) {
    background-color: #c3580c;
  }
`;

export default Results;
