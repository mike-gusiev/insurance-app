import Name from './components/Form/Name';
import Address from './components/Form/Address';
import Contacts from './components/Form/Contacts';
import Success from './components/Form/Success';

export default [
  {
    name: 'name',
    Component: Name,
  },
  {
    name: 'address',
    Component: Address,
  },
  {
    name: 'contacts',
    Component: Contacts,
  },
  {
    name: 'success',
    Component: Success,
  },
];
