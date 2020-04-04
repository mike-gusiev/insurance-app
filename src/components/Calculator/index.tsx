import React, { FunctionComponent, useRef } from 'react';
import Modules from './Modules';
import Logo from './Logo';
import Coverage from './Coverage';
import PageHeader from './PageHeader';
import Results from './Results';

type Props = {};

const Calculator: FunctionComponent<Props> = () => {
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <>
      <PageHeader />
      <Logo />
      <Modules inputRef={inputRef} />
      <Coverage inputRef={inputRef} />
      <Results />
    </>
  );
};

export default Calculator;
