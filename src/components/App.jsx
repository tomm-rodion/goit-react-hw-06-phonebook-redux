import { ContactList } from './ContactList/ContactList';
import { ContactsFilter } from './ContactsFilter/CotactsFilter';
import { ContactsForm } from './ContactsForm/ContactsForm';
import {
  Wrapper,
  Container,
  TitlePhoneBook,
  TitleContacts,
} from './App.styled';
// import { useEffect } from 'react';
// import { useSelector } from 'react-redux';

export const App = () => {
  // const contacts = useSelector(state => state.contacts);

  // useEffect(() => {
  //   localStorage.setItem('contacts', JSON.stringify(contacts));
  // }, [contacts]);

  return (
    <Wrapper>
      <Container>
        <TitlePhoneBook>Phonebook</TitlePhoneBook>
        <ContactsForm />
      </Container>
      <Container>
        <TitleContacts>Contacts</TitleContacts>
        <ContactsFilter />
        <ContactList />
      </Container>
    </Wrapper>
  );
};
