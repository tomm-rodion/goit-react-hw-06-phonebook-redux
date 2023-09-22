import { getInitialContacts, updateLocalStorage } from 'utils/initialState';

const initialState = {
  contacts: getInitialContacts(),
  filter: '',
};

export const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'contacts/addContact':
      const updatedContactsAdd = [action.payload, ...state.contacts];
      updateLocalStorage(updatedContactsAdd);
      return {
        ...state,
        contacts: updatedContactsAdd,
      };
    case 'contacts/deleteContact':
      const updetedDeleteContact = state.contacts.filter(
        contact => contact.id !== action.payload
      );
      updateLocalStorage(updetedDeleteContact);
      return {
        ...state,
        contacts: updetedDeleteContact,
      };
    case 'filter/foundContacts':
      return {
        ...state,
        filter: action.payload,
      };
    default:
      return state;
  }
};
