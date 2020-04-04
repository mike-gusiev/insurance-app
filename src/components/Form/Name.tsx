import React, { FunctionComponent } from 'react';
import handleInput from '../../utils/handleInput';
import { FormContainer, Input, Label } from '../../utils/Styled';

type Props = {
  form: {
    firstName: string;
    lastName: string;
    zipCode: string;
    address: string;
    city: string;
    email: string;
    telephone: string;
  };
  setForm: Function;
};

const Name: FunctionComponent<Props> = ({
  form: { firstName, lastName },
  setForm,
}) => {
  return (
    <FormContainer>
      <Label htmlFor="firstName">First Name</Label>
      <Input
        id="firstName"
        type="text"
        name="firstName"
        placeholder="First Name"
        value={firstName}
        onChange={(e) => handleInput(e, setForm)}
      />
      <Label htmlFor="lastName">Last Name</Label>
      <Input
        id="lastName"
        type="text"
        name="lastName"
        placeholder="Last Name"
        value={lastName}
        onChange={(e) => handleInput(e, setForm)}
      />
    </FormContainer>
  );
};

export default Name;
