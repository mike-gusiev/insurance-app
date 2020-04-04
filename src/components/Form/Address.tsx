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

const Address: FunctionComponent<Props> = ({
  form: { zipCode, address, city },
  setForm,
}) => {
  return (
    <FormContainer>
      <Label htmlFor="zipCode">Zip code</Label>
      <Input
        id="zipCode"
        type="zip"
        name="zipCode"
        placeholder="Zip Code"
        value={zipCode}
        onChange={(e) => handleInput(e, setForm)}
      />

      <Label htmlFor="address">Address</Label>
      <Input
        id="address"
        type="text"
        name="address"
        placeholder="Address"
        value={address}
        onChange={(e) => handleInput(e, setForm)}
      />
      <Label htmlFor="apt">City</Label>
      <Input
        id="city"
        type="text"
        name="city"
        placeholder="City"
        value={city}
        onChange={(e) => handleInput(e, setForm)}
      />
    </FormContainer>
  );
};

export default Address;
