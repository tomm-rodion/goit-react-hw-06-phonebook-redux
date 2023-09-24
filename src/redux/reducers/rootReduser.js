import { TYPES } from 'redux/contacts/contacts-types';
import { getInitialContacts } from 'utils/initialState';

const initialState = {
  contacts: getInitialContacts(),
  filter: '',
};

export const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case TYPES.ADD_CONTACTS:
      const updatedContactsAdd = [action.payload, ...state.contacts];
      return {
        ...state,
        contacts: updatedContactsAdd,
      };
    case TYPES.DELETE_CONTACTS:
      const updetedDeleteContact = state.contacts.filter(
        contact => contact.id !== action.payload
      );
      return {
        ...state,
        contacts: updetedDeleteContact,
      };
    case TYPES.FOUND_CONTACTS:
      return {
        ...state,
        filter: action.payload,
      };
    default:
      return state;
  }
};
