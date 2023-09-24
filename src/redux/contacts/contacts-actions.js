import { nanoid } from 'nanoid';
import { TYPES } from './contacts-types';

export const addContact = ({ name, number }) => {
  return {
    type: TYPES.ADD_CONTACTS,
    payload: { id: nanoid(), name, number },
  };
};

export const deleteContact = id => {
  return {
    type: TYPES.DELETE_CONTACTS,
    payload: id,
  };
};

export const foundContacts = name => {
  return {
    type: TYPES.FOUND_CONTACTS,
    payload: name,
  };
};
