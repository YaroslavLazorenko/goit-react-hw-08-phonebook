import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import ClipLoader from 'react-spinners/ClipLoader';
import ContactForm from 'components/ContactForm';
import Filter from 'components/Filter';
import ContactList from 'components/ContactList';
import { phonebookSelectors } from 'redux/phonebook';
import { phonebookOperations } from 'redux/phonebook';

const ContactsPage = () => {
  const contacts = useSelector(phonebookSelectors.getContactsItems);
  const isLoading = useSelector(phonebookSelectors.getLoadingStatus);
  const error = useSelector(phonebookSelectors.getError);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(phonebookOperations.fetchContacts());
  }, [dispatch]);

  if (error) {
    alert(error);
  }

  return (
    <>
      <h1 className="phonebookTitle">Phonebook</h1>
      <ContactForm />

      <h2 className="contactsTitle">Contacts</h2>
      <Filter />
      {contacts.length !== 0 && <ContactList />}
      <div>
        <ClipLoader color={'#000000'} loading={isLoading} size={50} />
      </div>
    </>
  );
};

export default ContactsPage;
