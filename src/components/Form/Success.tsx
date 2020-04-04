import React, { FunctionComponent } from 'react';
import styled from 'styled-components';
import { useGlobalState, useDispatch } from '../../store/store';
import { handleModal, handleCoverage, handleModule } from '../../store/actions';

type Props = {};

const Success: FunctionComponent<Props> = () => {
  const [userInfo, price] = useGlobalState('userInfo', 'price');
  const dispatch = useDispatch();

  const handleCloseModal = () => {
    handleModal(dispatch, false, '');
    handleCoverage(dispatch, 0);
    handleModule(dispatch, 0, 0, 0, '');
  };

  return (
    <>
      <Text>
        Thank you {userInfo.firstName} for choosing us our managers will contact
        you by provided info {userInfo.telephone} or {userInfo.email}
        approximate price for insurance will be {price.toFixed(2)}$ more correct
        price will be calculated with our manager
      </Text>
      <Done onClick={handleCloseModal}>Done</Done>
    </>
  );
};

const Text = styled.div`
  line-height: 1.5rem;
  margin-bottom: 20px;
  text-align: left;
  word-wrap: break-word;
`;

const Done = styled.button`
  justify-self: center;
  align-self: start;
  width: 100px;
  height: 50px;
  border-radius: 10px;
  outline: none;
  background-color: #ef7014;
  color: #fff;
  margin: 0 auto;
  cursor: pointer;
  &:disabled {
    background-color: grey;
  }
  &:active,
  &:hover:not([disabled]) {
    background-color: #c3580c;
  }
`;

export default Success;
