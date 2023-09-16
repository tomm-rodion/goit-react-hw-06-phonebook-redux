import { createStore } from 'redux';
import { devToolsEnhancer } from '@redux-devtools/extension';
import { nanoid } from 'nanoid';

const getInitialContacts = () => {
  const savedUpContacts = localStorage.getItem('contacts');
  if (savedUpContacts !== null) {
    const parsContacts = JSON.parse(savedUpContacts);
    return parsContacts;
  }
  return [
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ];
};

const initialState = {
  contacts: getInitialContacts(),
  filter: '',
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'contacts/addContact':
      return {
        ...state,
        contacts: [action.payload, ...state.contacts],
      };
    case 'contacts/deleteContact':
      return {
        ...state,
        contacts: state.contacts.filter(
          contact => contact.id !== action.payload
        ),
      };
    case 'filter/foundContacts':
      if (typeof action.payload === 'string') {
        // Перевірка, чи action.payload є рядком
        if (action.payload === '') {
          // Якщо поле пошуку порожнє, повертаємо початковий список контактів
          return {
            ...state,
            contacts: getInitialContacts(),
            filter: '',
          };
        } else {
          // Якщо поле пошуку не порожнє, фільтруємо контакти
          return {
            ...state,
            contacts: state.contacts.filter(contact =>
              contact.name.toLowerCase().includes(action.payload.toLowerCase())
            ),
            filter: action.payload,
          };
        }
      } else {
        // Якщо action.payload не є '', просто оновлюємо filter
        return {
          ...state,
          filter: action.payload,
        };
      }
    default:
      return state;
  }
};

const enhancer = devToolsEnhancer();
export const store = createStore(rootReducer, enhancer);

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
  console.log('action.payload:', name);
  return {
    type: 'filter/foundContacts',
    payload: name,
  };
};
