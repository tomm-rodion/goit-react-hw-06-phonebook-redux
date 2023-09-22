import { ContactItem } from 'components/ContactItem/ContactItem';
import { useSelector } from 'react-redux';
import { getContacts, getFilter } from 'redux/selectors/selectors';

export const ContactList = () => {
  const allContacts = useSelector(getContacts);

  const valueFilter = useSelector(getFilter);

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
