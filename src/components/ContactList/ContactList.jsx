import { ContactItem } from 'components/ContactItem/ContactItem';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { getContacts } from 'redux/contacts/contacts-seltctors';
import { getFilter } from 'redux/contacts/contacts-seltctors';
import { updateLocalStorage } from 'utils/initialState';

export const ContactList = () => {
  const allContacts = useSelector(getContacts);
  const valueFilter = useSelector(getFilter);

  useEffect(() => {
    updateLocalStorage(allContacts);
  }, [allContacts]);

  const contactsList = () => {
    if (valueFilter.trim() !== '') {
      const foundContacts = allContacts.filter(contact =>
        contact.name.toLowerCase().includes(valueFilter.trim().toLowerCase())
      );
      return foundContacts;
    } else return allContacts;
  };

  return (
    <ul>
      {contactsList().map(({ name, number, id }) => (
        <ContactItem key={id} name={name} id={id} number={number} />
      ))}
    </ul>
  );
};
