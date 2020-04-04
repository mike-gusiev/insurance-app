import React, { FunctionComponent, useState } from 'react';
import styled from 'styled-components';
import { useDispatch, useGlobalState } from '../../store/store';
import { handleModal, handleForm } from '../../store/actions';
import routes from '../../routes';

type Props = {};

const Form: FunctionComponent<Props> = () => {
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    telephone: '',
    zipCode: '',
    address: '',
    city: '',
  });

  const [modal] = useGlobalState('modal');
  const dispatch = useDispatch();

  const currentIndex = routes.findIndex((route) => route.name === modal.step);

  let modalHeaderText = '';
  let nextEnabled = false;
  const backEnabled = currentIndex > 0;

  switch (routes[currentIndex].name) {
    case 'name':
      nextEnabled = !!form.firstName && !!form.lastName;
      modalHeaderText = 'We need to know your name.';
      break;
    case 'address':
      nextEnabled = !!form.zipCode && !!form.address && !!form.city;
      modalHeaderText = 'We need to know your address.';
      break;
    case 'contacts':
      nextEnabled = !!form.email && !!form.telephone;
      modalHeaderText = 'We need to know your contacts information.';
      break;
    case 'success':
      nextEnabled = false;
      modalHeaderText = 'Congratulations with first step to safety!';
      break;
    default:
      break;
  }

  const handleNext = () => {
    const step = routes[currentIndex + 1].name;
    handleModal(dispatch, true, step);
    handleForm(dispatch, form);
  };

  const handleBack = () => {
    const step = routes[currentIndex - 1].name;
    handleModal(dispatch, true, step);
  };

  return (
    <ModalContainer>
      <ModalHeader>{modalHeaderText}</ModalHeader>
      {routes.map(({ name, Component }) => {
        if (modal.step === name)
          return <Component key={name} form={form} setForm={setForm} />;
      })}
      <Buttons>
        {backEnabled && currentIndex < routes.length - 1 && (
          <Back onClick={handleBack}>Back</Back>
        )}
        {currentIndex < routes.length - 1 && (
          <Next disabled={!nextEnabled} onClick={handleNext}>
            Next
          </Next>
        )}
      </Buttons>
    </ModalContainer>
  );
};

const ModalHeader = styled.p`
  width: 100%;
  display: flex;
  justify-content: center;
  font-size: 20px;
  margin-bottom: 30px;
`;

const ModalContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: 100%;
  padding: 2rem;
  height: 80%;
  max-height: 100%;
`;
const Buttons = styled.div`
  width: 220px;
  position: relative;
`;
const Back = styled.button`
  width: 50px;
  height: 30px;
  position: absolute;
  left: 0;
  outline: none;
  cursor: pointer;
  color: #3772ca;
  font-size: 14px;
  border-radius: 5px;
  &:hover {
    color: #2a5ca3;
  }
`;
const Next = styled.button`
  width: 80px;
  height: 30px;
  position: absolute;
  cursor: pointer;
  right: 0;
  outline: none;
  font-size: 14px;
  background-color: #3772ca;
  color: #fff;
  border-radius: 5px;
  margin-left: 20px;
  &:disabled {
    background-color: grey;
  }
  &:hover:not([disabled]) {
    background-color: #2a5ca3;
  }
`;

export default Form;
