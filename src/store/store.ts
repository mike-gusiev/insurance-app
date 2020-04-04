import React, { createContext, useContext } from 'react';
import { actionTypes } from './types';

export const initialState = {
  minRange: 0,
  maxRange: 0,
  risk: 0,
  coverage: 0,
  price: 0,
  moduleName: '',
  modal: {
    show: false,
    step: '',
  },
  userInfo: {
    firstName: '',
    lastName: '',
    zipCode: '',
    address: '',
    city: '',
    email: '',
    telephone: '',
  },
};

export type Store = {
  minRange: number;
  maxRange: number;
  risk: number;
  coverage: number;
  price: number;
  moduleName: string;
  modal: {
    show: boolean;
    step: string;
  };
  userInfo: {
    firstName: string;
    lastName: string;
    zipCode: string;
    address: string;
    city: string;
    email: string;
    telephone: string;
  };
};

export type Action =
  | {
      type: actionTypes.CHANGE_MODULE;
      min: number;
      max: number;
      risk: number;
      moduleName: string;
    }
  | { type: actionTypes.CHANGE_COVERAGE; coverage: number }
  | { type: actionTypes.CHANGE_MODAL; show: boolean; step: string }
  | {
      type: actionTypes.CHANGE_FORM;
      firstName?: string;
      lastName?: string;
      zipCode?: string;
      address?: string;
      apt?: string;
      email?: string;
      telephone?: string;
    };

export function reducer(state: Store, action: Action) {
  switch (action.type) {
    case actionTypes.CHANGE_MODULE:
      return {
        ...state,
        minRange: action.min,
        maxRange: action.max,
        risk: action.risk,
        moduleName: action.moduleName,
      };
    case actionTypes.CHANGE_COVERAGE:
      return {
        ...state,
        coverage: action.coverage,
        price: action.coverage * (state.risk / 100),
      };
    case actionTypes.CHANGE_MODAL:
      return {
        ...state,
        modal: {
          ...state.modal,
          show: action.show,
          step: action.step,
        },
      };
    case actionTypes.CHANGE_FORM:
      return {
        ...state,
        userInfo: {
          ...state.userInfo,
          firstName: action.firstName
            ? action.firstName
            : state.userInfo.firstName,
          lastName: action.lastName ? action.lastName : state.userInfo.lastName,
          zipCode: action.zipCode ? action.zipCode : state.userInfo.zipCode,
          address: action.address ? action.address : state.userInfo.address,
          apt: action.apt ? action.apt : state.userInfo.city,
          email: action.email ? action.email : state.userInfo.email,
          telephone: action.telephone
            ? action.telephone
            : state.userInfo.telephone,
        },
      };
    default:
      return state;
  }
}

export const StateCtx = createContext(initialState);
export const DispatchCtx = createContext((() => 0) as React.Dispatch<Action>);

export const useDispatch = () => {
  return useContext(DispatchCtx);
};

export const useGlobalState = <K extends keyof Store>(...property: K[]) => {
  const state = useContext(StateCtx);
  const results = [] as any[];
  for (const prop of property) {
    results.push(state[prop]);
  }
  return results;
};
