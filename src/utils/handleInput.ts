import { ChangeEvent } from 'react';

export default (e: ChangeEvent, fn: Function) => {
  const target = e.target as HTMLInputElement;
  const { name, value } = target;
  fn((prevState: string | {}) => {
    if (typeof prevState === 'string') {
      return value;
    }
    return {
      ...prevState,
      [name]: value,
    };
  });
};
