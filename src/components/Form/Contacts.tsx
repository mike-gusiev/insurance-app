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

const Contacts: FunctionComponent<Props> = ({
  form: { email, telephone },
  setForm,
}) => {
  return (
    <FormContainer>
      <Label htmlFor="email">Email</Label>
      <Input
        id="email"
        type="email"
        name="email"
        placeholder="Email"
        value={email}
        onChange={(e) => handleInput(e, setForm)}
      />
      <Label htmlFor="telephone">Telephone</Label>
      <Input
        id="telephone"
        type="tel"
        name="telephone"
        placeholder="Telephone"
        value={telephone}
        onChange={(e) => handleInput(e, setForm)}
      />
    </FormContainer>
  );
};

export default Contacts;
