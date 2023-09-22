import { nanoid } from 'nanoid';

export const addContact = ({ name, number }) => {
  return {
    type: 'contacts/addContact',
    payload: { id: nanoid(), name, number },
  };
};

export const deleteContact = id => {
  return {
    type: 'contacts/deleteContact',
    payload: id,
  };
};

export const foundContacts = name => {
  return {
    type: 'filter/foundContacts',
    payload: name,
  };
};
