import React, { FunctionComponent } from 'react';
import styled from 'styled-components';
import { useDispatch, useGlobalState } from '../../store/store';
import { handleModule } from '../../store/actions';
import icons from '../assets/icons';

type Props = {
  inputRef: React.RefObject<HTMLInputElement> | null;
};

type ButtonProps = {
  moduleN: string;
  activeName: string;
};

const Modules: FunctionComponent<Props> = ({ inputRef }) => {
  const dispatch = useDispatch();
  const [moduleName] = useGlobalState('moduleName');

  const handleChangeRange = (
    min: number,
    max: number,
    risk: number,
    moduleN: string
  ) => {
    handleModule(dispatch, min, max, risk, moduleN);
    inputRef?.current?.focus();
  };

  return (
    <Container>
      <ButtonsHeader>Modules</ButtonsHeader>
      <ButtonsGroup>
        <Button
          type="button"
          moduleN="bike"
          activeName={moduleName}
          onClick={handleChangeRange.bind(null, 0, 3000, 30, 'bike')}
        >
          <Icon src={icons.bike} alt="bike" />
          <ButtonText>Bike</ButtonText>
        </Button>
        <Button
          type="button"
          moduleN="jewelry"
          activeName={moduleName}
          onClick={handleChangeRange.bind(null, 500, 10000, 5, 'jewelry')}
        >
          <Icon src={icons.jewelry} alt="jewelry" />
          <ButtonText>Jewelry</ButtonText>
        </Button>
        <Button
          type="button"
          moduleN="electronics"
          activeName={moduleName}
          onClick={handleChangeRange.bind(null, 500, 6000, 35, 'electronics')}
        >
          <Icon src={icons.electronics} alt="electronics" />
          <ButtonText>Electronics</ButtonText>
        </Button>
        <Button
          type="button"
          moduleN="sport"
          activeName={moduleName}
          onClick={handleChangeRange.bind(null, 0, 20000, 30, 'sport')}
        >
          <Icon src={icons.sportEquipment} alt="sport equipment" />
          <ButtonText>Sport equipment</ButtonText>
        </Button>
      </ButtonsGroup>
    </Container>
  );
};

const Container = styled.div`
  justify-self: center;
  grid-area: buttons;
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 420px;
`;

const ButtonsHeader = styled.h2`
  margin: 5px;
  text-align: center;
`;

const ButtonsGroup = styled.div`
  display: grid;
  grid-template-columns: 200px 200px;
  grid-template-rows: 50px 50px;
  grid-gap: 10px;
`;

const Button = styled.button<ButtonProps>`
  display: flex;
  justify-content: space-around;
  justify-self: center;
  align-items: center;
  width: 100%;
  max-width: 170px;
  border: ${({ activeName, moduleN }) =>
    activeName === moduleN ? '1px solid #A8D2A5' : '1px solid #9bb9e5;'};
  border-radius: 10px;
  background-color: ${({ activeName, moduleN }) =>
    activeName === moduleN ? '#A8D2A5' : '#FFF'};
  outline: none;
  cursor: pointer;
  font-family: 'Lato', sans-serif;
  &:hover {
    border: 1px solid #a8d2a5;
  }
  @media (min-width: 600px) {
    max-width: 200px;
  }
`;

const ButtonText = styled.span`
  margin-left: 20px;
`;

const Icon = styled.img`
  width: 20px;
`;

export default Modules;
