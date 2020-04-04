import React, { FunctionComponent, useState } from 'react';
import styled from 'styled-components';
import { useGlobalState, useDispatch } from '../../store/store';
import { handleCoverage } from '../../store/actions';

type Props = {
  inputRef: React.RefObject<HTMLInputElement> | null;
};

const Coverage: FunctionComponent<Props> = ({ inputRef }) => {
  const [minRange, maxRange, moduleName] = useGlobalState(
    'minRange',
    'maxRange',
    'moduleName'
  );

  const dispatch = useDispatch();
  const [coverage, setCoverage] = useState(0);

  const handleInputChange = (e: React.ChangeEvent) => {
    const target = e.target as HTMLInputElement;
    setCoverage(parseInt(target?.value, 10));
  };

  const isButtonEnabled =
    moduleName && coverage < maxRange && coverage > minRange;

  return (
    <Container>
      {moduleName ? (
        <Text>
          In module {moduleName} you have coverage from {minRange} to {maxRange}
        </Text>
      ) : (
        <Text>Please select module</Text>
      )}
      <Input
        ref={inputRef}
        type="number"
        min={minRange}
        max={maxRange}
        onChange={handleInputChange}
      />
      <Button
        disabled={!isButtonEnabled}
        type="button"
        onClick={handleCoverage.bind(null, dispatch, coverage)}
      >
        Choose coverage
      </Button>
    </Container>
  );
};

const Container = styled.div`
  grid-area: calculator;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Text = styled.p`
  margin: 5px;
  line-height: 1.5rem;
  text-align: center;
`;

const Input = styled.input`
  width: 200px;
  margin: 5px;
  padding: 5px;
  border: 1px solid #7a7a7a;
  border-radius: 10px;
  outline: none;
`;

const Button = styled.button`
  width: 200px;
  height: 40px;
  margin: 5px;
  background-color: #205aaf;
  color: #fff;
  border-radius: 5px;
  outline: none;
  cursor: pointer;
  &:disabled {
    background-color: grey;
  }
  &:hover:not([disabled]) {
    background-color: #2a5ca3;
  }
`;

export default Coverage;
