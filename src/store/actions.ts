import React from 'react';
import { actionTypes } from './types';
import { Action } from './store';

export const handleCoverage = (
  dispatch: React.Dispatch<Action>,
  coverage: number
) => {
  dispatch({ type: actionTypes.CHANGE_COVERAGE, coverage });
};

export const handleModule = (
  dispatch: React.Dispatch<Action>,
  min: number,
  max: number,
  risk: number,
  moduleN: string
) => {
  dispatch({
    type: actionTypes.CHANGE_MODULE,
    min,
    max,
    risk,
    moduleName: moduleN,
  });
};

export const handleModal = (
  dispatch: React.Dispatch<Action>,
  show: boolean,
  step: string
) => {
  dispatch({ type: actionTypes.CHANGE_MODAL, show, step });
};

export const handleForm = (
  dispatch: React.Dispatch<Action>,
  form: {
    firstName: string;
    lastName: string;
    zipCode: string;
    address: string;
    city: string;
    email: string;
    telephone: string;
  }
) => {
  dispatch({
    type: actionTypes.CHANGE_FORM,
    ...form,
  });
};
